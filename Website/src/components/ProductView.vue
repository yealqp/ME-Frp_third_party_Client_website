<template>
  <div class="product-container">
    <div
      v-for="(product, index) in products"
      :key="product.name"
      class="product-section"
      :ref="el => productRefs[index] = el"
    >
      <div class="product-background">
        <img :src="product.image" :alt="product.name" class="product-bg-image" />
        <div class="product-overlay"></div>
      </div>
      
      <div class="product-content" :class="getProductPositionClass(index)">
        <div class="product-info">
          <div class="product-icon">
            <img :src="product.icon" :alt="product.name" />
          </div>
          <h2 class="product-title">{{ product.name }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-actions">
            <n-button
              type="primary"
              size="medium"
              @click="openProductLink(product.link)"
              class="product-button"
            >
              <template #icon>
                <n-icon><LinkIcon /></n-icon>
              </template>
              访问产品
            </n-button>
          </div>
        </div>
      </div>
    </div>

    <div class="product-indicators">
      <div
        v-for="(product, index) in products"
        :key="`indicator-${index}`"
        class="indicator"
        :class="{ active: currentIndex === index }"
        @click="scrollToProduct(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { NButton, NIcon } from 'naive-ui'
import { Link as LinkIcon } from '@vicons/ionicons5'

export default {
  name: 'ProductView',
  components: {
    NButton,
    NIcon,
    LinkIcon
  },
  setup() {
    const products = ref([
      {
        name: 'MCServerLauncher 2',
        link: 'https://v2.mcsl.com.cn/',
        icon: 'https://images.mcsl.com.cn/new/MCSL2.webp',
        description: '一个简洁、全能的 Minecraft 开服器，MCSL开发组用 Python 倾心打造 2 年之作',
        image: 'https://images.mcsl.com.cn/new/mcsl2-preview.webp'
      },
      {
        name: 'MCServerLauncher Future',
        link: 'https://future.mcsl.com.cn/',
        icon: 'https://images.mcsl.com.cn/new/MCServerLauncherFuture.webp',
        description: 'MCSL 的全新版本。完全重新设计，功能全面，简单上手。(暂未完工)',
        image: 'https://images.mcsl.com.cn/new/bg.webp'
      },
      {
        name: 'MCSL-Sync',
        link: 'https://sync.mcsl.com.cn/',
        icon: 'https://images.mcsl.com.cn/new/MCSL-Sync.webp',
        description: '一个全面的 MC 服务器核心镜像站，提供超过 30 种服务器核心下载',
        image: 'https://images.mcsl.com.cn/new/mcsl-sync-preview.webp'
      }
    ])

    const productRefs = ref([])
    const currentIndex = ref(0)
    const isScrolling = ref(false)

    // 滚动到指定产品
    const scrollToProduct = (index) => {
      if (index >= 0 && index < products.value.length && productRefs.value[index]) {
        isScrolling.value = true
        currentIndex.value = index

        // 使用自定义快速滚动
        const targetElement = productRefs.value[index]
        const targetPosition = targetElement.offsetTop
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 1000
        let start = null

        const smoothScroll = (timestamp) => {
          if (!start) start = timestamp
          const progress = timestamp - start
          const percentage = Math.min(progress / duration, 1)

          // 使用easeOutQuart缓动函数，快速开始，平缓结束
          const easeOutQuart = 1 - Math.pow(1 - percentage, 4)

          window.scrollTo(0, startPosition + distance * easeOutQuart)

          if (progress < duration) {
            requestAnimationFrame(smoothScroll)
          } else {
            isScrolling.value = false
          }
        }

        requestAnimationFrame(smoothScroll)
      }
    }

    // 获取产品位置类名
    const getProductPositionClass = (index) => {
      const positions = ['bottom-left', 'top-right', 'bottom-right']
      return positions[index] || 'center'
    }

    // 打开产品链接
    const openProductLink = (link) => {
      try {
        window.open(link, '_blank', 'noopener,noreferrer')
      } catch (error) {
        console.error('Failed to open link:', error)
        // 备用方案：使用 location.href
        const newWindow = window.open()
        if (newWindow) {
          newWindow.location.href = link
        }
      }
    }

    // 处理滚轮事件
    const handleWheel = (event) => {
      if (isScrolling.value) {
        event.preventDefault()
        return
      }

      event.preventDefault()

      const delta = event.deltaY
      let newIndex = currentIndex.value

      if (delta > 0 && currentIndex.value < products.value.length - 1) {
        // 向下滚动
        newIndex = currentIndex.value + 1
      } else if (delta < 0 && currentIndex.value > 0) {
        // 向上滚动
        newIndex = currentIndex.value - 1
      }

      if (newIndex !== currentIndex.value) {
        currentIndex.value = newIndex
        scrollToProduct(newIndex)
      }
    }

    // 处理键盘事件
    const handleKeydown = (event) => {
      if (isScrolling.value) return

      switch (event.key) {
        case 'ArrowDown':
        case 'PageDown':
          event.preventDefault()
          if (currentIndex.value < products.value.length - 1) {
            currentIndex.value++
            scrollToProduct(currentIndex.value)
          }
          break
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault()
          if (currentIndex.value > 0) {
            currentIndex.value--
            scrollToProduct(currentIndex.value)
          }
          break
        case 'Home':
          event.preventDefault()
          currentIndex.value = 0
          scrollToProduct(0)
          break
        case 'End':
          event.preventDefault()
          currentIndex.value = products.value.length - 1
          scrollToProduct(products.value.length - 1)
          break
      }
    }

    // 处理触摸事件（移动端）
    let touchStartY = 0
    let touchEndY = 0

    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY
    }

    const handleTouchEnd = (event) => {
      if (isScrolling.value) return

      touchEndY = event.changedTouches[0].clientY
      const deltaY = touchStartY - touchEndY
      const threshold = 80 // 增加最小滑动距离，避免误触

      if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0 && currentIndex.value < products.value.length - 1) {
          // 向上滑动（下一个产品）
          currentIndex.value++
          scrollToProduct(currentIndex.value)
        } else if (deltaY < 0 && currentIndex.value > 0) {
          // 向下滑动（上一个产品）
          currentIndex.value--
          scrollToProduct(currentIndex.value)
        }
      }
    }

    const observeProducts = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = productRefs.value.indexOf(entry.target)
            if (index !== -1 && entry.isIntersecting && entry.intersectionRatio > 0.5) {
              currentIndex.value = index
            }
          })
        },
        {
          threshold: 0.5,
          rootMargin: '-10% 0px -10% 0px'
        }
      )

      productRefs.value.forEach((ref) => {
        if (ref) {
          observer.observe(ref)
        }
      })

      return observer
    }

    let observer = null

    onMounted(() => {
      // 延迟观察以确保DOM已渲染
      setTimeout(() => {
        observer = observeProducts()
      }, 100)

      // 添加事件监听器
      window.addEventListener('wheel', handleWheel, { passive: false })
      window.addEventListener('keydown', handleKeydown)
      window.addEventListener('touchstart', handleTouchStart, { passive: true })
      window.addEventListener('touchend', handleTouchEnd, { passive: true })

      // 禁用默认滚动，启用整页滚动
      document.body.style.overflow = 'hidden'
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }

      // 移除事件监听器
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)

      // 恢复默认滚动
      document.body.style.overflow = 'auto'
    })

    return {
      products,
      productRefs,
      currentIndex,
      scrollToProduct,
      getProductPositionClass,
      openProductLink
    }
  }
}
</script>

