import { Layout } from "@/components/Layout";

export default function Cookies() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-sm font-semibold text-foreground">
              This website is owned and operated by <strong>DCORE SYSTEMS LLP</strong>, a legally registered Limited Liability Partnership 
              (LLPIN: ACT-9625) incorporated under the Limited Liability Partnership Act, 2008 (India).
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Cookie Policy</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground mb-6">
              Cookies are small files stored on your device when you visit a website. They help websites remember information about 
              your visit, such as your language preferences or login information.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground mb-6">D'CORE Systems uses cookies for:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Authentication and security purposes</li>
              <li>Remembering your preferences and settings</li>
              <li>Analyzing site usage and performance</li>
              <li>Personalizing your experience</li>
              <li>Marketing and advertising purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Essential Cookies</h3>
                <p className="text-muted-foreground">Required for basic website functionality</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                <p className="text-muted-foreground">Help us understand how visitors use our website</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Marketing Cookies</h3>
                <p className="text-muted-foreground">Used to deliver personalized advertisements</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Most web browsers allow you to control cookies through browser settings. You can choose to reject cookies or set your 
              browser to alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the updated policy on 
              this page.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}