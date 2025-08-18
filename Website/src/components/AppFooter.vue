<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <p class="copyright">
          Copyright © 2022 - 2025 MCSL 开发组.
        </p>
        <p class="runtime">
          我们已奋斗 {{ runtimeText }}
        </p>
      </div>
      <div class="footer-right">
        <a target="_blank" href="https://beian.miit.gov.cn/" class="beian-link">
          鲁ICP备2023001164号-2
        </a>
        <div class="contact-links">
          <a target="_blank" href="https://github.com/MCSLTeam" class="contact-link">
            <n-icon size="24" class="contact-icon">
              <LogoGithub />
            </n-icon>
          </a>
          <a href="mailto:services@mcsl.com.cn" class="contact-link">
            <n-icon size="24" class="contact-icon">
              <Mail />
            </n-icon>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { NIcon } from 'naive-ui'
import { LogoGithub, Mail } from '@vicons/ionicons5'

export default {
  name: 'AppFooter',
  components: {
    NIcon,
    LogoGithub,
    Mail
  },
  setup() {
    const runtimeText = ref('')
    let timer = null

    const calculateRuntime = () => {
      const startTime = new Date('2022/08/27 22:25:27')
      const now = new Date()
      const diff = now - startTime

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      runtimeText.value = `${days}天${hours}小时${minutes}分钟${seconds}秒`
    }

    onMounted(() => {
      calculateRuntime()
      timer = setInterval(calculateRuntime, 1000)
    })

    onUnmounted(() => {
      if (timer) {
        clearInterval(timer)
      }
    })

    return {
      runtimeText
    }
  }
}
</script>

<style scoped>
/* Footer 样式 */
.footer {
  padding-top: 10px;
  color: #f0f0f0;
  background-color: #18181c;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.n-theme-dark) .footer {
  background-color: #f4f4f5;
  color: #2c2c2c;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-left p {
  margin: 8px 0;
  color: rgba(240, 240, 240, 0.7);
  font-size: 0.9rem;
}

:deep(.n-theme-dark) .footer-left p {
  color: rgba(44, 44, 44, 0.7);
}

.footer-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
}

.copyright {
  margin: 0;
  font-size: 14px;
  color: rgba(240, 240, 240, 0.7);
  line-height: 1.2;
}

:deep(.n-theme-dark) .copyright {
  color: rgba(44, 44, 44, 0.7);
}

.runtime {
  margin: 0;
  font-size: 12px;
  color: rgba(240, 240, 240, 0.7);
  line-height: 1.1;
}

:deep(.n-theme-dark) .runtime {
  color: rgba(44, 44, 44, 0.7);
}

.beian-link {
  font-size: 14px;
  color: rgba(240, 240, 240, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
}

.beian-link:hover {
  color: #19e8a2;
}

:deep(.n-theme-dark) .beian-link {
  color: rgba(44, 44, 44, 0.7);
}

:deep(.n-theme-dark) .beian-link:hover {
  color: #19e8a2;
}

.contact-links {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}

.contact-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(240, 240, 240, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 6px;
}

.contact-link:hover {
  color: #19e8a2;
  background-color: rgba(25, 232, 162, 0.1);
}

:deep(.n-theme-dark) .contact-link {
  color: rgba(44, 44, 44, 0.7);
}

:deep(.n-theme-dark) .contact-link:hover {
  color: #19e8a2;
  background-color: rgba(25, 232, 162, 0.1);
}

.contact-icon {
  flex-shrink: 0;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-left,
  .footer-right {
    width: 100%;
  }

  .footer-right {
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }

  .footer-left {
    align-items: center;
  }

  .contact-links {
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .contact-link {
    padding: 8px;
  }

  .copyright {
    font-size: 12px;
  }

  .runtime {
    font-size: 11px;
  }

  .beian-link {
    font-size: 12px;
  }

  .contact-link {
    font-size: 12px;
  }
}

.footer {
  padding-top: 10px;
  color: #f0f0f0;
  background-color: #18181c;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.n-theme-dark) .footer {
  background-color: #f4f4f5;
  color: #2c2c2c;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
