import { Layout } from "@/components/Layout";

export default function Terms() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-6">
              Permission is granted to temporarily download one copy of the materials (information or software) on D'CORE Systems' 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              The materials on D'CORE Systems' website are provided "as is". D'CORE Systems makes no warranties, expressed or implied, 
              and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions 
              of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Limitations</h2>
            <p className="text-muted-foreground mb-6">
              In no event shall D'CORE Systems or its suppliers be liable for any damages (including, without limitation, damages for 
              loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 
              D'CORE Systems' website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground mb-6">
              The materials appearing on D'CORE Systems' website could include technical, typographical, or photographic errors. 
              D'CORE Systems does not warrant that any of the materials on its website are accurate, complete, or current. 
              D'CORE Systems may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms and Conditions, please contact us at legal@dcore.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}