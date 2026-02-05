# DEPLOY_META_VERIFICATION.md - Quick Start Guide

## TL;DR - Deploy in 5 Minutes

All changes are done. Deploy with:
```bash
npm run build    # Check for errors (should take <5s)
git add .
git commit -m "Meta Business Verification - Legal info added"
git push
```

Vercel auto-deploys. Meta verifies automatically. Done! ✅

---

## What Was Changed

**Files Created**: 2
- `src/components/LegalFooter.tsx` - Global legal footer
- `src/pages/Contact.tsx` - Contact page with business info

**Files Updated**: 9
- Footer.tsx, About.tsx, Index.tsx, Privacy.tsx, Terms.tsx, Cookies.tsx, Compliance.tsx, App.tsx, index.html

**Result**: DCORE SYSTEMS LLP legal info on every page + JSON-LD schema

---

## Step-by-Step Deployment

### Step 1: Verify Locally (2 minutes)
```bash
npm run build        # Verifies no errors
npm run dev          # Runs dev server
```

Then in browser at http://localhost:5173:
- ✅ Scroll to **footer** → see legal information
- ✅ Go to **/about** → see "Legal Business Information" section
- ✅ Go to **/contact** → see business info block
- ✅ Go to **/privacy** → see blue banner at top

### Step 2: Deploy to Production (1 minute)
```bash
git add .
git commit -m "Meta Business Verification - add DCORE SYSTEMS LLP legal information"
git push
```

Vercel auto-deploys. Wait for deployment to complete (~2 minutes).

### Step 3: Verify Production (1 minute)
Visit https://dcoresystems.com:
- ✅ Load homepage
- ✅ Scroll to footer → verify legal info visible
- ✅ Visit /about → verify legal section present
- ✅ Visit /contact → verify business info present

### Step 4: Test with Meta Tools (1 minute)

**Meta Scraper Tool:**
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: https://dcoresystems.com
3. Click "Scrape Again"
4. Look for "DCORE SYSTEMS LLP" in the output
5. Should see company name, address, phone, email

**Google Schema Test:**
1. Go to: https://search.google.com/test/rich-results
2. Enter: https://dcoresystems.com
3. Should show Organization schema is valid

### Step 5: Submit to Meta (1 minute)
1. Open Meta Business Manager: https://business.facebook.com
2. Go to **Settings** → **Business Information**
3. Find **Business Verification** section
4. Click **"Verify Now"**
5. Choose verification method:
   - **DNS verification** (Recommended - automatic)
   - **Document upload** (Alternative - slower)
6. Follow the verification steps

---

## What Meta Will Verify

When Meta crawls your site, it will see:

✅ **Plain Text Company Name**
- "DCORE SYSTEMS LLP" in HTML (not image)

✅ **Business Identifiers**
- LLPIN: ACT-9625
- GSTIN: 27AAZFD2232J1Z3

✅ **Full Address**
- BLDG C FLAT NO 7 S NO 244 BANER PUSHPANAGAR D P
- Aundh Haveli, Pune – 411007, Maharashtra, India

✅ **Contact Information**
- Email: support@dcoresystems.com (crawlable link)
- Phone: +91 88560 91300 (crawlable link)

✅ **Structured Data**
- Organization JSON-LD schema
- Includes: name, url, email, phone, address, foundingDate, LLPIN, GSTIN

✅ **Multiple Locations**
- Footer (every page)
- Home page verification block
- About page legal section
- Contact page business info
- Legal pages (privacy, terms, etc.)

---

## Expected Timeline

| Step | Time | Status |
|------|------|--------|
| Local verification | 2 min | Immediate |
| Deploy to Vercel | 2 min | Auto |
| Production verification | 1 min | Immediate |
| Meta scraper test | 1 min | Immediate |
| Submit to Meta | 1 min | Immediate |
| **Meta approval** | **24-48 hrs** | Automated |
| **Total time to verified** | **~5 min + 24-48 hrs** | |

---

## Troubleshooting

### Build Fails?
```bash
npm install     # Reinstall dependencies
npm run lint    # Check for errors
npm run build   # Try again
```

### Page Shows Old Content?
```bash
# Hard refresh in browser
Ctrl+Shift+Delete   # Open DevTools cache
# Or:
Ctrl+F5            # Hard refresh
```

### Footer Missing?
Check files in order:
1. `src/components/LegalFooter.tsx` - exists?
2. `src/components/Footer.tsx` - imports LegalFooter?
3. `src/components/Layout.tsx` - uses Footer?

### Meta Says Info is Hidden?
Use Meta Scraper Tool:
1. https://developers.facebook.com/tools/debug/
2. Enter your URL
3. Look for text in "Scraped URL" section
4. If missing: content might be JavaScript-dependent

