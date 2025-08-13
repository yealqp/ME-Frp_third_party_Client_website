import { defineConfig } from "vitepress";
const fileAndStyles: Record<string, string> = {}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/ME-Frp_third_party_Client_website/",
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
          link: "/",
          items: [
            { text: "客户端",
              items: [
                { text: "XL-ME-Frp-Luncher", link: "/client/XL" },
                { text: "LX-ME-Frp-Luncher", link: "/client/LX" },
                { text: "Plain ME Frp Launcher", link: "/client/qyf" },
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
        'naive-ui',
        'date-fns',
        'vueuc',
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
    server: {
    host: '0.0.0.0',
    allowedHosts: ['mefrp.yealqp.fun'],
  },
  },
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html)
      return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  }
});

