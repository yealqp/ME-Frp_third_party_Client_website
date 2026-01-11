<template>
  <!-- Header 增强毛玻璃效果 - Requirements 1.2 -->
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-950/70 border-b border-white/10 shadow-lg shadow-black/20 transition-smooth">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between h-16 px-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 hover:opacity-80 transition-smooth cursor-pointer">
          <LogoIcon 
            :size="32" 
            :animated="false" 
            class="w-8 h-8"
          />
          <span class="text-xl font-bold text-white hidden sm:block">
            ME-Frp 第三方客户端联盟
          </span>
          <span class="text-xl font-bold text-white sm:hidden">
            ME-Frp TPCA
          </span>
        </NuxtLink>

        <!-- 桌面端导航 -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-smooth cursor-pointer"
            :class="{ 'text-primary-400': $route.path === item.href }"
          >
            <UIcon :name="item.icon" class="w-4 h-4" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </nav>

        <!-- 移动端菜单按钮 -->
        <UButton 
          variant="ghost" 
          size="sm"
          class="md:hidden cursor-pointer"
          @click="isMenuOpen = !isMenuOpen"
        >
          <UIcon :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
        </UButton>
      </div>

      <!-- 移动端导航菜单 - 增强毛玻璃效果 -->
      <div 
        v-if="isMenuOpen" 
        class="md:hidden border-t border-white/10 bg-gray-950/90 backdrop-blur-xl"
      >
        <nav class="px-4 py-4 space-y-2">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-white/5 transition-smooth cursor-pointer"
            :class="{ 'text-primary-400 bg-white/5': $route.path === item.href }"
            @click="isMenuOpen = false"
          >
            <UIcon :name="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
const isMenuOpen = ref(false)

const navigation = [
  { name: '首页', href: '/', icon: 'i-heroicons-home' },
  { name: '产品', href: '/products', icon: 'i-heroicons-cube' },
  { name: '关于', href: '/about', icon: 'i-heroicons-information-circle' },
  { name: '文档', href: '/docs', icon: 'i-heroicons-document-text' }
  
]

// 监听路由变化，关闭移动端菜单
watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>