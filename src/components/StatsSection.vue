<template>
  <section class="py-16 lg:py-24 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        ref="gridRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.label"
          class="glass-card text-center space-y-2 p-6 scroll-animate"
          :class="{ 'visible': gridVisible }"
          :style="{ transitionDelay: `${getItemDelay(index)}ms` }"
        >
          <div class="flex justify-center mb-4">
            <div class="p-4 bg-primary-500/20 rounded-full transition-all duration-300 group-hover:bg-primary-500/30">
              <UIcon :name="stat.icon" class="w-8 h-8 text-primary-400" />
            </div>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-white text-glow">
            {{ stat.value }}
          </div>
          <div class="text-gray-400">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 统计网格滚动动画 - Nuxt 自动导入 composables
const { containerRef: gridRef, isVisible: gridVisible, getItemDelay } = useScrollAnimationGroup(4, {
  staggerDelay: 100
})

const stats = ref([
  {
    icon: 'i-heroicons-cube',
    value: '3+',
    label: '客户端产品'
  },
  {
    icon: 'i-heroicons-users',
    value: '4+',
    label: '团队成员'
  },
  {
    icon: 'i-heroicons-code-bracket',
    value: '100%',
    label: '社区驱动'
  },
  {
    icon: 'i-heroicons-heart',
    value: '∞',
    label: '用户支持'
  }
])
</script>