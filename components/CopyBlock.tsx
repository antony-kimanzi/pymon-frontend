"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface copyBlock {
  text: string;
}
export default function CopyBlock({ text }: copyBlock) {
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <div className="flex flex-row items-center gap-12 py-2 px-6 rounded-xl overflow-hidden border border-slate-800 bg-[#282C34] shadow-2xl">
      <span className="font-mono text-slate-200 font-sm font-light">
        {text}
      </span>
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="p-1.5 rounded-md hover:bg-slate-700/50 text-slate-400 transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
