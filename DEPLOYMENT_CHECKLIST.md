# Meta Business Verification - Final Deployment Checklist

## Pre-Deployment Verification (Local)

### Code Quality
- [ ] No TypeScript errors: `npm run lint`
- [ ] Project builds successfully: `npm run build`
- [ ] No console errors when running: `npm run dev`
- [ ] All imports resolve correctly

### File Verification
- [ ] `src/components/LegalFooter.tsx` exists and exports `LegalFooter` function
- [ ] `src/pages/Contact.tsx` exists and exports default `Contact` component
- [ ] `src/components/Footer.tsx` imports and uses `<LegalFooter />`
- [ ] `src/App.tsx` imports `Contact` and has route `/contact`
- [ ] `src/pages/About.tsx` has "Legal Business Information" section
- [ ] `src/pages/Index.tsx` has "Operated by DCORE SYSTEMS LLP" verification block
- [ ] `src/pages/Privacy.tsx` has blue banner at top
- [ ] `src/pages/Terms.tsx` has blue banner at top
- [ ] `src/pages/Cookies.tsx` has blue banner at top
- [ ] `src/pages/Compliance.tsx` has blue banner at top
- [ ] `index.html` has `<meta name="author" content="DCORE SYSTEMS LLP" />`
- [ ] `index.html` has Organization JSON-LD schema

### Content Verification
- [ ] "DCORE SYSTEMS LLP" appears exactly (not variations like "D'CORE" or "Dcore")
- [ ] LLPIN: ACT-9625 (exact format)
- [ ] GSTIN: 27AAZFD2232J1Z3 (exact format)
- [ ] Full address: "BLDG C FLAT NO 7 S NO 244 BANER PUSHPANAGAR D P, Aundh Haveli, Pune – 411007, Maharashtra, India"
- [ ] Email: support@dcoresystems.com (correct domain)
- [ ] Phone: +91 88560 91300 (exact format with country code)
- [ ] Date of Incorporation: 05 January 2026 and 2026-01-05 (in ISO format in JSON-LD)
- [ ] Business description mentions: SaaS, CRM, WhatsApp Business API, AI workflows

### Visual Verification (In Browser)
- [ ] Footer renders on Home page - scroll to bottom, see legal section
- [ ] About page - scroll down, see "Legal Business Information" section with card layout
- [ ] Contact page loads at `/contact` with all business info visible
- [ ] Privacy page - blue banner visible at top before main content
- [ ] Terms page - blue banner visible at top before main content
- [ ] Cookies page - blue banner visible at top before main content
- [ ] Compliance page - blue banner visible at top before main content
- [ ] Home page - verification block visible above CTA (scroll down past comparisons)
- [ ] All pages responsive on mobile (test with DevTools mobile view)

### Responsiveness Check
- [ ] Desktop (1920px width) - all text readable, layout intact
- [ ] Tablet (768px width) - grid layouts responsive
- [ ] Mobile (375px width) - text legible, no overflow, links clickable
- [ ] Footer on mobile - legal info still visible
- [ ] Contact form on mobile - all fields stack properly

---

## Pre-Deployment Code Review

### LegalFooter.tsx
- [ ] Exports function correctly
- [ ] Uses `currentYear` for dynamic copyright
- [ ] Email is `<a>` link with `mailto:`
- [ ] Phone is `<a>` link with `tel:`
- [ ] No hardcoded dates (except "05 January 2026" which is correct)
- [ ] Responsive grid layout (col-span classes)
- [ ] Tailwind classes used correctly

### Contact.tsx
- [ ] Imports correct components (Layout, Button, icons)
- [ ] Form fields have proper labels and IDs
- [ ] Email/phone are links in info block
- [ ] Address formatted correctly across multiple lines
- [ ] Footer will automatically render via Layout

### Routing
- [ ] Contact route added to App.tsx before NotFound route
- [ ] Route syntax correct: `<Route path="/contact" element={<Contact />} />`
- [ ] All other routes still intact

### Meta Tags
- [ ] Author meta tag changed from "Ai Bunty" to "DCORE SYSTEMS LLP"
- [ ] JSON-LD Organization schema has all required fields:
  - [ ] @context: https://schema.org
  - [ ] @type: Organization
  - [ ] name: DCORE SYSTEMS LLP
  - [ ] url: https://dcoresystems.com
  - [ ] email: support@dcoresystems.com
  - [ ] telephone: +91 88560 91300
  - [ ] foundingDate: 2026-01-05
  - [ ] address with PostalAddress type
  - [ ] additionalProperty for LLPIN and GSTIN

