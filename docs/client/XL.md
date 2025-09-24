<script setup>
import { NTag, NCard, NSpace, NCarousel } from 'naive-ui'
</script>

# XL-ME-Frp-Luncher

> <NSpace>
> <NTag :bordered="false" type="success">Vue3</NTag>
> <NTag :bordered="false" type="info">TypeScript</NTag>
> <NTag :bordered="false" type="warning">Naive UI</NTag> 
> <NTag :bordered="false" type="error">Vite</NTag>
> <NTag :bordered="false" type="info">Tauri 2</NTag>
> <NTag :bordered="false" type="error">Rust</NTag><n-divider vertical />
> </NSpace>

## 简介

- 本客户端由 yealqp 使用 Tauri 框架开发，仅支持 Windows amd64 架构。
- 界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，可能也是包体最小的一个。
- 提供了官网没有的启停隧道的功能。
- 拥有开机自启动, 系统托盘等功能。

## 预览图

<NCarousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/login.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/home.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/tunnel.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/create.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/config.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/yealqp/about.png"
    >
</NCarousel>

## 下载地址

官方 [蓝奏云](https://wwoq.lanzouo.com/idlrB36x0mgb) 密码:1zbs
官方 [OpenList](https://alist.yealqp.cn/)

> [!WARNING]
> 注意: 本软件仅适于 Windows 10, Windows 11, Windows Server 2019, 2022, 2025 <br>
> 请使用[ME-Frp 官网](https://www.mefrp.com/)账号登录 <br>
> 需要更多功能或报告Bug 请向邮箱[yealqp@163.com](mailto://yealqp@163.com)发送邮件 <br>
## 更新记录
### v1.5
- 添加登录时的人机验证功能，感谢[落雪无痕LxHTT](https://github.com/LxHTT)提供了官网使用的人机验证逻辑。
### v1.4
- 添加配置文件启动功能，更新了软件内的新版本下载地址
### v1.3
- 修改自启动隧道逻辑，重构后端有关配置文件修改的部分
### v1.2
- 更新了软件内的新版本下载地址
### v1.1
- 修复了隧道启动时，使用的二进制文件路径不正确的问题，添加了单实例启动的功能
### v1.0
- 发布
