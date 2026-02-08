<template>
  <div>
    <!-- 加载状态 -->
    <div v-if="loading && !updates.length" class="p-6 text-center py-8">
      <UIcon name="i-lucide-loader-2" class="size-8 text-primary-400 animate-spin mx-auto mb-4" />
      <p class="text-gray-400">正在加载更新日志...</p>
    </div>

    <!-- 错误状态 -->
    <div v-else-if="error && !updates.length" class="p-6 text-center py-8">
      <div class="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
        <div class="flex items-start space-x-3">
          <UIcon name="i-lucide-alert-circle" class="size-5 text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 class="font-semibold text-red-400">获取更新日志失败</h4>
            <p class="text-gray-300 text-sm mt-1">{{ error }}，请稍后重试或联系管理员。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 更新日志内容 -->
    <div v-else class="p-6 space-y-6">
      <!-- 显示的更新日志 - 使用懒加载 -->
      <ChangelogCard
        v-for="update in displayedUpdates"
        :key="update.version"
        :update="update"
      />

      <!-- 加载更多按钮 -->
      <div v-if="hasMore" class="text-center pt-4">
        <UButton
          v-if="!loadingMore"
          variant="outline"
          color="primary"
          @click="loadMore"
        >
          <UIcon name="i-lucide-chevrons-down" class="size-4 mr-2" />
          加载更多 ({{ remainingCount }} 个版本)
        </UButton>
        <div v-else class="flex items-center justify-center gap-2 text-gray-400">
          <UIcon name="i-lucide-loader-2" class="size-4 animate-spin" />
          <span>加载中...</span>
        </div>
      </div>

      <!-- 已全部加载提示 -->
      <div v-else-if="updates.length > pageSize" class="text-center pt-4 text-gray-500 text-sm">
        <UIcon name="i-lucide-check-circle" class="size-4 inline-block mr-1" />
        已显示全部 {{ updates.length }} 个版本
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Update {
  version: string
  isLatest?: boolean
  date?: string
  description?: string
  note?: string
  codename?: string
  changes?: string[]
  notes?: string[]
}

const props = withDefaults(defineProps<{
  updates: Update[]
  loading: boolean
  error: string | null
  pageSize?: number
}>(), {
  pageSize: 5
})

// 分页配置
const currentPage = ref(1)
const loadingMore = ref(false)

// 显示的更新日志（分页）- 使用 shallowRef 优化性能
const displayedUpdates = computed(() => {
  return props.updates.slice(0, currentPage.value * props.pageSize)
})

// 是否还有更多
const hasMore = computed(() => {
  return displayedUpdates.value.length < props.updates.length
})

// 剩余数量
const remainingCount = computed(() => {
  return props.updates.length - displayedUpdates.value.length
})

// 加载更多 - 使用 requestAnimationFrame 优化
const loadMore = () => {
  loadingMore.value = true
  
  // 使用 requestAnimationFrame 确保流畅的动画
  requestAnimationFrame(() => {
    setTimeout(() => {
      currentPage.value++
      loadingMore.value = false
    }, 200)
  })
}

// 监听updates变化，重置分页
watch(() => props.updates, () => {
  currentPage.value = 1
}, { deep: false }) // 不需要深度监听
</script>

<style scoped>
/* 优化容器性能 */
.space-y-6 > * {
  contain: layout style;
}
</style>
