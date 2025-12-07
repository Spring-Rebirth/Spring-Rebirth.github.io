"use client";

import { motion } from "framer-motion";
// 1. 移除已弃用的 Github 和 Linkedin 引用，只保留通用的 UI 图标
import { Mail, Code2 } from "lucide-react";

// 2. 自定义 GitHub 图标组件 (保持 Lucide 的线条风格)
const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// 3. 自定义 X（原 Twitter）图标组件
const XIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4h4.6L12 9.2 15.4 4H20l-6.1 7.2L20 20h-4.6L12 14.8 8.6 20H4l6.1-6.8z" fill="currentColor" />
  </svg>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-6 relative overflow-hidden">

      {/* 背景光晕 */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="z-10 text-center max-w-3xl space-y-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-2 px-4 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm text-sm text-cyan-400 font-mono">
            👋 Hello, World! I am
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
            Chen Junwei
          </h1>
        </motion.div>

        <motion.p
          className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          全栈开发者 / 科技爱好者 / 细节控。
          <br />
          专注于构建<span className="text-white font-semibold">高性能 Mobile 应用</span>与
          <span className="text-white font-semibold"> 极致的用户体验</span>。
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 pt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* 4. 在这里更新图标的调用方式 */}
          {[
            { icon: <GithubIcon size={24} />, href: "https://github.com" },
            { icon: <XIcon size={24} />, href: "https://x.com" },
            { icon: <Mail size={24} />, href: "powerfulseed1998@email.com" },
            { icon: <Code2 size={24} />, href: "#projects" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1, color: "#22d3ee" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-300 transition-colors hover:border-cyan-500/50"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
