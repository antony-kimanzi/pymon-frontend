"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

interface codeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}
export default function CodeBlock({
  code,
  language = "python",
  filename = "backup.py",
}: codeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-slate-800 bg-[#282c34] shadow-2xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#21252b] border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          {/* Mac-style window controls */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {/* Filename */}
          <span className="ml-3 text-xs font-medium text-slate-400 font-mono">
            {filename}
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-slate-700/50 text-slate-400 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <div className="flex flex-row gap-2 items-center">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-white text-sm font-medium">copied</span>
            </div>
          ) : (
            <div className="flex flex-row gap-2 items-center">
              <Copy className="w-4 h-4" />
              <span className="text-white text-sm font-medium">copy</span>
            </div>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 text-sm overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "14px",
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-jetbrains)", // Uses our Next.js font
            },
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
