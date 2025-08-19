<template>
  <div class="content-container">
    <n-card title="团队成员" class="section-card" :bordered="false">
      <template #header-extra>
        <n-icon size="20" color="#18a058">
          <PeopleIcon />
        </n-icon>
      </template>

      <div class="members-container">
        <n-grid :cols="gridCols" :x-gap="12" :y-gap="12">
          <n-grid-item v-for="member in members" :key="member.name">
            <n-card size="small" :bordered="false" class="member-card">
              <div class="member-header">
                <div class="member-avatar-container">
                  <div class="member-avatar-wrapper">
                    <img
                      :src="member.avatar"
                      :alt="`${member.name} Avatar`"
                      class="member-avatar-img"
                      @error="(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex' }"
                      @load="(e) => { e.target.style.display = 'block'; e.target.nextElementSibling.style.display = 'none' }"
                    />
                    <div class="member-fallback-avatar">
                      {{ member.name.charAt(0) }}
                    </div>
                  </div>
                </div>
                <div class="member-info">
                  <strong>{{ member.name }}</strong>
                  <p class="member-role">{{ member.role }}</p>
                </div>
                <div class="member-actions mobile-actions">
                  <n-button
                    text
                    type="primary"
                    size="small"
                    @click="openMemberLink(member.link)"
                  >
                    <template #icon>
                      <n-icon><GithubIcon /></n-icon>
                    </template>
                    GitHub
                  </n-button>
                </div>
              </div>
              <div class="member-actions desktop-actions">
                <n-button
                  text
                  type="primary"
                  size="small"
                  @click="openMemberLink(member.link)"
                >
                  <template #icon>
                    <n-icon><GithubIcon /></n-icon>
                  </template>
                  GitHub
                </n-button>
              </div>
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>
    </n-card>
    <n-card title="特别鸣谢" class="section-card" :bordered="false">
      <template #header-extra>
        <n-icon size="20" color="#18a058">
          <PeopleIcon />
        </n-icon>
      </template>

      <div class="members-container">
        <n-grid :cols="gridCols" :x-gap="12" :y-gap="12">
          <n-grid-item v-for="member in mcslmembers" :key="member.name">
            <n-card size="small" :bordered="false" class="member-card">
              <div class="member-header">
                <div class="member-avatar-container">
                  <div class="member-avatar-wrapper">
                    <img
                      :src="member.avatar"
                      :alt="`${member.name} Avatar`"
                      class="member-avatar-img"
                      @error="(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex' }"
                      @load="(e) => { e.target.style.display = 'block'; e.target.nextElementSibling.style.display = 'none' }"
                    />
                    <div class="member-fallback-avatar">
                      {{ member.name.charAt(0) }}
                    </div>
                  </div>
                </div>
                <div class="member-info">
                  <strong>{{ member.name }}</strong>
                  <p class="member-role">{{ member.role }}</p>
                </div>
                <div class="member-actions mobile-actions">
                  <n-button
                    text
                    type="primary"
                    size="small"
                    @click="openMemberLink(member.link)"
                  >
                    <template #icon>
                      <n-icon><GithubIcon /></n-icon>
                    </template>
                    GitHub
                  </n-button>
                </div>
              </div>
              <div class="member-actions desktop-actions">
                <n-button
                  text
                  type="primary"
                  size="small"
                  @click="openMemberLink(member.link)"
                >
                  <template #icon>
                    <n-icon><GithubIcon /></n-icon>
                  </template>
                  GitHub
                </n-button>
              </div>
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>
    </n-card>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import {
  NCard,
  NButton,
  NGrid,
  NGridItem,
  NIcon
} from 'naive-ui'
import {
  People as PeopleIcon,
  LogoGithub as GithubIcon
} from '@vicons/ionicons5'

export default {
  name: 'MemberView',
  components: {
    NCard,
    NButton,
    NGrid,
    NGridItem,
    NIcon,
    PeopleIcon,
    GithubIcon
  },
  setup() {
    const screenWidth = ref(window.innerWidth)
    
    const members = ref([
      {
        name: 'Yealqp',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1592239257&spec=4',
        role: '开发兼运维 / 创始人 / 成员',
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
      },
      {
        name: 'MR.苏',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2748874586&spec=4',
        role: '成员 / 敬请期待',
      }
    ])

    const mcslmembers = ref([
      {
        name: '落雪无痕LxHTT',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3395314362&spec=4',
        role: '原项目开发者',
        link: 'https://github.com/LxHTT'
      },
      {
        name: 'MCSLTeam-Website-Next',
        avatar: 'https://images.mcsl.com.cn/new/MCSLTeam.webp',
        role: '原项目',
        link: 'https://github.com/MCSLTeam/MCSLTeam-Website-Next'
      }
    ])

    // 计算网格列数 - 优化空间利用率
    const gridCols = computed(() => {
      if (screenWidth.value >= 900) {
        return 3  // 中等屏幕显示3列
      } else if (screenWidth.value >= 600) {
        return 2  // 小屏幕显示2列
      } else {
        return 1  // 移动端显示1列
      }
    })

    const checkScreenSize = () => {
      screenWidth.value = window.innerWidth
    }

    onMounted(() => {
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', checkScreenSize)
    })

    // 打开成员链接
    const openMemberLink = (link) => {
      try {
        window.open(link, '_blank', 'noopener,noreferrer')
      } catch (error) {
        console.error('Failed to open member link:', error)
        // 备用方案
        const newWindow = window.open()
        if (newWindow) {
          newWindow.location.href = link
        }
      }
    }

    return {
      members,
      mcslmembers,
      gridCols,
      openMemberLink
    }
  }
}
</script>

<style scoped>
.content-container {
  position: relative;
  z-index: 5;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 24px 48px 24px;
  background: var(--n-body-color);
}

.section-card {
  background: var(--n-card-color);
  border-radius: 16px;
  box-shadow: var(--n-box-shadow-1);
  transition: all 0.3s ease;
}

.section-card:hover {
  box-shadow: var(--n-box-shadow-2);
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
}

.member-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

/* 默认显示桌面端按钮，隐藏移动端按钮 */
.mobile-actions {
  display: none;
}

.desktop-actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
}

.member-avatar-container {
  flex-shrink: 0;
}

.member-avatar-wrapper {
  position: relative;
  width: 44px;
  height: 44px;
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
  gap: 2px;
  min-width: 0; /* 防止文字溢出 */
}

.member-info strong {
  font-size: 15px;
  color: var(--n-text-color);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-role {
  margin: 0;
  font-size: 13px;
  color: var(--n-text-color-2);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}



/* 超大屏幕优化 */
@media (min-width: 1400px) {
  .content-container {
    max-width: 1400px;
  }
}

/* 中等屏幕优化 */
@media (min-width: 600px) and (max-width: 899px) {
  .member-avatar-wrapper {
    width: 40px;
    height: 40px;
  }

  .member-info strong {
    font-size: 14px;
  }

  .member-role {
    font-size: 12px;
  }
}

/* 移动端优化 */
@media (max-width: 599px) {
  .content-container {
    padding: 16px;
  }

  .member-header {
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  .member-avatar-wrapper {
    width: 48px;
    height: 48px;
  }

  .member-fallback-avatar {
    font-size: 16px;
  }

  .member-info {
    flex: 1;
    margin-right: 12px;
  }

  .member-info strong {
    font-size: 14px;
  }

  .member-role {
    font-size: 12px;
  }

  /* 移动端显示右侧按钮，隐藏下方按钮 */
  .mobile-actions {
    display: flex;
    flex-shrink: 0;
  }

  .desktop-actions {
    display: none;
  }
}
</style>
