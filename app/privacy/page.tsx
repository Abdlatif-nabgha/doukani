import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function PrivacyPage() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 font-sans">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 sm:p-12 prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
          <h1 className="border-b-2 border-zinc-100 pb-4 text-3xl font-bold text-zinc-900">Privacy Policy</h1>
          <p className="mt-6 text-zinc-600 font-medium">Last updated: August 14, 2026</p>

          <p>This Privacy Policy explains how <strong>Doukani (دكاني)</strong> ("Doukani", "we", "us", or "our") collects, uses, stores, and protects information when you use the Doukani mobile application (the "App").</p>
          <p>By using Doukani, you agree to the practices described in this Privacy Policy.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">1. Information We Collect</h2>
          
          <h3 className="mt-6 font-semibold">1.1 Account Information</h3>
          <p>Doukani uses phone-number authentication. When you create or access an account, we may collect:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your phone number</li>
              <li>Authentication information associated with your account</li>
              <li>Information necessary to maintain your account and access the App</li>
          </ul>
          <p className="mt-2">Phone-number authentication is provided using <strong>Supabase</strong>.</p>

          <h3 className="mt-6 font-semibold">1.2 Shop and Business Information</h3>
          <p>When you use Doukani to manage a shop, you may provide information such as:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Shop name and information</li>
              <li>Product names</li>
              <li>Product prices</li>
              <li>Product quantities and inventory information</li>
              <li>Sales and transaction records</li>
              <li>Other information you choose to enter into the App</li>
          </ul>

          <h3 className="mt-6 font-semibold">1.3 Information Associated With Shop Users</h3>
          <p>A shop may have multiple users. Doukani stores information necessary to associate authorized users with the appropriate shop and to allow those users to access the shop's data according to the permissions configured by the application.</p>
          <p>Users should only add information that they have the right to store and share.</p>

          <h3 className="mt-6 font-semibold">1.4 Reports and Business Information</h3>
          <p>Doukani processes shop data to provide business reports and summaries, including information that may help users understand:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Sales</li>
              <li>Revenue</li>
              <li>Expenses or money movements entered by the user</li>
              <li>Product performance</li>
              <li>Inventory</li>
              <li>Other business statistics and reports</li>
          </ul>
          <p className="mt-2">These reports are generated from information provided by users.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">2. Information Stored Locally</h2>
          <p className="mt-4">Doukani may store certain information locally on your device to improve performance and allow parts of the App to work efficiently.</p>
          <p>Local information may include cached application data and information necessary to maintain the App's functionality.</p>
          <p>Local storage may remain on your device until it is removed by the App, cleared by you, or the App is uninstalled, depending on the type of data.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">3. How We Use Your Information</h2>
          <p className="mt-4">We use the information collected through Doukani to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Create and authenticate user accounts</li>
              <li>Provide access to shops</li>
              <li>Manage products and inventory</li>
              <li>Record and manage sales and business information</li>
              <li>Synchronize data between authorized users of the same shop</li>
              <li>Generate reports and business statistics</li>
              <li>Maintain and improve the App</li>
              <li>Detect and prevent unauthorized access or misuse</li>
              <li>Maintain the security and reliability of our services</li>
              <li>Respond to support requests</li>
          </ul>
          <p className="mt-2">We do not sell your personal information.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">4. Data Storage and Supabase</h2>
          <p className="mt-4">Doukani uses <strong>Supabase</strong> to provide authentication and backend data storage.</p>
          <p>Information submitted through Doukani may therefore be transmitted to and stored on Supabase's infrastructure.</p>
          <p>Supabase may process information according to its own privacy practices.</p>
          <p>You can learn more about Supabase privacy practices here:</p>
          <p className="mt-2"><a href="https://supabase.com/privacy" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">https://supabase.com/privacy</a></p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">5. Sharing of Information</h2>
          <p className="mt-4">We do not sell or rent your personal information.</p>
          <p>Your information may be shared or processed by service providers that are necessary to operate Doukani, such as our authentication and database infrastructure provider.</p>
          <p>Information belonging to a shop may also be accessible to other authorized users who have been granted access to that shop through Doukani.</p>
          <p>We may disclose information when required by applicable law, regulation, legal process, or a valid governmental request.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">6. Data Security</h2>
          <p className="mt-4">We take reasonable technical and organizational measures to protect information stored and processed through Doukani.</p>
          <p>However, no method of electronic transmission or storage can be guaranteed to be completely secure.</p>
          <p>Users are responsible for protecting access to their devices and accounts and should not share authentication information with unauthorized persons.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">7. Data Retention</h2>
          <p className="mt-4">We retain account and shop information for as long as necessary to provide Doukani's services and maintain the associated account or shop.</p>
          <p>If you request deletion of your account and associated data, we will take reasonable steps to delete or anonymize applicable information, subject to legal or legitimate business requirements that may require certain information to be retained.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">8. Account and Data Deletion</h2>
          <p className="mt-4">You may request deletion of your Doukani account and associated personal information by contacting us using the contact information below.</p>
          <p>Because shop data may be shared among multiple authorized users, deletion of an individual account does not necessarily mean that all shop or business information will immediately be deleted.</p>
          <p>Requests concerning deletion of shop or business data may need to be made by an authorized shop owner or administrator.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">9. Children's Privacy</h2>
          <p className="mt-4">Doukani is intended for business and shop management purposes and is not directed toward children.</p>
          <p>We do not knowingly collect personal information from children in violation of applicable laws.</p>
          <p>If you believe that a child has provided personal information to us, please contact us so that we can take appropriate action.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">10. Permissions</h2>
          <p className="mt-4">Doukani only requests permissions that are necessary for the App's functionality.</p>
          <p>Doukani does <strong>not</strong> intentionally collect or track your precise location.</p>
          <p>Doukani does <strong>not</strong> use the device microphone to collect or record audio as part of its normal functionality.</p>
          <p>Doukani does not process payments or collect payment-card information through the App.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">11. Third-Party Services</h2>
          <p className="mt-4">Doukani uses third-party services necessary to provide its functionality.</p>
          <p>Currently, this includes:</p>
          <p className="mt-2"><strong>Supabase</strong><br/>Used for authentication and backend data storage.</p>
          <p className="mt-2">Supabase Privacy Policy:<br/><a href="https://supabase.com/privacy" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">https://supabase.com/privacy</a></p>
          <p className="mt-2">Third-party services may have their own privacy policies and terms. We encourage users to review them.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">12. International Data Processing</h2>
          <p className="mt-4">Because Doukani relies on third-party infrastructure, including Supabase, information may be processed or stored in countries other than the country where you live.</p>
          <p>By using Doukani, you acknowledge that your information may be processed in accordance with the applicable service infrastructure and applicable laws.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">13. Your Rights</h2>
          <p className="mt-4">Depending on your location and applicable law, you may have rights regarding your personal information, including the right to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Request information about how your data is processed</li>
              <li>Object to or restrict certain processing where applicable</li>
          </ul>
          <p className="mt-2">To exercise applicable rights, contact us using the information below.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">14. Changes to This Privacy Policy</h2>
          <p className="mt-4">We may update this Privacy Policy from time to time.</p>
          <p>When we make changes, we will update the <strong>"Last updated"</strong> date at the top of this page.</p>
          <p>We encourage you to review this Privacy Policy periodically.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">15. Contact Us</h2>
          <p className="mt-4">If you have questions about this Privacy Policy, your personal information, or data deletion, please contact us:</p>
          <div className="mt-4 space-y-2">
            <p><strong>App:</strong> Doukani (دكاني)</p>
            <p><strong>Email:</strong> <a href="mailto:abdelatif.nabgha06@gmail.com" className="text-brand-600 hover:underline">abdelatif.nabgha06@gmail.com</a></p>
            <p><strong>Website:</strong> <a href="https://abdlatif-nabgha.github.io/doukani/" className="text-brand-600 hover:underline">https://abdlatif-nabgha.github.io/doukani/</a></p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
