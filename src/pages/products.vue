<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-gray-950 to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          我们的产品
        </h1>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          为不同需求的用户提供多样化的 ME-Frp 客户端解决方案，每个产品都经过精心设计和优化
        </p>
      </div>
    </section>

    <!-- 产品详细展示 -->
    <section class="py-16 lg:py-24 bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div 
          v-for="(product, index) in products" 
          :key="product.id"
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }"
        >
          <!-- 产品信息 -->
          <div class="space-y-6" :class="{ 'lg:col-start-2': index % 2 === 1 }">
            <div class="flex items-center space-x-4">
              <img 
                :src="product.icon" 
                :alt="product.name"
                class="w-16 h-16 rounded-xl"
              >
              <div>
                <h2 class="text-2xl md:text-3xl font-bold text-white">
                  {{ product.name }}
                </h2>
                <p class="text-gray-400">
                  {{ product.author }} · {{ product.version }}
                </p>
              </div>
            </div>

            <p class="text-lg text-gray-300 leading-relaxed">
              {{ product.description }}
            </p>

            <!-- 特性列表 -->
            <div class="space-y-3">
              <h3 class="text-lg font-semibold text-white">主要特性</h3>
              <ul class="space-y-2">
                <li 
                  v-for="feature in product.features" 
                  :key="feature"
                  class="flex items-center space-x-3 text-gray-300"
                >
                  <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- 技术标签 -->
            <div class="flex flex-wrap gap-2">
              <UBadge 
                v-for="tag in product.tags" 
                :key="tag"
                variant="soft" 
                color="primary"
              >
                {{ tag }}
              </UBadge>
            </div>

            <!-- 操作按钮 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton 
                size="lg" 
                color="primary"
                :to="product.link"
                target="_blank"
              >
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-5 h-5 mr-2" />
                查看文档
              </UButton>
            </div>
          </div>

          <!-- 产品截图 -->
          <div class="relative" :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                :src="product.screenshot" 
                :alt="`${product.name} 截图`"
                class="w-full h-auto"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 lg:py-24 bg-gradient-to-r from-primary-900/20 to-blue-900/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          开始使用我们的产品
        </h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          选择最适合您需求的客户端，开始您的 ME-Frp 之旅
        </p>
        <UButton 
          size="xl" 
          color="primary"
          to="/docs"
        >
          <UIcon name="i-heroicons-document-text" class="w-5 h-5 mr-2" />
          查看文档
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '产品 - ME-Frp 第三方客户端联盟',
  meta: [
    { name: 'description', content: '了解 ME-Frp 第三方客户端联盟的所有产品，包括 XL-ME-Frp-Launcher、LX-ME-Frp-Launcher 和 Plain ME Frp Launcher' }
  ]
})

const products = ref([
  {
    id: 'xl',
    name: 'XL-ME-Frp-Launcher',
    author: 'yealqp',
    version: 'v1.5.5',
    description: '由yealqp使用Tauri框架开发，界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/xl_icon.webp',
    screenshot: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/home.png',
    link: 'https://mefrp-tpca.yealqp.cn/docs/xl',
    tags: ['Tauri', '轻量级', 'Rust'],
    features: [
      '基于 Tauri 框架，性能优异',
      '界面美观，高仿官网设计',
      '包体小巧，启动迅速',
      '跨平台支持，稳定可靠'
    ]
  },
  {
    id: 'lx',
    name: 'LX-ME-Frp-Launcher',
    author: '灵弦MuaMua',
    version: 'v2.3.0',
    description: '由灵弦MuaMua使用易语言&Exui开发，界面高仿官方图形化V4.0。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/lx_icon.webp',
    screenshot: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/home.png',
    link: 'https://mefrp-tpca.yealqp.cn/docs/lx',
    tags: ['易语言', 'Windows', '官方风格', 'Exui'],
    features: [
      '使用易语言开发，原生 Windows 体验',
      '界面高仿官方图形化 V4.0',
      '操作简单，易于上手',
      '功能完整，稳定运行'
    ]
  },
  {
    id: 'pml',
    name: 'Plain ME Frp Launcher',
    author: 'RYCB工作室',
    version: 'v2.1.0',
    description: 'PML 2使用.NET提供了简单便捷的操作, 也是目前三个产品中唯一一个跨平台的软件。支持常见主流平台(Windows, Linux, MacOS, Android)。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/pml_icon.webp',
    screenshot: 'https://image.mefrp-tpca.yealqp.cn/image/views/rycb/homex.png',
    link: 'https://mefrp-tpca.yealqp.cn/docs/pml',
    tags: ['.NET', '跨平台', '多系统'],
    features: [
      '基于 .NET 框架，跨平台支持',
      '支持 Windows、Linux、MacOS、Android',
      '操作简单便捷，功能丰富',
      '持续更新，社区活跃'
    ]
  }
])

const openProtocol = (productId) => {
  // 尝试打开自定义协议
  window.location.href = `mefrp://StartProxy/${productId}`
  
  // 如果协议不可用，跳转到协议页面
  setTimeout(() => {
    navigateTo(`/protocol/${productId}`)
  }, 1000)
}
</script>