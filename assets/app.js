/**
 * DCore Systems - Onboarding Success Page
 * app.js - Client-side functionality
 * 
 * Features:
 * - Copy community link to clipboard
 * - Copy support email to clipboard
 * - Download checklist as .txt file
 * - URL parameter personalization (name, email)
 * - Toast notifications
 */

// ==================== Toast Notification System ====================
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ==================== Copy to Clipboard Functions ====================

/**
 * Copy community portal link to clipboard
 */
function copyCommunityLink() {
    const link = 'https://community.dcoresystems.com/';
    copyToClipboard(link, 'Community link copied! 🎓');
}

/**
 * Copy support email to clipboard
 */
function copySupportEmail() {
    const email = 'support@dcoresystems.com';
    copyToClipboard(email, 'Email copied to clipboard! 📧');
}

/**
 * Generic copy to clipboard with feedback
 * @param {string} text - Text to copy
 * @param {string} message - Success message to show
 */
function copyToClipboard(text, message) {
    // Use modern Clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(message);
            // Visual feedback on button
            const btn = event.target.closest('button');
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = '✓ Copied!';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            }
        }).catch(() => {
            fallbackCopyToClipboard(text, message);
        });
    } else {
        fallbackCopyToClipboard(text, message);
    }
}

/**
 * Fallback copy to clipboard for older browsers
 * @param {string} text - Text to copy
 * @param {string} message - Success message to show
 */
function fallbackCopyToClipboard(text, message) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    
    try {
        textarea.select();
        document.execCommand('copy');
        showToast(message);
        
        const btn = event.target.closest('button');
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = '✓ Copied!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        }
    } catch (err) {
        showToast('Failed to copy. Please try again.', 4000);
    } finally {
        document.body.removeChild(textarea);
    }
}

// ==================== Download Checklist ====================

/**
 * Generate and download onboarding checklist as .txt file
 */
function downloadChecklistTxt() {
    const checklist = generateChecklistContent();
    downloadFile(checklist, 'onboarding-checklist.txt', 'text/plain');
}

/**
 * Generate checklist content with formatting
 * @returns {string} Formatted checklist text
 */
