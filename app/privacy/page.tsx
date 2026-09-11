"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyPage() {
  const { locale } = useLanguage();

  return (
    <div id="top" className="min-h-screen bg-zinc-50 font-sans">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 sm:p-12 prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
          {locale === 'ar' ? (
            <>

          <h1 className="border-b-2 border-zinc-100 pb-4 text-3xl font-bold text-zinc-900">سياسة الخصوصية</h1>
          <p className="mt-6 text-zinc-600 font-medium">آخر تحديث: 14 أغسطس 2026</p>

          <p>توضح سياسة الخصوصية هذه كيف يقوم <strong>دكاني (Doukani)</strong> ("نحن" أو "الخاص بنا") بجمع واستخدام وتخزين وحماية المعلومات عند استخدامك لتطبيق دكاني للهواتف المحمولة ("التطبيق").</p>
          <p>باستخدامك لدكاني، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية هذه.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">1. المعلومات التي نجمعها</h2>
          
          <h3 className="mt-6 font-semibold">1.1 معلومات الحساب</h3>
          <p>يستخدم دكاني المصادقة عبر رقم الهاتف. عند إنشاء أو الوصول إلى حساب، قد نجمع:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>رقم هاتفك</li>
              <li>معلومات المصادقة المرتبطة بحسابك</li>
              <li>المعلومات اللازمة للحفاظ على حسابك والوصول إلى التطبيق</li>
          </ul>
          <p className="mt-2">يتم توفير المصادقة عبر رقم الهاتف باستخدام <strong>Supabase</strong>.</p>

          <h3 className="mt-6 font-semibold">1.2 معلومات المتجر والأعمال</h3>
          <p>عندما تستخدم دكاني لإدارة متجر، قد تقدم معلومات مثل:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>اسم المتجر ومعلوماته</li>
              <li>أسماء المنتجات</li>
              <li>أسعار المنتجات</li>
              <li>كميات المنتجات ومعلومات المخزون</li>
              <li>سجلات المبيعات والمعاملات</li>
              <li>أي معلومات أخرى تختار إدخالها في التطبيق</li>
          </ul>

          <h3 className="mt-6 font-semibold">1.3 المعلومات المرتبطة بمستخدمي المتجر</h3>
          <p>قد يكون للمتجر عدة مستخدمين. يقوم دكاني بتخزين المعلومات اللازمة لربط المستخدمين المصرح لهم بالمتجر المناسب وللسماح لهؤلاء المستخدمين بالوصول إلى بيانات المتجر وفقاً للصلاحيات التي تم تكوينها بواسطة التطبيق.</p>
          <p>يجب على المستخدمين إضافة المعلومات التي لديهم الحق في تخزينها ومشاركتها فقط.</p>

          <h3 className="mt-6 font-semibold">1.4 التقارير ومعلومات الأعمال</h3>
          <p>يقوم دكاني بمعالجة بيانات المتجر لتقديم تقارير أعمال وملخصات، بما في ذلك المعلومات التي قد تساعد المستخدمين على فهم:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>المبيعات</li>
              <li>الإيرادات</li>
              <li>المصروفات أو حركات الأموال التي يدخلها المستخدم</li>
              <li>أداء المنتجات</li>
              <li>المخزون</li>
              <li>الإحصائيات والتقارير التجارية الأخرى</li>
          </ul>
          <p className="mt-2">يتم إنشاء هذه التقارير من المعلومات التي يقدمها المستخدمون.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">2. المعلومات المخزنة محلياً</h2>
          <p className="mt-4">قد يقوم دكاني بتخزين بعض المعلومات محلياً على جهازك لتحسين الأداء والسماح لأجزاء من التطبيق بالعمل بكفاءة.</p>
          <p>قد تتضمن المعلومات المحلية بيانات التطبيق المخبأة والمعلومات اللازمة للحفاظ على وظائف التطبيق.</p>
          <p>قد يبقى التخزين المحلي على جهازك حتى تتم إزالته بواسطة التطبيق، أو مسحه بواسطتك، أو إزالة تثبيت التطبيق، اعتماداً على نوع البيانات.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">3. كيف نستخدم معلوماتك</h2>
          <p className="mt-4">نحن نستخدم المعلومات التي يتم جمعها من خلال دكاني من أجل:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>إنشاء ومصادقة حسابات المستخدمين</li>
              <li>توفير الوصول إلى المتاجر</li>
              <li>إدارة المنتجات والمخزون</li>
              <li>تسجيل وإدارة المبيعات ومعلومات الأعمال</li>
              <li>مزامنة البيانات بين المستخدمين المصرح لهم في نفس المتجر</li>
              <li>إنشاء التقارير وإحصائيات الأعمال</li>
              <li>صيانة التطبيق وتحسينه</li>
              <li>اكتشاف ومنع الوصول غير المصرح به أو سوء الاستخدام</li>
              <li>الحفاظ على أمان وموثوقية خدماتنا</li>
              <li>الرد على طلبات الدعم</li>
          </ul>
          <p className="mt-2">نحن لا نبيع معلوماتك الشخصية.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">4. تخزين البيانات و Supabase</h2>
          <p className="mt-4">يستخدم دكاني <strong>Supabase</strong> لتوفير المصادقة وتخزين البيانات الخلفية.</p>
          <p>وبالتالي قد يتم نقل المعلومات المقدمة من خلال دكاني وتخزينها على البنية التحتية لـ Supabase.</p>
          <p>قد تقوم Supabase بمعالجة المعلومات وفقاً لممارسات الخصوصية الخاصة بها.</p>
          <p>يمكنك معرفة المزيد حول ممارسات الخصوصية لـ Supabase هنا:</p>
          <p className="mt-2"><a href="https://supabase.com/privacy" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">https://supabase.com/privacy</a></p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">5. مشاركة المعلومات</h2>
          <p className="mt-4">نحن لا نبيع أو نؤجر معلوماتك الشخصية.</p>
          <p>قد تتم مشاركة معلوماتك أو معالجتها من قبل مزودي الخدمة اللازمين لتشغيل دكاني، مثل مزود المصادقة والبنية التحتية لقواعد البيانات لدينا.</p>
          <p>يمكن أيضاً الوصول إلى المعلومات الخاصة بالمتجر من قبل مستخدمين آخرين مصرح لهم تم منحهم حق الوصول إلى هذا المتجر من خلال دكاني.</p>
          <p>قد نكشف عن المعلومات عندما يقتضي ذلك القانون المعمول به، أو التنظيم، أو الإجراءات القانونية، أو طلب حكومي ساري.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">6. أمن البيانات</h2>
          <p className="mt-4">نحن نتخذ تدابير فنية وتنظيمية معقولة لحماية المعلومات المخزنة والمعالجة من خلال دكاني.</p>
          <p>ومع ذلك، لا يمكن ضمان أمان أي طريقة للإرسال أو التخزين الإلكتروني تماماً.</p>
          <p>يتحمل المستخدمون مسؤولية حماية الوصول إلى أجهزتهم وحساباتهم ويجب ألا يشاركوا معلومات المصادقة مع أشخاص غير مصرح لهم.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">7. الاحتفاظ بالبيانات</h2>
          <p className="mt-4">نحتفظ بمعلومات الحساب والمتجر طالما كان ذلك ضرورياً لتقديم خدمات دكاني والحفاظ على الحساب أو المتجر المرتبط.</p>
          <p>إذا طلبت حذف حسابك والبيانات المرتبطة به، فسنتخذ خطوات معقولة لحذف أو إخفاء هوية المعلومات المعمول بها، مع مراعاة المتطلبات القانونية أو التجارية المشروعة التي قد تتطلب الاحتفاظ ببعض المعلومات.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">8. حذف الحساب والبيانات</h2>
          <p className="mt-4">يمكنك طلب حذف حسابك في دكاني والمعلومات الشخصية المرتبطة به عن طريق الاتصال بنا باستخدام معلومات الاتصال أدناه.</p>
          <p>نظراً لأن بيانات المتجر قد يتم مشاركتها بين عدة مستخدمين مصرح لهم، فإن حذف حساب فردي لا يعني بالضرورة أنه سيتم حذف جميع معلومات المتجر أو الأعمال على الفور.</p>
          <p>قد تحتاج الطلبات المتعلقة بحذف بيانات المتجر أو الأعمال إلى تقديمها من قبل مالك أو مسؤول المتجر المصرح له.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">9. خصوصية الأطفال</h2>
          <p className="mt-4">دكاني مخصص لأغراض إدارة الأعمال والمتاجر وليس موجهاً للأطفال.</p>
          <p>نحن لا نجمع عمداً معلومات شخصية من الأطفال بالمخالفة للقوانين المعمول بها.</p>
          <p>إذا كنت تعتقد أن طفلاً قد قدم معلومات شخصية إلينا، يرجى الاتصال بنا حتى نتمكن من اتخاذ الإجراء المناسب.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">10. الأذونات</h2>
          <p className="mt-4">يطلب دكاني فقط الأذونات الضرورية لوظائف التطبيق.</p>
          <p>دكاني <strong>لا</strong> يجمع أو يتتبع موقعك الدقيق عمداً.</p>
          <p>دكاني <strong>لا</strong> يستخدم ميكروفون الجهاز لجمع أو تسجيل الصوت كجزء من وظائفه العادية.</p>
          <p>لا يقوم دكاني بمعالجة المدفوعات أو جمع معلومات بطاقة الدفع من خلال التطبيق.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">11. خدمات الطرف الثالث</h2>
          <p className="mt-4">يستخدم دكاني خدمات الطرف الثالث الضرورية لتوفير وظائفه.</p>
          <p>يشمل ذلك حالياً:</p>
          <p className="mt-2"><strong>Supabase</strong><br/>يستخدم للمصادقة وتخزين البيانات الخلفية.</p>
          <p className="mt-2">سياسة خصوصية Supabase:<br/><a href="https://supabase.com/privacy" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">https://supabase.com/privacy</a></p>
          <p className="mt-2">قد يكون لخدمات الطرف الثالث سياسات الخصوصية والشروط الخاصة بها. نشجع المستخدمين على مراجعتها.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">12. المعالجة الدولية للبيانات</h2>
          <p className="mt-4">نظراً لأن دكاني يعتمد على بنية تحتية تابعة لجهة خارجية، بما في ذلك Supabase، فقد تتم معالجة المعلومات أو تخزينها في دول غير الدولة التي تعيش فيها.</p>
          <p>باستخدامك لدكاني، فإنك تقر بأنه قد تتم معالجة معلوماتك وفقاً للبنية التحتية للخدمة المعمول بها والقوانين السارية.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">13. حقوقك</h2>
          <p className="mt-4">اعتماداً على موقعك والقانون المعمول به، قد يكون لك حقوق تتعلق بمعلوماتك الشخصية، بما في ذلك الحق في:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>طلب الوصول إلى معلوماتك الشخصية</li>
              <li>طلب تصحيح المعلومات غير الدقيقة</li>
              <li>طلب حذف معلوماتك الشخصية</li>
              <li>طلب معلومات حول كيفية معالجة بياناتك</li>
              <li>الاعتراض أو تقييد معالجة معينة حيثما ينطبق ذلك</li>
          </ul>
          <p className="mt-2">لممارسة الحقوق المعمول بها، اتصل بنا باستخدام المعلومات أدناه.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">14. تغييرات في سياسة الخصوصية</h2>
          <p className="mt-4">قد نقوم بتحديث سياسة الخصوصية هذه من حين لآخر.</p>
          <p>عندما نجري تغييرات، سنقوم بتحديث تاريخ <strong>"آخر تحديث"</strong> في أعلى هذه الصفحة.</p>
          <p>نشجعك على مراجعة سياسة الخصوصية هذه بانتظام.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">15. اتصل بنا</h2>
          <p className="mt-4">إذا كانت لديك أسئلة حول سياسة الخصوصية هذه، أو معلوماتك الشخصية، أو حذف البيانات، يرجى الاتصال بنا:</p>
          <div className="mt-4 space-y-2">
            <p><strong>التطبيق:</strong> دكاني (Doukani)</p>
            <p><strong>البريد الإلكتروني:</strong> <a href="mailto:abdelatif.nabgha06@gmail.com" className="text-brand-600 hover:underline">abdelatif.nabgha06@gmail.com</a></p>
            <p><strong>الموقع الإلكتروني:</strong> <a href="https://abdlatif-nabgha.github.io/doukani/" className="text-brand-600 hover:underline">https://abdlatif-nabgha.github.io/doukani/</a></p>
          </div>

            </>
          ) : (
            <>

          <h1 className="border-b-2 border-zinc-100 pb-4 text-3xl font-bold text-zinc-900">Politique de Confidentialité</h1>
          <p className="mt-6 text-zinc-600 font-medium">Dernière mise à jour : 14 Août 2026</p>

          <p>Cette Politique de Confidentialité explique comment <strong>Doukani (دكاني)</strong> ("Doukani", "nous", ou "notre") collecte, utilise, stocke et protège les informations lorsque vous utilisez l'application mobile Doukani (l'"Application").</p>
          <p>En utilisant Doukani, vous acceptez les pratiques décrites dans cette Politique de Confidentialité.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">1. Les Informations Que Nous Collectons</h2>
          
          <h3 className="mt-6 font-semibold">1.1 Informations sur le Compte</h3>
          <p>Doukani utilise l'authentification par numéro de téléphone. Lors de la création ou de l'accès à un compte, nous pouvons collecter :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Votre numéro de téléphone</li>
              <li>Les informations d'authentification associées à votre compte</li>
              <li>Les informations nécessaires au maintien de votre compte et à l'accès à l'Application</li>
          </ul>
          <p className="mt-2">L'authentification par numéro de téléphone est fournie par <strong>Supabase</strong>.</p>

          <h3 className="mt-6 font-semibold">1.2 Informations sur le Magasin et l'Entreprise</h3>
          <p>Lorsque vous utilisez Doukani pour gérer un magasin, vous pouvez fournir des informations telles que :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nom et informations du magasin</li>
              <li>Noms des produits</li>
              <li>Prix des produits</li>
              <li>Quantités de produits et informations sur les stocks</li>
              <li>Enregistrements des ventes et des transactions</li>
              <li>Autres informations que vous choisissez d'entrer dans l'Application</li>
          </ul>

          <h3 className="mt-6 font-semibold">1.3 Informations Associées Aux Utilisateurs du Magasin</h3>
          <p>Un magasin peut avoir plusieurs utilisateurs. Doukani stocke les informations nécessaires pour associer les utilisateurs autorisés au magasin approprié et permettre à ces utilisateurs d'accéder aux données du magasin en fonction des autorisations configurées.</p>
          <p>Les utilisateurs ne doivent ajouter que des informations qu'ils ont le droit de stocker et de partager.</p>

          <h3 className="mt-6 font-semibold">1.4 Rapports et Informations Commerciales</h3>
          <p>Doukani traite les données du magasin pour fournir des rapports et des résumés commerciaux, y compris des informations pouvant aider les utilisateurs à comprendre :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Les ventes</li>
              <li>Les revenus</li>
              <li>Les dépenses ou mouvements d'argent entrés par l'utilisateur</li>
              <li>Les performances des produits</li>
              <li>L'inventaire</li>
              <li>D'autres statistiques et rapports commerciaux</li>
          </ul>
          <p className="mt-2">Ces rapports sont générés à partir des informations fournies par les utilisateurs.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">2. Informations Stockées Localement</h2>
          <p className="mt-4">Doukani peut stocker certaines informations localement sur votre appareil pour améliorer les performances et permettre le bon fonctionnement de certaines parties de l'Application.</p>
          <p>Les informations locales peuvent inclure des données d'application mises en cache et des informations nécessaires pour maintenir les fonctionnalités de l'Application.</p>
          <p>Le stockage local peut rester sur votre appareil jusqu'à ce qu'il soit supprimé par l'Application, effacé par vous, ou que l'Application soit désinstallée, selon le type de données.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">3. Comment Nous Utilisons Vos Informations</h2>
          <p className="mt-4">Nous utilisons les informations collectées via Doukani pour :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Créer et authentifier les comptes d'utilisateurs</li>
              <li>Fournir l'accès aux magasins</li>
              <li>Gérer les produits et les stocks</li>
              <li>Enregistrer et gérer les ventes et les informations commerciales</li>
              <li>Synchroniser les données entre les utilisateurs autorisés d'un même magasin</li>
              <li>Générer des rapports et des statistiques commerciales</li>
              <li>Maintenir et améliorer l'Application</li>
              <li>Détecter et prévenir les accès non autorisés ou abusifs</li>
              <li>Maintenir la sécurité et la fiabilité de nos services</li>
              <li>Répondre aux demandes d'assistance</li>
          </ul>
          <p className="mt-2">Nous ne vendons pas vos informations personnelles.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">4. Stockage des Données et Supabase</h2>
          <p className="mt-4">Doukani utilise <strong>Supabase</strong> pour fournir l'authentification et le stockage des données backend.</p>
          <p>Les informations soumises via Doukani peuvent donc être transmises et stockées sur l'infrastructure de Supabase.</p>
          <p>Supabase peut traiter les informations conformément à ses propres pratiques de confidentialité.</p>
          <p>Vous pouvez en savoir plus sur les pratiques de confidentialité de Supabase ici :</p>
          <p className="mt-2"><a href="https://supabase.com/privacy" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">https://supabase.com/privacy</a></p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">5. Partage des Informations</h2>
          <p className="mt-4">Nous ne vendons ni ne louons vos informations personnelles.</p>
          <p>Vos informations peuvent être partagées ou traitées par les fournisseurs de services nécessaires au fonctionnement de Doukani, tels que notre fournisseur d'authentification et d'infrastructure de base de données.</p>
          <p>Les informations appartenant à un magasin peuvent également être accessibles aux autres utilisateurs autorisés ayant obtenu l'accès à ce magasin via Doukani.</p>
          <p>Nous pouvons divulguer des informations lorsque cela est requis par la loi, la réglementation, une procédure légale ou une demande gouvernementale valide.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">6. Sécurité des Données</h2>
          <p className="mt-4">Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger les informations stockées et traitées via Doukani.</p>
          <p>Cependant, aucune méthode de transmission ou de stockage électronique ne peut être garantie comme étant totalement sécurisée.</p>
          <p>Les utilisateurs sont responsables de la protection de l'accès à leurs appareils et comptes et ne doivent pas partager d'informations d'authentification avec des personnes non autorisées.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">7. Conservation des Données</h2>
          <p className="mt-4">Nous conservons les informations du compte et du magasin aussi longtemps que nécessaire pour fournir les services de Doukani et maintenir le compte ou le magasin associé.</p>
          <p>Si vous demandez la suppression de votre compte et des données associées, nous prendrons des mesures raisonnables pour supprimer ou anonymiser les informations applicables, sous réserve d'exigences légales ou commerciales légitimes pouvant exiger la conservation de certaines informations.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">8. Suppression du Compte et des Données</h2>
          <p className="mt-4">Vous pouvez demander la suppression de votre compte Doukani et des informations personnelles associées en nous contactant via les coordonnées ci-dessous.</p>
          <p>Étant donné que les données du magasin peuvent être partagées entre plusieurs utilisateurs autorisés, la suppression d'un compte individuel ne signifie pas nécessairement que toutes les informations du magasin ou de l'entreprise seront immédiatement supprimées.</p>
          <p>Les demandes concernant la suppression des données du magasin ou de l'entreprise devront peut-être être effectuées par un propriétaire ou un administrateur autorisé du magasin.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">9. Confidentialité des Enfants</h2>
          <p className="mt-4">Doukani est destiné à la gestion commerciale et n'est pas dirigé vers les enfants.</p>
          <p>Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants en violation des lois applicables.</p>
          <p>Si vous pensez qu'un enfant nous a fourni des informations personnelles, veuillez nous contacter afin que nous puissions prendre les mesures appropriées.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">10. Autorisations</h2>
          <p className="mt-4">Doukani ne demande que les autorisations nécessaires au fonctionnement de l'Application.</p>
          <p>Doukani ne collecte <strong>pas</strong> ni ne suit intentionnellement votre emplacement précis.</p>
          <p>Doukani n'utilise <strong>pas</strong> le microphone de l'appareil pour collecter ou enregistrer du son dans le cadre de son fonctionnement normal.</p>
          <p>Doukani ne traite pas les paiements et ne collecte pas d'informations de carte de paiement via l'Application.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">11. Services Tiers</h2>
          <p className="mt-4">Doukani utilise des services tiers nécessaires pour fournir ses fonctionnalités.</p>
          <p>Actuellement, cela inclut :</p>
          <p className="mt-2"><strong>Supabase</strong><br/>Utilisé pour l'authentification et le stockage des données backend.</p>
          <p className="mt-2">Politique de confidentialité de Supabase :<br/><a href="https://supabase.com/privacy" target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">https://supabase.com/privacy</a></p>
          <p className="mt-2">Les services tiers peuvent avoir leurs propres politiques de confidentialité et conditions. Nous encourageons les utilisateurs à les consulter.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">12. Traitement International des Données</h2>
          <p className="mt-4">Étant donné que Doukani s'appuie sur une infrastructure tierce, y compris Supabase, les informations peuvent être traitées ou stockées dans des pays autres que le pays où vous vivez.</p>
          <p>En utilisant Doukani, vous reconnaissez que vos informations peuvent être traitées conformément à l'infrastructure de service applicable et aux lois en vigueur.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">13. Vos Droits</h2>
          <p className="mt-4">Selon votre lieu de résidence et la loi applicable, vous pouvez avoir des droits concernant vos informations personnelles, y compris le droit de :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Demander l'accès à vos informations personnelles</li>
              <li>Demander la correction d'informations inexactes</li>
              <li>Demander la suppression de vos informations personnelles</li>
              <li>Demander des informations sur la façon dont vos données sont traitées</li>
              <li>Vous opposer à ou restreindre certains traitements, le cas échéant</li>
          </ul>
          <p className="mt-2">Pour exercer vos droits applicables, contactez-nous en utilisant les informations ci-dessous.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">14. Modifications de cette Politique de Confidentialité</h2>
          <p className="mt-4">Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre.</p>
          <p>Lorsque nous apportons des modifications, nous mettons à jour la date <strong>"Dernière mise à jour"</strong> en haut de cette page.</p>
          <p>Nous vous encourageons à consulter régulièrement cette Politique de Confidentialité.</p>

          <h2 className="mt-10 border-b border-zinc-100 pb-2 text-xl font-bold">15. Nous Contacter</h2>
          <p className="mt-4">Si vous avez des questions concernant cette Politique de Confidentialité, vos informations personnelles ou la suppression des données, veuillez nous contacter :</p>
          <div className="mt-4 space-y-2">
            <p><strong>Application :</strong> Doukani (دكاني)</p>
            <p><strong>E-mail :</strong> <a href="mailto:abdelatif.nabgha06@gmail.com" className="text-brand-600 hover:underline">abdelatif.nabgha06@gmail.com</a></p>
            <p><strong>Site web :</strong> <a href="https://abdlatif-nabgha.github.io/doukani/" className="text-brand-600 hover:underline">https://abdlatif-nabgha.github.io/doukani/</a></p>
          </div>

            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
