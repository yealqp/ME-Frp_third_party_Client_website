<script setup>
import { NTag, NCard, NSpace, NCarousel } from 'naive-ui'

</script>
# XL-ME-Frp-Luncher
>---
><NSpace>
><NTag :bordered="false" type="success">易语言</NTag>
></NSpace> 

本客户端由 灵弦MuaMua 使用 易语言&Exui 开发，仅支持 Windows 系统 （不同Windows架构可在官网下载，直接替换即可）

## 预览图
<NCarousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="/Lx_MuaMua/login.png"
    >
    <img
      class="carousel-img"
      src="/Lx_MuaMua/home.png"
    >
    <img
      class="carousel-img"
      src="/Lx_MuaMua/creat.png"
    >
    <img
      class="carousel-img"
      src="/Lx_MuaMua/tunnel.png"
    >
    <img
      class="carousel-img"
      src="/Lx_MuaMua/tunnellog.png"
    >
    <img
      class="carousel-img"
      src="/Lx_MuaMua/monitor.png"
    >
    <img
      class="carousel-img"
      src="/Lx_MuaMua/person.png"
    >
    <img
      class="carousel-img"
      src="/Lx_MuaMua/config.png"
    >
    <img
      class="carousel-img"
      src="/Lx_MuaMua/about.png"
    >
</NCarousel>

## 下载地址
 官方 [蓝奏云](https://wwms.lanzouo.com/iu7tR32rucid) 

> [!WARNING]
> 注意:仅适于windows <br>
> 请使用[ME-Frp官网](https://www.mefrp.com/)账号登录 <br>
> 需要更多功能或报告Bug 请向 407176772@qq.com 发送邮件 <br>

## 更新记录
### v2.0
<br/>完善 创建隧道 功能，已支持创建协议为HTTP和HTTPS的隧道了
<br/>更改了设置页面，将 帮助支持 分离出一个单独页面
<br/>更改了 自定义自启动隧道 功能的布局和UI
<br/>完善提示信息框的覆盖
<br/>更改图形化关闭和最小化方式
<br/>完善隧道管理页面:
<br/>·新增了 生成启动配置 功能
<br/>·对 被封禁的隧道 加了注释
<br/>优化了日志页面，每个隧道的日志可单独查看了
<br/>对图形化占用内存进行了优化，尽可能的减少卡顿/卡顿时长
### v1.9
<br/>优化部分区域字体显示问题
<br/>优化节点监控UI（调整了因负载值不同的进度条颜色）
<br/>重画了提示框UI
<br/>更改设置界面的帮助支持，新增飞书群和官方文档两个方式，微信群依照官方的样子已删除
<br/>完善了编辑隧道功能，各协议皆能进行编辑 :)
<br/>设置界面新增功能:
<br/>·新增自定义自启动隧道功能（设置好后，下一次启动图形化将自动启动隧道）
<br/>优化创建隧道界面:
<br/>·选择节点处新加了 未实名用户组才可创建的节点 注释
<br/>·选择节点处新加了 因节点过载无法创建隧道 提示
<br/>登录界面进行了调整:
<br/>·因人机验证问题，注册账号功能删除
<br/>·增加了 Token登录 的登录方式
<br/>更改了启动隧道写法，该版本已可以正常启动隧道
<br/>优化了启动隧道后的日志输出
<br/>修复了 因图形化启动前开启隧道，导致图形化二次启动 出现的问题
<br/>优化部分区域代码，金肯的减少了主界面的卡顿现象和图形化使用时的出错
<br/>注:当使用 账密登录 错误导致无法正常使用图形化时，可以试试使用 Token登录
<br/>特注:本次更改启动隧道写法主要是因为 官方将部分token权限分离 ，所以以往的版本已经无法启动隧道了
### v1.8
<br/>调整主页的布局
<br/>更改了日志页面字体色
<br/>修改了隧道关闭写法，放弃了调用api关闭的写法
<br/>优化了签到功能（采用官方的方法进行签到）
<br/>修复了 隧道关闭后会重启问题
<br/>修复了 因频繁开关隧道导致出现数组错误 问题
<br/>修复 各页面刷新出现数组错误 问题
<br/>优化 因频繁刷新导致数组错误 问题
<br/>注:优化和修复皆为调整刷新间隔，若全局刷新时碰到数组错误，重启图形化即可
<br/>特注:重置Token功能和密码因官方的人机验证无法使用，如有需求请前往官网进行操作
### v1.7
<br/>优化部分区域UI（主要为字体方面）
<br/>优化托盘菜单
<br/>优化设置界面的开机自启功能
<br/>优化设置界面的窗口置顶功能
<br/>修复了因为 节点删除 导致的隧道信息初始化失败问题
<br/>完全修复了 登录时因数组错误导致图形化无法正常使用 问题
### v1.6
<br/>优化登录失败问题
<br/>修复 查看隧道信息窗口 退出按钮 无法退出或退出错误问题
<br/>优化图形化部分区域UI
<br/>节点监控页面新增负载百分比显示
<br/>注:本次 登录 更换了访问函数，登录成功率提升，若您在之前的版本可以正常登录，而新版本却经常登录失败，可添加作者QQ进行反馈，我会尽快进行修改
### v1.5
<br/>完善查看隧道信息（已经支持查看协议HTTP和HTTPS）
<br/>修复部分节点序号因编码导致出现 ?? 问题
<br/>修复部分区域字体问题
<br/>增加托盘菜单
### v1.4
<br/>增加查看隧道信息（目前仅支持协议TCP和UDP）
<br/>增加重置Token功能
### v1.3
<br/>加了版本更新功能
<br/>个人页面新增 流量历史记录
<br/>修复了 登录时，数组错误导致图形化无法正常使用 的问题之一
<br/>优化了图形化部分区域UI
### v1.2
<br/>更改节点监控页面UI
### v1.1
<br/>登录页面新增 注册账号 功能
<br/>增加节点监控页面
### v1.0
<br/>发布
