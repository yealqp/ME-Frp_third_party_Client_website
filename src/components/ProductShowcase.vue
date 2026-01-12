<template>
  <section class="py-16 lg:py-24 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div 
        ref="titleRef"
        class="text-center mb-16 scroll-animate"
        :class="{ 'visible': titleVisible }"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          我们的产品
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          为不同需求的用户提供多样化的 ME-Frp 客户端解决方案
        </p>
      </div>

      <!-- 产品网格 -->
      <div 
        ref="gridRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <UCard 
          v-for="(product, index) in products" 
          :key="product.id"
          class="glass-card hover-lift scroll-animate-scale"
          :class="{ 'visible': gridVisible }"
          :style="{ transitionDelay: `${getItemDelay(index)}ms` }"
          :ui="{
            base: 'overflow-hidden',
            background: 'bg-transparent',
            ring: 'ring-0',
            divide: 'divide-white/10',
            header: { padding: 'px-4 py-4 sm:px-6' },
            body: { padding: 'px-4 py-4 sm:px-6' },
            footer: { padding: 'px-4 py-4 sm:px-6' }
          }"
        >
          <template #header>
            <div class="flex items-center space-x-4">
              <img 
                :src="product.icon" 
                :alt="`${product.name} 图标 - ME-Frp 内网穿透客户端`"
                class="w-12 h-12 rounded-lg"
                loading="lazy"
              >
              <div>
                <h3 class="text-xl font-semibold text-white">{{ product.name }}</h3>
                <p class="text-sm text-gray-400">{{ product.author }} · {{ product.version }}</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <p class="text-gray-300 leading-relaxed">
              {{ product.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <UBadge 
                v-for="tag in product.tags" 
                :key="tag"
                variant="soft" 
                color="primary"
                size="sm"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>

          <template #footer>
            <div class="flex justify-between items-center">
              <UButton 
                variant="outline" 
                color="primary"
                :to="product.link"
                target="_blank"
                class="btn-glow cursor-pointer"
              >
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
                查看详情
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup>
// 标题滚动动画 - Nuxt 自动导入 composables
const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()

// 产品网格滚动动画（带交错延迟）
const { containerRef: gridRef, isVisible: gridVisible, getItemDelay } = useScrollAnimationGroup(3, {
  staggerDelay: 150
})

const products = ref([
  {
    id: 'xl',
    name: 'XL-ME-Frp-Launcher',
    author: 'yealqp',
    version: 'v1.5.5',
    description: '由yealqp使用Tauri框架开发，界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/xl_icon.webp',
    link: 'https://mefrp-tpca.yealqp.cn/docs/xl',
    tags: ['Tauri', '跨平台', '轻量级']
  },
  {
    id: 'lx',
    name: 'LX-ME-Frp-Launcher',
    author: '灵弦MuaMua',
    version: 'v2.3.0',
    description: '由灵弦MuaMua使用易语言&Exui开发，界面高仿官方图形化V4.0。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/lx_icon.webp',
    link: 'https://mefrp-tpca.yealqp.cn/docs/lx',
    tags: ['易语言', 'Windows', '官方风格']
  },
  {
    id: 'pml',
    name: 'Plain ME Frp Launcher',
    author: 'RYCB工作室',
    version: 'v2.1.0',
    description: 'PML 2使用.NET提供了简单便捷的操作, 也是目前三个产品中唯一一个跨平台的软件。支持常见主流平台(Windows, Linux, MacOS, Android)。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/pml_icon.webp',
    link: 'https://mefrp-tpca.yealqp.cn/docs/pml',
    tags: ['.NET', '跨平台', '多系统']
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