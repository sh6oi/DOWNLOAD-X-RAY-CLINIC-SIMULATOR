import { useState } from 'react';
import {
  ArrowUpLeft,
  CheckCircle2,
  Download,
  ExternalLink,
  Info,
  Monitor,
  Smartphone,
} from 'lucide-react';
import { IosInstructionsModal } from './components/IosInstructionsModal';
import { AndroidIcon, AppleIcon, WindowsIcon } from './components/PlatformIcons';
import { ResilientImage } from './components/ResilientImage';
import {
  ACADEMY_MARK_PATH,
  CONSOLE_IMAGE_PATH,
  DOWNLOAD_LINKS,
  HERO_IMAGE_PATH,
  IOS_SAFARI_INSTRUCTIONS,
  SIMULATION_CAPABILITIES,
} from './constants/downloads';

type PlatformTab = 'android' | 'ios' | 'windows';

export default function App() {
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);
  const [activePlatformTab, setActivePlatformTab] = useState<PlatformTab>('android');

  return (
    <div className="min-h-screen flex flex-col bg-[#090E17] text-slate-100">
      {/* Top Navigation Bar — Strict 3-Zone Contract */}
      <header className="sticky top-0 z-40 h-16 border-b border-slate-800/80 bg-[#090E17]/90 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#top"
            className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md px-1"
          >
            أكاديمية ONERAY التعليمية
          </a>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav
            aria-label="التنقل الرئيسي"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300"
          >
            <a
              href="#downloads"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              التحميل
            </a>
            <a
              href="#overview"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              عن المحاكي
            </a>
            <a
              href="#capabilities"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              المهارات
            </a>
            <a
              href="#ios-guide"
              className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              دليل الآيفون
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center shrink-0">
            <a
              href="#downloads"
              className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-sky-500 hover:bg-sky-400 active:scale-[0.98] px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              حمل اللعبة الآن
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero & Three-Platform Download Interface */}
        <section
          id="downloads"
          className="relative border-b border-slate-800/70 bg-gradient-to-b from-[#0C1322] to-[#090E17]"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Primary Content & Download Actions */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="text-xs sm:text-sm font-medium text-sky-400 mb-3">
                  أكاديمية ONERAY التعليمية · التدريب السريري الرقمي
                </p>

                <h1
                  className="font-bold text-white tracking-tight leading-[1.2] mb-4"
                  style={{
                    fontSize: 'clamp(2.1rem, 4vw, 3.35rem)',
                    textWrap: 'balance',
                  }}
                >
                  محاكي تقني الأشعة
                </h1>

                <p className="text-sm font-semibold text-slate-400 mb-4 tracking-wide" dir="ltr">
                  X-Ray Clinic Simulator
                </p>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                  تجربة تعليمية وتدريبية متكاملة لمحاكاة التصوير الشعاعي الطبي، وضبط عوامل التعريض
                  الإشعاعي، وتطبيق وضعيات المريض داخل قسم الأشعة الرقمية.
                </p>

                {/* Three Required Download Buttons */}
                <div className="space-y-3" aria-label="خيارات تحميل اللعبة">
                  {/* 1. Download for Android */}
                  <a
                    href={DOWNLOAD_LINKS.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[64px] w-full items-center justify-between gap-4 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-[0.99] px-5 py-3.5 text-slate-950 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-950/15 text-slate-950">
                        <AndroidIcon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-base sm:text-lg font-bold leading-tight whitespace-nowrap truncate">
                          التحميل للأندرويد
                        </span>
                        <span className="block text-xs font-medium text-slate-900/80 mt-0.5 truncate">
                          تنزيل مباشر بصيغة APK · الهواتف والأجهزة اللوحية
                        </span>
                      </div>
                    </div>
                    <Download className="h-5 w-5 shrink-0 transition-transform duration-150 group-hover:translate-y-0.5" />
                  </a>

                  {/* 2. Download for iPhone (Opens Instructions Modal First) */}
                  <button
                    type="button"
                    onClick={() => setIsIosModalOpen(true)}
                    className="group flex min-h-[64px] w-full items-center justify-between gap-4 rounded-xl border border-slate-700/80 bg-[#111827] hover:bg-[#172136] hover:border-sky-500/50 active:scale-[0.99] px-5 py-3.5 text-right text-slate-100 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-white group-hover:border-sky-500/40 group-hover:text-sky-400 transition-colors">
                        <AppleIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-base sm:text-lg font-bold leading-tight whitespace-nowrap truncate">
                          التحميل للآيفون
                        </span>
                        <span className="block text-xs text-slate-400 mt-0.5 truncate">
                          تثبيت عبر متصفح سفاري · تظهر التعليمات قبل فتح الرابط
                        </span>
                      </div>
                    </div>
                    <Info className="h-5 w-5 shrink-0 text-sky-400 transition-transform duration-150 group-hover:scale-105" />
                  </button>

                  {/* 3. Download for Windows */}
                  <a
                    href={DOWNLOAD_LINKS.windows}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[64px] w-full items-center justify-between gap-4 rounded-xl border border-slate-700/80 bg-[#111827] hover:bg-[#172136] hover:border-sky-500/50 active:scale-[0.99] px-5 py-3.5 text-slate-100 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-sky-400 group-hover:border-sky-500/40 transition-colors">
                        <WindowsIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-base sm:text-lg font-bold leading-tight whitespace-nowrap truncate">
                          التحميل للويندوز
                        </span>
                        <span className="block text-xs text-slate-400 mt-0.5 truncate">
                          نسخة الحاسوب والويب المباشرة · تشغيل فوري على Windows
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-sky-400 transition-colors" />
                  </a>
                </div>

                {/* Unboxed Metadata Line */}
                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span>متوافق مع الهواتف والحواسيب</span>
                  <span aria-hidden="true">·</span>
                  <span>أكاديمية ONERAY التعليمية</span>
                  <span aria-hidden="true">·</span>
                  <span>تصميم التدريسي مجتبى كريم</span>
                </div>
              </div>

              {/* Hero Visual Showcase */}
              <div className="lg:col-span-6">
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[280px] lg:min-h-[460px] w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">
                  <ResilientImage
                    src={HERO_IMAGE_PATH}
                    alt="غرفة التصوير الشعاعي الرقمي في محاكي تقني الأشعة"
                    fallbackTitle="غرفة الأشعة الرقمية — محاكي تقني الأشعة"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#090E17]/90 via-[#090E17]/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-medium text-sky-300 mb-1">
                      بيئة المحاكاة السريرية
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      محاكاة واقعية لجهاز الأشعة السينية ومنصة التحكم الرقمية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview & Interactive Platform Switcher */}
        <section id="overview" className="border-b border-slate-800/70 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Clinical Console Visual */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <ResilientImage
                      src={CONSOLE_IMAGE_PATH}
                      alt="منصة التحكم وضبط عوامل التعريض في محاكي تقني الأشعة"
                      fallbackTitle="لوحة التحكم الشعاعية"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="border-t border-slate-800 px-5 py-4 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-slate-200">
                      لوحة التحكم وعرض الصورة الشعاعية
                    </span>
                    <span className="text-xs text-slate-400">تدريب عملي تفاعلي</span>
                  </div>
                </div>
              </div>

              {/* Platform Guide Tabs */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <p className="text-xs font-medium text-sky-400 mb-2">دليل التشغيل حسب جهازك</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                  اختر منصتك وابدأ التدريب مباشرة
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  صُمم محاكي تقني الأشعة ليعمل بسلاسة على الهواتف الذكية والأجهزة اللوحية وأجهزة
                  الويندوز، لتتمكن من التدرب في أي وقت.
                </p>

                {/* Functional Segmented Tab Bar */}
                <div
                  role="tablist"
                  aria-label="تفاصيل المنصات المدعومة"
                  className="inline-flex w-full sm:w-auto items-center gap-1 rounded-xl border border-slate-800 bg-[#111827] p-1 mb-6"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePlatformTab === 'android'}
                    onClick={() => setActivePlatformTab('android')}
                    className={`flex-1 sm:flex-initial min-h-[40px] rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      activePlatformTab === 'android'
                        ? 'bg-sky-500 text-slate-950'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    الأندرويد
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePlatformTab === 'ios'}
                    onClick={() => setActivePlatformTab('ios')}
                    className={`flex-1 sm:flex-initial min-h-[40px] rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      activePlatformTab === 'ios'
                        ? 'bg-sky-500 text-slate-950'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    الآيفون
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePlatformTab === 'windows'}
                    onClick={() => setActivePlatformTab('windows')}
                    className={`flex-1 sm:flex-initial min-h-[40px] rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      activePlatformTab === 'windows'
                        ? 'bg-sky-500 text-slate-950'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    الويندوز
                  </button>
                </div>

                {/* Tab Panel Content */}
                <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5 sm:p-6">
                  {activePlatformTab === 'android' && (
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Smartphone className="h-5 w-5 text-sky-400 shrink-0" />
                        <h3 className="text-lg font-bold text-white">
                          التثبيت على أجهزة الأندرويد (Android)
                        </h3>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed mb-5">
                        قم بتنزيل ملف التطبيق المباشر بصيغة APK، ثم افتح الملف على هاتفك واسمح
                        بالتثبيت لتبدأ باستخدام المحاكي مباشرة دون الحاجة لمتصفح.
                      </p>
                      <a
                        href={DOWNLOAD_LINKS.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors whitespace-nowrap"
                      >
                        <Download className="h-4 w-4 shrink-0" />
                        <span>التحميل للأندرويد</span>
                      </a>
                    </div>
                  )}

                  {activePlatformTab === 'ios' && (
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <AppleIcon className="h-5 w-5 text-sky-400 shrink-0" />
                        <h3 className="text-lg font-bold text-white">
                          التشغيل والتثبيت على الآيفون (iPhone)
                        </h3>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed mb-5">
                        يعمل المحاكي على أجهزة الآيفون عبر متصفح سفاري، ويمكنك إضافته إلى الشاشة
                        الرئيسية ليعمل كتطبيق مستقل بملء الشاشة.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsIosModalOpen(true)}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors whitespace-nowrap"
                      >
                        <Info className="h-4 w-4 shrink-0" />
                        <span>عرض التعليمات وفتح رابط الآيفون</span>
                      </button>
                    </div>
                  )}

                  {activePlatformTab === 'windows' && (
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Monitor className="h-5 w-5 text-sky-400 shrink-0" />
                        <h3 className="text-lg font-bold text-white">
                          التشغيل على أجهزة الويندوز (Windows)
                        </h3>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed mb-5">
                        افتح رابط المحاكي مباشرة من متصفحك على نظام ويندوز لتجربة التحكم الكامل
                        بالفأرة ولوحة المفاتيح على شاشة الحاسوب الكبيرة.
                      </p>
                      <a
                        href={DOWNLOAD_LINKS.windows}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors whitespace-nowrap"
                      >
                        <ExternalLink className="h-4 w-4 shrink-0" />
                        <span>التحميل للويندوز</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Simulation Capabilities */}
        <section id="capabilities" className="border-b border-slate-800/70 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-medium text-sky-400 mb-2">ماذا يقدم المحاكي</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                محاور التدريب داخل محاكي تقني الأشعة
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                بُني المحاكي ليربط بين الجانب النظري والتطبيق العملي لطلبة تقنيات الأشعة والتصوير
                الطبي.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {SIMULATION_CAPABILITIES.map((item) => (
                <div
                  key={item.index}
                  className="rounded-2xl border border-slate-800 bg-[#111827] p-6"
                >
                  <div className="flex items-baseline gap-3 mb-2.5">
                    <span className="text-sm font-bold text-sky-400 tabular-nums">
                      {item.index}.
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated iPhone Safari Guide Section */}
        <section id="ios-guide" className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
                <div>
                  <p className="text-xs font-medium text-sky-400 mb-2">
                    تعليمات خاصة بمستخدمي الآيفون
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    خطوات تثبيت اللعبة على متصفح سفاري
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsIosModalOpen(true)}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-[0.98] px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <AppleIcon className="h-4 w-4 shrink-0" />
                  <span>التحميل للآيفون</span>
                  <ArrowUpLeft className="h-4 w-4 shrink-0" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {IOS_SAFARI_INSTRUCTIONS.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-xl border border-slate-800 bg-[#090E17] p-5 flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base font-bold text-sky-400 tabular-nums">
                          {step.number}.
                        </span>
                        <CheckCircle2 className="h-4 w-4 text-slate-500" aria-hidden="true" />
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">
                        {step.text}
                      </p>
                      <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#060A12] p-2">
                        <ResilientImage
                          src={step.imageSrc}
                          alt={step.imageAlt}
                          fallbackTitle={step.text}
                          className="mx-auto w-full h-48 object-contain rounded"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-slate-400">{step.hint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Required Attribution */}
      <footer className="border-t border-slate-800/80 bg-[#070B12]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/70">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-[#111827]">
                <ResilientImage
                  src={ACADEMY_MARK_PATH}
                  alt="شعار أكاديمية ONERAY التعليمية"
                  fallbackTitle="ONERAY"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-base font-bold text-white">أكاديمية ONERAY التعليمية</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  محاكي تقني الأشعة · X-Ray Clinic Simulator
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <a
                href={DOWNLOAD_LINKS.android}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors whitespace-nowrap"
              >
                التحميل للأندرويد
              </a>
              <span className="text-slate-700" aria-hidden="true">
                ·
              </span>
              <button
                type="button"
                onClick={() => setIsIosModalOpen(true)}
                className="hover:text-sky-400 transition-colors whitespace-nowrap"
              >
                التحميل للآيفون
              </button>
              <span className="text-slate-700" aria-hidden="true">
                ·
              </span>
              <a
                href={DOWNLOAD_LINKS.windows}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors whitespace-nowrap"
              >
                التحميل للويندوز
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
            <p className="text-sm sm:text-base font-semibold text-slate-100">
              تم تصميم اللعبة من قبل التدريسي مجتبى كريم
            </p>
            <p className="text-xs text-slate-400">
              أكاديمية ONERAY التعليمية · جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>

      {/* Pre-link iPhone Instructions Modal */}
      <IosInstructionsModal
        isOpen={isIosModalOpen}
        onClose={() => setIsIosModalOpen(false)}
      />
    </div>
  );
}
