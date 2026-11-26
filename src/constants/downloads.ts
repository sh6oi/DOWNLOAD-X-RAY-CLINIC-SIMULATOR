export const DOWNLOAD_LINKS = {
  android:
    'https://download1654.mediafire.com/w6tdlotaru0glHfxILdnUn6yO1EkaUJP9tr0276eJAetE3TIUwf6Jh-0HntfSBeiHOuWYCrGRGWlPhUFbd55018xVMZT52cJG04Tum_auigLNhG965tP3jB9U0gErgcRIp59iHsuvKStEjTxClzxXdWSbr7vxPNWVenVWfxPYXu_MjcN/6cdkmo0qetjzg5s/X-RAY-CLINIC-SIMULATOR+%281%29.apk',
  ios: 'https://sh6oi.github.io/X-RAY-CLINIC-SIMULATOR/',
  windows: 'https://sh6oi.github.io/X-RAY-CLINIC-SIMULATOR/',
} as const;

export function getAndroidExternalBrowserUrl(): string {
  const isAndroid =
    typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);
  if (!isAndroid) {
    return DOWNLOAD_LINKS.android;
  }
  const hostAndPath = DOWNLOAD_LINKS.android.replace(/^https?:\/\//, '');
  const fallback = encodeURIComponent(DOWNLOAD_LINKS.android);
  return `intent://${hostAndPath}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${fallback};end`;
}

export const HERO_IMAGE_PATH = './src/assets/images/hero_xray_simulator_1795642841928.jpg';
export const CONSOLE_IMAGE_PATH = './src/assets/images/simulator_clinical_console_1795642842154.jpg';
export const ACADEMY_MARK_PATH = './src/assets/images/oneray_academy_mark_1795642842061.jpg';

export interface IosInstructionStep {
  number: string;
  text: string;
  hint: string;
  imageSrc: string;
  imageAlt: string;
}

export const IOS_SAFARI_INSTRUCTIONS: IosInstructionStep[] = [
  {
    number: '01',
    text: 'بعد فتح الرابط اضغط على ثلاث نقاط في أسفل متصفح سفاري.',
    hint: 'في شريط أدوات متصفح Safari السفلي',
    imageSrc: './assets/aistudio/image_fabb7c11.png',
    imageAlt: 'توضيح الضغط على الثلاث نقاط في أسفل متصفح سفاري',
  },
  {
    number: '02',
    text: 'اضغط على share أو مشاركة.',
    hint: 'أيقونة المربع مع السهم المتجه للأعلى',
    imageSrc: './assets/aistudio/image_190e9094.png',
    imageAlt: 'توضيح الضغط على خيار Share أو مشاركة في القائمة',
  },
  {
    number: '03',
    text: 'ابحث عن خيار الإضافة إلى الواجهة الرئيسية أو Add to Home Screen.',
    hint: 'لتشغيل المحاكي كتطبيق مستقل على الشاشة الرئيسية',
    imageSrc: './assets/aistudio/image_0c86d632.png',
    imageAlt: 'توضيح اختيار زر Add to Home Screen لإضافة التطبيق للشاشة الرئيسية',
  },
];

export interface SimulationCapability {
  index: string;
  title: string;
  description: string;
}

export const SIMULATION_CAPABILITIES: SimulationCapability[] = [
  {
    index: '01',
    title: 'ضبط عوامل التعريض الشعاعي',
    description:
      'التحكم الدقيق بقيم الفولتية (kVp) والتيار والزمن (mAs) بما يتناسب مع كل فحص شعاعي وحجم المريض.',
  },
  {
    index: '02',
    title: 'وضعيات التصوير السريرية',
    description:
      'تطبيق الوضعيات التشريحية الصحيحة وتوجيه أنبوبة الأشعة وتحديد مسافة المصدر عن المستقبل (SID).',
  },
  {
    index: '03',
    title: 'معاينة الصورة الإشعاعية',
    description:
      'رؤية النتيجة الشعاعية مباشرة بعد التعريض وتحليل جودة التباين والكثافة وتحديد الأخطاء التقنية.',
  },
  {
    index: '04',
    title: 'بيئة غرفة الأشعة التفاعلية',
    description:
      'محاكاة عملية شاملة تحاكي أجهزة التصوير الرقمي (DR) في الأقسام السريرية لتدريب الطلبة والممارسين.',
  },
];
