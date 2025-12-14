// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Nuxt UI 模块
  modules: [
    '@nuxt/ui'
  ],

  // CSS 配置
  css: [
    '@/assets/css/main.css'
  ],

  // 应用配置
  app: {
    head: {
      title: 'ME-Frp 第三方客户端联盟',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ME-Frp 第三方客户端联盟官方网站' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/favicon.ico' }
      ]
    }
  },

  // 静态站点生成配置
  nitro: {
    output: {
      dir: 'dist',
      publicDir: 'dist'
    }
  },

  // 兼容性
  compatibilityDate: '2024-12-14',

  // 自定义目录结构
  srcDir: 'src/'
})