import { useEffect, useRef } from 'react';
import { ExternalLink, MoreHorizontal, PlusSquare, Share, X } from 'lucide-react';
import { DOWNLOAD_LINKS, IOS_SAFARI_INSTRUCTIONS } from '../constants/downloads';
import { AppleIcon } from './PlatformIcons';
import { ResilientImage } from './ResilientImage';

interface IosInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEP_ICONS = [MoreHorizontal, Share, PlusSquare] as const;

export function IosInstructionsModal({ isOpen, onClose }: IosInstructionsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-xl rounded-t-3xl sm:rounded-2xl border border-slate-700/80 bg-[#111827] text-slate-100 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile bottom-sheet drag indicator */}
        <div className="flex justify-center pt-3 sm:hidden" aria-hidden="true">
          <div className="h-1.5 w-10 rounded-full bg-slate-600" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-5 pt-4 pb-4 sm:px-6 sm:pt-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400">
              <AppleIcon className="h-5 w-5" />
            </div>
            <div>
              <h2 id="ios-modal-title" className="text-lg font-bold text-white leading-snug">
                تعليمات التثبيت للآيفون (iPhone)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                اتبع هذه الخطوات في متصفح سفاري قبل المتابعة
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="إغلاق نافذة التعليمات"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Instructions List with Visual Screenshots */}
        <div className="px-5 py-5 sm:px-6 space-y-4 max-h-[68vh] overflow-y-auto">
          <p className="text-sm text-slate-300 leading-relaxed">
            عند فتح رابط المحاكي على أجهزة iPhone عبر متصفح سفاري، قم بتنفيذ الخطوات التالية لتثبيته على شاشتك الرئيسية:
          </p>

          <ol className="space-y-4">
            {IOS_SAFARI_INSTRUCTIONS.map((step, index) => {
              const Icon = STEP_ICONS[index] ?? Share;
              return (
                <li
                  key={step.number}
                  className="rounded-xl border border-slate-800 bg-[#0B111E] p-3.5 sm:p-4 space-y-3"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 border border-sky-500/25 text-sky-400 font-semibold text-sm tabular-nums">
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-[15px] font-semibold text-slate-100 leading-relaxed">
                        {step.text}
                      </p>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
                        <Icon className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        <span>{step.hint}</span>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg border border-slate-800/90 bg-[#060A12] p-2">
                    <ResilientImage
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      fallbackTitle={step.text}
                      className="mx-auto w-full max-h-60 object-contain rounded"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Action Footer */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 bg-[#0D1422] border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={DOWNLOAD_LINKS.ios}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-[0.99] text-slate-950 font-bold text-sm px-5 py-3 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 whitespace-nowrap"
          >
            <span>متابعة وفتح رابط التحميل للآيفون</span>
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] inline-flex items-center justify-center rounded-xl border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm px-5 py-2.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 whitespace-nowrap"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
