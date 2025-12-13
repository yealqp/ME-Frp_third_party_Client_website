import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'highlight.js/styles/atom-one-dark.css'; // 引入样式
import hljsVuePlugin from '@highlightjs/vue-plugin';

// Naive UI
import {
  create,
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  NLoadingBarProvider,
} from "naive-ui";

const naive = create({
  components: [
    NConfigProvider,
    NMessageProvider,
    NNotificationProvider,
    NDialogProvider,
    NLoadingBarProvider,
  ],
});

const app = createApp(App);


app.use(hljsVuePlugin); // 注册插件
app.use(router);
app.use(naive);

app.mount("#app");