---

## Deployment to Production

### Git Setup
- [ ] All changes committed: `git status` shows clean working directory
- [ ] Commit message descriptive and includes "Meta Business Verification"
- [ ] Branch is main or your deployment branch

### Deployment Command
```bash
# One of:
npm run build        # Then deploy build/ folder
git push             # If using Vercel auto-deployment
vercel deploy        # If using Vercel CLI
```

- [ ] Build completes without errors
- [ ] No TypeScript errors in build output
- [ ] No warnings about missing dependencies

### Post-Deployment Verification (Production)

#### Accessibility
- [ ] Navigate to https://dcoresystems.com
- [ ] Footer loads and displays legal information
- [ ] Home page shows verification block
- [ ] /about page has Legal Business Information section
- [ ] /contact page loads with all information
- [ ] /privacy has blue banner at top
- [ ] /terms has blue banner at top
- [ ] /cookies has blue banner at top
- [ ] /compliance has blue banner at top

#### SEO & Schema Validation

1. **Google Rich Results Test**
   - [ ] Go to: https://search.google.com/test/rich-results
   - [ ] Enter: https://dcoresystems.com
   - [ ] Wait for crawl to complete
   - [ ] Verify: Organization schema appears in results
   - [ ] No errors shown

2. **Schema.org Validator**
   - [ ] Go to: https://validator.schema.org/
   - [ ] Copy page source from https://dcoresystems.com
   - [ ] Paste into validator
   - [ ] Verify: Organization schema validates
   - [ ] Check: foundingDate, address, additionalProperty are present
   - [ ] No critical errors

3. **Structured Data Testing Tool**
   - [ ] Go to: https://www.google.com/webmasters/markup-helper/
   - [ ] Enter: https://dcoresystems.com
   - [ ] Look for Organization type
   - [ ] Verify all fields are recognized

#### Meta Scraper Tool
- [ ] Go to: https://developers.facebook.com/tools/debug/
- [ ] Enter: https://dcoresystems.com
- [ ] Click "Scrape Again"
- [ ] Verify scraped content includes:
  - [ ] "DCORE SYSTEMS LLP" visible
  - [ ] "LLPIN: ACT-9625" or similar identifiers visible
  - [ ] "support@dcoresystems.com" visible
  - [ ] "+91 88560 91300" visible
  - [ ] Address text visible (not truncated)
- [ ] Check "Page Type" shows correct information

#### Additional SEO Checks
- [ ] Use Lighthouse (DevTools) to check SEO score
- [ ] No console errors when visiting pages
- [ ] All links work (footer links, contact form, navigation)
- [ ] No mixed content warnings (all HTTPS)

---

## Meta Business Verification Resubmission

### Access Meta Business Manager
- [ ] Navigate to Meta Business Manager (business.facebook.com)
- [ ] Log in with business account
- [ ] Go to **Settings → Business Information**
- [ ] Look for **Business Verification** section

### Verification Steps
1. [ ] Click "Verify Now" or "Request Verification"
2. [ ] Choose verification method:
   - [ ] Recommended: Domain ownership (DNS or HTML file)
   - [ ] Alternative: Document upload (business registration)
3. [ ] If DNS method:
   - [ ] Copy DNS record provided
   - [ ] Add to your domain's DNS settings
   - [ ] Meta will verify within 24-48 hours
4. [ ] If HTML method:
   - [ ] Download HTML file
   - [ ] Upload to root of website
   - [ ] Verify file accessible at https://dcoresystems.com/{filename}

### What Meta Will Check During Verification
- [ ] **Business Name**: "DCORE SYSTEMS LLP" appears on site
- [ ] **Address**: Full registered address visible in plain text
- [ ] **Phone/Email**: Contact information is crawlable (not hidden)
- [ ] **Identifiers**: LLPIN, GSTIN if applicable
- [ ] **Schema**: Organization JSON-LD validates correctly
- [ ] **Crawlability**: Information is not behind JavaScript-dependent rendering

---

## Troubleshooting Guide

### If Meta Still Says Information is Hidden
1. **Check source code**:
   ```bash
   # In browser DevTools, go to Inspector
   # Search for "DCORE SYSTEMS LLP"
   # Should find it in plain HTML, not inside hidden/display:none elements
   ```

2. **Verify not JavaScript-dependent**:
   - All React content is server-rendered
   - JSON-LD is in HTML head (not dynamically added)
   - Text should appear without JavaScript