<style scoped>
.product-container {
  width: 100%;
}

.product-section {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.product-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.product-content {
  backdrop-filter: blur(3px);
  border-radius: 6px;
  position: absolute;
  z-index: 2;
  max-width: 500px;
  padding: 40px;
}

/* 产品位置样式 */
.product-content.bottom-left {
  bottom: 80px;
  left: 80px;
}

.product-content.top-right {
  top: 80px;
  right: 80px;
}

.product-content.bottom-right {
  bottom: 80px;
  right: 80px;
}

.product-content.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.product-icon {
  margin-bottom: 24px;
}

.product-icon img {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.product-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
}

.product-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin-bottom: 32px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  font-weight: 400;
}

.product-actions {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
}

.product-button {
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  background: linear-gradient(135deg, #19e8a2 0%, #16d195 100%);
  color: #000000;
  box-shadow: 0 8px 32px rgba(25, 232, 162, 0.3);
}

.product-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(25, 232, 162, 0.4);
  background: linear-gradient(135deg, #16d195 0%, #14c085 100%);
}

/* 导航指示器 */
.product-indicators {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.6);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.7);
}

.indicator.active {
  background: #19e8a2;
  border-color: #19e8a2;
  box-shadow: 0 0 12px rgba(25, 232, 162, 0.5);
}

/* 移动端优化 */
@media (max-width: 768px) {
  .product-content {
    padding: 10px;
    max-width: calc(100% - 20px);
  }

  /* 移动端靠下居中显示 */
  .product-content.bottom-left,
  .product-content.top-right,
  .product-content.bottom-right {
    position: absolute;
    top: auto;
    left: 50%;
    right: auto;
    bottom: 60px;
    transform: translateX(-50%);
    margin: 0;
  }

  .product-icon img {
    width: 64px;
    height: 64px;
  }

  .product-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .product-description {
    font-size: 1.1rem;
    margin-bottom: 28px;
  }

  .product-actions {
    justify-content: center;
  }

  .product-button {
    font-size: 16px;
  }

  /* 移动端指示器 */
  .product-indicators {
    right: 20px;
    gap: 10px;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }
}
</style>
