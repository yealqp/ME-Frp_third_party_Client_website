<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <div id="app">
            <AppHeader v-model:activeKey="activeKey" />
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
            <!-- 在文档页面时不显示页脚 -->
            <AppFooter v-if="!isDocsPage" />
          </div>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  darkTheme,
} from "naive-ui";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NMessageProvider,
    NNotificationProvider,
    NDialogProvider,
    AppHeader,
    AppFooter,
  },
  setup() {
    const theme = ref(null);
    const activeKey = ref("home");
    const route = useRoute();

    // 自定义主题色
    const themeOverrides = {
      common: {
        primaryColor: "#19e3a2",
        primaryColorHover: "#19e3b7",
        primaryColorPressed: "#19e3c8",
        primaryColorSuppl: "#19e3a2",
      },
    };

    // 判断当前是否为文档页面
    const isDocsPage = computed(() => {
      return route.path.startsWith("/docs");
    });

    // 根据当前路由设置 activeKey
    const updateActiveKey = () => {
      if (route.path === "/") {
        activeKey.value = "home";
      } else if (route.path === "/products") {
        activeKey.value = "products";
      } else if (route.path === "/partners") {
        activeKey.value = "partners";
      } else if (route.path === "/about") {
        activeKey.value = "about";
      }
    };

    /**
     * 强制站点使用深色主题：统一为 Naive UI 的 darkTheme，
     * 不再跟随系统主题变化，确保主色调始终为黑色。
     */
    function setAlwaysDarkTheme() {
      theme.value = darkTheme;
    }

    onMounted(() => {
      setAlwaysDarkTheme();
      updateActiveKey();
    });

    // 监听路由变化
    watch(
      () => route.path,
      () => {
        updateActiveKey();
      },
    );

    return {
      theme,
      activeKey,
      themeOverrides,
      isDocsPage,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background: #000000 !important;
  color: #ffffff;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.app-container {
  background: #000000;
  color: #ffffff;
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  background: #000000;
}

/* 路由过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
