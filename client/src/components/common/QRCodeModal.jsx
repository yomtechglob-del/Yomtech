import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, X, Copy, Check, Download, ExternalLink, Share2, Sparkles, ShieldCheck } from 'lucide-react';

export const QRCodeModal = ({ isOpen, onClose, title = 'Yomtech Global Enterprise Platform', url = 'https://yomtechglobal.org', category = 'yomtechglobal.org' }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  let targetUrl = url || 'https://yomtechglobal.org';
  if (!targetUrl.startsWith('http')) {
    targetUrl = `https://yomtechglobal.org${targetUrl.startsWith('/') ? '' : '/'}${targetUrl}`;
  }

  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&color=0077B6&bgcolor=FFFFFF&margin=12&data=${encodeURIComponent(targetUrl)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(qrApiUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `yomtech-qr-${(title || 'code').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      window.open(qrApiUrl, '_blank');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-white rounded-3xl border border-sky-200/90 shadow-2xl overflow-hidden p-6 sm:p-8 text-slate-800 font-sans"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-sky-100 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-100/80 border border-sky-200 text-[#0077B6] flex items-center justify-center shadow-sm">
                <QrCode size={20} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0077B6] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                  {category}
                </span>
                <h3 className="text-base font-extrabold text-slate-800 line-clamp-1 mt-0.5">
                  {title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* QR Code Container Card */}
          <div className="flex flex-col items-center justify-center my-2 p-6 rounded-2xl bg-gradient-to-b from-sky-50/60 via-white to-sky-50/40 border border-sky-100 shadow-inner space-y-4">
            <div className="relative p-4 bg-white rounded-2xl border-2 border-sky-200 shadow-md group">
              <img
                src={qrApiUrl}
                alt={`QR Code for ${title}`}
                className="w-52 h-52 sm:w-60 sm:h-60 object-contain rounded-xl"
              />
              <div className="absolute inset-0 bg-[#0077B6]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none flex items-center justify-center">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0077B6] bg-white px-3 py-1 rounded-full shadow-md border border-sky-200">
                  YomTech Scan
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <ShieldCheck size={14} className="text-[#0077B6]" />
              <span>Scan with mobile camera to view live item</span>
            </div>
          </div>

          {/* Target URL Preview Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 my-4 flex items-center justify-between text-xs text-slate-600 font-mono">
            <span className="truncate pr-2 font-medium text-slate-700">{targetUrl}</span>
            <button
              onClick={handleCopyLink}
              className="shrink-0 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0077B6] hover:border-sky-300 transition-colors"
              title="Copy URL"
            >
              {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="w-full py-3 rounded-2xl bg-white hover:bg-sky-50 border-2 border-sky-200 text-[#0077B6] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Download size={15} />
              <span>Download PNG</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              {copied ? <Check size={15} /> : <Share2 size={15} />}
              <span>{copied ? 'Link Copied!' : 'Share QR Link'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
