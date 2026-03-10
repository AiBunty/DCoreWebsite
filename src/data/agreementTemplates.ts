import { AgreementTemplate } from "../types/agreement";

/**
 * Agreement Templates Data
 * Contains all available agreement templates with HTML and field schemas
 */

export const digitalMarketingTemplate: AgreementTemplate = {
  id: "digital-marketing-services",
  name: "Digital Marketing Services Agreement",
  slug: "digital-marketing-services",
  category: "Services",
  description: "Standard agreement for digital marketing and social media services",
  isActive: true,
  fields: [
    {
      name: "clientName",
      label: "Client Name / Organization",
      type: "text",
      placeholder: "e.g., YHVCC",
      required: true,
    },
    {
      name: "effectiveDate",
      label: "Effective Date",
      type: "date",
      required: true,
    },
    {
      name: "serviceScope",
      label: "Service Scope & Deliverables",
      type: "textarea",
      placeholder: "Enter detailed scope of services",
      rows: 6,
      defaultValue: `Alternate Day Posting: Consistent content scheduling across platforms.
Brand Awareness: Strategic campaigns to increase market visibility.
Social Media Marketing & Presence: Management of digital profiles and engagement.`,
      required: true,
    },
    {
      name: "paymentTerms",
      label: "Payment Terms",
      type: "textarea",
      placeholder: "Enter payment amount, schedule, and terms",
      rows: 4,
      required: false,
    },
    {
      name: "projectCost",
      label: "Total Project Cost (in INR)",
      type: "text",
      placeholder: "e.g., 100000",
      required: false,
    },
    {
      name: "clientSignatory",
      label: "Client Signatory Name",
      type: "text",
      placeholder: "Name of authorized representative",
      required: true,
    },
    {
      name: "agencySignatory",
      label: "Agency Signatory Name",
      type: "text",
      placeholder: "DCORE Systems signatory",
      defaultValue: "Parin Daulat, CEO",
      required: true,
    },
    {
      name: "signatureDate",
      label: "Signature Date",
      type: "date",
      required: true,
    },
  ],
  templateHtml: `
    <div class="agreement-document">
      <!-- Header -->
      <div class="agreement-header">
        <div class="logo-section">
          <img src="/assets/dcore-logo-clean.svg" alt="DCORE Systems Logo" class="agreement-logo" />
        </div>
        <h1 class="agreement-title">Statement of Work</h1>
        <h2 class="agreement-subtitle">Digital Marketing Services</h2>
      </div>

      <!-- Company Info -->
      <div class="company-info-block">
        <p><strong>Service Provider:</strong> DCORE SYSTEMS LLP</p>
        <p><strong>LLPIN:</strong> ACT-9625 | <strong>PAN:</strong> AAZFD2232J</p>
        <p><strong>Registered Address:</strong> BLDG C FLAT NO 7 S NO 244, BANER PUSHPANAGAR D P, Aundh, Haveli, Pune- 411007</p>
      </div>

      <hr class="section-divider" />

      <!-- Section 1: Purpose -->
      <div class="section">
        <h3>1. Purpose of Agreement</h3>
        <p>This agreement outlines the general scope of the Awareness & Marketing project for <strong>{{clientName}}</strong> (hereinafter referred to as the "Client") and DCORE SYSTEMS LLP (hereinafter referred to as the "Agency"). The objective is to ensure mutual agreement on scope, budget, and schedule prior to commencement.</p>
        <p><strong>Effective Date:</strong> {{effectiveDate}}</p>
      </div>

      <!-- Section 2: Scope -->
      <div class="section">
        <h3>2. Project Scope & Deliverables</h3>
        <p>The goal of this project is to enhance the awareness and marketing presence of {{clientName}}. Deliverables include:</p>
        <div class="deliverables-block">
          {{serviceScope}}
        </div>
      </div>

      <!-- Section 3: Copyrights -->
      <div class="section">
        <h3>3. Copyrights and Trademarks</h3>
        <ul>
          <li>The Client guarantees that all elements (text, graphics, photos, trademarks) provided to the Agency are owned by the Client or used with permission.</li>
          <li>The Client assumes full ownership and copyright of the Project only upon receipt of final payment.</li>
          <li>The Agency retains the right to display project elements in professional portfolios.</li>
        </ul>
      </div>

      <!-- Section 4: Termination -->
      <div class="section">
        <h3>4. Termination Clause</h3>
        <p>Either party may terminate this agreement effective immediately upon notice. Upon termination, the Agency shall be compensated for:</p>
        <ol>
          <li>Full price for all completed work.</li>
          <li>50% of the price for commenced but uncompleted work.</li>
          <li>All incurred expenses and out-of-pocket costs up to the termination date.</li>
        </ol>
      </div>

      <!-- Section 5: Payment Terms & Schedule -->
      <div class="section">
        <h3>5. Payment Terms & Schedule</h3>
        <p><strong>Payment Structure:</strong></p>
        <ul>
          <li><strong>Deposit (50% Upfront):</strong> 50% of the Total Project Cost must be paid upon signing this agreement to reserve Agency capacity and commence project work.</li>
          <li><strong>Final Payment (50% Upon Completion):</strong> The remaining 50% is due upon completion and delivery of all agreed deliverables.</li>
        </ul>
        {{#projectCost}}
        <p><strong>Total Project Cost:</strong> ₹{{projectCost}} INR</p>
        {{/projectCost}}
        {{#paymentTerms}}
        <p><strong>Additional Terms:</strong></p>
        <p>{{paymentTerms}}</p>
        {{/paymentTerms}}
        <p><strong>Payment Method - Official Bank Details:</strong></p>
        <ul>
          <li><strong>Account Name:</strong> DCORE SYSTEMS LLP</li>
          <li><strong>Bank Name:</strong> ICICI BANK (Aundh Branch)</li>
          <li><strong>Account Number:</strong> 007305020846</li>
          <li><strong>IFSC Code:</strong> ICIC0000073</li>
        </ul>
        <p><em>All payments must be made by bank transfer. Cheques or cash payments are not accepted unless explicitly agreed in writing.</em></p>
      </div>

      <!-- Section 6: Limitation of Liability -->
      <div class="section">
        <h3>6. Limitation of Liability</h3>
        <p>The Agency's total liability under this agreement shall not exceed the total amount paid by the Client to the Agency under this specific agreement. In no event shall the Agency be liable for any indirect, incidental, consequential, special, or punitive damages arising from this agreement, including but not limited to loss of profits, loss of revenue, or loss of data, even if advised of the possibility of such damages.</p>
      </div>

      <!-- Section 7: Jurisdiction & Governing Law -->
      <div class="section">
        <h3>7. Jurisdiction & Governing Law</h3>
        <p>This agreement shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law provisions. Both parties irrevocably consent to the exclusive jurisdiction of the courts of Pune, Maharashtra, India for the resolution of any disputes arising out of or related to this agreement.</p>
      </div>

      <hr class="section-divider" />

      <!-- Section 8: Acceptance & Signatures -->
      <div class="signature-section">
        <h3>8. Acceptance</h3>
        <p>The undersigned agree to the terms and conditions of this agreement.</p>

        <div class="signature-block">
          <div class="party-signature">
            <p><strong>For Client: {{clientName}}</strong></p>
            <p class="signature-line">By: ___________________________________</p>
            <p class="signature-name">Name: {{clientSignatory}}</p>
            <p class="signature-line">Date: ___________________________________</p>
          </div>

          <div class="party-signature">
            <p><strong>For Service Provider: DCORE SYSTEMS LLP</strong></p>
            <p class="signature-line">By: ___________________________________</p>
            <p class="signature-name">Name: {{agencySignatory}}</p>
            <p class="signature-line">Date: {{signatureDate}}</p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="agreement-footer">
        <p>Generated on {{generatedDate}} | Agreement Generator v1.0</p>
      </div>
    </div>
  `,
};

