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
        name: '落雪无痕LxHTT',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3395314362&spec=4',
        role: '研发兼运维 / 创始人',
        link: 'https://github.com/LxHTT'
      },
      {
        name: '爱喝矿泉水',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2247176795&spec=4',
        role: '研发工程师 / 创始人',
        link: 'https://github.com/AresConnor'
      },
      {
        name: 'Z_Tsin',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3372523&spec=4',
        role: '运维工程师 / 创始人',
        link: 'https://github.com/ztsinsun'
      },
      {
        name: 'LoveChinaT',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3273789867&spec=4',
        role: '研发工程师 / 创始人',
        link: 'https://gitee.com/ct_zhiyu'
      },
      {
        name: '饼干',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3076823485&spec=4',
        role: '研发工程师 / 创始人',
        link: 'https://github.com/lgc2333'
      },
      {
        name: '锅盖',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2509043002&spec=4',
        role: '开发工程师 / 创始人',
        link: 'https://github.com/wyx55520'
      },
      {
        name: 'shenjack',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3695888&spec=4',
        role: '研发工程师',
        link: 'https://github.com/shenjackyuanjie'
      },
      {
        name: 'Tiger',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1577438625&spec=4',
        role: '研发工程师',
        link: 'https://github.com/Tigercrl'
      },
      {
        name: 'Mavis',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1530624156&spec=4',
        role: '研发兼运维',
        link: 'https://github.com/1530624156'
      },
      {
        name: '烟墨',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2315049216&spec=4',
        role: '开发兼运维',
        link: 'https://github.com/ltzXiaoYanMo'
      },
      {
        name: '本樱羽衫',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2151340746&spec=4',
        role: '国际化专员',
        link: 'https://github.com/lcix1145'
      },
      {
        name: 'kitUIN',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1585447424&spec=4',
        role: '创新建设者',
        link: 'https://github.com/kitUIN'
      },
      {
        name: '星姮十织',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3192145045&spec=4',
        role: '研发工程师',
        link: 'https://github.com/hengshizhi'
      },
      {
        name: '雪球',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2957202260&spec=4',
        role: '研发工程师',
        link: 'https://github.com/SnowballXueQiu'
      },
      {
        name: 'XieXiLin',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3068342155&spec=4',
        role: '规范化专员',
        link: 'https://github.com/XieXiLin2'
      },
      {
        name: 'Yurnu',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1487084645&spec=4',
        role: '创新开发者',
        link: 'https://github.com/StarryCamile'
      },
      {
        name: 'ZeroWolf',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3174788113&spec=4',
        role: '创新开发者',
        link: 'https://github.com/ZeroWolf233/'
      },
      {
        name: '阳帆',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3356136957&spec=4',
        role: '创新建设者',
        link: 'https://github.com/WolfYangFan'
      },
      {
        name: '小涵',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2104687126&spec=4',
        role: '开发工程师',
        link: 'https://github.com/XiaoHan-Creator'
      },
      {
        name: '括弧',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=183713750&spec=4',
        role: '研发兼运维',
        link: 'https://github.com/daizihan233'
      },
      {
        name: 'MRSlouzk',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3237231778&spec=4',
        role: '研发工程师',
        link: 'https://github.com/MRSlouzk'
      },
      {
        name: '水合',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3038094028&spec=4',
        role: '研发工程师 / 技术顾问',
        link: 'https://github.com/suisanka'
      },
      {
        name: 'tianxiu',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=794609509&spec=4',
        role: '研发工程师',
        link: 'https://github.com/tianxiu2b2t'
      },
      {
        name: '孤帆',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2101596336&spec=4',
        role: '开发工程师',
        link: 'https://github.com/Lonely-Sails/'
      },
      {
        name: '蓝冰',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3235325661&spec=4',
        role: '研发工程师',
        link: 'https://github.com/IcyBlue17'
      },
      {
        name: 'chenziqian0625',
        avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2675575791&spec=4',
        role: '创新建设者',
        link: 'https://github.com/chenziqian0625'
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
