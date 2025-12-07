"use client";

import { motion } from "framer-motion";

// 定义技术栈数据，你可以根据自己的实际情况修改
const techCategories = [
    {
        title: "Frontend Core",
        color: "from-cyan-400 to-blue-500", // 渐变色定义
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    },
    {
        title: "Mobile & Backend",
        color: "from-purple-400 to-pink-500",
        skills: ["React Native", "Expo", "Reanimated", "RNGH", "React Query", "Nativewind", "Firebase"],
    },
    {
        title: "DevOps & Tools",
        color: "from-amber-400 to-orange-500",
        skills: ["Git", "Vercel", "Figma"],
    },
];

// 容器动画：控制子元素的交错显示
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // 每个子元素间隔 0.2秒出现
        },
    },
};

// 子元素动画：从下方淡入
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export default function TechStack() {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            {/* 标题区域 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} // 滚动到视野时触发
                viewport={{ once: true }} // 只触发一次
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                        Tech Arsenal
                    </span>
                </h2>
                <p className="text-slate-400">我用来构建数字产品的武器库</p>
            </motion.div>

            {/* 网格布局区域 */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // 稍微提前一点触发
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {techCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors overflow-hidden"
                    >
                        {/* 悬停时的光效背景 */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${category.color}`} />

                        <h3 className={`text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:text-white hover:border-slate-500 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
