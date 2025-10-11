<template>
  <div class="docs-container">
    <!-- 左侧导航栏 -->
    <div class="docs-sidebar" :class="{ 'mobile-hidden': !showSidebar }">
      <div class="sidebar-header">
        <n-button text class="mobile-close-btn" @click="showSidebar = false">
          <n-icon size="20">
            <CloseIcon />
          </n-icon>
        </n-button>
      </div>

      <n-menu
        :value="activeKey"
        :options="menuOptions"
        :theme-overrides="menuThemeOverrides"
        @update:value="handleMenuSelect"
      />
    </div>

    <!-- 右侧内容区域 -->
    <div class="docs-content">
      <!-- 移动端菜单按钮 -->
      <div class="mobile-menu-btn">
        <n-button text @click="showSidebar = true">
          <n-icon size="20">
            <MenuIcon />
          </n-icon>
          菜单
        </n-button>
      </div>

      <!-- 文档内容 -->
      <div class="content-wrapper">
        <!-- 嵌套路由视图 -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, h } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NMenu, NCard, NButton, NIcon, NSpace, NDivider } from "naive-ui";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Document as DocumentIcon,
  Folder as FolderIcon,
} from "@vicons/ionicons5";

export default {
  name: "Docs",
  components: {
    NMenu,
    NCard,
    NButton,
    NIcon,
    NSpace,
    NDivider,
    MenuIcon,
    CloseIcon,
    DocumentIcon,
    FolderIcon,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const activeKey = ref("");
    const showSidebar = ref(false);

    // 菜单主题覆盖
    const menuThemeOverrides = {
      itemTextColor: "#f0f0f0",
      itemTextColorHover: "#19e8a2",
      itemTextColorActive: "#19e8a2",
      itemColorHover: "rgba(25, 232, 162, 0.1)",
      itemColorActive: "rgba(25, 232, 162, 0.15)",
      itemIconColor: "#f0f0f0",
      itemIconColorHover: "#19e8a2",
      itemIconColorActive: "#19e8a2",
      groupTextColor: "#a0a0a0",
    };

    // 菜单选项配置
    const menuOptions = [
      {
        label: "介绍",
        key: "intro",
        icon: () => h(NIcon, null, { default: () => h(DocumentIcon) }),
      },
      {
        label: "客户端文档",
        key: "clients",
        icon: () => h(NIcon, null, { default: () => h(FolderIcon) }),
        children: [
          {
            label: "XL-ME-Frp-Luncher",
            key: "xl",
            icon: () => h(NIcon, null, { default: () => h(DocumentIcon) }),
          },
          {
            label: "LX-ME-Frp-Luncher",
            key: "lx",
            icon: () => h(NIcon, null, { default: () => h(DocumentIcon) }),
          },
          {
            label: "Plain ME Frp Launcher",
            key: "qyf",
            icon: () => h(NIcon, null, { default: () => h(DocumentIcon) }),
          },
        ],
      },
    ];

    /**
     * 处理菜单选择事件
     * @param {string} key - 选中的菜单项key
     */
    const handleMenuSelect = (key) => {
      if (key === "intro") {
        // 跳转到介绍页面
        router.push("/docs");
        activeKey.value = key;
        // 移动端选择后自动关闭侧边栏
        if (window.innerWidth <= 768) {
          showSidebar.value = false;
        }
      } else if (["xl", "lx", "qyf"].includes(key)) {
        // 跳转到对应的独立路由
        router.push(`/docs/${key}`);
        activeKey.value = key;
        // 移动端选择后自动关闭侧边栏
        if (window.innerWidth <= 768) {
          showSidebar.value = false;
        }
      }
    };

    /**
     * 根据当前路由设置活跃菜单项
     */
    const updateActiveKey = () => {
      const currentPath = route.path;
      if (currentPath === "/docs") {
        activeKey.value = "intro";
      } else if (currentPath === "/docs/xl") {
        activeKey.value = "xl";
      } else if (currentPath === "/docs/lx") {
        activeKey.value = "lx";
      } else if (currentPath === "/docs/qyf") {
        activeKey.value = "qyf";
      } else {
        activeKey.value = "";
      }
    };

    // 监听路由变化
    watch(() => route.path, updateActiveKey, { immediate: true });

    // 组件挂载时的初始化
    onMounted(() => {
      updateActiveKey();

      // 监听来自子组件的侧边栏关闭事件
      window.addEventListener("closeSidebar", () => {
        showSidebar.value = false;
      });
    });

    return {
      activeKey,
      showSidebar,
      menuOptions,
      menuThemeOverrides,
      handleMenuSelect,
    };
  },
};
</script>

<style scoped>
.docs-container {
  display: flex;
  min-height: calc(100vh - 64px);
  margin-top: 64px;
  background: #18181c;
}

.docs-sidebar {
  width: 280px;
  background: #18181c;
  border-right: 1px solid #404040;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 64px;
  bottom: 0;
  z-index: 50;
  transition: transform 0.3s ease;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #18181c;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-header h3 {
  margin: 0;
  color: #18181c;
  font-size: 18px;
  font-weight: 600;
}

.mobile-close-btn {
  display: none;
  color: #f0f0f0;
}

.docs-content {
  flex: 1;
  margin-left: 280px;
  background: #18181c;
  min-height: 100%;
}

.mobile-menu-btn {
  display: none;
  padding: 16px 20px;
  border-bottom: 1px solid #404040;
}

.mobile-menu-btn .n-button {
  color: #f0f0f0;
}

.content-wrapper {
  padding: 0;
  max-width: 100%;
  background: #18181c;
}

.doc-content {
  background: #18181c;
  min-height: calc(100vh - 64px);
}

.welcome-content {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.welcome-content .n-card {
  background: #18181c;
  border: 1px solid #404040;
}

.welcome-content .n-card :deep(.n-card-header) {
  color: #f0f0f0;
  border-bottom: 1px solid #404040;
}

.welcome-content .n-card :deep(.n-card__content) {
  color: #d0d0d0;
}

.welcome-content h1 {
  color: #19e8a2;
  margin: 0;
  font-size: 28px;
}

.welcome-content h3 {
  color: #f0f0f0;
  margin: 20px 0 16px 0;
}

.welcome-content h4 {
  color: #19e8a2;
  margin: 0 0 8px 0;
}

.welcome-content p {
  line-height: 1.6;
  margin: 12px 0;
}

/* 深色模式菜单样式 */
:deep(.n-menu) {
  background: transparent;
  color: #f0f0f0;
}

:deep(.n-menu-item) {
  color: #f0f0f0;
}

:deep(.n-menu-item:hover) {
  background-color: rgba(25, 232, 162, 0.1);
  color: #19e8a2;
}

:deep(.n-menu-item.n-menu-item--selected) {
  background-color: rgba(25, 232, 162, 0.15);
  color: #19e8a2;
}

:deep(.n-menu-item-content-header) {
  color: #a0a0a0;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .docs-sidebar {
    transform: translateX(-100%);
  }

  .docs-sidebar:not(.mobile-hidden) {
    transform: translateX(0);
  }

  .docs-content {
    margin-left: 0;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-close-btn {
    display: block;
  }

  .welcome-content {
    padding: 20px;
  }

  .welcome-content h1 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .sidebar-header {
    padding: 16px;
  }

  .sidebar-header h3 {
    font-size: 16px;
  }

  .welcome-content {
    padding: 16px;
  }
}
</style>
