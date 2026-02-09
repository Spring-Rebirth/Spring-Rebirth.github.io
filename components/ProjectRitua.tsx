"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";

const images = [
    "/projects/ritua-plan/Screenshot_20260206_161615.jpg",
    "/projects/ritua-plan/Screenshot_20260206_161426.jpg",
    "/projects/ritua-plan/Screenshot_20260206_161106.jpg",
    "/projects/ritua-plan/Screenshot_20260206_161417.jpg",
    "/projects/ritua-plan/Screenshot_20260206_161438.jpg",
    "/projects/ritua-plan/Screenshot_20260206_161510.jpg",
];

const tags = ["React Native", "Expo", "Reanimated", "Nativewind", "SQLite"];

export default function ProjectRitua() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Ritua
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-600 ml-3">
                            Plan
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        极简主义习惯追踪与日常规划。通过直观的视觉反馈和流畅的交互，让建立习惯成为一种享受。
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* 2-Row Grid Gallery */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-[9/19.5] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-slate-900 shadow-xl bg-slate-900"
                        >
                            <Image
                                src={src}
                                alt={`Ritua Plan Screenshot ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 33vw, 200px"
                                className="object-cover select-none"
                                draggable={false}
                                suppressHydrationWarning
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 text-cyan-400 rounded-xl font-bold border border-cyan-500/30 backdrop-blur-sm">
                        <Rocket size={20} className="animate-pulse" suppressHydrationWarning />
                        Google Play 封闭式测试中
                    </div>
                    <p className="text-slate-500 text-sm">
                        目前处于私有测试阶段，即将正式发布
                    </p>
                </motion.div>
            </div>
        </section>
    );
}