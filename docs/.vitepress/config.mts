import { defineConfig } from "vitepress";
import { resolve } from "path";
const fileAndStyles: Record<string, string> = {};
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ME-Frp第三方客户端联盟",
  description: "收录ME-Frp的第三方客户端",
  head: [["link", { rel: "icon", href: "https://image.mefrp-tpca.yealqp.fun/image/favicon.ico" }]],

  lastUpdated: true,
  sitemap: {
    hostname: "https://mefrp-tpca.yealqp.fun",
  },

  lang: "zh",
  appearance: true,

  markdown: {
    theme: { light: "catppuccin-latte", dark: "one-dark-pro" },
    image: { lazyLoading: true },
  },

  cleanUrls: true,
  
  // 设置基础路径为/docs/
  base: '/docs/',
  
  // 设置构建输出目录
  outDir: '../dist/docs',

  locales: {
    root: {
      label: "中文",
      lang: "zh",
    },
  },

  themeConfig: {
    logo: "./favicon.ico",
    nav: [
         { text: "首页", link: "https://mefrp-tpca.yealqp.fun/" },
         { text: "ME-Frp主站", link: "https://www.mefrp.com/" }
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
    editLink: {
      pattern: "https://github.com/yealqp/ME-Frp_third_party_Client_website",
      text: "帮助我们完善这个页面",
    },
    sidebar: {
      "/": [
        {
          text: "介绍",
          link: "/",
          items: [
            {
              text: "客户端",
              items: [
                { text: "XL-ME-Frp-Luncher", link: "/client/XL" },
                { text: "LX-ME-Frp-Luncher", link: "/client/LX" },
                { text: "Plain ME Frp Launcher", link: "/client/qyf" },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/yealqp/ME-Frp_third_party_Client_website" },
    ],
  },
  vite: {
    optimizeDeps: {
      exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client"],
    },
    ssr: {
      noExternal: [
        "naive-ui",
        "date-fns",
        "vueuc",
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
        "@nolebase/vitepress-plugin-enhanced-mark",
        "@nolebase/ui",
        "@css-render/vue3-ssr",
        "@fortawesome/vue-fontawesome",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
      ],
    },
    server: {
      host: "0.0.0.0",
      allowedHosts: ["mefrp-tpca.yealqp.fun"],

    },
  },
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/;
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/;
    const style = styleRegex.exec(context.content)?.[1];
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1];
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style;
    }
    context.content = context.content.replace(styleRegex, "");
    context.content = context.content.replace(vitepressPathRegex, "");
  },
  transformHtml(code, id) {
    const html = id.split("/").pop();
    if (!html) return;
    const style = fileAndStyles[`/${html}`];
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`);
    }
  },
});
