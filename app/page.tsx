"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Code2, ChevronDown, X, Copy, Check, Rocket } from "lucide-react";
import TechStack from "@/components/TechStack";

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
    suppressHydrationWarning
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// 3. 自定义 QQ 图标组件 (使用文本)
const QQIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    suppressHydrationWarning
  >
    <text
      x="50%"
      y="54%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="16"
      fontWeight="800"
      style={{ fontFamily: "sans-serif" }}
    >
      QQ
    </text>
  </svg>
);

export default function Home() {
  const [activeContact, setActiveContact] = useState<{ title: string; value: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const contactInfo = {
    email: "powerfulseed1998@email.com",
    qq: "1392600130"
  };

  const handleCopy = () => {
    if (activeContact) {
      navigator.clipboard.writeText(activeContact.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    { icon: <GithubIcon size={24} />, href: "https://github.com", type: "link" },
    {
      icon: <QQIcon size={24} />,
      type: "button",
      onClick: () => setActiveContact({ title: "QQ", value: contactInfo.qq })
    },
    {
      icon: <Mail size={24} suppressHydrationWarning />,
      type: "button",
      onClick: () => setActiveContact({ title: "Email", value: contactInfo.email })
    },
    { icon: <Code2 size={24} suppressHydrationWarning />, href: "#projects", type: "link" },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden">
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
            跨平台 App 开发者 / 科技爱好者 / 细节控。
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
            {socialLinks.map((item, index) => {
              const commonProps = {
                whileHover: { scale: 1.1, color: "#22d3ee" },
                whileTap: { scale: 0.95 },
                className: "p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-300 transition-colors hover:border-cyan-500/50 cursor-pointer"
              };

              if (item.type === "button") {
                return (
                  <motion.button
                    key={index}
                    {...commonProps}
                    onClick={item.onClick}
                  >
                    {item.icon}
                  </motion.button>
                );
              }

              return (
                <motion.a
                  key={index}
                  {...commonProps}
                  href={item.href}
                >
                  {item.icon}
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
          animate={{ y: [0, 10, 0] }} // 上下浮动动画
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} suppressHydrationWarning />
        </motion.div>
      </main>

      {/* 2. Tech Stack Section (技能墙) */}
      <TechStack />

      {/* 预留位置：后续的项目展示区 */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
        {/* 装饰背景 */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center z-10 space-y-6 px-4"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block p-6 rounded-full bg-slate-800/50 border border-slate-700 mb-2 backdrop-blur-sm"
          >
            <Rocket size={48} className="text-cyan-400" suppressHydrationWarning />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-600 ml-2">
              Coming Soon
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
            这里暂时还没有内容。敬请期待...
          </p>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {activeContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveContact(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl w-auto max-w-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{activeContact.title}</h3>
                <button
                  onClick={() => setActiveContact(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="bg-slate-950 p-3 px-4 rounded-lg border border-slate-800 flex items-center gap-4">
                <span className="text-slate-300 select-all whitespace-nowrap">{activeContact.value}</span>
                <div className="relative flex items-center justify-end shrink-0 min-w-[60px] h-[26px]">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="text-sm text-green-400 font-medium whitespace-nowrap"
                      >
                        Copied!
                      </motion.span>
                    ) : (
                      <motion.button
                        key="copy-btn"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={handleCopy}
                        className="p-1 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-cyan-400"
                        title="Copy to clipboard"
                      >
                        <Copy size={18} />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
