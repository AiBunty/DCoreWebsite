import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { AgreementTemplate, AgreementFormData, PDFGenerationOptions } from "../types/agreement";

/**
 * PDF Generator Utility
 * Handles conversion of agreement templates to PDF with logo and watermark
 */

// Simple template engine to replace placeholders
function renderTemplate(template: string, data: AgreementFormData & { generatedDate: string }): string {
  let html = template;

  // Replace {{key}} placeholders with form data
  Object.entries(data).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, "g");
    html = html.replace(regex, value);
  });

  // Handle conditional blocks {{#key}}...{{/key}}
  Object.entries(data).forEach(([key, value]) => {
    const conditionalRegex = new RegExp(`{{#${key}}}(.+?){{/${key}}}`, "gs");
    if (value) {
      html = html.replace(conditionalRegex, "$1");
    } else {
      html = html.replace(conditionalRegex, "");
    }
  });

  return html;
}

// Sanitize filename to prevent directory traversal and special characters
function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[/\\?%*:|"<>]/g, "")
    .replace(/\s+/g, "_")
    .substring(0, 200);
}

// Format date to readable string
function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Generate PDF from agreement template and form data
 * @param template - Agreement template with HTML and fields
 * @param formData - Form data with values for placeholders
 * @param options - PDF generation options (logo, watermark, paper size, etc.)
 */