function generateChecklistContent() {
    const content = `
╔══════════════════════════════════════════════════════════════════════════════╗
║     DCORE SYSTEMS - ONBOARDING READINESS CHECKLIST                          ║
║     Generated: ${new Date().toLocaleString()}                               ║
╚══════════════════════════════════════════════════════════════════════════════╝

Dear User,

Thank you for submitting your onboarding details to DCore Systems. Please ensure
you have the following items ready for a smooth onboarding experience:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ BUSINESS NAME & CONTACT DETAILS
  - Business/Company name
  - Primary contact person name
  - Email address
  - Phone number
  - Business type/industry

✓ VERIFIED EMAIL ADDRESS ACCESS
  - Email address is active and accessible
  - You can receive OTPs and login credentials
  - Check both Inbox and Spam/Junk folders
  - Consider adding support@dcoresystems.com to contacts

✓ META/WHATSAPP BUSINESS DETAILS (if applicable)
  - Meta Business Account ID
  - WhatsApp Business Account Phone Number
  - Business API credentials (if already obtained)
  - Meta Business Manager access

✓ USE CASE & MESSAGE FLOW
  - Primary use case (lead follow-up, customer support, notifications, etc.)
  - Message flow details
  - Expected message volume per day
  - Peak hours for message delivery

✓ APPROVED SENDER NAME & BRAND TONE
  - Desired sender/business name (as it will appear to customers)
  - Brand voice/tone guidelines
  - Sample messages that match your brand
  - Do NOT use misleading or false sender names

✓ WEBSITE & LEGAL LINKS (if required)
  - Website URL
  - Privacy Policy URL
  - Terms & Conditions URL
  - Cookie Policy URL (if applicable)

✓ TEAM MEMBER ACCESS
  - Names of team members requiring platform access
  - Email addresses of team members
  - Roles/permissions needed for each member
  - Manager/Admin designation

✓ GO-LIVE SCHEDULE
  - Preferred go-live date
  - Preferred go-live time window
  - Timezone
  - Any specific considerations or constraints

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT HAPPENS NEXT:

1. REVIEW YOUR DETAILS
   Our team reviews your onboarding submission and business information

2. ACCOUNT SETUP
   We configure your account based on your use case and requirements

3. TEMPLATE APPROVAL
   Message templates and sender names are reviewed and approved by Meta/WhatsApp

4. GO LIVE
   Your account is activated and you can start sending messages

5. OPTIMIZATION
   We help you optimize delivery rates and response times

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPORTANT INFORMATION:

LOGIN CREDENTIALS
- Your login credentials will be sent to your email address
- Please check your Inbox and Spam/Junk folders
- If you don't receive credentials within 24 hours, contact support

LOGIN SECURITY
- An OTP (One-Time Password) will be sent to your email for every login
- Never share your OTP or password with anyone
- Keep your email secure and accessible

SUPPORT RESOURCES
- Community Portal: https://community.dcoresystems.com/
  Browse onboarding videos, guides, and best practices
  
- WhatsApp Support: https://wa.me/918856091300
  Quick support via WhatsApp (Available during business hours)
  
- Email Support: support@dcoresystems.com
  For detailed inquiries and concerns
  
- Phone Support: +91 97665 21300
  Business & Calling support line
  
- Website: http://www.dcoresystems.com/
  Learn more about DCore Systems and our services

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TIPS FOR SUCCESS:

1. Bookmark community.dcoresystems.com for quick access to guides
2. Prepare all checklist items before your onboarding call
3. Have your business documents handy for verification
4. Test your email access to ensure OTP delivery
5. Keep your contact information up to date
6. Review our guides on message compliance and best practices

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Questions? Contact us:
Email: support@dcoresystems.com
WhatsApp: https://wa.me/918856091300
Phone: +91 97665 21300

© 2026 DCore Systems. All rights reserved.
Visit: http://www.dcoresystems.com/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    return content.trim();
}

/**
 * Download file utility
 * @param {string} content - File content
 * @param {string} filename - Filename for download
 * @param {string} mimeType - MIME type of the file
 */
function downloadFile(content, filename, mimeType = 'text/plain') {
    // Create blob with proper encoding
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
    
    // Create download link
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = filename;
    
    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up URL object
    setTimeout(() => URL.revokeObjectURL(url), 100);
    
    // Show confirmation
    showToast(`✓ ${filename} downloaded successfully!`);
}

// ==================== URL Parameter Personalization ====================

/**
 * Parse URL parameters and personalize the page
 * Safely handles user input to prevent XSS
 */
function personalizePageFromURL() {
    // Get URL parameters safely
    const params = new URLSearchParams(window.location.search);
    const userName = params.get('name');
    const userEmail = params.get('email');

    if (userName) {
        // Safely decode and sanitize the name
        const sanitizedName = decodeURIComponent(userName)
            .replace(/[<>]/g, '') // Remove angle brackets
            .substring(0, 50); // Limit length
        
        // Look for greeting element
        const greetingElement = document.querySelector('[data-personalization="greeting"]');
        if (greetingElement) {
            greetingElement.textContent = `Hi, ${sanitizedName}! `;
        }
    }

    if (userEmail) {
        // Safely decode and validate email format (basic check)
        const sanitizedEmail = decodeURIComponent(userEmail)
            .toLowerCase()
            .substring(0, 100);
        
        // Validate basic email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(sanitizedEmail)) {
            const emailElement = document.querySelector('[data-personalization="email"]');
            if (emailElement) {
                emailElement.textContent = sanitizedEmail;
            }
        }
    }
}

// ==================== Keyboard Navigation Enhancement ====================

/**
 * Enhance keyboard navigation and accessibility
 */
function enhanceAccessibility() {
    // Add keyboard support for copy buttons
    document.addEventListener('keydown', (event) => {
        // Alt + C for copy community link
        if (event.altKey && event.code === 'KeyC') {
            event.preventDefault();
            copyCommunityLink();
        }
        
        // Alt + E for copy email
        if (event.altKey && event.code === 'KeyE') {
            event.preventDefault();
            copySupportEmail();
        }
        
        // Alt + D for download checklist
        if (event.altKey && event.code === 'KeyD') {
            event.preventDefault();
            downloadChecklistTxt();
        }
    });

    // Announce toast to screen readers
    const toast = document.getElementById('toast');
    if (toast) {
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.setAttribute('aria-atomic', 'true');
    }
}

// ==================== Mobile Menu & Interactions ====================

/**
 * Handle mobile menu interactions
 */
function initializeMobileInteractions() {
    // Add touch-friendly tap feedback
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        button.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// ==================== Page Load Initialization ====================

/**
 * Initialize all page features on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Personalize page if URL parameters exist
    personalizePageFromURL();
    
    // Enhance accessibility features
    enhanceAccessibility();
    
    // Initialize mobile interactions
    initializeMobileInteractions();
    
    // Show welcome message
    console.log('🎉 DCore Systems Onboarding Page Loaded');
    console.log('📚 Community Portal: https://community.dcoresystems.com/');
    console.log('💬 WhatsApp Support: https://wa.me/918856091300');
    console.log('📧 Email Support: support@dcoresystems.com');
    console.log('☎️  Phone Support: +91 97665 21300');
});

// ==================== Keyboard Shortcut Hints (Optional) ====================

/**
 * Show keyboard shortcut hints (optional feature)
 * Uncomment to enable
 */
function showKeyboardShortcuts() {
    const shortcuts = `
    Keyboard Shortcuts:
    Alt + C - Copy Community Link
    Alt + E - Copy Support Email
    Alt + D - Download Checklist
    `;
    console.log('%c' + shortcuts, 'color: #6366f1; font-weight: bold; font-size: 12px;');
}

// Uncomment to show shortcuts on page load
// showKeyboardShortcuts();
