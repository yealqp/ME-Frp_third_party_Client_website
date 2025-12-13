<template>
  <section class="py-16 lg:py-24 bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          团队成员
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          我们是一群热爱技术、勇于创新的开发者
        </p>
      </div>

      <!-- 成员网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <UCard 
          v-for="member in members" 
          :key="member.name"
          class="card-hover bg-gray-800/30 border-gray-700 text-center"
        >
          <div class="space-y-4">
            <!-- 头像 -->
            <div class="flex justify-center">
              <img 
                :src="member.avatar" 
                :alt="member.name"
                class="w-20 h-20 rounded-full border-2 border-primary-500/50"
                @error="handleImageError"
              >
            </div>

            <!-- 信息 -->
            <div>
              <h3 class="text-lg font-semibold text-white">{{ member.name }}</h3>
              <p class="text-sm text-gray-400">{{ member.role }}</p>
            </div>

            <!-- 链接 -->
            <UButton 
              variant="ghost" 
              color="primary"
              size="sm"
              :to="member.link"
              target="_blank"
            >
              <UIcon name="i-simple-icons-github" class="w-4 h-4 mr-2" />
              GitHub
            </UButton>
          </div>
        </UCard>
      </div>

      <!-- 特别鸣谢 -->
      <div class="border-t border-gray-800 pt-16">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-white mb-4">特别鸣谢</h3>
          <p class="text-gray-400">感谢以下个人和组织的支持</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard 
            v-for="sponsor in sponsors" 
            :key="sponsor.name"
            class="card-hover bg-gray-800/30 border-gray-700 text-center"
            :class="{ 'border-primary-500/50': sponsor.special }"
          >
            <div class="space-y-4">
              <!-- 头像 -->
              <div class="flex justify-center">
                <img 
                  :src="sponsor.avatar" 
                  :alt="sponsor.name"
                  class="w-16 h-16 rounded-full"
                  @error="handleImageError"
                >
              </div>

              <!-- 信息 -->
              <div>
                <h4 class="text-lg font-semibold text-white">{{ sponsor.name }}</h4>
                <p class="text-sm text-gray-400">{{ sponsor.role }}</p>
              </div>

              <!-- 特殊标记 -->
              <UBadge 
                v-if="sponsor.special" 
                variant="soft" 
                color="primary"
                size="sm"
              >
                特别赞助
              </UBadge>

              <!-- 链接 -->
              <UButton 
                variant="ghost" 
                color="primary"
                size="sm"
                :to="sponsor.link"
                target="_blank"
              >
                <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
                访问
              </UButton>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const members = ref([
  {
    name: 'Yealqp',
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1592239257&spec=4',
    role: 'DevOps / 创始人 / 成员',
    link: 'https://github.com/Yealqp'
  },
  {
    name: '灵弦MuaMua',
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=407176772&spec=4',
    role: '创始人 / 成员',
    link: 'https://github.com/lngxian'
  },
  {
    name: 'QYF',
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3561786358&spec=4',
    role: '创始人 / 成员',
    link: 'https://github.com/QYF-RYCBStudio'
  },
  {
    name: 'ZeroSnow',
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3976141098&spec=4',
    role: '联盟网盘维护者',
    link: 'https://github.com/chencomcdyun'
  }
])

const sponsors = ref([
  {
    name: '落雪无痕LxHTT',
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3395314362&spec=4',
    role: '原项目开发者',
    link: 'https://github.com/LxHTT',
    special: false
  },
  {
    name: 'MCSLTeam-Website-Next',
    avatar: 'https://avatars.githubusercontent.com/u/138136619?s=48&v=4',
    role: '原项目',
    link: 'https://github.com/MCSLTeam/MCSLTeam-Website-Next',
    special: false
  },
  {
    name: '仙林云计算',
    avatar: 'https://image.mefrp-tpca.yealqp.cn/image/xianlin.ico',
    role: '服务提供商',
    link: 'https://www.xianlin.cloud/',
    special: true
  }
])

const handleImageError = (event) => {
  // 图片加载失败时的处理
  event.target.style.display = 'none'
}
</script>