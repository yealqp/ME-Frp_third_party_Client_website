<template>
  <div class="app-container">
    <n-layout class="main-layout">
      <n-layout-content>
        <div class="hero-section hero-fullscreen">
          <n-carousel
            class="hero-carousel"
            :autoplay="true"
            :interval="2000"
            :show-dots="false"
            :show-arrow="true"
            :draggable="true"
            effect="card"
          >
            <div
              v-for="(image, index) in backgroundImages"
              :key="index"
              class="hero-slide"
              :style="{ backgroundImage: `url(${image})` }"
            ></div>
          </n-carousel>

          <div class="hero-content">
            <div class="hero-text">
              <span :style="{ fontSize: isMobile ? '32px' : '48px' }">
                MCSL 开发组
              </span>
              <div class="hero-subtitle-container">
                <transition name="fade" mode="out-in">
                  <p
                    :key="currentSubtitleIndex"
                    class="hero-subtitle"
                    :class="{ 'mobile-subtitle': isMobile }"
                  >
                    {{ subtitles[currentSubtitleIndex] }}
                  </p>
                </transition>
              </div>
            </div>

            <div class="hero-actions" :class="{ 'mobile-actions': isMobile }">
              <n-button
                type="info"
                size="large"
                @click="scrollToMembers"
                class="hero-button"
              >
                <template #icon>
                  <n-icon><PeopleIcon /></n-icon>
                </template>
                了解更多
              </n-button>
            </div>
          </div>
        </div>

        <MemberView />
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import MemberView from '../components/MemberView.vue'
import {
  NLayout,
  NLayoutContent,
  NButton,
  NIcon,
  NGradientText,
  NCarousel
} from 'naive-ui'
import {
  People as PeopleIcon
} from '@vicons/ionicons5'

export default {
  name: 'Home',
  components: {
    NLayout,
    NLayoutContent,
    NButton,
    NIcon,
    NGradientText,
    NCarousel,
    MemberView,
    PeopleIcon
  },
  setup() {
    const isMobile = ref(false)
    const screenWidth = ref(window.innerWidth)

    // 背景图片数组
    const backgroundImages = ref([
      'https://images.mcsl.com.cn/new/mcsl2-preview.webp',
      'https://images.mcsl.com.cn/new/bg.webp',
      'https://images.mcsl.com.cn/new/mcsl-sync-preview.webp'
    ])

    // subtitle轮播数组
    const subtitles = ref([
      "以心相面，从心出发。",
      "活着就是为了改变世界。",
      "即使无法掌握未来，也请不要忘了明天。",
      "Welcome to future.",
      "你若盛开，清风自来。",
      "不忘初心，方得始终。"
    ])

    const currentSubtitleIndex = ref(0)
    let subtitleTimer = null





    const checkScreenSize = () => {
      screenWidth.value = window.innerWidth
      isMobile.value = window.innerWidth < 768
    }

    // subtitle轮播逻辑
    const startSubtitleRotation = () => {
      subtitleTimer = setInterval(() => {
        currentSubtitleIndex.value = (currentSubtitleIndex.value + 1) % subtitles.value.length
      }, 3000) // 每3秒切换一次
    }

    const stopSubtitleRotation = () => {
      if (subtitleTimer) {
        clearInterval(subtitleTimer)
        subtitleTimer = null
      }
    }

    const scrollToMembers = () => {
      const membersSection = document.querySelector('.section-card')
      if (membersSection) {
        membersSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    onMounted(() => {
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
      startSubtitleRotation()
    })

    onUnmounted(() => {
      window.removeEventListener('resize', checkScreenSize)
      stopSubtitleRotation()
    })

    return {
      isMobile,
      backgroundImages,
      subtitles,
      currentSubtitleIndex,
      scrollToMembers
    }
  }
}


</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: var(--n-body-color);
  transition: background-color 0.3s var(--n-bezier);
}



.main-layout {
  background: transparent;
}

.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 0;
}

.hero-fullscreen {
  position: relative;
}

.hero-carousel {
  position: absolute;
  left: 0;
  width: 100%;
  height: calc(100vh + 64px);
  z-index: 1;
}

.hero-carousel .n-carousel__slides {
  height: calc(100vh + 64px) !important;
}

.hero-carousel .n-carousel__slide {
  height: calc(100vh + 64px) !important;
}

.hero-carousel .n-carousel__slide > div {
  height: 100% !important;
}

