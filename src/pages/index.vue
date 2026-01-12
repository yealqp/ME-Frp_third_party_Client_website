<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- 动态渐变背景 -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-gray-950 to-blue-900/20"></div>
        <!-- 动态光斑 - 添加浮动效果 -->
        <div 
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow animate-float"
          :style="{ transform: `translateY(${parallaxOffset * 0.3}px)` }"
        ></div>
        <div 
          class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"
          :style="{ transform: `translateY(${parallaxOffset * 0.2}px)` }"
        ></div>
        <div 
          class="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-500"
          :style="{ transform: `translateY(${parallaxOffset * 0.4}px)` }"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <!-- 主标题 -->
          <div class="text-center space-y-6">
            <!-- 发光标题 -->
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-glow">
              <span class="block">
                <span class="text-gradient bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
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
            专注于 <span class="text-teal-400 font-semibold">ME-Frp</span> 第三方客户端开发，
            <br class="hidden md:block">
            为用户提供更美观、更便捷、更强大的内网穿透体验
          </p>

          <!-- 按钮组 -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <UButton 
              size="xl" 
              color="primary"
              to="/products"
              class="px-8 py-4 text-lg font-semibold btn-glow hover-lift cursor-pointer"
            >
              <UIcon name="i-lucide-box" class="size-5 mr-2" />
              探索产品
            </UButton>
            
            <UButton 
              size="xl" 
              color="neutral"
              variant="outline"
              to="/about"
              class="px-8 py-4 text-lg btn-glow hover-lift cursor-pointer"
            >
              <UIcon name="i-lucide-users" class="size-5 mr-2" />
              了解更多
            </UButton>
          </div>
        </div>
      </div>

      <!-- 向下滚动提示 -->
      <div class="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <UIcon name="i-lucide-chevrons-down" class="size-8 text-gray-400" />
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
// 视差效果
const parallaxOffset = ref(0)

const updateParallax = () => {
  if (import.meta.server) return
  parallaxOffset.value = window.scrollY * 0.3
}

onMounted(() => {
  if (import.meta.server) return
  window.addEventListener('scroll', updateParallax, { passive: true })
})

onUnmounted(() => {
  if (import.meta.server) return
  window.removeEventListener('scroll', updateParallax)
})

// 页面元数据
useHead({
  title: '首页',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ME-Frp 第三方客户端联盟',
        alternateName: 'ME-Frp TPCA',
        url: 'https://mefrp-tpca.yealqp.cn',
        logo: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/favicon.ico',
        description: 'ME-Frp 第三方客户端联盟官方网站，专注于 ME-Frp 第三方客户端开发，提供多款优质内网穿透客户端',
        sameAs: [
          'https://github.com/yealqp/ME-Frp_third_party_Client_website'
        ]
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: '首页 | ME-Frp 第三方客户端联盟',
  ogTitle: 'ME-Frp 第三方客户端联盟 - 专业内网穿透客户端',
  description: 'ME-Frp 第三方客户端联盟官方网站，专注于 ME-Frp 第三方客户端开发，提供 XL-ME-Frp-Launcher、LX-ME-Frp-Launcher、Plain ME Frp Launcher 等多款优质内网穿透客户端。',
  ogDescription: 'ME-Frp 第三方客户端联盟官方网站，专注于 ME-Frp 第三方客户端开发，提供多款优质内网穿透客户端，支持 Windows、Linux、macOS 等多平台。',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/og-image.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'ME-Frp 第三方客户端联盟',
  twitterDescription: '专注于 ME-Frp 第三方客户端开发，提供多款优质内网穿透客户端',
  twitterImage: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/og-image.png'
})
</script>
