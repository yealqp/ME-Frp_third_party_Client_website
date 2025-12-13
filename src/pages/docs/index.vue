<template>
  <div>
    <!-- 文档首页内容 -->
    <div class="space-y-8">
      <!-- 欢迎标题 -->
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
          📚 文档中心
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          欢迎来到 ME-Frp 第三方客户端联盟文档中心，这里有详细的使用指南和开发文档
        </p>
      </div>

      <!-- 项目介绍 -->
      <UCard class="bg-gray-800/50 border-gray-700">
        <template #header>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-information-circle" class="w-6 h-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">项目介绍</h2>
          </div>
        </template>

        <div class="space-y-6 text-gray-300 leading-relaxed">
          <p class="text-lg">
            <strong class="text-primary-400">ME-Frp TPCA</strong> 
            (ME-Frp Third-Party Client Alliance) 是一个专注于 ME-Frp 第三方客户端开发的社区组织。
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-white mb-3">🎯 我们的目标</h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start space-x-2">
                  <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>为用户提供更好的 ME-Frp 使用体验</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>开发多样化的第三方客户端</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-heroicons-check-circle" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>促进开源社区的发展</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-white mb-3">🚀 主要产品</h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start space-x-2">
                  <UIcon name="i-heroicons-cube" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>XL-ME-Frp-Launcher (Tauri)</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-heroicons-cube" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>LX-ME-Frp-Launcher (易语言)</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-heroicons-cube" class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>Plain ME Frp Launcher (.NET)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </UCard>

      <!-- 快速开始 -->
      <UCard class="bg-gray-800/50 border-gray-700">
        <template #header>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-rocket-launch" class="w-6 h-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">快速开始</h2>
          </div>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="(step, index) in quickStartSteps" 
            :key="step.title"
            class="text-center space-y-4 p-4 rounded-lg bg-gray-700/30"
          >
            <div class="flex justify-center">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 text-lg font-bold">
                {{ index + 1 }}
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white">{{ step.title }}</h3>
            <p class="text-gray-300 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </UCard>

      <!-- 客户端文档链接 -->
      <UCard class="bg-gray-800/50 border-gray-700">
        <template #header>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-document-text" class="w-6 h-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">客户端文档</h2>
          </div>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="client in clients" 
            :key="client.id"
            :to="client.path"
            class="block p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors border border-gray-600 hover:border-primary-500/50"
          >
            <div class="flex items-center space-x-3 mb-3">
              <img :src="client.icon" :alt="client.name" class="w-8 h-8 rounded" />
              <h3 class="font-semibold text-white">{{ client.name }}</h3>
            </div>
            <p class="text-gray-300 text-sm mb-3">{{ client.description }}</p>
            <div class="flex items-center text-primary-400 text-sm">
              <span>查看文档</span>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
            </div>
          </NuxtLink>
        </div>
      </UCard>

      <!-- 联系我们 -->
      <UCard class="bg-gray-800/50 border-gray-700">
        <template #header>
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-chat-bubble-left-right" class="w-6 h-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">需要帮助？</h2>
          </div>
        </template>

        <div class="text-center space-y-4">
          <p class="text-gray-300">
            如果您在使用过程中遇到问题，或者有任何建议，欢迎通过以下方式联系我们
          </p>
          
          <div class="flex justify-center space-x-4">
            <UButton 
              variant="outline" 
              color="primary"
              to="https://github.com/yealqp/ME-Frp_third_party_Client_website"
              target="_blank"
            >
              <UIcon name="i-simple-icons-github" class="w-4 h-4 mr-2" />
              GitHub
            </UButton>
            
            <UButton 
              variant="outline" 
              color="primary"
              to="/about"
            >
              <UIcon name="i-heroicons-information-circle" class="w-4 h-4 mr-2" />
              关于我们
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
// 使用文档布局
definePageMeta({
  layout: 'docs'
})

// 页面元数据
useHead({
  title: '文档中心 - ME-Frp 第三方客户端联盟',
  meta: [
    { name: 'description', content: 'ME-Frp 第三方客户端联盟文档中心，包含所有产品的详细使用指南' }
  ]
})

const clients = [
  {
    id: 'xl',
    name: 'XL-ME-Frp-Launcher',
    path: '/docs/xl',
    description: '基于 Tauri 框架开发的跨平台客户端，界面美观，性能优异',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/xl_icon.webp'
  },
  {
    id: 'lx',
    name: 'LX-ME-Frp-Launcher',
    path: '/docs/lx',
    description: '使用易语言开发的 Windows 客户端，界面高仿官方风格',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/lx_icon.webp'
  },
  {
    id: 'pml',
    name: 'Plain ME Frp Launcher',
    path: '/docs/pml',
    description: '基于 .NET 的跨平台客户端，支持多个操作系统',
    icon: 'https://image.mefrp-tpca.yealqp.cn/image/views/icon/pml_icon.webp'
  }
]

const quickStartSteps = [
  {
    title: '选择客户端',
    description: '根据您的操作系统和需求选择合适的客户端'
  },
  {
    title: '下载安装',
    description: '从官方渠道下载并安装客户端程序'
  },
  {
    title: '开始使用',
    description: '配置您的 ME-Frp 账户信息并开始使用'
  }
]
</script>