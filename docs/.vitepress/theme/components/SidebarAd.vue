<template>
  <div class="sidebar-banner">
    <a :href="adConfig.link" target="_blank" rel="noopener noreferrer" class="banner-link">
      <img :src="adConfig.image" :alt="adConfig.alt" class="banner-image" />
      <div class="banner-overlay">
        <span class="banner-text">{{ adConfig.text }}</span>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/**
 * 广告配置
 * @type {Object} adConfig - 广告配置对象
 * @property {string} image - 广告图片URL
 * @property {string} link - 点击跳转链接
 * @property {string} alt - 图片alt属性
 * @property {string} text - 广告文字
 */
const adConfig = ref({
  image: 'https://image.mefrp-tpca.yealqp.fun/image/xianlin2.png',
  link: 'https://qm.qq.com/cgi-bin/qm/qr?k=S5tzhFVCoN28LIyPA5BJEZ0EFayLz4zh&jump_from=webapi&authKey=/FxL2ZT41DaqB5gyb8f9jauks1L6b/143XAXv5z0MhYkET0OeVdyT+umItJVlzrL',
  alt: '仙林云计算',
  text: '仙林云计算'
})
</script>

<style scoped>
.sidebar-banner {
  margin: 16px 12px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.sidebar-banner:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.banner-link {
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.banner-link:hover .banner-image {
  transform: scale(1.05);
}

.banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.banner-link:hover .banner-overlay {
  opacity: 1;
}

.banner-text {
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* 深色模式适配 */
.dark .sidebar-banner {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.dark .sidebar-banner:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sidebar-banner {
    margin: 12px 8px;
  }
  
  .banner-text {
    font-size: 12px;
  }
}
</style>