export const coverLetterTemplate: AgreementTemplate = {
  id: "proposal-cover-letter",
  name: "Proposal & Statement of Work Cover Letter",
  slug: "proposal-cover-letter",
  category: "Correspondence",
  description: "Professional cover letter for introducing proposal and SOW documents",
  isActive: true,
  fields: [
    {
      name: "clientName",
      label: "Client Name / Organization",
      type: "text",
      placeholder: "e.g., YHVCC",
      required: true,
    },
    {
      name: "recipientName",
      label: "Recipient Name (if different from above)",
      type: "text",
      placeholder: "e.g., Director / Project Head",
      required: false,
    },
    {
      name: "proposalDate",
      label: "Project Start Date",
      type: "date",
      required: true,
    },
    {
      name: "marketingHead",
      label: "Marketing Team Lead Name",
      type: "text",
      placeholder: "e.g., Dhawal Dand",
      defaultValue: "Dhawal Dand",
      required: false,
    },
    {
      name: "serviceHighlight",
      label: "Key Service Highlight",
      type: "textarea",
      placeholder: "Brief description of main service",
      rows: 3,
      defaultValue: `Alternate Day Posting strategy will provide the consistency needed to establish your organization as a leader in its space.`,
      required: false,
    },
    {
      name: "deliverables",
      label: "Included Deliverables",
      type: "textarea",
      placeholder: "List what's included in the proposal package",
      rows: 4,
      defaultValue: `A comprehensive Statement of Work (SOW).
Detailed deliverables for Social Media Marketing.
Official banking and incorporation credentials for your compliance records.`,
      required: false,
    },
    {
      name: "senderName",
      label: "Sender Name (Full)",
      type: "text",
      placeholder: "e.g., Devanshi Daulat",
      defaultValue: "Devanshi Daulat",
      required: true,
    },
    {
      name: "senderTitle",
      label: "Sender Title",
      type: "text",
      placeholder: "e.g., Director",
      defaultValue: "Director",
      required: true,
    },
  ],
  templateHtml: `
    <div class="cover-letter-document">
      <!-- Header with Logo -->
      <div class="letter-header">
        <div class="letter-logo-section">
          <img src="/assets/dcore-logo-clean.svg" alt="DCORE Systems Logo" class="letter-logo" />
        </div>
        <div class="letter-company-info">
          <h2>DCORE SYSTEMS LLP</h2>
          <p>LLPIN: ACT-9625 | PAN: AAZFD2232J</p>
          <p>BLDG C FLAT NO 7 S NO 244, BANER PUSHPANAGAR D P, Aundh, Haveli, Pune- 411007</p>
          <p>📧 support@dcoresystems.com | 🌐 www.dcoresystems.com</p>
        </div>
      </div>

      <hr class="letter-divider" />

      <!-- Date -->
      <div class="letter-meta">
        <p><strong>Date:</strong> {{proposalDate}}</p>
      </div>

      <!-- Recipient Address -->
      <div class="letter-recipient">
        {{#recipientName}}
        <p><strong>{{recipientName}}</strong></p>
        {{/recipientName}}
        <p><strong>{{clientName}}</strong></p>
      </div>

      <!-- Salutation -->
      <div class="letter-body">
        <p><strong>Dear {{clientName}} Team,</strong></p>

        <!-- Opening -->
        <p>It is a pleasure to submit this formal proposal for the digital growth and brand awareness of <strong>{{clientName}}</strong>. At DCORE SYSTEMS LLP, we specialize in bridging the gap between technical excellence and market visibility.</p>

        <!-- Team Introduction -->
        <p>Our team, led by <strong>Parin Daulat (CEO)</strong> {{#marketingHead}}and supported by <strong>{{marketingHead}} (Chief of Marketing)</strong>{{/marketingHead}}, has reviewed your requirements for enhanced social media presence and consistent brand engagement. We are confident that our "Alternate Day Posting" strategy will provide the consistency needed to establish {{clientName}} as a leader in its space.</p>

        <!-- Service Highlight -->
        {{#serviceHighlight}}
        <p><strong>Our Approach:</strong> {{serviceHighlight}}</p>
        {{/serviceHighlight}}

        <!-- Included in Package -->
        <p><strong>Included in this comprehensive package:</strong></p>
        <ul>
          {{#deliverables}}
          {{deliverables}}
          {{/deliverables}}
        </ul>

        <!-- Next Steps -->
        <p>Please review the attached Statement of Work document. Once you are satisfied with the terms and conditions, you may sign digitally or return a scanned copy to initiate the project on or before <strong>{{proposalDate}}</strong>.</p>

        <!-- Closing -->
        <p>We are excited about the opportunity to build a powerful digital footprint for {{clientName}} and look forward to collaborating with your team. Should you have any questions or require clarifications, please do not hesitate to reach out to us.</p>

        <!-- Sign-off -->
        <p>Best Regards,</p>

        <!-- Signature Block -->
        <div class="letter-signature">
          <p class="signature-placeholder">________________________</p>
          <p><strong>{{senderName}}</strong></p>
          <p>{{senderTitle}}, DCORE SYSTEMS LLP</p>
          <p>📧 support@dcoresystems.com</p>
          <p>🌐 www.dcoresystems.com</p>
        </div>
      </div>

      <!-- Footer -->
      <div class="letter-footer">
        <hr class="footer-divider" />
        <p>DCORE SYSTEMS LLP | ACT-9625 | PAN: AAZFD2232J | Pune, India</p>
        <p style="font-size: 9pt; margin-top: 5px;">Generated on {{generatedDate}} | Proposal Cover Letter v1.0</p>
      </div>
    </div>
  `,
};

// Export all templates as array for easy iteration
export const allTemplates: AgreementTemplate[] = [digitalMarketingTemplate, coverLetterTemplate];

// Helper function to get template by ID
export const getTemplateById = (id: string): AgreementTemplate | undefined => {
  return allTemplates.find((template) => template.id === id);
};

// Helper function to get all active templates
export const getActiveTemplates = (): AgreementTemplate[] => {
  return allTemplates.filter((template) => template.isActive);
};
