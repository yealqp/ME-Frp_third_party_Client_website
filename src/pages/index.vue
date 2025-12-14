<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <!-- 主标题 -->
          <div class="text-center space-y-6">

            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span class="block">
                <span class="text-gradient bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ME-Frp 第三方客户端联盟
                </span>
              </span>
            </h1>
            
            <div class="flex items-center justify-center space-x-6 text-gray-400 text-sm">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>3+ 客户端产品</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>跨平台支持</span>
              </div>
            </div>
          </div>

          <!-- 副标题 -->
          <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
            专注于 <span class="text-primary-400 font-semibold">ME-Frp</span> 第三方客户端开发，
            <br class="hidden md:block">
            为用户提供更美观、更便捷、更强大的内网穿透体验
          </p>

          <!-- 按钮组 -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <UButton 
              size="xl" 
              color="primary"
              variant="solid"
              to="/products"
              class="px-8 py-4 text-lg font-semibold"
            >
              <UIcon name="i-heroicons-cube" class="w-5 h-5 mr-2" />
              探索产品
            </UButton>
            
            <UButton 
              size="xl" 
              color="gray"
              variant="outline"
              to="/about"
              class="px-8 py-4 text-lg"
            >
              <UIcon name="i-heroicons-users" class="w-5 h-5 mr-2" />
              了解更多
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示区域 -->
    <ProductShowcase />

    <!-- 团队成员区域 -->
    <TeamMembers />

    <!-- 统计数据 -->
    <StatsSection />
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: 'ME-Frp 第三方客户端联盟',
  meta: [
    { name: 'description', content: 'ME-Frp 第三方客户端联盟官方网站，专注于 ME-Frp 第三方客户端开发' },
    { name: 'keywords', content: 'ME-Frp, 内网穿透, 第三方客户端, 开源' }
  ]
})

// SEO 优化
useSeoMeta({
  title: 'ME-Frp 第三方客户端联盟',
  ogTitle: 'ME-Frp 第三方客户端联盟',
  description: 'ME-Frp 第三方客户端联盟官方网站,专注于 ME-Frp 第三方客户端开发,ME-Frp内网穿透,ME-Frp,CFU,中国内网穿透联盟,内网穿透,内网穿透客户端,ME-Frp内网穿透客户端,ME-Frp图形化客户端,图形化界面.',
  ogDescription: 'ME-Frp 第三方客户端联盟官方网站,专注于 ME-Frp 第三方客户端开发,ME-Frp内网穿透,ME-Frp,CFU,中国内网穿透联盟,内网穿透,内网穿透客户端,ME-Frp内网穿透客户端,ME-Frp图形化客户端,图形化界面.',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/favicon.ico',
  twitterCard: 'summary_large_image'
})
</script>

