import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

const PageLoadingFallback = () => <div className="min-h-screen bg-white" aria-hidden="true" />;

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const Compare = lazy(() => import("./pages/Compare"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const Press = lazy(() => import("./pages/Press"));
const Docs = lazy(() => import("./pages/Docs"));
const Api = lazy(() => import("./pages/Api"));
const Guides = lazy(() => import("./pages/Guides"));
const Support = lazy(() => import("./pages/Support"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Compliance = lazy(() => import("./pages/Compliance"));
const CompanyDetails = lazy(() => import("./pages/CompanyDetails"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const AffiliatePolicy = lazy(() => import("./pages/AffiliatePolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const OnboardingForm = lazy(() => import("./pages/OnboardingForm"));
const OnboardingSuccess = lazy(() => import("./pages/OnboardingSuccess"));
const AgreementGenerator = lazy(() => import("./pages/AgreementGenerator"));
const AllInOneMarketingAutomationPlatform = lazy(
  () => import("./pages/AllInOneMarketingAutomationPlatform")
);
const WhatsappMarketingSoftware = lazy(() => import("./pages/WhatsappMarketingSoftware"));
const WhatsappSenderSoftware = lazy(() => import("./pages/WhatsappSenderSoftware"));
const WhatsappBusinessApiIncluded = lazy(() => import("./pages/WhatsappBusinessApiIncluded"));
const InstagramAutomation = lazy(() => import("./pages/InstagramAutomation"));
const AutomationFunnels = lazy(() => import("./pages/AutomationFunnels"));
const AiFunnelBuilder = lazy(() => import("./pages/AiFunnelBuilder"));
const AiLandingPageBuilder = lazy(() => import("./pages/AiLandingPageBuilder"));
const AiChatbotsWhatsapp = lazy(() => import("./pages/AiChatbotsWhatsapp"));
const CrmWithWhatsappAutomation = lazy(() => import("./pages/CrmWithWhatsappAutomation"));
const WorkflowAutomation = lazy(() => import("./pages/WorkflowAutomation"));
const FormBuilder = lazy(() => import("./pages/FormBuilder"));
const WebhookIntegrations = lazy(() => import("./pages/WebhookIntegrations"));
const PabblyIntegration = lazy(() => import("./pages/PabblyIntegration"));
const PaymentGatewayIntegrations = lazy(() => import("./pages/PaymentGatewayIntegrations"));
const DcoreVsWati = lazy(() => import("./pages/compare/DcoreVsWati"));
const DcoreVsInterakt = lazy(() => import("./pages/compare/DcoreVsInterakt"));
const DcoreVsZoko = lazy(() => import("./pages/compare/DcoreVsZoko"));
const DcoreVsTwilioWhatsapp = lazy(() => import("./pages/compare/DcoreVsTwilioWhatsapp"));
const CompareFlexifunnels = lazy(() => import("./pages/compare/Flexifunnels"));
const CompareTagMango = lazy(() => import("./pages/compare/TagMango"));
const CompareGraphy = lazy(() => import("./pages/compare/Graphy"));
const CompareGoHighLevel = lazy(() => import("./pages/compare/GoHighLevel"));
const CompareKajabi = lazy(() => import("./pages/compare/Kajabi"));
const CompareAiSensy = lazy(() => import("./pages/compare/AiSensy"));
const CompareSkool = lazy(() => import("./pages/compare/Skool"));
const Coaches = lazy(() => import("./pages/solutions/Coaches"));
const RealEstate = lazy(() => import("./pages/solutions/RealEstate"));
const Fitness = lazy(() => import("./pages/solutions/Fitness"));
const FitnessClubs = lazy(() => import("./pages/solutions/FitnessClubs"));
const Consultants = lazy(() => import("./pages/solutions/Consultants"));
const Events = lazy(() => import("./pages/solutions/Events"));
const EventPlanners = lazy(() => import("./pages/solutions/EventPlanners"));
const Agencies = lazy(() => import("./pages/solutions/Agencies"));
const FinancialAdvisors = lazy(() => import("./pages/solutions/FinancialAdvisors"));
const HealthClinics = lazy(() => import("./pages/solutions/HealthClinics"));
const Freelancers = lazy(() => import("./pages/solutions/Freelancers"));
const ProcessMascot = lazy(() => import("./pages/admin/ProcessMascot"));
const AdminBookings = lazy(() => import("./pages/admin/Bookings"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const ProtectedAdminRoute = lazy(() =>
  import("./components/ProtectedAdminRoute").then((module) => ({
    default: module.ProtectedAdminRoute,
  }))
);

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/testimonials" element={<NotFound />} />

            {/* SEO Landing Pages */}
            <Route
              path="/all-in-one-marketing-automation-platform"
              element={<AllInOneMarketingAutomationPlatform />}
            />
            <Route path="/whatsapp-marketing-software" element={<WhatsappMarketingSoftware />} />
            <Route path="/whatsapp-sender-software" element={<WhatsappSenderSoftware />} />
            <Route
              path="/whatsapp-business-api-included"
              element={<WhatsappBusinessApiIncluded />}
            />
            <Route path="/instagram-automation" element={<InstagramAutomation />} />
            <Route path="/automation-funnels" element={<AutomationFunnels />} />
            <Route path="/ai-funnel-builder" element={<AiFunnelBuilder />} />
            <Route path="/ai-landing-page-builder" element={<AiLandingPageBuilder />} />
            <Route path="/ai-chatbots-whatsapp" element={<AiChatbotsWhatsapp />} />
            <Route path="/crm-with-whatsapp-automation" element={<CrmWithWhatsappAutomation />} />
            <Route path="/workflow-automation" element={<WorkflowAutomation />} />
            <Route path="/form-builder" element={<FormBuilder />} />
            <Route path="/webhook-integrations" element={<WebhookIntegrations />} />
            <Route path="/pabbly-integration" element={<PabblyIntegration />} />
            <Route
              path="/payment-gateway-integrations"
              element={<PaymentGatewayIntegrations />}
            />
            
            {/* Company Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<Press />} />
            
            {/* Resource Pages */}
            <Route path="/docs" element={<Docs />} />
            <Route path="/api" element={<Api />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/terms-of-use" element={<Terms />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/affiliate-policy" element={<AffiliatePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/legal/company" element={<CompanyDetails />} />

            {/* Onboarding Pages */}
            <Route path="/onboarding-form" element={<OnboardingForm />} />
            <Route path="/onboarding-success" element={<OnboardingSuccess />} />

            {/* Tools Pages */}
            <Route path="/agreement-generator" element={<AgreementGenerator />} />

            {/* Legacy HTML URLs */}
            <Route
              path="/onboarding-form.html"
              element={<Navigate to="/onboarding-form" replace />}
            />
            <Route
              path="/onboarding-success.html"
              element={<Navigate to="/onboarding-success" replace />}
            />
            <Route path="/terms-of-use.html" element={<Navigate to="/terms-of-use" replace />} />
            <Route
              path="/privacy-policy.html"
              element={<Navigate to="/privacy-policy" replace />}
            />
            <Route path="/refund-policy.html" element={<Navigate to="/refund-policy" replace />} />
            <Route
              path="/affiliate-policy.html"
              element={<Navigate to="/affiliate-policy" replace />}
            />
            <Route path="/disclaimer.html" element={<Navigate to="/disclaimer" replace />} />
            
            {/* Compare Routes */}
            <Route path="/compare" element={<Compare />} />
            <Route path="/compare/flexifunnels" element={<CompareFlexifunnels />} />
            <Route path="/compare/tagmango" element={<CompareTagMango />} />
            <Route path="/compare/graphy" element={<CompareGraphy />} />
            <Route path="/compare/gohighlevel" element={<CompareGoHighLevel />} />
            <Route path="/compare/kajabi" element={<CompareKajabi />} />
            <Route path="/compare/aisensy" element={<CompareAiSensy />} />
            <Route path="/compare/skool" element={<CompareSkool />} />

            {/* Comparison Routes (SEO) */}
            <Route path="/dcore-vs-wati" element={<DcoreVsWati />} />
            <Route path="/dcore-vs-interakt" element={<DcoreVsInterakt />} />
            <Route path="/dcore-vs-zoko" element={<DcoreVsZoko />} />
            <Route
              path="/dcore-vs-twilio-whatsapp"
              element={<DcoreVsTwilioWhatsapp />}
            />
            
            {/* Solution Routes */}
            <Route path="/solutions/coaches" element={<Coaches />} />
            <Route path="/solutions/real-estate" element={<RealEstate />} />
            <Route path="/solutions/fitness" element={<Fitness />} />
            <Route path="/solutions/fitness-clubs" element={<FitnessClubs />} />
            <Route path="/solutions/consultants" element={<Consultants />} />
            <Route path="/solutions/events" element={<Events />} />
            <Route path="/solutions/event-planners" element={<EventPlanners />} />
            <Route path="/solutions/agencies" element={<Agencies />} />
            <Route path="/solutions/financial-advisors" element={<FinancialAdvisors />} />
            <Route path="/solutions/health-clinics" element={<HealthClinics />} />
            <Route path="/solutions/freelancers" element={<Freelancers />} />
            
            {/* Admin Routes - Protected */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/process-mascot"
              element={
                <ProtectedAdminRoute>
                  <ProcessMascot />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="/admin/bookings"
              element={
                <ProtectedAdminRoute>
                  <AdminBookings />
                </ProtectedAdminRoute>
              }
            />
            
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
