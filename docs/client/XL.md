<script setup>
import { NTag, NCard, NSpace, NCarousel } from 'naive-ui'

</script>
# XL-ME-Frp-Luncher
>---
><NSpace>
><NTag :bordered="false" type="success">Vue3</NTag>
><NTag :bordered="false" type="info">Tauri</NTag>
><NTag :bordered="false" type="info">TypeScript</NTag>
><NTag :bordered="false" type="warning">Naive UI</NTag> 
><NTag :bordered="false" type="error">Vite</NTag>
><NTag :bordered="false" type="info">Tauri 2</NTag>
><NTag :bordered="false" type="error">Rust</NTag><n-divider vertical />
></NSpace> 

本客户端由yealqp使用 Tauri 框架开发，仅支持 Windows amd64架构 (我没有其他开发环境)

## 预览图
<NCarousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="/yealqp/login.png"
    >
    <img
      class="carousel-img"
      src="/yealqp/home.png"
    >
    <img
      class="carousel-img"
      src="/yealqp/tunnel.png"
    >
    <img
      class="carousel-img"
      src="/yealqp/creat.png"
    >
    <img
      class="carousel-img"
      src="/yealqp/config.png"
    >
    <img
      class="carousel-img"
      src="/yealqp/about.png"
    >
</NCarousel>

## 下载地址
 官方 [蓝奏云](https://wwoq.lanzouo.com/inDj133d4jve) 密码:5d69

 官方 [OpenList](https://alist.yealqp.fun/mefrp-desktop)

> [!WARNING]
> 注意:仅适于windows 10 11 server19 22 25 <br>
> 请使用[ME-Frp官网](https://www.mefrp.com/)账号登录 <br>
> 需要更多功能或报告Bug 请向yealqp@163.com发送邮件 <br>

## 更新记录
### v1.4
添加配置文件启动功能，更新了软件内的新版本下载地址
### v1.3
修改自启动隧道逻辑，重构后端有关配置文件修改的部分
### v1.2
更新了软件内的新版本下载地址
### v1.1
修复了隧道启动时，使用的二进制文件路径不正确的问题，添加了单实例启动的功能
### v1.0
发布