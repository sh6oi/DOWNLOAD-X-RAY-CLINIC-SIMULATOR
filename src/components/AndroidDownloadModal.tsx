import { useEffect, useRef, useState } from 'react';
import { Check, Copy, ExternalLink, X } from 'lucide-react';
import { DOWNLOAD_LINKS, getAndroidExternalBrowserUrl } from '../constants/downloads';
import { AndroidIcon } from './PlatformIcons';

interface AndroidDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AndroidDownloadModal({ isOpen, onClose }: AndroidDownloadModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const externalBrowserHref = getAndroidExternalBrowserUrl();
  const isAndroidDevice =
    typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(DOWNLOAD_LINKS.android);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="android-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl border border-slate-700/80 bg-[#111827] text-slate-100 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center pt-3 sm:hidden" aria-hidden="true">
          <div className="h-1.5 w-10 rounded-full bg-slate-600" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-5 pt-4 pb-4 sm:px-6 sm:pt-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400">
              <AndroidIcon className="h-6 w-6" />
            </div>
            <div>
              <h2 id="android-modal-title" className="text-lg font-bold text-white leading-snug">
                التحميل للأندرويد (Android)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                افتح رابط التحميل في متصفح خارجي لضمان اكتمال التنزيل
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="إغلاق نافذة التحميل"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-5 sm:px-6 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            إذا قمت بفتح الموقع من داخل تطبيق إنستغرام أو أي تطبيق آخر، اضغط على الزر أدناه لفتح
            الرابط في متصفح جوجل (Google Chrome) أو المتصفح الخارجي على جهازك:
          </p>

          <a
            href={externalBrowserHref}
            target={isAndroidDevice ? undefined : '_blank'}
            rel={isAndroidDevice ? undefined : 'noopener noreferrer'}
            className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-[0.99] px-5 py-3 text-sm sm:text-base font-bold text-slate-950 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <span>افتح رابط التحميل في متصفح خارجي</span>
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>

          {/* Displayed Download Link + Copy */}
          <div className="rounded-xl border border-slate-800 bg-[#0B111E] p-3.5 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-300">رابط التحميل المباشر:</span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex min-h-[32px] items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 px-3 py-1 text-xs font-medium text-slate-200 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-sky-400" />
                    <span>تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-slate-400" />
                    <span>نسخ الرابط</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={DOWNLOAD_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="block w-full break-all rounded-lg bg-[#060A12] border border-slate-800/90 p-2.5 text-left text-xs text-sky-400 hover:text-sky-300 underline underline-offset-2"
            >
              {DOWNLOAD_LINKS.android}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 sm:px-6 bg-[#0D1422] border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm px-5 py-2.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
