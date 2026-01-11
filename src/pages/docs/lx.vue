<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img 
          src="https://image.mefrp-tpca.yealqp.cn/image/views/icon/lx_icon.webp" 
          alt="LX-ME-Frp-Launcher"
          class="w-12 h-12 rounded-lg"
        />
        <div>
          <h1 class="text-3xl font-bold text-white">LX-ME-Frp-Launcher</h1>
          <p class="text-gray-400">使用易语言开发的 Windows 客户端</p>
        </div>
      </div>
      
      <div class="flex flex-wrap gap-2">
        <UBadge variant="soft" color="primary">易语言</UBadge>
        <UBadge variant="soft" color="green">Windows</UBadge>
        <UBadge variant="soft" color="blue">官方风格</UBadge>
        <UBadge variant="soft" color="purple">Exui</UBadge>
      </div>
    </div>

    <!-- 项目介绍 -->
    <UCard 
      class="mb-8 glass-card"
      :ui="{
        base: 'overflow-hidden',
        background: 'bg-transparent',
        ring: 'ring-0'
      }"
    >
      <template #header>
        <h2 class="text-xl font-semibold text-white">项目介绍</h2>
      </template>
      
      <div class="space-y-4 text-gray-300">
        <p>
          LX-ME-Frp-Launcher 是由 <strong class="text-primary-400">灵弦MuaMua</strong> 使用易语言 & Exui 开发的 ME-Frp 第三方客户端。
          该客户端具有较美观的 UI 界面，功能较为完善，提供了简单便捷的操作。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">✨ 主要特性</h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>使用易语言 & Exui 开发，原生 Windows 体验</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>具有较美观的 UI 界面</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>正常使用功能较为完善</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>提供简单便捷的操作</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>可以快速启动实例/隧道</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持自动登录和托盘菜单</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">🖥️ 系统要求</h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-computer-desktop" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>仅支持 Windows 系统</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-cpu-chip" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持不同 Windows 架构</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-circle-stack" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>可在官网下载对应架构版本</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UCard>

    <!-- 预览图 -->
    <UCard 
      class="mb-8 glass-card"
      :ui="{
        base: 'overflow-hidden',
        background: 'bg-transparent',
        ring: 'ring-0'
      }"
    >
      <template #header>
        <h2 class="text-xl font-semibold text-white">预览图</h2>
      </template>
      
      <div class="relative rounded-lg overflow-hidden bg-gray-900/50">
        <!-- 图片容器 -->
        <div class="relative h-96 flex items-center justify-center">
          <img 
            :src="previewImages[currentImageIndex].src" 
            :alt="`${previewImages[currentImageIndex].alt} - LX-ME-Frp-Launcher 界面截图`" 
            class="max-w-full max-h-full object-contain cursor-pointer"
            loading="lazy"
            @click="openImageModal(previewImages[currentImageIndex])"
          />
          
          <!-- 标题遮罩 -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p class="text-white text-center font-medium">{{ previewImages[currentImageIndex].alt }}</p>
          </div>
        </div>
        
        <!-- 导航箭头 -->
        <button 
          @click="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          :disabled="previewImages.length <= 1"
        >
          <UIcon name="i-heroicons-chevron-left" class="w-5 h-5" />
        </button>
        
        <button 
          @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          :disabled="previewImages.length <= 1"
        >
          <UIcon name="i-heroicons-chevron-right" class="w-5 h-5" />
        </button>
        
        <!-- 指示器 -->
        <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(image, index) in previewImages"
            :key="index"
            @click="currentImageIndex = index"
            class="w-2 h-2 rounded-full transition-colors"
            :class="index === currentImageIndex ? 'bg-white' : 'bg-white/50'"
          />
        </div>
      </div>
    </UCard>

    <!-- 下载安装 -->
    <UCard 
      class="mb-8 glass-card"
      :ui="{
        base: 'overflow-hidden',
        background: 'bg-transparent',
        ring: 'ring-0'
      }"
    >
      <template #header>
        <h2 class="text-xl font-semibold text-white">下载安装</h2>
      </template>
      
      <div class="space-y-6">
        <div class="text-center">
          <UButton 
            size="lg" 
            color="primary"
            to="https://wwms.lanzouo.com/iGZtL37rk67g"
            target="_blank"
            class="btn-glow cursor-pointer"
          >
            <UIcon name="i-heroicons-arrow-down-tray" class="w-5 h-5 mr-2" />
            蓝奏云下载
          </UButton>
          <p class="text-gray-400 text-sm mt-2">当前版本: v2.3</p>
        </div>
        
        <UAlert 
          color="yellow" 
          variant="soft"
          title="注意事项"
          description="仅适用于 Windows 系统。请使用 ME-Frp 官网账号登录。需要更多功能或报告 Bug，请发送邮件至 407176772@qq.com。"
        />
        
        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">安装步骤</h3>
          <ol class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>下载 LX-ME-Frp-Launcher 安装包</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>解压到您希望安装的目录</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>运行主程序，首次启动会进行初始化</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>配置您的 ME-Frp 账户信息并开始使用</span>
            </li>
          </ol>
        </div>
      </div>
    </UCard>


    <!-- 更新记录 -->
    <UCard 
      class="mb-8 glass-card"
      :ui="{
        base: 'overflow-hidden',
        background: 'bg-transparent',
        ring: 'ring-0'
      }"
    >
      <template #header>
        <h2 class="text-xl font-semibold text-white">更新记录</h2>
      </template>
      
      <div class="space-y-6">
        <div v-for="update in updateHistory" :key="update.version" class="border-l-2 border-primary-500/30 pl-4">
          <div class="flex items-center space-x-2 mb-2">
            <h3 class="text-lg font-semibold text-white">{{ update.version }}</h3>
            <UBadge v-if="update.isLatest" variant="soft" color="green" size="sm">最新</UBadge>
          </div>
          <p v-if="update.date" class="text-sm text-gray-400 mb-2">更新日期：{{ update.date }}</p>
          <ul class="space-y-1 text-gray-300 text-sm mb-3">
            <li v-for="(change, index) in update.changes" :key="index" class="flex items-start space-x-2">
              <span class="text-primary-400 mt-1">•</span>
              <span v-html="change"></span>
            </li>
          </ul>
          <div v-if="update.note" class="bg-gray-700/30 rounded-lg p-3 text-sm text-gray-300">
            <span class="text-yellow-400 font-medium">注：</span>
            <span v-html="update.note"></span>
          </div>
        </div>
      </div>
    </UCard>

  </div>
