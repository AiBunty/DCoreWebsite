import React, { useState, useMemo } from "react";
import { AgreementTemplate, AgreementField, AgreementFormData } from "../types/agreement";
import { DCoreButton } from "./DCoreButton";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";
import { generateCombinedPDF } from "../lib/pdfGenerator";
import "../styles/agreement.css";

interface AgreementEditorProps {
  templates: AgreementTemplate[];
}

export const AgreementEditor: React.FC<AgreementEditorProps> = ({ templates }) => {
  const [formData, setFormData] = useState<AgreementFormData>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [paperSize, setPaperSize] = useState<"a4" | "legal">("a4");

  // Merge fields from all templates, deduplicating by field name (first occurrence wins)
  const mergedFields = useMemo<AgreementField[]>(() => {
    const seen = new Set<string>();
    const result: AgreementField[] = [];
    for (const tpl of templates) {
      for (const field of tpl.fields) {
        if (!seen.has(field.name)) {
          seen.add(field.name);
          result.push(field);
        }
      }
    }
    return result;
  }, [templates]);

  // Initialize form data with default values from merged fields
  React.useEffect(() => {
    const initialData: AgreementFormData = {};
    mergedFields.forEach((field) => {
      initialData[field.name] = field.defaultValue || "";
    });
    setFormData(initialData);
  }, [mergedFields]);

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    setError(null);
  };

  const validateForm = (): boolean => {
    const missingFields = mergedFields.filter(
      (field) => field.required && !formData[field.name]
    );
    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.map((f) => f.label).join(", ")}`);
      return false;
    }
    return true;
  };

  const handleGeneratePDF = async () => {
    if (!validateForm()) return;
    setIsGenerating(true);
    setError(null);
    setSuccess(null);
    try {
      await generateCombinedPDF(templates, formData, { paperSize });
      setSuccess("Cover Letter + Agreement PDF generated and downloaded successfully!");
      setTimeout(() => setSuccess(null), 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to generate PDF";
      setError(errorMessage);
      console.error("PDF Generation error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Render a single template HTML for preview
  const renderTemplatePreview = (tpl: AgreementTemplate): string => {
    let html = tpl.templateHtml;
    Object.entries(formData).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, "g");
      html = html.replace(regex, value || `[${key}]`);
    });
    Object.entries(formData).forEach(([key, value]) => {
      const conditionalRegex = new RegExp(`{{#${key}}}(.+?){{/${key}}}`, "gs");
      if (value) {
        html = html.replace(conditionalRegex, "$1");
      } else {
        html = html.replace(conditionalRegex, "");
      }
    });
    const today = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    html = html.replace(/{{generatedDate}}/g, today);
    return html;
  };

  const combinedPreviewHtml = useMemo(
    () => templates.map((tpl) => renderTemplatePreview(tpl)).join(
      `<div style="border-top:2px dashed #d0d7de;margin:32px 24px;opacity:0.6;"></div>`
    ),
    [templates, formData]
  );

  return (
    <div className="agreement-editor">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-4">Agreement Details</h3>

            {/* Paper Size Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paper Size
              </label>
              <Select defaultValue={paperSize} onValueChange={(value) => setPaperSize(value as "a4" | "legal")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a4">A4 (210 x 297 mm)</SelectItem>
                  <SelectItem value="legal">Legal (215.9 x 355.6 mm)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 mt-1">
                Legal size provides 58mm extra height for longer agreements
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {mergedFields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>

                {field.type === "textarea" ? (
                  <Textarea
                    value={formData[field.name] || ""}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    rows={field.rows || 4}
                    className={field.required && !formData[field.name] ? "border-red-500" : ""}
                  />
                ) : field.type === "date" ? (
                  <Input
                    type="date"
                    value={formData[field.name] || ""}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className={field.required && !formData[field.name] ? "border-red-500" : ""}
                  />
                ) : field.type === "select" ? (
                  <Select
                    value={formData[field.name] || ""}
                    onValueChange={(value) => handleFieldChange(field.name, value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    type="text"
                    value={formData[field.name] || ""}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className={field.required && !formData[field.name] ? "border-red-500" : ""}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <Card className="p-4 bg-red-50 border-red-200">
              <p className="text-red-800 text-sm">{error}</p>
            </Card>
          )}

          {/* Success Message */}
          {success && (
            <Card className="p-4 bg-green-50 border-green-200">
              <p className="text-green-800 text-sm">{success}</p>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <DCoreButton
              onClick={handleGeneratePDF}
              disabled={isGenerating}
              variant="primary"
              className="flex-1"
            >
              {isGenerating ? "Generating..." : "Download Full Package PDF"}
            </DCoreButton>
            <DCoreButton
              onClick={() => setShowPreview(!showPreview)}
              variant="secondary"
              className="lg:hidden"
            >
              {showPreview ? "Hide Preview" : "Show Preview"}
            </DCoreButton>
          </div>
        </div>

        {/* Preview Section */}
        <div className={`${showPreview ? "block" : "hidden"} lg:block`}>
          <div className="sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-1">PDF Preview</h3>
            <p className="text-xs text-gray-500 mb-3">Cover Letter → Agreement (both in one PDF)</p>
            <Card className="p-0 overflow-hidden border border-gray-200/60 bg-white/80 backdrop-blur-sm shadow-sm">
              <div className="bg-white max-h-[800px] overflow-y-auto">
                <div
                  className="agreement-document"
                  dangerouslySetInnerHTML={{ __html: combinedPreviewHtml }}
                />
              </div>
            </Card>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Preview updates as you fill in the form
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementEditor;
