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
              <AppFooter />
          </div>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { NConfigProvider, NMessageProvider, NNotificationProvider, NDialogProvider, darkTheme } from 'naive-ui'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    NConfigProvider,
    NMessageProvider,
    NNotificationProvider,
    NDialogProvider,
    AppHeader,
    AppFooter
  },
  setup() {
    const theme = ref(null)
    const activeKey = ref('home')
    const route = useRoute()

    // 自定义主题色
    const themeOverrides = {
      common: {
        primaryColor: '#19e3a2',
        primaryColorHover: '#19e3b7',
        primaryColorPressed: '#19e3c8',
        primaryColorSuppl: '#19e3a2'
      }
    }

    // 根据当前路由设置 activeKey
    const updateActiveKey = () => {
      if (route.path === '/') {
        activeKey.value = 'home'
      } else if (route.path === '/products') {
        activeKey.value = 'products'
      } else if (route.path === '/partners') {
        activeKey.value = 'partners'
      } else if (route.path === '/about') {
        activeKey.value = 'about'
      }
    }

    onMounted(() => {
      // 检测系统主题偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? darkTheme : null

      // 监听系统主题变化
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        theme.value = e.matches ? darkTheme : null
      })

      // 初始化 activeKey
      updateActiveKey()
    })

    // 监听路由变化
    watch(() => route.path, () => {
      updateActiveKey()
    })

    return {
      theme,
      activeKey,
      themeOverrides
    }
  }
}
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
  transition: background-color 0.3s ease, color 0.3s ease;
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
