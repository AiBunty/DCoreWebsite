import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Index from "./pages/Index";
import DcoreTheme from "./pages/DcoreTheme";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import BookDemo from "./pages/BookDemo";
import Compare from "./pages/Compare";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import Docs from "./pages/Docs";
import Api from "./pages/Api";
import Guides from "./pages/Guides";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Compliance from "./pages/Compliance";

// SEO Landing Pages
import AllInOneMarketingAutomationPlatform from "./pages/AllInOneMarketingAutomationPlatform";
import WhatsappMarketingSoftware from "./pages/WhatsappMarketingSoftware";
import WhatsappSenderSoftware from "./pages/WhatsappSenderSoftware";
import WhatsappBusinessApiIncluded from "./pages/WhatsappBusinessApiIncluded";
import InstagramAutomation from "./pages/InstagramAutomation";
import AutomationFunnels from "./pages/AutomationFunnels";
import AiFunnelBuilder from "./pages/AiFunnelBuilder";
import AiLandingPageBuilder from "./pages/AiLandingPageBuilder";
import AiChatbotsWhatsapp from "./pages/AiChatbotsWhatsapp";
import CrmWithWhatsappAutomation from "./pages/CrmWithWhatsappAutomation";
import WorkflowAutomation from "./pages/WorkflowAutomation";
import FormBuilder from "./pages/FormBuilder";
import WebhookIntegrations from "./pages/WebhookIntegrations";
import PabblyIntegration from "./pages/PabblyIntegration";
import PaymentGatewayIntegrations from "./pages/PaymentGatewayIntegrations";

// Comparison Pages (SEO)
import DcoreVsWati from "./pages/compare/DcoreVsWati";
import DcoreVsInterakt from "./pages/compare/DcoreVsInterakt";
import DcoreVsZoko from "./pages/compare/DcoreVsZoko";
import DcoreVsTwilioWhatsapp from "./pages/compare/DcoreVsTwilioWhatsapp";

// Comparison Pages
import CompareFlexifunnels from "./pages/compare/Flexifunnels";
import CompareTagMango from "./pages/compare/TagMango";
import CompareGraphy from "./pages/compare/Graphy";
import CompareGoHighLevel from "./pages/compare/GoHighLevel";
import CompareKajabi from "./pages/compare/Kajabi";
import CompareAiSensy from "./pages/compare/AiSensy";
import CompareSkool from "./pages/compare/Skool";

// Solution Pages
import Coaches from "./pages/solutions/Coaches";
import RealEstate from "./pages/solutions/RealEstate";
import Fitness from "./pages/solutions/Fitness";
import FitnessClubs from "./pages/solutions/FitnessClubs";
import Consultants from "./pages/solutions/Consultants";
import Events from "./pages/solutions/Events";
import EventPlanners from "./pages/solutions/EventPlanners";
import Agencies from "./pages/solutions/Agencies";
import FinancialAdvisors from "./pages/solutions/FinancialAdvisors";
import HealthClinics from "./pages/solutions/HealthClinics";
import Freelancers from "./pages/solutions/Freelancers";

// Admin Pages
import ProcessMascot from "./pages/admin/ProcessMascot";
import AdminBookings from "./pages/admin/Bookings";
import AdminLogin from "./pages/admin/Login";
import { ProtectedAdminRoute } from "./components/ProtectedAdminRoute";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/testimonials" element={<Testimonials />} />

          {/* SEO Landing Pages */}
          <Route
            path="/all-in-one-marketing-automation-platform"
            element={<AllInOneMarketingAutomationPlatform />}
          />
          <Route path="/whatsapp-marketing-software" element={<WhatsappMarketingSoftware />} />
          <Route path="/whatsapp-sender-software" element={<WhatsappSenderSoftware />} />
          <Route path="/whatsapp-business-api-included" element={<WhatsappBusinessApiIncluded />} />
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
          <Route path="/payment-gateway-integrations" element={<PaymentGatewayIntegrations />} />
          
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/compliance" element={<Compliance />} />
          
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
