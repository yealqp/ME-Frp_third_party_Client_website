<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img 
          src="https://image.mefrp-tpca.yealqp.cn/image/views/icon/xl_icon.webp" 
          alt="XL-ME-Frp-Launcher"
          class="w-12 h-12 rounded-lg"
        />
        <div>
          <h1 class="text-3xl font-bold text-white">XL-ME-Frp-Launcher</h1>
          <p class="text-gray-400">基于 Tauri 2 框架开发的跨平台客户端</p>
        </div>
      </div>
      
      <div class="flex flex-wrap gap-2">
        <UBadge variant="soft" color="primary">Vue3</UBadge>
        <UBadge variant="soft" color="blue">TypeScript</UBadge>
        <UBadge variant="soft" color="yellow">Naive UI</UBadge>
        <UBadge variant="soft" color="green">Vite</UBadge>
        <UBadge variant="soft" color="cyan">Tauri 2</UBadge>
        <UBadge variant="soft" color="orange">Rust</UBadge>
      </div>
    </div>

    <!-- 项目介绍 -->
    <UCard class="mb-8 bg-gray-800/50 border-gray-700">
      <template #header>
        <h2 class="text-xl font-semibold text-white">项目介绍</h2>
      </template>
      
      <div class="space-y-4 text-gray-300">
        <p>
          XL-ME-Frp-Launcher 是由 <strong class="text-primary-400">yealqp</strong> 使用 Tauri 2 框架开发的 ME-Frp 第三方客户端。
          界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">✨ 主要特性</h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>基于 Tauri 2 框架，性能优异</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>界面高仿官网样式，美观易用</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>提供官网没有的启停隧道功能</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>拥有开机自启动、系统托盘等功能</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>包体小巧，启动迅速</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持 Token 登录功能</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">🖥️ 系统要求</h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-computer-desktop" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Windows 10/11</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-computer-desktop" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Windows Server 2019/2022/2025</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-heroicons-globe-alt" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>需要安装 WebView2 运行时</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UCard>

    <!-- 预览图 -->
    <UCard class="mb-8 bg-gray-800/50 border-gray-700">
      <template #header>
        <h2 class="text-xl font-semibold text-white">预览图</h2>
      </template>
      
      <div class="relative rounded-lg overflow-hidden bg-gray-900/50">
        <!-- 图片容器 -->
        <div class="relative h-96 flex items-center justify-center">
          <img 
            :src="previewImages[currentImageIndex].src" 
            :alt="previewImages[currentImageIndex].alt" 
            class="max-w-full max-h-full object-contain cursor-pointer"
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
    <UCard class="mb-8 bg-gray-800/50 border-gray-700">
      <template #header>
        <h2 class="text-xl font-semibold text-white">下载安装</h2>
      </template>
      
      <div class="space-y-6">
        <div class="text-center">
          <UButton 
            size="lg" 
            color="primary"
            to="https://alist.yealqp.cn/"
            target="_blank"
          >
            <UIcon name="i-heroicons-arrow-down-tray" class="w-5 h-5 mr-2" />
            OpenList 下载
          </UButton>
          <p class="text-gray-400 text-sm mt-2">当前版本: v1.5.5</p>
        </div>
        
        <UAlert 
          color="yellow" 
          variant="soft" 
          class="mb-4"
          title="系统要求"
          description="本软件仅适用于 Windows 10, Windows 11, Windows Server 2019, 2022, 2025。在使用前请确认您的电脑上安装了 WebView2（WebView2 已经在 Windows 10 1803 以上和更高版本的 Windows 上默认安装）。"
        />
        
        <UAlert 
          color="blue" 
          variant="soft"
          title="使用说明"
          description="请使用 ME-Frp 官网账号登录。需要更多功能或报告 Bug 请向邮箱 yealqp@163.com 发送邮件。"
        />
        
        <div class="bg-gray-700/30 rounded-lg p-4">
          <h3 class="text-lg font-semibold text-white mb-3">安装步骤</h3>
          <ol class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>从官方链接下载适合您操作系统的安装包</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>运行安装程序，按照提示完成安装</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>启动程序，输入您的 ME-Frp 账户信息</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>开始使用，享受便捷的内网穿透服务</span>
            </li>
          </ol>
        </div>
      </div>
    </UCard>

    <!-- 更新记录 -->
    <UCard class="mb-8 bg-gray-800/50 border-gray-700">
      <template #header>
        <h2 class="text-xl font-semibold text-white">更新记录</h2>
      </template>
      
      <div class="space-y-6">
        <div v-for="update in updateHistory" :key="update.version" class="border-l-2 border-primary-500/30 pl-4">
          <div class="flex items-center space-x-2 mb-2">
            <h3 class="text-lg font-semibold text-white">{{ update.version }}</h3>
            <UBadge v-if="update.isLatest" variant="soft" color="green" size="sm">最新</UBadge>
          </div>
          <ul class="space-y-1 text-gray-300 text-sm">
            <li v-for="(change, index) in update.changes" :key="index" class="flex items-start space-x-2">
              <span class="text-primary-400 mt-1">•</span>
              <span v-html="change"></span>
            </li>
          </ul>
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
  title: 'XL-ME-Frp-Launcher 文档 - ME-Frp 第三方客户端联盟',
  meta: [
    { name: 'description', content: 'XL-ME-Frp-Launcher 详细使用文档，包含安装、配置和使用指南' }
  ]
})

