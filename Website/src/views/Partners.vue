<template>
  <div class="partners-page">
    <n-layout>
      <n-layout-content>
        <div class="hero-section">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">
                <n-gradient-text gradient="linear-gradient(135deg, #19e3a2 0%, #16d195 100%)">
                  合作伙伴
                </n-gradient-text>
              </h1>
              <p class="hero-subtitle">携手共创，共赢未来</p>
            </div>
          </div>
        </div>

        <div class="content-container">
          <n-card title="战略合作伙伴" class="section-card" :bordered="false">
            <template #header-extra>
              <n-icon size="20" color="#19e3a2">
                <BusinessIcon />
              </n-icon>
            </template>

            <div class="partners-grid">
              <div class="partner-card" v-for="partner in strategicPartners" :key="partner.id">
                <div class="partner-logo">
                  <img :src="partner.logo" :alt="partner.name" @error="handleImageError" />
                  <div class="partner-fallback">{{ partner.name.charAt(0) }}</div>
                </div>
                <div class="partner-info">
                  <h3>{{ partner.name }}</h3>
                </div>
                <div class="partner-actions" v-if="partner.website">
                  <n-button text type="primary" @click="openLink(partner.website)">
                    <template #icon>
                      <n-icon>
                        <LinkIcon />
                      </n-icon>
                    </template>
                    访问官网
                  </n-button>
                </div>
              </div>
            </div>
          </n-card>

          <n-card v-if="techPartners.length > 0" title="技术合作伙伴" class="section-card" :bordered="false">
            <template #header-extra>
              <n-icon size="20" color="#19e3a2">
                <CodeIcon />
              </n-icon>
            </template>

            <div class="partners-grid">
              <div class="partner-card" v-for="partner in techPartners" :key="partner.id">
                <div class="partner-logo">
                  <img :src="partner.logo" :alt="partner.name" @error="handleImageError" />
                  <div class="partner-fallback">{{ partner.name.charAt(0) }}</div>
                </div>
                <div class="partner-info">
                  <h3>{{ partner.name }}</h3>
                </div>
                <div class="partner-actions" v-if="partner.website">
                  <n-button text type="primary" @click="openLink(partner.website)">
                    <template #icon>
                      <n-icon>
                        <LinkIcon />
                      </n-icon>
                    </template>
                    访问官网
                  </n-button>
                </div>
              </div>
            </div>
          </n-card>

          <n-card title="社区合作伙伴" class="section-card" :bordered="false">
            <template #header-extra>
              <n-icon size="20" color="#19e3a2">
                <PeopleIcon />
              </n-icon>
            </template>

            <div class="partners-grid">
              <div class="partner-card" v-for="partner in communityPartners" :key="partner.id">
                <div class="partner-logo">
                  <img :src="partner.logo" :alt="partner.name" @error="handleImageError" />
                  <div class="partner-fallback">{{ partner.name.charAt(0) }}</div>
                </div>
                <div class="partner-info">
                  <h3>{{ partner.name }}</h3>
                </div>
                <div class="partner-actions" v-if="partner.website">
                  <n-button text type="primary" @click="openLink(partner.website)">
                    <template #icon>
                      <n-icon>
                        <LinkIcon />
                      </n-icon>
                    </template>
                    访问官网
                  </n-button>
                </div>
              </div>
            </div>
          </n-card>

          <n-card title="成为合作伙伴" class="section-card" :bordered="false">
            <template #header-extra>
              <n-icon size="20" color="#19e3a2">
                <HandshakeIcon />
              </n-icon>
            </template>

            <div class="partnership-info">
              <div class="partnership-content">
                <p>我们欢迎志同道合的组织和个人与我们建立合作关系，共同推动 Minecraft 服务器生态的发展。</p>

                <div class="partnership-contact">
                  <n-button type="primary" size="large" @click="openLink('mailto:services@mcsl.com.cn')">
                    <template #icon>
                      <n-icon>
                        <MailIcon />
                      </n-icon>
                    </template>
                    联系我们
                  </n-button>
                </div>
              </div>
            </div>
          </n-card>
        </div>
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script>
import {
  NLayout,
  NLayoutContent,
  NCard,
  NButton,
  NIcon,
  NGradientText
} from 'naive-ui'
import {
  Business as BusinessIcon,
  Code as CodeIcon,
  People as PeopleIcon,
  Link as LinkIcon,
  Checkmark as CheckmarkIcon,
  Mail as MailIcon
} from '@vicons/ionicons5'
import { Link as HandshakeIcon } from '@vicons/ionicons5'

