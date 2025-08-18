<template>
  <n-layout-header bordered class="header pc-header" :class="{ transparent: isTransparent }" style="user-select: none">
    <div class="header-content">
      <div class="logo" @click="goHome">
        <img src="https://images.mcsl.com.cn/new/MCSLTeam.webp" alt="MCSL" class="logo-icon" />
        <span class="logo-text">MCSL 开发组</span>
      </div>

      <div class="nav-links">
        <n-menu :value="activeKey" mode="horizontal" :options="menuOptions" class="desktop-menu"
          :theme-overrides="menuThemeOverrides" @update:value="handleMenuUpdate" />
      </div>
    </div>
  </n-layout-header>

  <n-layout-header bordered class="header mobile-header" :class="{ transparent: isTransparent }" style="user-select: none">
    <div class="mobile-header-content">
      <div class="logo" @click="goHome">
        <img src="https://images.mcsl.com.cn/new/MCSLTeam.webp" alt="MCSL" class="logo-icon" />
        <span class="logo-text">MCSL 开发组</span>
      </div>

      <n-popover trigger="click" placement="bottom-end" v-model:show="showMobileMenu"
        :theme-overrides="popoverThemeOverrides">
        <template #trigger>
          <n-button text class="menu-button" :theme-overrides="buttonThemeOverrides">
            <n-icon size="24">
              <MenuIcon />
            </n-icon>
          </n-button>
        </template>
        <div class="mobile-menu">
          <n-menu :value="activeKey" :options="menuOptions" :theme-overrides="menuThemeOverrides"
            @update:value="handleMobileMenuUpdate" />
        </div>
      </n-popover>
    </div>
  </n-layout-header>
</template>

<script>
import { h, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  NLayoutHeader,
  NMenu,
  NIcon,
  NPopover,
  NButton,
  NSpace
} from 'naive-ui'
import {
  Home as HomeIcon,
  Apps as ProductsIcon,
  InformationCircle as AboutIcon,
  People as PartnersIcon,
  Menu as MenuIcon
} from '@vicons/ionicons5'

export default {
  name: 'AppHeader',
  components: {
    NLayoutHeader,
    NMenu,
    NIcon,
    NPopover,
    NButton,
    NSpace,
    HomeIcon,
    ProductsIcon,
    AboutIcon,
    PartnersIcon,
    MenuIcon
  },
  props: {
    activeKey: {
      type: String,
      default: 'home'
    }
  },
  emits: ['update:activeKey'],
  setup(props, { emit }) {
    const router = useRouter()
    const route = useRoute()
    const showMobileMenu = ref(false)

    // 检测是否需要透明效果
    const isTransparent = computed(() => {
      const transparentRoutes = ['/', '/products']
      return transparentRoutes.includes(route.path)
    })

    // 强制深色模式的主题覆盖
    const menuThemeOverrides = {
      itemTextColor: '#ffffff',
      itemTextColorHover: '#19e8a2',
      itemTextColorActive: '#19e8a2',
      itemColorHover: 'rgba(25, 232, 162, 0.1)',
      itemColorActive: 'rgba(25, 232, 162, 0.15)',
      itemIconColor: '#ffffff',
      itemIconColorHover: '#19e8a2',
      itemIconColorActive: '#19e8a2'
    }

    const buttonThemeOverrides = {
      textColorText: '#ffffff',
      textColorTextHover: '#19e8a2',
      textColorTextPressed: '#19e8a2'
    }

    const popoverThemeOverrides = {
      color: '#48484e',
      textColor: '#f0f0f0',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
    }

    const menuOptions = [
      {
        label: '首页',
        key: 'home',
        icon: () => h(NIcon, null, { default: () => h(HomeIcon) })
      },
      {
        label: '产品',
        key: 'products',
        icon: () => h(NIcon, null, { default: () => h(ProductsIcon) })
      },
      {
        label: '合作伙伴',
        key: 'partners',
        icon: () => h(NIcon, null, { default: () => h(PartnersIcon) })
      },
      {
        label: '关于',
        key: 'about',
        icon: () => h(NIcon, null, { default: () => h(AboutIcon) })
      }
    ]

    const handleMenuUpdate = (key) => {
      emit('update:activeKey', key)
      if (key === 'home') {
        router.push('/')
      } else if (key === 'products') {
        router.push('/products')
      } else if (key === 'partners') {
        router.push('/partners')
      } else if (key === 'about') {
        router.push('/about')
      }
    }

    const handleMobileMenuUpdate = (key) => {
      showMobileMenu.value = false // 关闭移动端菜单
      handleMenuUpdate(key) // 复用桌面端的处理逻辑
    }

    const goHome = () => {
      emit('update:activeKey', 'home')
      router.push('/')
    }



    return {
      menuOptions,
      handleMenuUpdate,
      handleMobileMenuUpdate,
      showMobileMenu,
      goHome,
      menuThemeOverrides,
      buttonThemeOverrides,
      popoverThemeOverrides,
      isTransparent
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  color: #f0f0f0;
  background-color: rgba(72, 72, 68, 0.6);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

/* 首页和产品页面的磨砂透明效果 */
.header.transparent {
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

:deep(.n-theme-dark) .header {
  background-color: #f4f4f5;
  color: #2c2c2c;
}

:deep(.n-theme-dark) .header.transparent {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  display: flex;
  align-items: center;
}

.desktop-menu {
  display: flex;
  gap: 8px;
  align-items: center;
}

.pc-header {
  @media (max-width: 768px) {
    display: none;
  }
}

.mobile-header {
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
}

.mobile-header-content {
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.logo-icon {
  height: 32px;
  width: 32px;
  border-radius: 6px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: inherit;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.mobile-menu-item:hover {
  color: var(--n-primary-color);
  background-color: var(--n-primary-color-suppl);
}

.mobile-menu-item.active {
  color: var(--n-primary-color);
  background-color: var(--n-primary-color-suppl);
}


/* 移动端优化 */
@media (max-width: 768px) {
  .header-content {
    padding: 0 16px;
  }

  .logo-icon {
    height: 28px;
    width: 28px;
  }

  .logo-text {
    font-size: 18px;
  }

  .menu-button {
    color: rgba(255, 255, 255, 0.9);
    padding: 8px;
  }

  .mobile-menu {
    min-width: 160px;
    margin: -8px -16px;
  }

  .mobile-menu :deep(.n-menu) {
    background: transparent;
    border: none;
    box-shadow: none;
    --n-item-height: 32px;
  }

  .mobile-menu :deep(.n-menu-item) {
    font-size: 14px;
    color: #f0f0f0;
  }

  .mobile-menu :deep(.n-menu-item:hover) {
    color: #19e3a2;
  }

  .mobile-menu :deep(.n-menu-item.n-menu-item--selected) {
    background-color: rgba(25, 227, 162, 0.15);
    color: #19e3a2;
  }

  .mobile-menu :deep(.n-menu-item-content) {
    padding: 0;
    justify-content: flex-start;
  }
}
</style>
