import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 强制生成静态 HTML
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 的默认图片优化
  },
  // 如果你的仓库不是 username.github.io 而是 username.github.io/repo-name
  // 你还需要配置 basePath，目前我们可以先假设是根域名，后续再调整
};

export default nextConfig;
