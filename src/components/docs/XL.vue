<script setup>
import {
  NTag,
  NCard,
  NCarousel,
  NAlert,
  NButton,
  NSpace,
} from "naive-ui";
const title = "XL-ME-Frp-Luncher";
function ol() {
  window.open("https://alist.yealqp.cn/", "_blank");
}
</script>

<template>
  <NCard :bordered="true" class="dark-card">
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
    <div class="section">
      <h2>技术栈</h2>
      <NSpace>
        <NTag :bordered="false" type="success">Vue3</NTag>
        <NTag :bordered="false" type="info">TypeScript</NTag>
        <NTag :bordered="false" type="warning">Naive UI</NTag>
        <NTag :bordered="false" type="error">Vite</NTag>
        <NTag :bordered="false" type="info">Tauri 2</NTag>
        <NTag :bordered="false" type="error">Rust</NTag><n-divider vertical />
      </NSpace>
    </div>
    <div class="section">
      <h2>简介</h2>

      <div class="update-version">
        <ul>
          <li>
            本客户端由 yealqp 使用
            <n-tag type="primary" size="small" :bordered="false">Tauri 2</n-tag>
            开发
          </li>
          <li>
            界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。
          </li>
          <li>提供了官网没有的启停隧道的功能。</li>
          <li>拥有开机自启动, 系统托盘等功能。</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>预览图</h2>
      <NCarousel show-arrow autoplay>
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/login.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/home.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/tunnel.png"
        />
         <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/node.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/create.png"
        />
         <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/help.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/config.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/about.png"
        />
      </NCarousel>
    </div>

    <div class="section">
      <h2>下载</h2>
      <div class="download-container">
        <NButton @click="ol" type="primary"> OpenList </NButton>
      </div>
      <NAlert type="warning">
        注意: 本软件仅适于 Windows 10, Windows 11, Windows Server 2019, 2022,
        2025<br/>
        在使用前请确认您的电脑上安装了<a href="https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/?form=MA13LH#download" target="_blank">WebView2</a>  (WebView2已经在Windows10 1803以上和更高版本的Windows上默认安装。)<br/>
        请使用<a href="https://www.mefrp.com/" target="_blank">ME-Frp 官网</a
        >账号登录 <br/>
        需要更多功能或报告Bug 请向我们的邮箱
        <a href="mailto:yealqp@163.com">yealqp@163.com</a> 发送邮件
      </NAlert>
    </div>

    <div class="section">
      <h2>更新记录</h2>
      <div class="updates">
        <div class="update-version">
          <h3>v1.5.4</h3>
          <ul>
            <li>
              添加Token登录功能，减少冗余代码，修复了自动检查更新时弹出的新版本下载地址不正确的问题，优化QQ群聊按钮，添加二群相关按钮，优化后端逻辑。
            </li>
          </ul>
        </div>
        <div class="update-version">
          <h3>v1.5.3</h3>
          <ul>
            <li>
              修改新版本下载地址，修改了仙林云官网地址，在帮助页面图形化反馈卡片中添加新版本下载页按钮。
            </li>
          </ul>
        </div>
        <div class="update-version">
          <h3>v1.5.2</h3>
          <ul>
            <li>
              将隧道管理页面的编辑按钮移到更多选项卡中，将更多选项卡中的复制远程地址和详情按钮移到原编辑按钮位置。
            </li>
          </ul>
        </div>
        <div class="update-version">
          <h3>v1.5.1</h3>
          <ul>
            <li>添加复制隧道远程地址功能。</li>
          </ul>
        </div>
        <div class="update-version">
          <h3>v1.5</h3>
          <ul>
            <li>
              添加登录时的人机验证功能，感谢<a
                href="https://github.com/LxHTT"
                target="_blank"
                >落雪无痕LxHTT</a
              >提供了官网使用的人机验证逻辑。
            </li>
          </ul>
        </div>

        <div class="update-version">
          <h3>v1.4</h3>
          <ul>
            <li>
              添加<code>配置文件启动</code>功能，更新了软件内的新版本下载地址
            </li>
          </ul>
        </div>

        <div class="update-version">
          <h3>v1.3</h3>
          <ul>
            <li>
              修改<code>自启动隧道</code>逻辑，重构后端有关配置文件修改的部分
            </li>
          </ul>
        </div>

        <div class="update-version">
          <h3>v1.2</h3>
          <ul>
            <li>更新了软件内的新版本下载地址</li>
          </ul>
        </div>

        <div class="update-version">
          <h3>v1.1</h3>
          <ul>
            <li>
              修复了<code>隧道启动</code>时，使用的二进制文件路径不正确的问题，添加了<code>单实例启动</code>的功能
            </li>
          </ul>
        </div>

        <div class="update-version">
          <h3>v1.0</h3>
          <ul>
            <li>发布</li>
          </ul>
        </div>
      </div>
    </div>
  </NCard>
</template>
<style src="../../style.css"></style>
