export enum LOCALES {
  ENGLISH = 'en',
  RUSSIAN = 'ru', 
  UKRAINIAN = 'uk',
}

export interface HeaderLocaleContent {
  logo: string;
  subtitle: string;
  language: string;
  contactUs: string;
}

export interface HeroLocaleContent {
  title: string;
  subtitle: string;
  cta: string;
}

export interface ServiceCardContent {
  title: string;
  description: string;
  price: string;
  button: string;
}

export interface ServicesLocaleContent {
  cards: {
    onePageWebsite: ServiceCardContent;
    onlineStore: ServiceCardContent;
    portfolioSite: ServiceCardContent;
    customProgram: ServiceCardContent;
    landingPage: ServiceCardContent;
    customWebsite: ServiceCardContent;
  };
  pricePrefix: string;
}

export interface FeatureContent {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsLocaleContent {
  title: string;
  features: {
    skilledTeam: FeatureContent;
    tailoredSolutions: FeatureContent;
    realWorldExperience: FeatureContent;
    alwaysEvolving: FeatureContent;
    transparentProcess: FeatureContent;
    smartTechnology: FeatureContent;
  };
}

export interface OurApproachLocaleContent {
  title: string;
  subtitle: string;
  steps: {
    websiteCreation: FeatureContent;
    seoOptimization: FeatureContent;
    promotionSetup: FeatureContent;
    salesGrowth: FeatureContent;
    technicalSupport: FeatureContent;
    analyticsReporting: FeatureContent;
  };
}

export interface OurStackLocaleContent {
  title: string;
  subtitle: string;
  portfolio: {
    title: string;
  };
}

export interface DiscussLocaleContent {
  title: string;
  subtitle: string;
  form: {
    namePlaceholder: string;
    phonePlaceholder: string;
    commentPlaceholder: string;
    additionalServices: string;
    servicesSelected: string;
    submitButton: string;
    countrySearchPlaceholder: string;
    phoneError: string;
    formError: string;
    phoneOnlyNumbers: string;
  };
  services: {
    webDesign: string;
    development: string;
    seoOptimization: string;
    digitalMarketing: string;
    technicalSupport: string;
  };
  alerts: {
    success: string;
    error: string;
  };
}

export interface RoadmapLocaleContent {
  mainTitle: string;
  subTitle: string;
  description: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
  consultation: {
    qualityGuarantee: string;
    workForResults: string;
    teamOfExperts: string;
    yourSuccess: string;
  };
}

export interface OrderButtonLocaleContent {
  signUpConsultation: string;
}

export interface ContactModalLocaleContent {
  title: {
    mainText: string;
    subText: string;
  };
  form: {
    namePlaceholder: string;
    phonePlaceholder: string;
    commentPlaceholder: string;
    additionalServices: string;
    countrySearchPlaceholder: string;
    phoneOnlyNumbers: string;
    sending: string;
    send: string;
  };
  services: {
    seoOptimization: string;
    webDesign: string;
    websiteDevelopment: string;
    digitalMarketing: string;
    consultations: string;
  };
  messages: {
    successSent: string;
    errorOccurred: string;
    serverError: string;
  };
  telegram: {
    orChooseMessenger: string;
    telegramButton: string;
  };
}

export interface LocaleContent {
  header: HeaderLocaleContent;
  hero: HeroLocaleContent;
  services: ServicesLocaleContent;
  whyChooseUs: WhyChooseUsLocaleContent;
  ourApproach: OurApproachLocaleContent;
  ourStack: OurStackLocaleContent;
  discuss: DiscussLocaleContent;
  roadmap: RoadmapLocaleContent;
  orderButton: OrderButtonLocaleContent;
  contactModal: ContactModalLocaleContent;
}

// Функция для получения локализации из локальных файлов
export const getLocaleContent = async (locale: LOCALES): Promise<LocaleContent | null> => {
  try {
    // Импортируем JSON файлы динамически
    const localeData = await import(`./locales/${locale}.json`);
    return localeData.default;
  } catch (error) {
    console.error('Error loading localization data:', error);
    return null; 
  }
};
