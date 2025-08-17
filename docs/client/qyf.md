<script setup>
import { NTag, NCard, NSpace, NCarousel } from 'naive-ui'

</script>



# Plain ME Frp Luncher

> <NSpace>
> <NTag :bordered="false" type="info">.NET 8.0</NTag>
> <NTag :bordered="false" color="violet">Avalonia</NTag>
> <NTag :bordered="false" type="warning">Semi.Avalonia</NTag> 
> </NSpace>

> 作者: RYCB Studio  
> 命名灵感来源: PCL Ⅱ  
> 查看[官网](https://rycb.mxj.pub/mefl/)

> [!INFO]
> 基于Avalonia的 Plain ME Frp Launcher 2.0 即将到来！支持Windows和Linux两端！欢迎关注PML Ⅱ ！(doge)

## 简介
Plain ME Frp Launcher 是对 ME Frp (幻缘映射)的图形化实现，提供了简单便捷的操作，可以快速启动实例/隧道。*可能也是目前三个产品中唯一一个支持软件内控制台操作的软件。*


## 预览

<NCarousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="/rycb/login.png"
    >
    <img
      class="carousel-img"
      src="/rycb/home.png"
    >
    <img
      class="carousel-img"
      src="/rycb/create.png"
    >
    <img
      class="carousel-img"
      src="/rycb/manage.png"
    >
    <img
      class="carousel-img"
      src="/rycb/monitor.png"
    >
    <img
      class="carousel-img"
      src="/rycb/about.png"
    >
    <img
      class="carousel-img"
      src="/rycb/terminal.png"
    >
</NCarousel>

## 功能

- 连接到 ME Frp 服务端
- 显示连接状态
- 显示连接信息
- 支持断开连接

## 使用方法
1. 下载并安装 .NET 8.0
2. 下载 Plain ME Frp Luncher
3. 运行 Plain ME Frp Luncher

## 下载地址

> [!INFO]
> Plain ME Frp Launcher 依赖于[.NET 8.0 桌面运行时(Desktop Runtime)](https://dotnet.microsoft.com/download/dotnet/8.0)，您需要预先下载并安装。  
> 若您仍不知道如何下载，请点击该[直链](https://dotnet.microsoft.com/download/dotnet/thank-you/runtime-desktop-8.0.18-windows-x64-installer)(版本 8.0.18)下载。

官方 [夸克云](https://pan.quark.cn/s/dbc1e3b0c0a4?pwd=2Hxf) 密码:2Hxf

官方 [百度云](https://pan.baidu.com/s/1c_oLBFQt6VSDhyUohefw_g?pwd=rycb) 密码:rycb

官方 [易云分流](https://share.asytech.cn/s/95b2yoQjK6wJMk5)

官方 [蓝奏云](https://rycbstudio.lanzoue.com/ibcLg33fs6qh) 密码:fx7q

备用 [CDN源站](https://content.rycb.mxj.pub/files/mefl/Plain%20ME%20Frp%20Launcher%20%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F.exe)=

> [!WARNING]
> 安装或使用本软件表明您同意本软件的[用户协议](https://rycb/mxj.pub/mefl/useragreement.html)和[隐私政策](https://rycb/mxj.pub/mefl/privacy.html)
> 注意: 本软件仅适于Windows 10, Windows 11, Windows Server 2019, 2022, 2025, 常见 Linux 发行版 <br>
> 请使用[ME Frp官网](https://www.mefrp.com/)账号登录 <br>

> [!INFO]
> 需要更多功能或报告Bug 请向[我们的邮箱rycbstudio@163.com](mailto://rycbstudio@163.com)发送邮件 <br>

## 更新日志
### v2.0.0 \[building\]
- 您仍可以选择下载旧版。旧版只适用于Windows，但与新版功能基本保持同步。
- *2.0.0暂时移除了控制台功能。该功能可能会在2.1.x中回归。
- \[ADDED\]
    - Windows & Linux 多平台支持
    - 统一 UI 风格为`Semi.Avalonia`
    - 完整 ME Frp 功能
- \[REMOVED\]
    - 移除 HandyControl 及其相关，包括但不限于: 
        - 辉光窗口
        - 类Windows 10加载动画
    - 移除 WPF 相关内容，包括但不限于:
        - 基于WPF的托盘图标
        - 基于WPF的动画
    - 移除了 Herobrine.
- \[MODIFIED\]
    - 修改了更新的默认下载源
    - 修改部分程序逻辑
- \[FIXED\]
    - 修复了在特定条件下一言无法加载的问题

### v1.2.0
- 统一所有UI字体为HarmonyOS Sans
- 修复了更新检查逻辑
- 美化UI, 增加辉光效果
- 修复登录时最小化到托盘又打开主界面时直接跳转到登录后页面导致无限加载的问题
- 修复彩蛋的加载问题
- 修复了当在托盘中打开主界面时托盘菜单不隐藏的问题
- 修复了启动多个实例的问题
- 修复了在浅色模式下控制台前景色不切换的问题
### v1.1.1
- 增加一些彩蛋
- 增加设置的UI界面
- 增加"取消登录"选项
### v1.1.0
- 优化主页面框架的菜单栏显示
- 完善用户中心
- 可以后台运行
- 增加设置项: `HideInsteadOfClose` - 是否在关闭窗口时隐藏窗口
### v1.0.1
- 修复了连接状态显示错误的问题
- 修复了无法从控制台启动 mefrpc 的问题
- 增加设置项: `KickWithoutDisable` - 是否在断开连接时禁用隧道
- 增加设置项: `ParallelDownload` - 是否在下载文件时多线程下载
- 增加设置项: `ParallelCount` - 多线程下载的线程数量
### v1.0.0
- 发布