export async function generateAgreementPDF(
  template: AgreementTemplate,
  formData: AgreementFormData,
  options: PDFGenerationOptions = {}
): Promise<Blob> {
  try {
    // Determine paper size dimensions (in mm)
    const paperSize = options.paperSize || "a4";
    const paperDimensions = {
      a4: { width: 210, height: 297 },
      legal: { width: 215.9, height: 355.6 },
    };
    const { width: pageWidth, height: pageHeight } = paperDimensions[paperSize];

    // Default margins (10mm on all sides)
    const margins = options.margins || {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    };

    // Usable content area
    const contentWidth = pageWidth - margins.left - margins.right;
    const contentHeight = pageHeight - margins.top - margins.bottom;

    // Add generated date to form data
    const enrichedData: AgreementFormData & { generatedDate: string } = {
      ...formData,
      generatedDate: new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    // Format dates from YYYY-MM-DD to readable format
    Object.entries(enrichedData).forEach(([key, value]) => {
      if (key.includes("date") && value && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        enrichedData[key] = formatDate(value);
      }
    });

    // Render template with form data
    const htmlContent = renderTemplate(template.templateHtml, enrichedData);

    // Create a temporary container for rendering
    const container = document.createElement("div");
    container.innerHTML = htmlContent;
    container.style.position = "absolute";
    container.style.left = "-10000px";
    container.style.top = "-10000px";
    container.style.width = `${contentWidth}mm`;
    container.style.backgroundColor = "white";
    container.style.padding = "0px";
    container.style.margin = "0px";
    container.className = "agreement-document";

    // Inject agreement CSS styles
    const styleSheet = document.createElement("style");
    styleSheet.textContent = getAgreementStyles();
    container.appendChild(styleSheet);

    document.body.appendChild(container);

    try {
      // Convert HTML to canvas with high DPI for print quality (3x scale = ~300dpi)
      const canvas = await html2canvas(container, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        allowTaint: true,
        windowWidth: container.scrollWidth,
        windowHeight: container.scrollHeight,
      });

      // Calculate the pixel-to-mm conversion ratio
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Calculate how many pixels represent one mm at current scale
      const pixelToMmX = canvasWidth / contentWidth;
      const pixelToMmY = canvasHeight / contentHeight;

      // Calculate content height in pixels
      const contentHeightPixels = contentHeight * pixelToMmY;

      // Create PDF with selected paper size
      const pdf = new jsPDF({
        unit: "mm",
        format: paperSize === "legal" ? "letter" : "a4",
        orientation: "portrait",
      });

      // Correct format for legal size
      if (paperSize === "legal") {
        pdf.setPageSize("letter");
      }

      // Add pages by slicing canvas into page-sized chunks
      let currentPixelY = 0;
      let pageNumber = 1;

      while (currentPixelY < canvasHeight) {
        // Calculate how much of the canvas fits on this page
        const pixelsToTake = Math.min(contentHeightPixels, canvasHeight - currentPixelY);

        // Create a temporary canvas for this page
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvasWidth;
        pageCanvas.height = pixelsToTake;

        const pageCtx = pageCanvas.getContext("2d");
        if (!pageCtx) throw new Error("Failed to get canvas context");

        // Draw the appropriate portion of the full canvas onto the page canvas
        pageCtx.drawImage(
          canvas,
          0,
          currentPixelY,
          canvasWidth,
          pixelsToTake,
          0,
          0,
          canvasWidth,
          pixelsToTake
        );

        // Convert page canvas to image data
        const pageImageData = pageCanvas.toDataURL("image/png");

        // Add image to PDF page
        pdf.addImage(
          pageImageData,
          "PNG",
          margins.left,
          margins.top,
          contentWidth,
          (pixelsToTake / pixelToMmY)
        );

        // Move to next chunk
        currentPixelY += pixelsToTake;

        // Add new page if there's more content
        if (currentPixelY < canvasHeight) {
          pdf.addPage();
          pageNumber++;
        }
      }

      // Generate filename
      const clientName = formData.clientName || "Agreement";
      const date = new Date().toISOString().split("T")[0];
      const filename = options.filename || `${sanitizeFilename(clientName)}_${date}.pdf`;

      // Convert PDF to blob and trigger download
      const pdfBlob = pdf.output("blob");

      // Return blob for download
      downloadPDF(pdfBlob, filename);

      return pdfBlob;
    } finally {
      // Clean up temporary container
      document.body.removeChild(container);
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF. Please try again.");
  }
}

/**
 * Generate a single PDF containing multiple templates in sequence (e.g. cover letter + SOW)
 */
export async function generateCombinedPDF(
  templates: AgreementTemplate[],
  formData: AgreementFormData,
  options: PDFGenerationOptions = {}
): Promise<Blob> {
  try {
    const paperSize = options.paperSize || "a4";
    const paperDimensions = {
      a4: { width: 210, height: 297 },
      legal: { width: 215.9, height: 355.6 },
    };
    const { width: pageWidth, height: pageHeight } = paperDimensions[paperSize];
    const margins = options.margins || { top: 10, bottom: 10, left: 10, right: 10 };
    const contentWidth = pageWidth - margins.left - margins.right;
    const contentHeight = pageHeight - margins.top - margins.bottom;

    const enrichedData: AgreementFormData & { generatedDate: string } = {
      ...formData,
      generatedDate: new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    Object.entries(enrichedData).forEach(([key, value]) => {
      if (key.includes("date") && value && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        enrichedData[key] = formatDate(value);
      }
    });

    const pdf = new jsPDF({
      unit: "mm",
      format: paperSize === "legal" ? "letter" : "a4",
      orientation: "portrait",
    });

    let isFirstPage = true;

    for (const template of templates) {
      const htmlContent = renderTemplate(template.templateHtml, enrichedData);

      const container = document.createElement("div");
      container.innerHTML = htmlContent;
      container.style.position = "absolute";
      container.style.left = "-10000px";
      container.style.top = "-10000px";
      container.style.width = `${contentWidth}mm`;
      container.style.backgroundColor = "white";
      container.style.padding = "0px";
      container.style.margin = "0px";

      const styleSheet = document.createElement("style");
      styleSheet.textContent = getAgreementStyles();
      container.appendChild(styleSheet);
      document.body.appendChild(container);

      try {
        const canvas = await html2canvas(container, {
          scale: 3,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          allowTaint: true,
          windowWidth: container.scrollWidth,
          windowHeight: container.scrollHeight,
        });

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const pixelToMmX = canvasWidth / contentWidth;
        const contentHeightPixels = Math.round(contentHeight * pixelToMmX);

        let currentPixelY = 0;

        while (currentPixelY < canvasHeight) {
          if (!isFirstPage) {
            pdf.addPage();
          }
          isFirstPage = false;

          const pixelsToTake = Math.min(contentHeightPixels, canvasHeight - currentPixelY);

          const pageCanvas = document.createElement("canvas");
          pageCanvas.width = canvasWidth;
          pageCanvas.height = pixelsToTake;

          const pageCtx = pageCanvas.getContext("2d");
          if (!pageCtx) throw new Error("Failed to get canvas context");

          pageCtx.drawImage(
            canvas,
            0, currentPixelY,
            canvasWidth, pixelsToTake,
            0, 0,
            canvasWidth, pixelsToTake
          );

          const pageImageData = pageCanvas.toDataURL("image/png");
          pdf.addImage(
            pageImageData,
            "PNG",
            margins.left,
            margins.top,
            contentWidth,
            pixelsToTake / pixelToMmX
          );

          currentPixelY += pixelsToTake;
        }
      } finally {
        document.body.removeChild(container);
      }
    }

    const clientName = formData.clientName || "Document";
    const date = new Date().toISOString().split("T")[0];
    const filename = options.filename || `${sanitizeFilename(clientName)}_Package_${date}.pdf`;

    const pdfBlob = pdf.output("blob");
    downloadPDF(pdfBlob, filename);
    return pdfBlob;
  } catch (error) {
    console.error("Error generating combined PDF:", error);
    throw new Error("Failed to generate PDF. Please try again.");
  }
}

/**
 * Trigger PDF download
 */
function downloadPDF(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Get injected CSS styles for agreement document
 */
function getAgreementStyles(): string {
  return `
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
      background: white;
    }

    .agreement-document {
      position: relative;
      font-family: "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      background: white;
      padding: 40px;
      max-width: 900px;
      font-size: 11pt;
    }

    .agreement-header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #5b9bd5;
    }

    .logo-section {
      margin-bottom: 20px;
    }

    .agreement-logo {
      height: 80px;
      width: auto;
      object-fit: contain;
    }

    .agreement-title {
      font-size: 24pt;
      font-weight: 700;
      margin: 10px 0;
      color: #1a1a1a;
    }

    .agreement-subtitle {
      font-size: 16pt;
      font-weight: 600;
      color: #5b9bd5;
      margin: 5px 0;
    }

    .company-info-block {
      background: #f8f9fb;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      padding: 15px;
      margin: 20px 0;
      font-size: 10pt;
    }

    .company-info-block p {
      margin: 5px 0;
      line-height: 1.5;
    }

    .section {
      margin: 25px 0;
    }

    .section h3 {
      font-size: 13pt;
      font-weight: 700;
      color: #2c3e50;
      margin: 15px 0 10px 0;
      border-left: 4px solid #5b9bd5;
      padding-left: 10px;
    }

    .section p {
      margin: 10px 0;
      text-align: justify;
      font-size: 11pt;
    }

    .section ul,
    .section ol {
      margin: 10px 0 10px 30px;
      padding: 0;
    }

    .section li {
      margin: 8px 0;
      text-align: justify;
      font-size: 11pt;
    }

    .deliverables-block {
      background: #f0f5fa;
      border-left: 3px solid #5b9bd5;
      padding: 12px 15px;
      margin: 10px 0;
      font-size: 10.5pt;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .section-divider {
      border: none;
      border-top: 1px solid #d0d0d0;
      margin: 30px 0;
    }

    .signature-section {
      margin-top: 40px;
      padding-top: 20px;
    }

    .signature-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-top: 30px;
    }

    .party-signature {
      page-break-inside: avoid;
    }

    .party-signature p {
      font-size: 11pt;
      margin: 8px 0;
    }

    .signature-line {
      border-bottom: 1px solid #333;
      height: 30px;
      display: flex;
      align-items: flex-end;
      margin: 5px 0;
    }

    .signature-name {
      font-size: 10pt;
      color: #555;
      margin-top: 3px;
    }

    .agreement-footer {
      text-align: center;
      margin-top: 50px;
      padding-top: 15px;
      border-top: 1px solid #d0d0d0;
      font-size: 9pt;
      color: #999;
    }

    strong {
      font-weight: 700;
    }

    hr {
      border: none;
      border-top: 1px solid #d0d0d0;
      margin: 30px 0;
    }

    /* Cover Letter Styles */
    .cover-letter-document {
      position: relative;
      font-family: "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.8;
      color: #2c3e50;
      background: white;
      padding: 40px;
      max-width: 900px;
      font-size: 11pt;
    }

    .letter-header {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #5b9bd5;
    }

    .letter-logo-section {
      margin-right: 30px;
      flex-shrink: 0;
    }

    .letter-logo {
      height: 70px;
      width: auto;
      object-fit: contain;
    }

    .letter-company-info {
      flex: 1;
    }

    .letter-company-info h2 {
      margin: 0;
      font-size: 18pt;
      color: #2c3e50;
      font-weight: 700;
    }

    .letter-company-info p {
      margin: 4px 0;
      font-size: 9.5pt;
      color: #666;
      line-height: 1.4;
    }

    .letter-divider {
      border: none;
      border-top: 1px solid #e0e0e0;
      margin: 20px 0;
    }

    .letter-meta {
      margin: 20px 0;
      font-size: 10.5pt;
    }

    .letter-meta p {
      margin: 5px 0;
    }

    .letter-recipient {
      margin: 25px 0 30px 0;
      font-size: 11pt;
    }

    .letter-recipient p {
      margin: 5px 0;
      line-height: 1.6;
    }

    .letter-body {
      font-size: 11pt;
      margin: 25px 0;
    }

    .letter-body p {
      margin: 12px 0;
      text-align: justify;
      line-height: 1.8;
    }

    .letter-body ul {
      margin: 12px 0 12px 30px;
      padding: 0;
    }

    .letter-body li {
      margin: 8px 0;
      text-align: justify;
      font-size: 11pt;
      line-height: 1.6;
    }

    .letter-signature {
      margin: 50px 0 20px 0;
    }

    .signature-placeholder {
      border-bottom: 1px solid #333;
      height: 40px;
      margin: 0 0 5px 0;
      font-size: 0;
      display: flex;
      align-items: flex-end;
    }

    .letter-signature p {
      margin: 3px 0;
      font-size: 11pt;
    }

    .letter-signature p:first-of-type {
      font-weight: 700;
      font-size: 11.5pt;
      margin-bottom: 5px;
    }

    .letter-footer {
      text-align: center;
      margin-top: 60px;
      padding-top: 20px;
    }

    .footer-divider {
      border: none;
      border-top: 1px solid #d0d0d0;
      margin-bottom: 15px;
    }

    .letter-footer p {
      margin: 3px 0;
      font-size: 9pt;
      color: #999;
      line-height: 1.4;
    }
  `;
}
