<script setup>
import {
  NTag,
  NCard,
  NCarousel,
  NAlert,
  NList,
  NListItem,
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
          src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/create.png"
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
        2025<br />
        请使用<a href="https://www.mefrp.com/" target="_blank">ME-Frp 官网</a
        >账号登录 <br />
        需要更多功能或报告Bug 请向我们的邮箱
        <a href="mailto:yealqp@163.com">yealqp@163.com</a> 发送邮件
      </NAlert>
    </div>

    <div class="section">
      <h2>更新记录</h2>
      <div class="updates">
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