.hero-slide {
  width: 100% !important;
  height: calc(100vh + 64px) !important;
  background-size: cover !important;
  background-position: center top !important;
  background-repeat: no-repeat !important;
  background-attachment: local;
  filter: blur(4px);
  transform: scale(1.1); /* 稍微放大以避免模糊边缘 */
  min-height: calc(100vh + 64px) !important;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: left;
  padding: 60px;
  max-width: 600px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.hero-text {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 25px;
}

.hero-subtitle-container {
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.hero-subtitle {
  font-size: 20px;
  margin: 0;
  opacity: 0.95;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 300;
  letter-spacing: 0.5px;
}

.mobile-subtitle {
  font-size: 16px;
  line-height: 1.5;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.hero-actions {
  display: flex;
  justify-content: flex-start;
  align-items: left;
  margin-top: 0;
}

.hero-button {
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-button:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.content-container {
  position: relative;
  z-index: 5;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 24px 48px 24px;
  background: var(--n-body-color);
}

.section-card {
  margin-bottom: 32px;
  border-radius: 16px;
  box-shadow: var(--n-box-shadow-2);
  background: var(--n-color);
}

.message-form {
  margin-bottom: 24px;
}

.messages-container {
  margin-top: 24px;
}

.message-card {
  background: var(--n-color);
  border-radius: 12px;
  border: 1px solid var(--n-border-color);
}

.message-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.message-avatar {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background-color: #18a058;
  color: white;
  font-weight: bold;
}

.message-avatar img {
  border-radius: 20%;
}

.message-avatar-container {
  flex-shrink: 0;
}

.message-avatar-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20%;
  overflow: hidden;
  border: 2px solid var(--n-border-color);
  transition: all 0.3s ease;
}

.message-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20%;
}

.message-fallback-avatar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: #18a058;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-radius: 20%;
}

.message-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.message-content {
  margin: 0;
  line-height: 1.6;
  color: var(--n-text-color);
}

.empty-state {
  padding: 48px 0;
}

/* 中等屏幕优化 (768px - 1080px) */
@media (min-width: 768px) and (max-width: 1079px) {
  .members-container .n-grid {
    gap: 12px;
  }
}

/* 移动端优化 */
@media (max-width: 767px) {
  .hero-section {
    height: 100vh;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .hero-content {
    padding: 32px 24px;
    margin: 0 16px 40px 16px;
    max-width: calc(100% - 32px);
    text-align: left;
    min-height: auto;
  }

  .hero-text {
    margin-bottom: 24px;
  }

  .hero-subtitle-container {
    height: 50px;
    margin-top: 12px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .content-container {
    padding: 16px;
  }

  .hero-actions {
    padding: 0;
    justify-content: flex-start;
  }

  .hero-button {
    font-size: 15px;
  }
}



/* 超链接样式 */
.visit-link a {
  color: #18a058;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  word-break: break-all;
}

.visit-link a:hover {
  color: #36ad6a;
  border-bottom-color: #36ad6a;
  background-color: rgba(24, 160, 88, 0.1);
  padding: 2px 4px;
  border-radius: 4px;
}

.visit-link a:active {
  color: #0e7a3e;
  transform: translateY(1px);
}

/* 暗色主题下的链接样式 */
[data-theme="dark"] .visit-link a {
  color: #63e2b7;
}

[data-theme="dark"] .visit-link a:hover {
  color: #7fe7c4;
  border-bottom-color: #7fe7c4;
  background-color: rgba(99, 226, 183, 0.1);
}

[data-theme="dark"] .visit-link a:active {
  color: #4fd49a;
}

/* 团队成员卡片样式 */
.members-container {
  margin-top: 24px;
}

.member-card {
  background: var(--n-color);
  border-radius: 12px;
  border: 1px solid var(--n-border-color);
  transition: all 0.3s ease;
  overflow: hidden;
}

.member-card:hover {
  box-shadow: var(--n-box-shadow-2);
  transform: translateY(-2px);
}

.member-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.member-avatar-container {
  flex-shrink: 0;
}

.member-avatar-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--n-border-color);
  transition: all 0.3s ease;
}

.member-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.member-fallback-avatar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: #18a058;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.member-info strong {
  font-size: 16px;
  color: var(--n-text-color);
}

.member-role {
  margin: 0;
  font-size: 14px;
  color: var(--n-text-color-2);
  line-height: 1.4;
}

.member-actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
}

/* 移动端优化 */
@media (max-width: 767px) {

  /* 移动端链接优化 */
  .visit-link a {
    font-size: 14px;
    line-height: 1.5;
    display: inline-block;
    margin-top: 4px;
  }

  /* 移动端成员卡片优化 */
  .member-avatar-wrapper {
    width: 40px;
    height: 40px;
  }

  .member-fallback-avatar {
    font-size: 14px;
  }

  .member-info strong {
    font-size: 14px;
  }

  .member-role {
    font-size: 12px;
  }
}
</style>
