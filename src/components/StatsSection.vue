<template>
  <section class="py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          class="text-center space-y-2"
        >
          <div class="flex justify-center mb-4">
            <div class="p-4 bg-primary-500/20 rounded-full">
              <UIcon :name="stat.icon" class="w-8 h-8 text-primary-400" />
            </div>
          </div>
          <div class="text-3xl md:text-4xl font-bold text-white">
            {{ stat.value }}
          </div>
          <div class="text-gray-400">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = ref([
  {
    icon: 'i-heroicons-cube',
    value: '3+',
    label: '客户端产品'
  },
  {
    icon: 'i-heroicons-users',
    value: '4+',
    label: '团队成员'
  },
  {
    icon: 'i-heroicons-code-bracket',
    value: '100%',
    label: '借助AI(?)'
  },
  {
    icon: 'i-heroicons-heart',
    value: '∞',
    label: '用户支持'
  }
])
</script>