<script setup>
import { NTag, NCard, NSpace, NCarousel } from 'naive-ui'
</script>

# Plain ME Frp Launcher

> <NSpace>
> <NTag :bordered="false" type="info">.NET 8.0</NTag>
> <NTag :bordered="false" :color="{ color: '#165cff4b', textColor: '#165cff' }">
>    Avalonia UI
> </NTag>
>  <NTag :bordered="false" :color="{ color: '#047edb4b', textColor: '#047edb' }">
>    Fluent Design
>  </NTag>
> </NSpace>

> 作者: RYCB Studio  
> 命名灵感来源: PCL Ⅱ  
> 查看 [官网](https://rycb.mxj.pub/mefl/)

> [!IMPORTANT]
> 基于 Avalonia 的 Plain ME Frp Launcher 2.0 已经发布！  
> 支持 Windows 和 Linux 两端！  
> 欢迎使用 PML Ⅱ ！(doge)

## 简介
Plain ME Frp Launcher 是对 ME Frp (幻缘映射) 的图形化实现，提供了简单便捷的操作，可以快速启动实例 / 隧道，支持 Windows 和 Linux 两端 (X 版本)。*可能也是目前三个产品中唯一一个支持软件内控制台操作的软件。*

## 预览
### Legacy 版
<NCarousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/rycb/login.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/rycb/home.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/rycb/create.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/rycb/manage.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/rycb/monitor.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/rycb/about.png"
    >
    <img
      class="carousel-img"
      src="https://image.mefrp-tpca.yealqp.fun/image/views/rycb/terminal.png"
    >
</NCarousel>

### X 版
<NCarousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="/rycb/homex.png"
    >
    <img
      class="carousel-img"
      src="/rycb/createx.png"
    >
    <img
      class="carousel-img"
      src="/rycb/managex.png"
    >
    <img
      class="carousel-img"
      src="/rycb/monitorx.png"
    >
    <img
      class="carousel-img"
      src="/rycb/aboutx.png"
    >
    <img
      class="carousel-img"
      src="/rycb/terminalx.png"
    >
</NCarousel>

## 功能

- 连接到 ME Frp 服务端
- 显示连接状态
- 显示连接信息
- 支持断开连接

## 使用方法
1. 下载并安装 .NET 8.0 运行时
2. 下载 Plain ME Frp Launcher
3. 运行 Plain ME Frp Launcher
> [!TIP] 教程
> 如何在 Linux 上安装 .NET 8.0 运行时？
> 1. 若您认为您有技术，则请参考 [官方文档](https://learn.microsoft.com/zh-cn/dotnet/core/install/linux)。
> 2. 若您认为您没有技术，则请按照下面的步骤来安装.NET 运行时。
>     1. 打开终端
>     2. 先切换到 root 用户 (Ubuntu: `sudo su`  Debian: `su`  其他操作系统同理)
>     3. 输入 `wget https://content.rycb.mxj.pub/files/dotnet/install.sh` 或 `wget https://kike.cc/27G`
>    4. 等待下载完成后，输入 `chmod +x ./install.sh` \* **这一步很重要，请务必执行**
>    5. 输入 `./install.sh`
>     6. 按照提示安装即可。
> 3. 若您在安装过程中遇到问题，或软件运行时提示 "Framework not found", 请参考 [官方文档](https://learn.microsoft.com/zh-cn/dotnet/core/install/linux) 或 [向我们汇报](mailto://rycbstudio@163.com)。您可以向 AI 求助。
> 4. 已知 **在 Debian 13 上安装.NET 8.0 运行时后仍无法安装程序，具体原因我们仍在排查。**


> [!TIP] 教程
> 如何在 Linux 上安装并顺利运行本软件？
>    1. 在您下载了 .deb 文件的目录里，打开终端
>    2. 先切换到 root 用户 (Ubuntu: `sudo su`  Debian: `su`  其他操作系统同理)
>    3. 输入 `dpkg -i mefrplauncherx.2.0.0.1.linux-x64.deb`(文件名为您下载的文件名)
>    4. 等待安装完成后，使用 `cd` 命令跳转至软件安装目录，即输入 `cd /usr/share/mefrplauncherx/` 
>    5. 确保您仍处于 root 账户下，输入 `chmod -R a+r,a+w *` \* **这一步很重要，请务必执行，否则程序将无法运行。**
>    6. 等待配置完成后，**输入 `exit` 退出 root 模式**。
>    7. 输入 `./mefrplauncherx` 即可开始使用本软件。
>    8. 之后想要运行软件，可以直接在终端中输入: `mefrplauncherx` 即可启动软件。


> [!IMPORTANT] 为什么在Linux系统中我们建议使用终端运行软件？
> 1. 在 Linux 中，软件的安装目录通常不在用户的主目录下，因此无法直接在桌面双击运行。
> 2. Linux的程序运行和权限机制与Windows不同，使用终端可以追踪到程序的运行情况，方便错误追踪。
## 下载地址

> [!TIP] 提示
> Plain ME Frp Launcher Windows 版 依赖于 [.NET 8.0 桌面运行时 (Desktop Runtime)](https://dotnet.microsoft.com/download/dotnet/8.0)，您需要预先下载并安装。  
> 若您仍不知道如何下载，请点击该 [直链](https://dotnet.microsoft.com/download/dotnet/thank-you/runtime-desktop-8.0.18-windows-x64-installer)(版本 8.0.18) 下载。  
> **Linux 用户安装运行时请见上文.**
<!-- ### Legacy v1.2.0
官方 [夸克云](https://pan.quark.cn/s/dbc1e3b0c0a4?pwd=2Hxf) 密码：2Hxf  
官方 [百度云](https://pan.baidu.com/s/1c_oLBFQt6VSDhyUohefw_g?pwd=rycb) 密码:rycb  
官方 [易云分流](https://share.asytech.cn/s/95b2yoQjK6wJMk5)  
官方 [蓝奏云](https://rycbstudio.lanzoue.com/ibcLg33fs6qh) 密码:fx7q  
备用 [CDN 源站](https://content.rycb.mxj.pub/files/mefl/Plain%20ME%20Frp%20Launcher%20%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F.exe)   -->

### X v2.0.5.0 (2.1.0.0 过渡版本)
**2.0.5.0包含除插件外的所有更新内容。**  
官方 [夸克云](https://pan.quark.cn/s/dbc1e3b0c0a4?pwd=2Hxf) 密码：2Hxf  
官方 [百度云](https://pan.baidu.com/s/1c_oLBFQt6VSDhyUohefw_g?pwd=rycb) 密码:rycb  
官方 [蓝奏云](https://rycbstudio.lanzoue.com/b0zk6qxri) 密码:akev  
**⚠️ 以下源暂不可用。**  
~~官方 [联盟网盘 | Windows-x64 发行版](https://lmcloud.yealqp.fun/f/19co/PML%20%E2%85%A1%20%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F%202.0.0.1.exe)~~  
~~官方 [联盟网盘 | Linux-x64 发行版](https://lmcloud.yealqp.fun/f/M6Hb/mefrplauncherx.2.0.0.1.linux-x64.deb)~~

  
> [!IMPORTANT] 重要提醒
> 安装或使用本软件表明您同意本软件的 [用户协议](https://rycb.mxj.pub/mefl/useragreement.html) 和 [隐私政策](https://rycb.mxj.pub/mefl/privacy.html)。<br>
> 注意：本软件仅适于 Windows 10, Windows 11, Windows Server 2019, 2022, 2025, 常见 Linux x64 发行版 (包括 Linux MUSL x64, 如 Alpine Linux 等). <br>
> 请使用 [ME Frp 官网](https://www.mefrp.com/) 账号登录 <br>
> 若您在 Linux 环境下使用 root 账户运行本软件，则本软件将无法正常运行。

> [!TIP] 提示
> 遇到问题，请先查看 [快速修复](# 快速修复)  
> 需要更多功能或报告 Bug，请向 [我们的邮箱 rycbstudio@163.com](mailto://rycbstudio@163.com) 发送邮件 <br>

## 快速修复
### Windows
#### 软件无法启动
> 问题重现：点击软件，软件窗口闪一下就消失 / 无窗口出现 / 只有一个白色边框。  
> 问题原因：在特定安装文件夹内，软件需要管理员权限才能正常运行。  
> **解决方法**
> 1. 打开软件安装目录，如 `C:\Program Files\RYCB Studio\Plain ME Frp Launcher X`。桌面操作如下图所示。
> ![Step 1](/rycb/W-1-Step1.png)
> 2. 右键点击选中文件 (`MEFrpLauncherX.exe`)，选择 "属性"，如下图所示。
> ![Step 2](/rycb/W-1-Step2.png)
> 3. 在弹出的窗口中，点击 "兼容性" 选项卡，点击 "更改所有用户" 按钮，如下图所示。
> ![Step 3](/rycb/W-1-Step3.png)
> 4. 在弹出的窗口中，勾选 "以管理员身份运行此程序"，点击 "确定" 按钮，如下图所示。
> ![Step 4](/rycb/W-1-Step4.png)
> 5. 重新启动软件，问题解决。  
### Linux
#### 软件无法启动
> 问题重现：启动软件时，无窗口出现，控制台出现报错，包含 "UnauthorizedException"。  
> 问题原因: Linux 下软件默认没有权限，需要手动修改。  
> **解决方法**
> 1. 打开终端，输入 `chmod -R a+r,a+w /usr/share/mefrplauncherx/*`。
> 2. 重新启动软件 (打开终端，输入 `mefrplauncherx`), 问题解决。

## 更新日志
### v2.1.0
- **\[重大更新\] \[开发中\]**
  - "插件"功能现已加入至PML Ⅱ。 
  - 您可以在 "插件" 页面中安装、启用、禁用、卸载插件。
  - 插件支持自定义配置，您可以在插件设置中配置插件。
  > [!IMPORTANT]对于插件开发者
  > - 若您想成为插件开发者，请[与我们联系](mailto://rycbstudio@163.com)，我们会将程序核心(插件核心依赖)发送给您。
  > - 查看[开发者文档](https://dev.mefl.mxj.pub)
- 修复`MEFLX-#001`(公告显示不支持标题)。
- 修复了设置项的兼容问题。
- 优化设置UI, 使其更符合Fluent Design。
- 优化节点API的使用, 解决了一次无法获取所有节点的问题和启动时无法获取节点状态和信息, 后续无法继续获取的问题。
- 增加设置项: `Theme` - 主题颜色，支持浅色和深色。
- 修改设置项: `Skin` - 现支持设置为"Mica"(云母, **仅适用于Windows**)或"Acrylic"(亚克力)或"Blur"(模糊)或"Transparent"(透明)，详细信息请见[此处](https://learn.microsoft.com/zh-cn/windows/apps/design/style/materials)。
- 增加设置项: `AutoStart` - 是否在开机时自动启动软件
- 增加设置项: `AutoLaunch` - 是否在启动时自动启动隧道
  - 附加设置项: `AutoLaunchProxies` - 自动启动的隧道id
- 增加设置项: `ExpireDays` - 登录信息过期天数
### v2.0.2
- 优化"隧道管理"页面，增加命令语法功能和帮助。  
 \* 命令语法请查看软件内的"帮助"页面。
- "隧道管理"页面搜索时支持拼音搜索。
### v2.0.1
- 在 "用户中心" 中增加 "流量统计" 功能
- 优化人机验证逻辑，登录和签到时可以自动识别验证码。
- 增加底部状态栏，可以显示正在运行的操作。
- 增加崩溃窗口，在程序崩溃时显示错误信息。
### v2.0.0.2
- 更新人机验证逻辑，与官网一致。
- 修复无法登录的 bug (已登录用户不受影响)
### v2.0.0.1
- 修复了 Windows 11 系统之外的兼容性问题
### v2.0.0
- **\[ADDED\]**
    - Windows & Linux 多平台支持
    - 统一 UI 风格为 `Fluent Design`
    - 完整 ME Frp 功能
- **\[REMOVED\]**
    - 移除 HandyControl 及其相关，包括但不限于: 
        - 辉光窗口
        - 类 Windows 10 加载动画
    - 移除 WPF 相关内容，包括但不限于:
        - 基于 WPF 的托盘图标
        - 基于 WPF 的动画
    - 移除了 Herobrine.
- **\[MODIFIED\]**
    - 修改了更新的默认下载源
    - 修改部分程序逻辑
    - 修改数据加载逻辑，优化性能
- **\[FIXED\]**
    - 修复了在特定条件下一言无法加载的问题
    - 修复了加载两次用户数据的问题
    - 修复了在加载节点不存在的隧道时程序卡死的问题
- ** 已知问题 **
    - 公告显示不支持标题 (`MEFLX #001`): 将于后续版本修复。

### v1.2.0
- 统一所有 UI 字体为 HarmonyOS Sans
- 修复了更新检查逻辑
- 美化 UI, 增加辉光效果
- 修复登录时最小化到托盘又打开主界面时直接跳转到登录后页面导致无限加载的问题
- 修复彩蛋的加载问题
- 修复了当在托盘中打开主界面时托盘菜单不隐藏的问题
- 修复了启动多个实例的问题
- 修复了在浅色模式下控制台前景色不切换的问题
### v1.1.1
- 增加一些彩蛋
- 增加设置的 UI 界面
- 增加 "取消登录" 选项
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
