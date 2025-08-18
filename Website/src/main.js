import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Naive UI
import {
  create,
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  NLoadingBarProvider
} from 'naive-ui'

const naive = create({
  components: [
    NConfigProvider,
    NMessageProvider,
    NNotificationProvider,
    NDialogProvider,
    NLoadingBarProvider
  ]
})

const app = createApp(App)

app.use(router)
app.use(naive)

app.mount('#app')
