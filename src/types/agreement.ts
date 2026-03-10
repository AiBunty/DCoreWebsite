/**
 * Agreement Generator Types
 * Defining structures for agreement templates, form data, and field schemas
 */

export interface AgreementField {
  name: string;
  label: string;
  type: "text" | "date" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  options?: { value: string; label: string }[];
  rows?: number; // For textarea
}

export interface AgreementTemplate {
  id: string;
  name: string;
  slug: string;
  category: string;
  description?: string;
  templateHtml: string;
  fields: AgreementField[];
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AgreementFormData {
  [key: string]: string;
}

export interface GeneratedAgreement {
  templateId: string;
  formData: AgreementFormData;
  generatedAt: string;
  filename: string;
}

// Helper type for PDF generation
export interface PDFGenerationOptions {
  logoPath?: string;
  watermarkPath?: string;
  watermarkOpacity?: number;
  dpi?: number;
  filename?: string;
  paperSize?: "a4" | "legal"; // A4: 210x297mm, Legal: 215.9x355.6mm
  margins?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}
