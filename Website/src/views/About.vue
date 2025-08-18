<template>
  <div class="about-page">
    <n-layout>
      <n-layout-content>
        <div class="hero-section">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">
                <n-gradient-text gradient="linear-gradient(135deg, #19e3a2 0%, #16d195 100%)">
                  关于我们
                </n-gradient-text>
              </h1>
              <p class="hero-subtitle">了解MCSL开发组的故事与使命</p>
            </div>
          </div>
        </div>

        <div class="content-container">
          <n-card title="我们是谁？" class="section-card" :bordered="false">
            <template #header-extra>
              <n-icon size="20" color="#19e3a2">
                <InfoIcon />
              </n-icon>
            </template>
            
            <div class="intro-content">
              <p class="intro-text">
                <strong>MCSL开发组</strong> 是自发性的、学生群体为主的社区开发组织。
              </p>
              
              <p class="intro-text">
                从 <strong>2022/08/27</strong> 的夜晚直至今日，在 Coding 路上不断学习、不断前行的身影，时时映在我们身上。
              </p>
              
              <p class="intro-text">
                我们是一位位不畏难、不退缩、勇创新、敢作为的伙伴携手共成的团体。现归属于<strong>阜阳市波比网络科技有限公司</strong>旗下。
              </p>
              
              <p class="intro-text">
                专注于<strong>Minecraft 服务器工具开发</strong>，拥有多项计算机软件著作权，并成功推出多款高口碑产品。
              </p>
            </div>
          </n-card>

          <n-card title="发展历程" class="section-card" :bordered="false">
            <template #header-extra>
              <n-icon size="20" color="#19e3a2">
                <TimeIcon />
              </n-icon>
            </template>
            
            <n-timeline>
              <n-timeline-item
                type="success"
                title="MCSL开发组成立"
                time="2022/08/27"
                content="在一个夜晚，一群热爱编程的学生聚集在一起，MCSL开发组正式成立"
              />

              <n-timeline-item
                type="info"
                title="MCSL 写下第一行代码"
                time="2022/08/20"
                content="MCSL 1 的第一行代码被写下，命运的齿轮悄然转动"
              />

              <n-timeline-item
                type="info"
                title="产品矩阵初具规模"
                time="2023/03/05"
                content="MCServerLauncher 2 正式发布，获得广泛好评"
              />

              <n-timeline-item
                type="warning"
                title="找到归宿"
                time="2024/01/20"
                content="正式归属于阜阳市波比网络科技有限公司"
              />

              <n-timeline-item
                type="success"
                title="从新出发"
                time="2024/04/05"
                content="MCServerLauncher Future 正式立项"
              />
            </n-timeline>
          </n-card>

          <n-card title="核心价值" class="section-card" :bordered="false">
            <template #header-extra>
              <n-icon size="20" color="#19e3a2">
                <HeartIcon />
              </n-icon>
            </template>
            
            <div class="values-grid">
              <div class="value-item">
                <div class="value-icon">
                  <n-icon size="32" color="#19e3a2">
                    <CodeIcon />
                  </n-icon>
                </div>
                <h3>不畏难</h3>
                <p>面对技术挑战，我们勇于探索，永不退缩</p>
              </div>
              
              <div class="value-item">
                <div class="value-icon">
                  <n-icon size="32" color="#19e3a2">
                    <RocketIcon />
                  </n-icon>
                </div>
                <h3>勇创新</h3>
                <p>持续创新，为用户提供更好的产品体验</p>
              </div>
              
              <div class="value-item">
                <div class="value-icon">
                  <n-icon size="32" color="#19e3a2">
                    <PeopleIcon />
                  </n-icon>
                </div>
                <h3>敢作为</h3>
                <p>积极行动，用实际成果证明我们的价值</p>
              </div>
              
              <div class="value-item">
                <div class="value-icon">
                  <n-icon size="32" color="#19e3a2">
                    <HandshakeIcon />
                  </n-icon>
                </div>
                <h3>同努力</h3>
                <p>团结协作，共同成长，共创美好未来</p>
              </div>
            </div>
          </n-card>

          <n-card title="联系我们" class="section-card" :bordered="false">
            <template #header-extra>
              <n-icon size="20" color="#19e3a2">
                <ContactIcon />
              </n-icon>
            </template>
            
            <div class="contact-content">
              <div class="contact-links">
                <n-button
                  type="primary"
                  size="large"
                  @click="openLink('https://github.com/MCSLTeam')"
                  class="contact-button"
                >
                  <template #icon>
                    <n-icon><GithubIcon /></n-icon>
                  </template>
                  &nbsp;&nbsp;GitHub&nbsp;
                </n-button>

                <n-button
                  type="primary"
                  size="large"
                  @click="openLink('https://afdian.com/a/lxhtt')"
                  class="contact-button afdian-button"
                >
                  <template #icon>
                    <div class="afdian-icon" v-html="afdianSvg"></div>
                  </template>
                  爱发电
                </n-button>

                <n-button
                  type="primary"
                  size="large"
                  @click="openLink('https://jq.qq.com/?_wv=1027&k=x2ISlviQ')"
                  class="contact-button qq-button"
                >
                  <template #icon>
                    <div class="qq-icon" v-html="qqSvg"></div>
                  </template>
                  QQ群
                </n-button>

                <n-button
                  type="primary"
                  size="large"
                  @click="openLink('mailto:services@mcsl.com.cn')"
                  class="contact-button"
                >
                  <template #icon>
                    <n-icon><MailIcon /></n-icon>
                  </template>
                  联系邮箱
                </n-button>
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
  NGradientText,
  NTimeline,
  NTimelineItem
} from 'naive-ui'
import {
  InformationCircle as InfoIcon,
  Time as TimeIcon,
  Heart as HeartIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  People as PeopleIcon,
  Call as ContactIcon,
  LogoGithub as GithubIcon,
  Globe as WebIcon,
  Mail as MailIcon,
  Link as HandshakeIcon
} from '@vicons/ionicons5'