---

## What's on Each Page

### Global Footer (Every Page)
- Company name: DCORE SYSTEMS LLP
- Full legal statement
- LLPIN, GSTIN
- Date of incorporation
- Full address
- Contact email (link)
- Contact phone (link)
- Business description
- Copyright

### Home Page (/)
- Verification block above CTA
- "Operated by DCORE SYSTEMS LLP"
- LLPIN: ACT-9625
- Headquarters: Pune, Maharashtra, India

### About Page (/about)
- "Legal Business Information" section
- Full LLP registration statement
- All identifiers and address
- Business description

### Contact Page (/contact) - NEW
- Business info card at top
- Email with link
- Phone with link
- Full address
- LLPIN, GSTIN, incorporation date
- Contact form

### Legal Pages (/privacy, /terms, /cookies, /compliance)
- Blue banner at top
- "This website is owned and operated by DCORE SYSTEMS LLP..."
- LLPIN visible

### Meta/SEO (index.html)
- Meta author: DCORE SYSTEMS LLP
- Organization JSON-LD schema
- All contact info
- Full address
- Founding date
- LLPIN and GSTIN

---

## Files Changed Summary

| File | Type | Change |
|------|------|--------|
| `src/components/LegalFooter.tsx` | NEW | Reusable legal footer |
| `src/pages/Contact.tsx` | NEW | Contact page |
| `src/components/Footer.tsx` | UPDATE | Import & use LegalFooter |
| `src/pages/About.tsx` | UPDATE | Add legal section |
| `src/pages/Index.tsx` | UPDATE | Add verification block |
| `src/pages/Privacy.tsx` | UPDATE | Add ownership banner |
| `src/pages/Terms.tsx` | UPDATE | Add ownership banner |
| `src/pages/Cookies.tsx` | UPDATE | Add ownership banner |
| `src/pages/Compliance.tsx` | UPDATE | Add ownership banner |
| `src/App.tsx` | UPDATE | Add /contact route |
| `index.html` | UPDATE | Meta author + JSON-LD |

---

## Success Checklist

- [ ] `npm run build` completes without errors
- [ ] `npm run dev` loads without errors
- [ ] Footer visible on all pages
- [ ] About page has legal section
- [ ] Contact page loads at /contact
- [ ] Legal page headers have blue banner
- [ ] Home page has verification block
- [ ] Deployment to Vercel successful
- [ ] Production site loads correctly
- [ ] Meta Scraper Tool shows "DCORE SYSTEMS LLP"
- [ ] Google Schema Test shows Organization schema
- [ ] Submitted to Meta Business Verification
- [ ] Waiting for Meta approval (24-48 hrs)

---

## Meta Verification Timeline

1. **Submit request** (1 minute)
   - Go to Business Manager
   - Request verification
   - Choose DNS method (recommended)

2. **Meta crawls** (24-48 hours)
   - Automated process
   - Checks for legal name visibility
   - Verifies address is crawlable
   - Validates JSON-LD schema

3. **Approval** (Automatic)
   - If all checks pass: ✅ Verified
   - If issues found: Rejection with reason
   - Usually approved if deployed correctly

---

## After Verification

✅ **Approved?**
- Business verification badge appears
- Mark as verified in all Meta products
- Maintain legal information accuracy

❌ **Rejected?**
- Check rejection reason
- Review DEPLOYMENT_CHECKLIST.md
- Use Meta Scraper Tool to diagnose
- Resubmit once fixed

---

## Documentation

For more details, see:

1. **README_IMPLEMENTATION.md** - Complete overview
2. **IMPLEMENTATION_STATUS.md** - What was done
3. **EXACT_CODE_SNIPPETS.md** - All code changes
4. **VISUAL_IMPLEMENTATION_GUIDE.md** - Where to find everything
5. **DEPLOYMENT_CHECKLIST.md** - Full verification steps
6. **META_VERIFICATION_CODE_REFERENCE.md** - Code reference

All files are in project root.

---

## Support

**Problem**: [describe issue]

**Solution**:
1. Check DEPLOYMENT_CHECKLIST.md
2. Use Meta Scraper Tool to diagnose
3. Review VISUAL_IMPLEMENTATION_GUIDE.md
4. Check build errors: `npm run lint`

---

## Summary

1. Run `npm run build` ✅
2. Run `git push` ✅
3. Wait for deployment ✅
4. Verify on production ✅
5. Submit to Meta ✅
6. Meta approves in 24-48 hrs ✅

**You're done!** 🎉

---

**Implementation Date**: February 5, 2026  
**Status**: ✅ READY TO DEPLOY  
**Time to Deploy**: ~5 minutes  
**Time to Verify**: 24-48 hours  
