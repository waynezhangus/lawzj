'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface WechatModalProps {
  buttonText: string;
  buttonClassName: string;
}

export default function WechatModal({ buttonText, buttonClassName }: WechatModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Allow closing the modal with the Escape key for better accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* The Trigger Button */}
      <button onClick={() => setIsOpen(true)} className={buttonClassName}>
        {buttonText}
      </button>

      {/* The Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-2 sm:p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)} // Clicking the overlay closes the modal
        >
          {/* The Modal Content Container */}
          <div
            className="relative w-full max-w-sm scale-100 transform rounded-3xl bg-white px-3 py-8 sm:p-8 text-center shadow-2xl transition-transform"
            onClick={e => e.stopPropagation()} // Clicking inside prevents closing
          >
            {/* Close Icon (X) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <h3 className="text-xl font-bold text-slate-900">关注微信公众号</h3>
            <p className="mt-2 text-sm tracking-tight text-slate-500 whitespace-nowrap">
              扫码关注卓建大连，获取最新法律资讯与在线咨询服务
            </p>

            <div className="mx-auto mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-3 shadow-inner">
              <div className="relative aspect-square w-full rounded-xl bg-white">
                <Image
                  src="/wechat-qr.jpg"
                  alt="WeChat Official Account QR Code"
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
