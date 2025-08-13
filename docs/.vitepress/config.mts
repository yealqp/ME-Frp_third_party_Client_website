import { defineConfig } from "vitepress";

let GTAG_ID = "G-TBCY5W7YVR";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ME-Frp第三方客户端联盟",
  description: "收录ME-Frp的第三方客户端",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],

  lastUpdated: true,
  sitemap: {
    hostname: "https://mefrp.yealqp.fun",

  },

  lang: "zh",
  appearance: true,

  markdown: {
    theme: { light: "catppuccin-latte", dark: "one-dark-pro" },
    image: { lazyLoading: true },
  },

  cleanUrls: true,

  locales: {
    root: {
      label: "中文",
      lang: "zh",
    },
  },

  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: "ME-Frp主站", link: "https://www.mefrp.com/" },
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "目录",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    externalLinkIcon: true,
    lastUpdated: {
      text: "上次更新于",
    },
    outline: {
      label: "在此页面上的内容",
    },
    sidebar: {
      "/": [
        {
          text: "介绍",
          link: "/intro",
          items: [
            { text: "客户端",
              items: [
                { text: "Yealqp版", link: "/client/yealqp" },
                { text: "灵弦MuaMua版", link: "/client/lingxuan" },
                { text: "qyf版", link: "/client/qyf" },
              ]
             },
          ],
        },
      ],
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client"],
    },
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
      ],
    },
    server: {
    host: '0.0.0.0',
    allowedHosts: ['mefrp.yealqp.fun'],
  },
  },
});
