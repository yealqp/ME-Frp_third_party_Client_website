/**
 * useScrollAnimation composable
 * 使用 Intersection Observer API 实现滚动触发动画
 * Requirements: 2.2 - 滚动触发动画
 */
import { ref, onMounted, onUnmounted } from 'vue'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

// 辅助函数：从 ref 获取实际的 DOM 元素
const getElement = (refValue: any): HTMLElement | null => {
  if (!refValue) return null
  // 如果是 DOM 元素，直接返回
  if (refValue instanceof HTMLElement) return refValue
  // 如果是 Vue 组件实例，获取其 $el
  if (refValue.$el) return refValue.$el instanceof HTMLElement ? refValue.$el : null
  return null
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options

  const elementRef = ref<HTMLElement | any>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  // 检查用户是否偏好减少动画
  const prefersReducedMotion = () => {
    if (import.meta.server) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const setupObserver = () => {
    // SSR 环境下直接显示
    if (import.meta.server) {
      isVisible.value = true
      return
    }

    // 如果用户偏好减少动画，直接显示元素
    if (prefersReducedMotion()) {
      isVisible.value = true
      return
    }

    // 检查 Intersection Observer API 是否可用
    if (typeof IntersectionObserver === 'undefined') {
      isVisible.value = true
      return
    }

    const element = getElement(elementRef.value)
    if (!element) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // 如果只触发一次，停止观察
            if (once && observer) {
              const el = getElement(elementRef.value)
              if (el) observer.unobserve(el)
            }
          } else if (!once) {
            isVisible.value = false
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)
  }

  onMounted(() => {
    setupObserver()
  })

  onUnmounted(() => {
    if (observer) {
      const element = getElement(elementRef.value)
      if (element) observer.unobserve(element)
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible
  }
}

/**
 * useScrollAnimationGroup composable
 * 用于一组元素的滚动动画，支持交错延迟
 */
export function useScrollAnimationGroup(_count: number, options: ScrollAnimationOptions & { staggerDelay?: number } = {}) {
  const { staggerDelay = 100, ...scrollOptions } = options
  
  const containerRef = ref<HTMLElement | any>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const prefersReducedMotion = () => {
    if (import.meta.server) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const setupObserver = () => {
    // SSR 环境下直接显示
    if (import.meta.server) {
      isVisible.value = true
      return
    }

    if (prefersReducedMotion()) {
      isVisible.value = true
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      isVisible.value = true
      return
    }

    const element = getElement(containerRef.value)
    if (!element) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (scrollOptions.once !== false && observer) {
              const el = getElement(containerRef.value)
              if (el) observer.unobserve(el)
            }
          }
        })
      },
      {
        threshold: scrollOptions.threshold || 0.1,
        rootMargin: scrollOptions.rootMargin || '0px 0px -50px 0px'
      }
    )

    observer.observe(element)
  }

  onMounted(() => {
    setupObserver()
  })

  onUnmounted(() => {
    if (observer) {
      const element = getElement(containerRef.value)
      if (element) observer.unobserve(element)
      observer.disconnect()
    }
  })

  // 计算每个元素的延迟
  const getItemDelay = (index: number) => {
    if (import.meta.server) return 0
    return prefersReducedMotion() ? 0 : index * staggerDelay
  }

  return {
    containerRef,
    isVisible,
    getItemDelay,
    staggerDelay
  }
}

export default useScrollAnimation