3. **Check crawlability**:
   - Use: https://developers.facebook.com/tools/debug/
   - Look at "Scraped URL" section
   - Verify text appears in scraped content

### If Schema Validation Fails
1. Check JSON-LD in `index.html`:
   - Valid JSON syntax (no trailing commas)
   - All required fields present
   - Proper string quotes (not single quotes)

2. Common issues:
   - [ ] Missing `@context`: "https://schema.org"
   - [ ] Wrong `@type` value
   - [ ] Invalid date format (should be "2026-01-05")
   - [ ] Missing closing braces or brackets

### If Phone/Email Not Crawlable
- Ensure they are `<a>` tags with `href` attributes:
  ```tsx
  <a href="mailto:support@dcoresystems.com">support@dcoresystems.com</a>
  <a href="tel:+918856091300">+91 88560 91300</a>
  ```

### If Address Not Visible
1. Check it's not in `style="display:none"`
2. Check it's not inside collapsed accordion/modal
3. Verify it's plain text in paragraph tags
4. Ensure responsive design shows it on all screen sizes

---

## Post-Verification Checklist

### After Meta Approves Verification
- [ ] Confirmation email received from Meta
- [ ] Meta Business Manager shows "Verified" status
- [ ] Update business profile with verified badge
- [ ] Document verification date

### Ongoing Maintenance
- [ ] Keep legal information current
- [ ] Update if business details change (address, phone, etc.)
- [ ] Monitor for Meta policy changes
- [ ] Regular backups of implementation

---

## Performance & Stability

### Performance Checks
- [ ] Page load time < 3 seconds (Home page)
- [ ] Core Web Vitals pass (Lighthouse)
- [ ] Images optimized (no oversized assets)
- [ ] No performance warnings in build

### Browser Compatibility
- [ ] Chrome latest version
- [ ] Firefox latest version
- [ ] Safari latest version
- [ ] Edge latest version
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Compliance
- [ ] WCAG 2.1 Level AA compliance
- [ ] All text has sufficient contrast
- [ ] Links are properly labeled
- [ ] Form fields have labels
- [ ] No accessibility warnings in DevTools

---

## Documentation Updates

### Create Deployment Notes
- [ ] Record deployment date
- [ ] Note any version changes
- [ ] Document any issues encountered
- [ ] Record Meta verification confirmation

### Update README
- [ ] Add note about legal requirements
- [ ] Document where legal information is displayed
- [ ] Include verification status
- [ ] Add contact for updates

---

## Final Sign-Off

### Development Team
- [ ] Code reviewed by: _________________ Date: _______
- [ ] All requirements met: YES / NO
- [ ] Testing complete: YES / NO
- [ ] Ready for production: YES / NO

### Deployment Authorization
- [ ] Authorized by: _________________ Date: _______
- [ ] Deployment completed: YES / NO
- [ ] Verification requested: YES / NO
- [ ] Date verification submitted: _______

### Post-Verification Status
- [ ] Meta verification: PENDING / APPROVED / REJECTED
- [ ] Date status received: _______
- [ ] Action items if rejected: _______________________
- [ ] Final verification date: _______

---

## Important Reminders

⚠️ **Before Each Deployment**:
1. Run `npm run build` to catch errors
2. Test locally on multiple devices
3. Verify content accuracy
4. Check for typos in legal information

⚠️ **Legal Information is Critical**:
- Cannot contain errors or inconsistencies
- Must match official business registration
- Should not be modified arbitrarily
- Update only when business details actually change

⚠️ **Meta Bot Requirements**:
- No hidden content (all text visible)
- No JavaScript dependencies for legal info
- Server-rendered content
- Plain HTML, not images

⚠️ **Keep Records**:
- Screenshots of each page
- JSON-LD validation results
- Meta verification emails
- Deployment logs

---

## Support & Escalation

### If Issues Persist
1. **Contact Meta Support**:
   - Use Meta Business Help (in settings)
   - Provide URL and screenshot
   - Include JSON-LD schema
   - Explain changes made

2. **Contact Your Developer**:
   - Provide error messages
   - Include Meta's rejection reason
   - Share screenshots of what Meta sees
   - Document steps already taken

3. **Documentation to Provide**:
   - URL of deployed site
   - Screenshots of footer/about/contact
   - JSON-LD schema (formatted)
   - List of all files modified

---

**Status**: ✅ Ready for Deployment
**Date Prepared**: February 5, 2026
**Next Step**: Deploy to production and resubmit to Meta Business Verification