// 预览图数据
const previewImages = [
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/login.png', alt: '登录界面' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/home.png', alt: '主页面' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/tunnel.png', alt: '隧道管理' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/node.png', alt: '节点选择' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/create.png', alt: '创建隧道' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/help.png', alt: '帮助页面' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/config.png', alt: '配置设置' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/about.png', alt: '关于页面' }
]

// 更新历史
const updateHistory = [
  {
    version: 'v1.5.5',
    isLatest: true,
    changes: [
      '创建隧道页面节点卡片添加VIP节点样式和逻辑，删除了创建HTTP/S隧道功能（我才发现不能用，先扔着）。'
    ]
  },
  {
    version: 'v1.5.4',
    changes: [
      '添加Token登录功能，减少冗余代码，修复了自动检查更新时弹出的新版本下载地址不正确的问题，优化QQ群聊按钮，添加二群相关按钮，优化后端逻辑。'
    ]
  },
  {
    version: 'v1.5.3',
    changes: [
      '修改新版本下载地址，修改了仙林云官网地址，在帮助页面图形化反馈卡片中添加新版本下载页按钮。'
    ]
  },
  {
    version: 'v1.5.2',
    changes: [
      '将隧道管理页面的编辑按钮移到更多选项卡中，将更多选项卡中的复制远程地址和详情按钮移到原编辑按钮位置。'
    ]
  },
  {
    version: 'v1.5.1',
    changes: [
      '添加复制隧道远程地址功能。'
    ]
  },
  {
    version: 'v1.5',
    changes: [
      '添加登录时的人机验证功能，感谢 <a href="https://github.com/LxHTT" target="_blank" class="text-primary-400 hover:text-primary-300">落雪无痕LxHTT</a> 提供了官网使用的人机验证逻辑。'
    ]
  },
  {
    version: 'v1.4',
    changes: [
      '添加<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">配置文件启动</code>功能，更新了软件内的新版本下载地址'
    ]
  },
  {
    version: 'v1.3',
    changes: [
      '修改<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">自启动隧道</code>逻辑，重构后端有关配置文件修改的部分'
    ]
  },
  {
    version: 'v1.2',
    changes: [
      '更新了软件内的新版本下载地址'
    ]
  },
  {
    version: 'v1.1',
    changes: [
      '修复了<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">隧道启动</code>时，使用的二进制文件路径不正确的问题，添加了<code class="bg-gray-700 px-1 py-0.5 rounded text-xs">单实例启动</code>的功能'
    ]
  },
  {
    version: 'v1.0',
    changes: [
      '发布'
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