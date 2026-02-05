import { Layout } from "@/components/Layout";

export default function Privacy() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-6">
              D'CORE Systems ("we" or "us" or "our") operates the website. This page informs you of our policies 
              regarding the collection, use, and disclosure of personal data when you use our Service and the choices 
              you have associated with that data.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Collection and Use</h2>
            <p className="text-muted-foreground mb-6">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Personal Data: Name, email address, phone number</li>
              <li>Usage Data: IP address, browser type, pages visited</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Use of Data</h2>
            <p className="text-muted-foreground mb-6">
              D'CORE Systems uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Security of Data</h2>
            <p className="text-muted-foreground mb-6">
              The security of your data is important to us but remember that no method of transmission over the Internet 
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
              your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy, please contact us at privacy@dcore.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}