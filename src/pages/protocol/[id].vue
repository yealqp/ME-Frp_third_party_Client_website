<template>
  <div class="pt-16 min-h-screen bg-gray-950 flex items-center justify-center">
    <div class="container mx-auto px-4 max-w-4xl">
      <UCard class="bg-gray-800/50 border-gray-700">
        <div class="text-center space-y-8">
          <!-- 加载动画 -->
          <div class="space-y-4">
            <h1 class="text-2xl md:text-3xl font-bold text-white">
              请稍候，正在重定向...
            </h1>
            
            <div class="loading-dots mx-auto">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <!-- 错误提示 -->
          <div v-if="!protocolAvailable" class="space-y-4">
            <UAlert 
              color="red" 
              variant="soft"
              title="协议不可用"
              description="检测到您尚未安装支持的客户端，请下载并安装以下任一客户端"
            />
          </div>

          <!-- 产品下载 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UCard 
              v-for="product in products" 
              :key="product.id"
              class="bg-gray-700/50 border-gray-600 hover:border-primary-500/50 transition-colors"
            >
              <template #header>
                <div class="flex items-center space-x-3">
                  <img 
                    :src="product.icon" 
                    :alt="product.name"
                    class="w-10 h-10 rounded-lg"
                  >
                  <div>
                    <h3 class="font-semibold text-white">{{ product.name }}</h3>
                    <p class="text-sm text-gray-400">{{ product.author }} · {{ product.version }}</p>
                  </div>
                </div>
              </template>

              <div class="space-y-4">
                <p class="text-sm text-gray-300 line-clamp-3">
                  {{ product.description }}
                </p>

                <UButton 
                  block 
                  color="primary"
                  :to="product.downloadUrl"
                  target="_blank"
                >
                  <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4 mr-2" />
                  下载
                </UButton>
              </div>
            </UCard>
          </div>

          <!-- 手动跳转 -->
          <div v-if="showRedirectBtn && protocolAvailable" class="space-y-4">
            <p class="text-gray-400">自动重定向失败，请手动点击按钮</p>
            <UButton 
              size="lg" 
              color="primary"
              @click="startRedirect"
            >
              <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-5 h-5 mr-2" />
              跳转链接 ({{ countdown }}s)
            </UButton>
          </div>

          <!-- 协议不可用提示 -->
          <div v-if="!protocolAvailable && showRedirectBtn" class="space-y-4">
            <UAlert 
              color="amber" 
              variant="soft"
              title="倒计时结束"
              description="协议不可用，请下载上方任一产品"
            />
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const protocolAvailable = ref(true)
const showRedirectBtn = ref(false)
const countdown = ref(5)
const id = ref('')

// 产品数据
const products = ref([
  {
    id: 'xl',
    name: 'XL-ME-Frp-Launcher',
    author: 'yealqp',
    version: 'v1.5.0',
    description: '由yealqp使用Tauri框架开发，界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/xl_icon.webp',
    downloadUrl: 'https://mefrp-tpca.yealqp.cn/docs/xl'
  },
  {
    id: 'lx',
    name: 'LX-ME-Frp-Launcher',
    author: '灵弦MuaMua',
    version: 'v1.3.0',
    description: '由灵弦MuaMua使用易语言&Exui开发，界面高仿官方图形化V4.0。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/lx_icon.webp',
    downloadUrl: 'https://mefrp-tpca.yealqp.cn/docs/lx'
  },
  {
    id: 'pml',
    name: 'Plain ME Frp Launcher',
    author: 'RYCB工作室',
    version: 'v2.1.0',
    description: 'PML 2使用.NET提供了简单便捷的操作，支持常见主流平台。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/pml_icon.webp',
    downloadUrl: 'https://mefrp-tpca.yealqp.cn/docs/pml'
  }
])

// 检查协议是否可用
const checkProtocol = () => {
  protocolAvailable.value = true
}

// 启动重定向
const startRedirect = () => {
  if (protocolAvailable.value) {
    window.location.href = `mefrp://StartProxy/${id.value}`
  }
}

// 倒计时函数
const startCountdown = () => {
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      showRedirectBtn.value = true
    }
  }, 1000)
}

onMounted(() => {
  id.value = route.params.id
  checkProtocol()
  startCountdown()

  setTimeout(() => {
    if (protocolAvailable.value) {
      startRedirect()
    }
  }, 5000)
})

// 页面元数据
useHead({
  title: '协议跳转',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// SEO 优化
useSeoMeta({
  title: '协议跳转 | ME-Frp 第三方客户端联盟',
  description: 'ME-Frp 客户端协议跳转页面，自动启动已安装的 ME-Frp 第三方客户端',
  robots: 'noindex, nofollow'
})
</script>