import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function DeleteAccountPage() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 font-sans">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 sm:p-12 prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
          <h1 className="border-b-2 border-zinc-100 pb-4 text-3xl font-bold text-zinc-900 text-center">حذف حساب دكاني</h1>

          <p className="mt-6">يمكن لمستخدمي تطبيق دكاني طلب حذف حسابهم والبيانات المرتبطة به.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">كيفية حذف الحساب:</h2>
          <ol className="list-decimal pr-5 mt-4 space-y-2">
              <li>افتح تطبيق دكاني.</li>
              <li>انتقل إلى <strong>الإعدادات</strong>.</li>
              <li>اختر <strong>حذف الحساب</strong>.</li>
              <li>اتبع التعليمات لتأكيد عملية الحذف.</li>
          </ol>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">ماذا يحدث لبياناتك؟</h2>
          <p className="mt-4">عند حذف الحساب، يتم حذف البيانات المرتبطة به، بما في ذلك معلومات المستخدم وبيانات المتجر والمنتجات والمبيعات والمخزون.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">سياسة الاحتفاظ بالبيانات:</h2>
          <p className="mt-4">لا يتم الاحتفاظ بالبيانات المحذوفة، باستثناء البيانات التي يتطلب القانون الاحتفاظ بها لفترة محددة.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">المساعدة والدعم:</h2>
          <p className="mt-4">للمساعدة في طلب حذف الحساب أو إذا واجهت أي مشكلة، يمكن التواصل معنا عبر البريد الإلكتروني التالي:</p>
          <p className="mt-2"><a href="mailto:abdelatif.nabgha06@gmail.com" className="text-brand-600 hover:underline">abdelatif.nabgha06@gmail.com</a></p>

        </div>
      </main>
      <Footer />
    </div>
  );
}