export default {
  name: 'Partners',
  components: {
    NLayout,
    NLayoutContent,
    NCard,
    NButton,
    NIcon,
    NGradientText,
    BusinessIcon,
    CodeIcon,
    PeopleIcon,
    LinkIcon,
    HandshakeIcon,
    CheckmarkIcon,
    MailIcon
  },
  setup() {
    const strategicPartners = [
      {
        id: 1,
        name: '阜阳市波比网络科技有限公司',
        logo: 'https://img.fastmirror.net/s/2025/07/22/687f88c27f39b.jpg',
        website: 'http://www.blbilink.com'
      }
    ]

    const communityPartners = [
      {
        id: 1,
        name: 'MSL 开发组',
        logo: 'https://mslmc.cn/logo.png',
        website: 'https://www.mslmc.cn/'
      },
      {
        id: 2,
        name: '内网穿透联盟 CFU',
        logo: 'https://img.fastmirror.net/s/2025/07/22/687f8d53e18f5.png',
        website: 'https://www.xn--v6qw21h0gd43u.xn--fiqs8s/'
      },
    ]

    const techPartners = [
      {
        id: 1,
        name: '幻缘网络 MagicEdge Network',
        logo: 'https://img.fastmirror.net/s/2025/07/14/68740bbd67d18.png',
        website: 'https://www.menetx.com/'
      },
      {
        id: 2,
        name: '乐青团队 LoCyan',
        logo: 'https://www.locyan.cn/upload/favicon.ico',
        website: 'https://www.locyan.cn/'
      },
      {
        id: 3,
        name: '裕米云',
        logo: 'https://img.fastmirror.net/s/2025/07/22/687f8c75dbb2a.png',
        website: 'https://comcorn.cn/'
      },
    ]

    const openLink = (url) => {
      try {
        window.open(url, '_blank', 'noopener,noreferrer')
      } catch (error) {
        console.error('Failed to open link:', error)
        const newWindow = window.open()
        if (newWindow) {
          newWindow.location.href = url
        }
      }
    }

    const handleImageError = (event) => {
      const img = event.target
      const fallback = img.nextElementSibling
      if (fallback) {
        img.style.display = 'none'
        fallback.style.display = 'flex'
      }
    }

    return {
      strategicPartners,
      techPartners,
      communityPartners,
      openLink,
      handleImageError
    }
  }
}
</script>

<style scoped>
.partners-page {
  min-height: 100vh;
  background: var(--n-body-color);
}

.hero-section {
  position: relative;
  height: 50vh;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  overflow: hidden;
}

.hero-content {
  text-align: center;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 24px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.content-container {
  position: relative;
  z-index: 5;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
  background: var(--n-body-color);
}

.section-card {
  background: var(--n-card-color);
  border-radius: 16px;
  box-shadow: var(--n-box-shadow-1);
  margin-bottom: 32px;
  transition: all 0.3s ease;
}

.section-card:hover {
  box-shadow: var(--n-box-shadow-2);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.partner-card {
  background: var(--n-color);
  border: 1px solid var(--n-border-color);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
}

.partner-card:hover {
  box-shadow: var(--n-box-shadow-2);
}

.partner-logo {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--n-border-color);
}

.partner-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.partner-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background: #19e3a2;
  color: white;
  font-weight: bold;
  font-size: 24px;
}

.partner-info {
  text-align: center;
  margin-bottom: 16px;
  flex: 1;
}

.partner-info h3 {
  font-size: 1.2rem;
  margin: 0;
  color: var(--n-text-color);
}

.partner-actions {
  text-align: center;
}

.partnership-info {
  margin-top: 24px;
}

.partnership-content>p {
  color: var(--n-text-color-2);
  line-height: 1.6;
  margin-bottom: 32px;
}

.partnership-contact {
  text-align: center;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .content-container {
    padding: 32px 16px;
  }

  .partners-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .partner-card {
    padding: 20px;
  }

  .partner-logo {
    width: 60px;
    height: 60px;
  }

  .partner-fallback {
    font-size: 18px;
  }
}
</style>
