<template>
  <div class="min-h-screen bg-gray-950">
    <!-- 导航栏 -->
    <AppHeader />

    <!-- 文档容器 -->
    <div class="flex pt-16">
      <!-- 左侧导航栏 -->
      <aside
        class="fixed left-0 top-16 bottom-0 w-64 bg-gray-900/50 border-r border-gray-800 overflow-y-auto z-40 transition-transform duration-300 -translate-x-full lg:translate-x-0"
        :class="{ 'translate-x-0': sidebarOpen }"
      >
        <div class="p-6">
          <h2 class="text-lg font-semibold text-white mb-4">文档导航</h2>

          <!-- 导航菜单 -->
          <nav class="space-y-2">
            <!-- 介绍 -->
            <div class="mb-4">
              <NuxtLink
                to="/docs"
                class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-gray-800/50 transition-all duration-200"
                :class="{
                  'text-primary-400 bg-gray-800/50': $route.path === '/docs',
                }"
              >
                <UIcon name="i-lucide-file-text" class="size-5" />
                <span>项目介绍</span>
              </NuxtLink>
            </div>

            <!-- 客户端文档 -->
            <div>
              <div
                class="flex items-center space-x-2 px-3 py-2 text-gray-400 text-sm font-medium"
              >
                <UIcon name="i-lucide-folder" class="size-4" />
                <span>客户端文档</span>
              </div>

              <div class="ml-4 space-y-1">
                <NuxtLink
                  v-for="client in clients"
                  :key="client.id"
                  :to="client.path"
                  class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-gray-800/50 transition-all duration-200"
                  :class="{
                    'text-primary-400 bg-gray-800/50':
                      $route.path === client.path,
                  }"
                >
                  <img
                    :src="client.icon"
                    :alt="client.name"
                    class="w-4 h-4 rounded"
                  />
                  <span class="text-sm">{{ client.name }}</span>
                </NuxtLink>
              </div>
            </div>

            <!-- 快速链接 -->
            <div class="mt-6 pt-4 border-t border-gray-800">
              <div
                class="flex items-center space-x-2 px-3 py-2 text-gray-400 text-sm font-medium mb-2"
              >
                <UIcon name="i-lucide-link" class="size-4" />
                <span>快速链接</span>
              </div>

              <div class="space-y-1">
                <a
                  href="https://github.com/yealqp/ME-Frp_third_party_Client_website"
                  target="_blank"
                  class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-gray-800/50 transition-all duration-200"
                >
                  <UIcon name="i-lucide-github" class="size-4" />
                  <span class="text-sm">GitHub 仓库</span>
                </a>

                <NuxtLink
                  to="/about"
                  class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-gray-800/50 transition-all duration-200"
                >
                  <UIcon
                    name="i-lucide-info"
                    class="size-4"
                  />
                  <span class="text-sm">关于我们</span>
                </NuxtLink>
                <NuxtLink
                  to="https://www.xianlin.cloud/"
                  class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-gray-800/50 transition-all duration-200"
                >
                  <img
                    src="https://image.mefrp-tpca.yealqp.cn/image/xianlin.ico"
                    alt="仙林云计算"
                    class="w-4 h-4 rounded"
                  />
                  <span class="text-sm">仙林云计算</span>
                </NuxtLink>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      <!-- 移动端遮罩 -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/50 z-30 lg:hidden"
        @click="sidebarOpen = false"
      ></div>

      <!-- 主要内容区域 -->
      <main class="flex-1 lg:ml-64">
        <!-- 移动端菜单按钮 -->
        <div class="lg:hidden p-4 border-b border-gray-800">
          <UButton
            variant="ghost"
            size="sm"
            @click="sidebarOpen = !sidebarOpen"
          >
            <UIcon name="i-lucide-menu" class="size-5 mr-2" />
            文档菜单
          </UButton>
        </div>

        <!-- 页面内容 -->
        <div class="px-4 sm:px-6 lg:px-8 py-8 max-w-5xl mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const sidebarOpen = ref(false);

const clients = [
  {
    id: "xl",
    name: "XL-ME-Frp-Launcher",
    path: "/docs/xl",
    icon: "https://image.mefrp-tpca.yealqp.cn/image/views/icon/xl_icon.webp",
  },
  {
    id: "lx",
    name: "LX-ME-Frp-Launcher",
    path: "/docs/lx",
    icon: "https://image.mefrp-tpca.yealqp.cn/image/views/icon/lx_icon.webp",
  },
  {
    id: "pml",
    name: "Plain ME Frp Launcher",
    path: "/docs/pml",
    icon: "https://image.mefrp-tpca.yealqp.cn/image/views/icon/pml_icon.webp",
  },
];

// 监听路由变化，关闭移动端侧边栏
watch(
  () => useRoute().path,
  () => {
    sidebarOpen.value = false;
  }
);
</script>
