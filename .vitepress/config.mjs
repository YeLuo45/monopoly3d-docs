import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Monopoly3D 文档",
  description: "Monopoly3D 大富翁 3D 游戏设计文档与开发指南",
  lang: "zh-CN",
  base: "/",
  ignoreDeadLinks: true,
  head: [
    ["meta", { name: "theme-color", content: "#1a1a2e" }],
    ["meta", { name: "description", content: "Monopoly3D 大富翁 3D 游戏官方设计文档" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/zh/" },
      { text: "架构", link: "/zh/architecture/" },
      { text: "组件", link: "/zh/components/" },
      { text: "游戏逻辑", link: "/zh/game/" },
      { text: "贡献指南", link: "/zh/contributing/" },
    ],
    sidebar: {
      "/zh/architecture/": [
        { text: "架构概览", items: [{ text: "简介", link: "/zh/architecture/" }] },
        { text: "状态管理", items: [{ text: "Zustand Store", link: "/zh/architecture/" }] },
        { text: "3D 渲染", items: [{ text: "React Three Fiber", link: "/zh/architecture/" }] },
      ],
      "/zh/components/": [
        { text: "3D 组件", items: [{ text: "棋盘 Board", link: "/zh/components/" }] },
        { text: "骰子 Dice", link: "/zh/components/" },
        { text: "玩家 Players", link: "/zh/components/" },
      ],
      "/zh/game/": [
        { text: "游戏逻辑", items: [{ text: "核心规则", link: "/zh/game/" }] },
        { text: "AI 决策", link: "/zh/game/" },
        { text: "地图编辑器", link: "/zh/game/" },
      ],
      "/zh/contributing/": [
        { text: "贡献指南", link: "/zh/contributing/" },
      ],
    },
    footer: { message: "Monopoly3D 设计文档", copyright: "Copyright © 2026 YeLuo45" },
    socialLinks: [{ icon: "github", link: "https://github.com/YeLuo45/monopoly3d" }],
  },
  rewrites: {},
});