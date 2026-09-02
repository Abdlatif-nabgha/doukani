export type Locale = "ar" | "fr";

export const copy = {
  ar: {
    dir: "rtl" as const,
    lang: "ar",
    brand: "دكاني",
    brandEn: "Doukani",
    navSupport: "الدعم",
    heroTitle: "إدارة متجرك بسهولة وذكاء",
    heroSubtitle:
      "دكاني يساعد أصحاب المتاجر على تتبع المبيعات، إدارة المخزون، وتنسيق عمل الموظفين من تطبيق واحد بسيط وواضح.",
    ctaHint: "متوفر على أندرويد و iOS",
    playLabel: "حمّله من",
    playStore: "Google Play",
    appleLabel: "حمّله من",
    appleStore: "App Store",
    featuresEyebrow: "المميزات",
    featuresTitle: "كل ما يحتاجه متجرك، في مكان واحد",
    featuresSubtitle:
      "أدوات عملية لإدارة نقطة البيع والمخزون والفريق، بواجهة واضحة تناسب يوم العمل الحقيقي.",
    features: [
      {
        title: "إدارة المبيعات",
        description:
          "سجّل عمليات البيع بسرعة، تابع الإيرادات اليومية، واحتفظ بسجل واضح لكل معاملة.",
      },
      {
        title: "إدارة المخزون",
        description:
          "اعرف الكميات المتبقية لحظة بلحظة، وتجنّب النفاد أو التكدس دون جداول معقدة.",
      },
      {
        title: "تقارير وإحصائيات",
        description:
          "اطّلع على أداء المنتجات والمبيعات بتقارير بسيطة تساعدك على اتخاذ قرارات أفضل.",
      },
      {
        title: "إدارة المستخدمين والموظفين",
        description:
          "أضف موظفيك بصلاحيات مناسبة، وتابع نشاط المتجر دون فقدان السيطرة على البيانات.",
      },
    ],
    footerRights: "© 2026 Doukani. All rights reserved.",
    footerSupport: "الدعم الفني",
    privacy: "سياسة الخصوصية",
    deleteAccount: "حذف الحساب",
    phones: ["37 48 32 48"],
  },
  fr: {
    dir: "ltr" as const,
    lang: "fr",
    brand: "Doukani",
    brandEn: "دكاني",
    navSupport: "Support",
    heroTitle: "Gérez votre magasin avec simplicité et intelligence",
    heroSubtitle:
      "Doukani aide les commerçants à suivre les ventes, gérer le stock et coordonner l’équipe depuis une seule application claire et efficace.",
    ctaHint: "Disponible sur Android et iOS",
    playLabel: "Télécharger sur",
    playStore: "Google Play",
    appleLabel: "Télécharger sur",
    appleStore: "App Store",
    featuresEyebrow: "Fonctionnalités",
    featuresTitle: "Tout ce dont votre magasin a besoin",
    featuresSubtitle:
      "Un POS mobile, un suivi d’inventaire et une gestion d’équipe pensés pour le quotidien en magasin.",
    features: [
      {
        title: "Gestion des ventes",
        description:
          "Enregistrez chaque vente rapidement, suivez le chiffre du jour et conservez un historique clair.",
      },
      {
        title: "Gestion du stock",
        description:
          "Visualisez les quantités en temps réel et évitez les ruptures ou les surplus inutiles.",
      },
      {
        title: "Rapports et statistiques",
        description:
          "Comprenez la performance des produits et des ventes grâce à des rapports simples et actionnables.",
      },
      {
        title: "Gestion des employés",
        description:
          "Ajoutez vos collaborateurs avec les bons accès et gardez le contrôle sur les données du magasin.",
      },
    ],
    footerRights: "© 2026 Doukani. All rights reserved.",
    footerSupport: "Support",
    privacy: "Politique de confidentialité",
    deleteAccount: "Supprimer le compte",
    phones: ["37 48 32 48", "20 59 18 77"],
  },
};

export const STORE_LINKS = {
  play: "https://github.com/Abdlatif-nabgha/doukani/releases/download/v1.0.0/doukani.v2.3.1.apk",
  apple: "https://apps.apple.com/us/app/doukani-app/id6806292293",
};
