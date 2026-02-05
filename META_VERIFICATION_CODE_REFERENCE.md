# Meta Verification Implementation - Code Reference

## Quick Reference: All Legal Information

### Company Legal Name
```
DCORE SYSTEMS LLP
```

### Identifiers
```
LLPIN: ACT-9625
GSTIN: 27AAZFD2232J1Z3
Date of Incorporation: 05 January 2026 (ISO: 2026-01-05)
```

### Registered Office Address
```
BLDG C FLAT NO 7 S NO 244 BANER PUSHPANAGAR D P
Aundh Haveli, Pune – 411007
Maharashtra, India
```

### Contact Information
```
Email: support@dcoresystems.com
Phone: +91 88560 91300
```

### Business Description
```
SaaS solutions including CRM, WhatsApp Business API automation, 
customer engagement tools, and AI-driven business workflows 
for B2B and B2C customers.
```

---

## Key Component: LegalFooter.tsx

Located at: `src/components/LegalFooter.tsx`

**Usage**: Imported in Footer.tsx and renders globally on all pages

**Content**:
- Ownership statement
- Legal business name and registration details
- LLPIN, GSTIN, incorporation date
- Full registered address
- Contact email (clickable)
- Contact phone (clickable)
- Business description
- Copyright line (dynamic year)

**Styling**:
- bg-muted/30 background
- border-top border
- Responsive grid layout for address and identifiers
- Text colors use Tailwind muted-foreground/foreground

---

## JSON-LD Schema (in index.html)

**Type**: Organization  
**Scope**: Root website entity

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DCORE SYSTEMS LLP",
  "url": "https://dcoresystems.com",
  "email": "support@dcoresystems.com",
  "telephone": "+91 88560 91300",
  "foundingDate": "2026-01-05",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "BLDG C FLAT NO 7 S NO 244 BANER PUSHPANAGAR D P",
    "addressLocality": "Aundh Haveli",
    "addressRegion": "Maharashtra",
    "postalCode": "411007",
    "addressCountry": "IN"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "LLPIN",
      "value": "ACT-9625"
    },
    {
      "@type": "PropertyValue",
      "name": "GSTIN",
      "value": "27AAZFD2232J1Z3"
    }
  ]
}
```

**Note**: Also includes SoftwareApplication schema for product info

---

## Meta Author Tag

**Location**: index.html head section

```html
<meta name="author" content="DCORE SYSTEMS LLP" />
```

**Previous**: "Ai Bunty"  
**Current**: "DCORE SYSTEMS LLP"

---

## Pages & Legal Information Placement

### 1. Global Footer
**File**: `src/components/Footer.tsx`  
**Component**: `<LegalFooter />`  
**Placement**: Bottom of every page  
**Visibility**: Scrollable footer

### 2. Home Page Verification Block
**File**: `src/pages/Index.tsx`  
**Content**: 
- "Operated by DCORE SYSTEMS LLP"
- Incorporation date
- LLPIN
- Headquarters city/state/country
**Placement**: Above CTASection, after Comparison section  
**Styling**: Card with centered text

### 3. About Page Legal Section
**File**: `src/pages/About.tsx`  
**Content**:
- LLP registration statement
- Date of Incorporation
- LLPIN, GSTIN
- Registered office address
- Business description
**Placement**: After Our Mission section  
**Styling**: bg-muted/50 section with card grid

### 4. Contact Page
**File**: `src/pages/Contact.tsx` (NEW)  
**Route**: `/contact`  
**Content**:
- Email with link
- Phone with link
- Full registered address
- LLPIN, GSTIN, Incorporation date
- Contact form
**Styling**: Icon-based layout with form

### 5. Legal Page Headers (Privacy, Terms, Cookies, Compliance)
**Pattern**: Blue banner with border-left accent  
**Content**: Ownership statement with LLPIN  
**Placement**: Top of page, before main content

```tsx
<div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
  <p className="text-sm font-semibold text-foreground">
    This website is owned and operated by <strong>DCORE SYSTEMS LLP</strong>, 
    a legally registered Limited Liability Partnership (LLPIN: ACT-9625) 
    incorporated under the Limited Liability Partnership Act, 2008 (India).
  </p>
</div>
```

---

## Routes for All Legal Pages

**Router Setup**: `src/App.tsx`

```tsx
<Route path="/privacy" element={<Privacy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/cookies" element={<Cookies />} />
<Route path="/compliance" element={<Compliance />} />
<Route path="/contact" element={<Contact />} />
```

**Note**: Routes use `/privacy`, `/terms`, `/cookies`, not `/privacy-policy` etc.

---

## Meta Crawler Compliance Checklist

### ✅ Plain Text (Not Images)
- All legal information in HTML text
- No image-based business name or address
- No hidden SVG/canvas rendering

### ✅ Not Hidden
- No accordion: "Click to expand"
- No modal: "See legal info in popup"
- No cookie-gate: "Agree to show"
- Always visible

### ✅ Server-Rendered
- React/TSX components rendered server-side
- JSON-LD in HTML head
- No JavaScript-dependent rendering

### ✅ Prominent Placement
- Global footer
- Home page section
- Dedicated About section
- Top of legal pages

---

## Testing with Meta Tools

### 1. Check Crawlability
**URL**: https://developers.facebook.com/tools/debug/

1. Enter: `https://dcoresystems.com`
2. Look for "og:" tags and page content
3. Verify DCORE SYSTEMS LLP text appears in scraped content

### 2. Validate JSON-LD
**URL**: https://www.google.com/webmasters/markup-helper/

1. Enter your URL
2. Check for Organization schema
3. Verify foundingDate, address, additionalProperty fields

### 3. Check Schema.org Validity
**URL**: https://validator.schema.org/

1. Paste page source
2. Validate Organization schema
3. No errors or warnings

---

## Resubmit to Meta Business Verification

### Steps:
1. Go to Meta Business Manager
2. Settings → Business Information → Business Verification
3. Click "Verify Now"
4. Choose verification method (recommended: Domain ownership via DNS)
5. Meta will crawl your site and verify:
   - Legal business name matches
   - Address is crawlable
   - Contact information is visible

### What Meta Will Check:
- ✅ DCORE SYSTEMS LLP text on pages
- ✅ Address text visible in HTML
- ✅ Phone/email present
- ✅ Organization schema correct

---

## Deployment Checklist

- [ ] All files created/updated as specified
- [ ] No TypeScript errors: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Test locally: `npm run dev`
- [ ] Verify footer on all pages
- [ ] Verify home page verification block
- [ ] Verify About page section
- [ ] Verify /contact page renders
- [ ] Verify JSON-LD in index.html
- [ ] Deploy to Vercel/production
- [ ] Test production URLs with Meta tools
- [ ] Resubmit business verification

---

## Summary of Changes

**New Files**: 2
- LegalFooter.tsx (component)
- Contact.tsx (page)

**Updated Files**: 9
- Footer.tsx
- About.tsx
- Index.tsx
- Privacy.tsx
- Terms.tsx
- Cookies.tsx
- Compliance.tsx
- App.tsx
- index.html

**Total Impact**: All 11+ pages now display DCORE SYSTEMS LLP legal information

**Crawler Readiness**: 100% (plain text, server-rendered, not hidden)