</template>

<script setup>
// 使用文档布局
definePageMeta({
  layout: 'docs'
})

// 页面元数据
useHead({
  title: 'LX-ME-Frp-Launcher 文档',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/docs/lx' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'LX-ME-Frp-Launcher',
        applicationCategory: 'NetworkApplication',
        operatingSystem: 'Windows',
        softwareVersion: 'v2.3',
        description: '使用易语言 & Exui 开发的 ME-Frp 第三方客户端，界面高仿官方图形化 V4.0',
        author: { '@type': 'Person', name: '灵弦MuaMua' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
        downloadUrl: 'https://wwms.lanzouo.com/iGZtL37rk67g'
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: 'LX-ME-Frp-Launcher 文档 | ME-Frp 第三方客户端联盟',
  ogTitle: 'LX-ME-Frp-Launcher 文档 - ME-Frp 第三方客户端联盟',
  description: 'LX-ME-Frp-Launcher 详细使用文档，使用易语言 & Exui 开发的 ME-Frp 第三方客户端，包含安装、配置和使用指南，支持自动登录和托盘菜单功能。',
  ogDescription: 'LX-ME-Frp-Launcher 详细使用文档，包含安装、配置和使用指南',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/home.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/docs/lx',
  ogType: 'article',
  twitterCard: 'summary_large_image'
})

// 预览图数据
const previewImages = [
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/login.png', alt: '登录界面' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/home.png', alt: '主页面' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/create.png', alt: '创建隧道' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/tunnel.png', alt: '隧道管理' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/tunnellog.png', alt: '隧道日志' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/monitor.png', alt: '节点监控' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/person.png', alt: '个人信息' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/config.png', alt: '配置设置' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/Lx_MuaMua/about.png', alt: '关于页面' }
]

// 更新历史（只显示最近几个版本）
const updateHistory = [
  {
    version: 'v2.3',
    date: '2025-10-6',
    isLatest: true,
    changes: [
      '新增<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">浅色窗口模式</code>，可在设置页面更换',
      '修复部分用户每十分钟一次的卡顿现象',
      '完善新建隧道页面，新增节点介绍'
    ]
  },
  {
    version: 'v2.2',
    date: '2025-9-14',
    changes: [
      '优化<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">账密登录</code>无需<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">获取验证码</code>操作即可进行正常登录',
      '优化<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">签到功能</code>无需<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">获取验证码</code>操作即可进行正常签到'
    ],
    note: '本次优化针对验证，操作已经实现和以前版本一样的便携了，搭配<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">自动登录</code>可实现全自动登录 :)'
  },
  {
    version: 'v2.1',
    date: '2025-8-27',
    changes: [
      '完善隧道管理页面：调整隧道功能布局，新增<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">强制下线隧道</code>功能，新增<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">禁用/启用隧道</code>功能',
      '优化启动隧道时的<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">日志输出</code>',
      '新增了<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">自动登录</code>功能，实现自动登录',
      '优化并调整<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">托盘菜单</code>的功能',
      '优化<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">账密登录</code>和<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">签到功能</code>方式，已可以正常使用（但是变麻烦了）'
    ],
    note: '<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">账密登录</code>和<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">签到功能</code>需要前往网页复制秘钥才能进行，后续要是可能的话会做优化 :('
  },
  {
    version: 'v2.0',
    date: '2025-8-6',
    changes: [
      '完善<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">创建隧道</code>功能，已支持创建协议为 HTTP 和 HTTPS 的隧道',
      '更改设置页面，将帮助支持分离出一个单独页面',
      '更改自定义自启动隧道功能的布局和 UI',
      '完善<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">提示信息框</code>的覆盖',
      '更改图形化关闭和最小化方式',
      '完善隧道管理页面：新增<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">生成启动配置</code>功能，新增对<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">被封禁的隧道</code>的注释',
      '优化了日志页面，每个隧道的日志可单独查看',
      '对图形化占用内存进行了优化，尽可能减少卡顿/卡顿时长'
    ]
  }
]

// 轮播图状态
const currentImageIndex = ref(0)

// 轮播图导航
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % previewImages.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? previewImages.length - 1 : currentImageIndex.value - 1
}

// 打开图片模态框
const openImageModal = (image) => {
  window.open(image.src, '_blank')
}
</script>