export default {
  name: 'About',
  components: {
    NLayout,
    NLayoutContent,
    NCard,
    NButton,
    NIcon,
    NGradientText,
    NTimeline,
    NTimelineItem,
    InfoIcon,
    TimeIcon,
    HeartIcon,
    CodeIcon,
    RocketIcon,
    PeopleIcon,
    HandshakeIcon,
    ContactIcon,
    GithubIcon,
    WebIcon,
    MailIcon
  },
  setup() {
    const afdianSvg = `<svg t="1708356774339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5309" width="200" height="200" fill="currentColor"><path d="M390 489.68c-7.3-2.62-13.9-4-17.86-2.84a49.34 49.34 0 0 0 7.78 10.24z" p-id="5310"></path><path d="M845.08 658.82c-8.86-5.56-18.34-6.28-33.42-3.52-0.7 0.12-1.38 0-2 0a7.64 7.64 0 0 1-1.18 0c-22 1.74-39.88-18.74-43.36-23.1a17.1 17.1 0 0 1 2.74-24 17.3 17.3 0 0 1 24 2.72 46 46 0 0 0 7.4 7.1c21.58-47.2 35.18-101.52-2.54-156.64-61.38-89.74-145.84-134.44-258.22-136.66-34-0.66-74.54 0.94-117.58 2.62-99.84 4-170.66 5.48-210.48-6.76-0.42 0-0.82-0.3-1.26-0.44-11.46-3.66-20.46-8.48-26.54-14.86a17.08 17.08 0 0 1 24.68-23.6 20.44 20.44 0 0 0 3 2.2c15.06-13.2 37.48-24.36 58-34.34l6.76-3.28a269.88 269.88 0 0 0-63.84 15.72c-30.16 11.52-44 23.62-47.04 31.1-12.78 32 44.92 60.52 70.36 71.28 35.48 15 145.38 36 192.92 40.7 30 2.94 48.7 12 59.52 19.18 32-20.26 57.08-35.16 64.48-39.5 7.66-5.3 18.58-2 23.36 6a17.1 17.1 0 0 1-6 23.4c-91.5 53.86-234.74 148.82-254.58 190.04-6.92 15.82-10.2 44.96 4.24 73.26 20 39.16 69.16 68.32 142.2 84.28 162 35.44 276.74-36.46 302.84-72.6a37.08 37.08 0 0 1-7.02-6.66A17.08 17.08 0 0 1 783.8 662c3.44 4.18 21.52 9.68 32.34 12.98 5.84 1.8 11.7 3.6 17.12 5.52 8 2.78 16.74 2.62 22.8-0.42a10 10 0 0 0 5.38-5.64c1.16-3.8-4.62-8.2-16.36-15.62zM416 616a18.16 18.16 0 1 1 18.16-18.18A18.16 18.16 0 0 1 416 616z m171.24 54.48a18.16 18.16 0 1 1 18.16-18.18 18.16 18.16 0 0 1-18.16 18.14z" p-id="5311"></path><path d="M870.4 0H153.6A153.58 153.58 0 0 0 0 153.6v716.8A153.58 153.58 0 0 0 153.6 1024h716.8a153.58 153.58 0 0 0 153.6-153.6V153.6A153.58 153.58 0 0 0 870.4 0z m23.72 684.44A43.68 43.68 0 0 1 872.26 710l-0.8 0.42c-14.24 7.18-32.74 8-49.46 2.16-5.06-1.8-10.46-3.44-15.86-5.08l-11.38-3.6c-12.12 19.7-37.08 41.78-72.24 60.28-63.14 33.24-158.6 54.96-269.12 30.84-84.58-18.5-140.2-52.88-165.34-102.18-19.84-38.84-15.5-78.66-4.88-102.98 9.52-19.8 36.38-45.48 69.6-72-8.4-9.72-15.88-21.76-15.56-34a30 30 0 0 1 14-24.52c22.56-15.38 52.76-2.96 71.24 7.56 10.64-7.28 21.24-14.42 31.56-21.2a117.18 117.18 0 0 0-29.82-6.54c-45-4.46-161.6-25.8-202.9-43.28-100.36-42.44-98.72-90.46-88.8-115.34C150 236.4 248 210.2 293.26 211.22c21.54 0.48 34.64 7.12 39.04 19.74 8.38 21.62-16.96 33.8-49.12 49.46-8.42 4-18.12 8.82-27.24 13.76 45.74 3.78 113.02 1.16 163.58-0.84 43.54-1.74 84.68-3.36 119.58-2.68 122.54 2.44 218.7 53.34 285.78 151.54 43.84 64.14 30.96 128.7 10.72 178a59.5 59.5 0 0 1 26 8.62c15.6 9.84 41.62 26.14 32.52 55.62z" p-id="5312"></path></svg>`

    const qqSvg = `<svg t="1703170914412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5040" width="200" height="200" fill="currentColor"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="5041"></path></svg>`

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

    return {
      afdianSvg,
      qqSvg,
      openLink
    }
  }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: var(--n-body-color);
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
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
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 24px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Content Container */
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

/* 介绍内容 */
.intro-content {
  line-height: 1.8;
}

.intro-text {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: var(--n-text-color);
}

.intro-text:last-child {
  margin-bottom: 0;
}



/* 价值观网格 */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.value-item {
  text-align: center;
  padding: 24px;
  border-radius: 12px;
  background: var(--n-color);
  border: 1px solid var(--n-border-color);
  transition: all 0.3s ease;
}

.value-item:hover {
  box-shadow: var(--n-box-shadow-2);
}

.value-icon {
  margin-bottom: 16px;
}

.value-item h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: var(--n-text-color);
}

.value-item p {
  color: var(--n-text-color-2);
  line-height: 1.6;
  margin: 0;
}

/* 联系方式 */
.contact-content {
  text-align: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.contact-button {
  min-width: 160px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
}

.afdian-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.afdian-icon {
  color: currentColor;
}

.afdian-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.afdian-icon svg * {
  fill: currentColor !important;
}

.qq-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.qq-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.qq-icon svg * {
  fill: currentColor !important;
}


/* 移动端优化 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .content-container {
    padding: 32px 16px;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .contact-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    justify-items: center;
  }

  .contact-button {
    width: 100%;
    max-width: 160px;
  }
}
</style>
