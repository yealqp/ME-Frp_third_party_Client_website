// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  
  // Nuxt UI 4 模块
  modules: [
    '@nuxt/ui'
  ],

  // CSS 配置 - Nuxt UI 4 会自动处理 Tailwind
  css: [
    '@/assets/css/main.css'
  ],

  // Nuxt UI 4 字体配置 - 禁用 Google Fonts
  fonts: {
    provider: 'none'
  },

  // 应用配置
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      title: 'ME-Frp 第三方客户端联盟',
      titleTemplate: '%s | ME-Frp TPCA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ME-Frp 第三方客户端联盟官方网站，专注于 ME-Frp 第三方客户端开发，提供 XL-ME-Frp-Launcher、LX-ME-Frp-Launcher、Plain ME Frp Launcher 等多款优质内网穿透客户端。' },
        { name: 'keywords', content: 'ME-Frp,内网穿透,第三方客户端,ME-Frp TPCA,XL-ME-Frp-Launcher,LX-ME-Frp-Launcher,Plain ME Frp Launcher,图形化客户端,frp客户端' },
        { name: 'author', content: 'ME-Frp 第三方客户端联盟' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'ME-Frp 第三方客户端联盟' },
        { property: 'og:locale', content: 'zh_CN' },
        { property: 'og:image', content: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@mefrp_tpca' },
        // 主题色
        { name: 'theme-color', content: '#14b8a6' },
        { name: 'msapplication-TileColor', content: '#14b8a6' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn' }
      ],
      script: [
        {
          defer: true,
          src: 'http://umami.yealqp.cn/script.js',
          'data-website-id': '2c44a45e-a4bb-40ea-ab3c-75936119e6a2'
        }
      ]
    }
  },

  // 静态站点生成配置
  nitro: {
    output: {
      dir: 'dist',
      publicDir: 'dist'
    },
    prerender: {
      routes: ['/', '/about', '/brand', '/products', '/docs', '/docs/xl', '/docs/lx', '/docs/pml']
    }
  },

  // 路由规则 - SEO 优化
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/brand': { prerender: true },
    '/products': { prerender: true },
    '/docs/**': { prerender: true }
  },

  // 兼容性日期
  compatibilityDate: '2025-01-12',

  // 自定义目录结构
  srcDir: 'src/',

  // Nuxt 4 future 配置
  future: {
    compatibilityVersion: 4
  }
})