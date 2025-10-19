<script setup>
import {
  NTag,
  NCard,
  NSpace,
  NCarousel,
  NAlert,
  NList,
  NListItem,
  NButton,
} from "naive-ui";
const title = "LX-ME-Frp-Luncher";
function lanzoo() {
  window.open("https://wwms.lanzouo.com/iGZtL37rk67g", "_blank");
}
</script>

<template>
  <NCard :bordered="true" class="dark-card">
    <!-- 标题 -->
    <div class="header">
      <h1>{{ title }}</h1>
    </div>

    <!-- 技术栈标签 -->
    <div class="section">
      <h2>技术栈</h2>
      <NSpace>
        <NTag :bordered="false" type="success">易语言</NTag>
        <NTag :bordered="false" type="info">Exui</NTag>
      </NSpace>
    </div>

    <!-- 简介 -->
    <div class="section">
      <h2>简介</h2>
      <div class="update-version">
        <ul>
          <li>
            本客户端由
            <n-tag :bordered="false" type="success" size="small"
              >灵弦 MuaMua</n-tag
            >
            使用 易语言 & Exui 开发
          </li>
          <li>具有较美观的 UI 界面</li>
          <li><code>正常使用</code> 功能较为完善</li>
          <li>提供了简单便捷的操作，可以快速启动实例 / 隧道</li>
          <li>
            仅支持 Windows 系统（不同 Windows
            架构可在官网下载，在安装目录里直接替换即可）
          </li>
        </ul>
      </div>
    </div>

    <!-- 预览图 -->
    <div class="section">
      <h2>预览图</h2>
      <NCarousel show-arrow autoplay>
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/login.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/home.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/create.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/tunnel.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/tunnellog.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/monitor.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/person.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/config.png"
        />
        <img
          class="carousel-img"
          src="https://image.mefrp-tpca.yealqp.fun/image/views/Lx_MuaMua/about.png"
        />
      </NCarousel>
    </div>

    <!-- 下载 -->
    <div class="section">
      <h2>下载</h2>
      <div class="download-container">
        <NButton @click="lanzoo" type="primary"> 蓝奏云</NButton>
      </div>
      <NAlert type="warning" title="注意">
        仅适于 Windows 系统<br />
        请使用
        <a href="https://www.mefrp.com/" target="_blank">ME-Frp 官网</a>
        账号登录<br />
        需要更多功能或报告 Bug，请发送邮件至
        <a href="mailto:407176772@qq.com">407176772@qq.com</a>
      </NAlert>
    </div>

    <!-- 更新记录 -->
    <div class="section">
      <h2>更新记录</h2>

      <div class="updates">
        <div
          v-for="update in updates"
          :key="update.version"
          class="update-version"
        >
          <h3>{{ update.version }}</h3>
          <p><strong>更新日期：</strong>{{ update.date }}</p>
          <ul v-html="update.notes"></ul>
          <div
            v-if="update.note"
            class="update-note"
            v-html="update.note"
          ></div>
        </div>
      </div>
    </div>
  </NCard>
</template>

<script>
export default {
  data() {
    return {
      updates: [
        {
          version: "v2.3",
          date: "2025-10-6",
          notes: `
            <li>新增 <code>浅色窗口模式</code> ，可在设置页面更换</li>
            <li>修复部分用户每十分钟一次的卡顿现象</li>
            <li>完善 新建隧道页面，新增节点介绍</li>
          `,
        },
        {
          version: "v2.2",
          date: "2025-9-14",
          notes: `
            <li>优化 <code>账密登录</code> 无需 <code>获取验证码</code> 操作即可进行正常登录</li>
            <li>优化 <code>签到功能</code> 无需 <code>获取验证码</code> 操作即可进行正常签到</li>
          `,
          note: "注：本次优化针对验证，操作已经实现和以前版本一样的便携了，搭配 <code>自动登录</code> 可实现全自动登录 :)",
        },
        {
          version: "v2.1",
          date: "2025-8-27",
          notes: `
            <li>完善隧道管理页面：<br/>
              1. 调整隧道功能布局<br/>
              2. 新增 <code>强制下线隧道</code> 功能<br/>
              3. 新增 <code>禁用/启用隧道</code> 功能
            </li>
            <li>优化 启动隧道时的 <code>日志输出</code></li>
            <li>新增了 <code>自动登录</code> 功能，实现自动登录</li>
            <li>优化并调整 <code>托盘菜单</code> 的功能：<br/>
              1. 新增 <code>退出登录</code> 功能<br/>
              2. 新增 <code>自动登录</code> 功能
            </li>
            <li>优化 <code>账密登录</code> 和 <code>签到功能</code> 方式，已可以正常使用（但是变麻烦了）</li>
          `,
          note: "注：<code>账密登录</code> 和 <code>签到功能</code> 需要前往网页复制秘钥才能进行，后续要是可能的话会做优化 :(",
        },
        {
          version: "v2.0",
          date: "2025-8-6",
          notes: `
            <li>完善 <code>创建隧道</code> 功能，已支持创建协议为 HTTP 和 HTTPS 的隧道</li>
            <li>更改设置页面，将 帮助支持 分离出一个单独页面</li>
            <li>更改 自定义自启动隧道 功能的布局和 UI</li>
            <li>完善 <code>提示信息框</code> 的覆盖</li>
            <li>更改图形化关闭和最小化方式</li>
            <li>完善隧道管理页面：<br/>
              1. 新增 <code>生成启动配置</code> 功能<br/>
              2. 新增对 <code>被封禁的隧道</code> 的注释
            </li>
            <li>优化了日志页面，每个隧道的日志可单独查看</li>
            <li>对图形化占用内存进行了优化，尽可能减少卡顿/卡顿时长</li>
          `,
        },
        {
          version: "v1.9",
          date: "2025-7-26",
          notes: `
            <li>优化部分区域字体显示问题</li>
            <li>优化节点监控 UI（调整了因负载值不同的进度条颜色）</li>
            <li>重画了提示框 UI</li>
            <li>更改设置界面的帮助支持，新增飞书群和官方文档两个方式，微信群已删除</li>
            <li>完善了 <code>编辑隧道功能</code>，各协议皆可进行编辑 :)</li>
            <li>设置界面新增功能：<br/>
              1. 新增 <code>自定义自启动隧道</code> 功能（设置好后，下一次启动将自动启动隧道）
            </li>
            <li>优化创建隧道界面：<br/>
              1. 选择节点处新增 <code>未实名用户组才可创建的节点</code> 注释<br/>
              2. 选择节点处新增 <code>因节点过载无法创建隧道</code> 提示
            </li>
            <li>登录界面进行了调整：<br/>
              1. 因人机验证问题，<code>注册账号</code> 功能删除<br/>
              2. 增加了 <code>Token登录</code> 的登录方式
            </li>
            <li>更改了启动隧道写法，该版本已可以正常启动隧道</li>
            <li>优化了启动隧道后的日志输出</li>
            <li>修复了 因图形化启动前开启隧道，导致图形化二次启动 出现的问题</li>
            <li>优化部分区域代码，尽量减少了主界面的卡顿现象和使用时的出错</li>
          `,
          note: "注：当使用 <code>账密登录</code> 错误导致无法正常使用时，可以试试使用 Token 登录<br/>特注：本次更改启动隧道写法主要是因为 官方将部分 <code>token</code> 权限分离，所以以往版本已经无法启动隧道了",
        },
        {
          version: "v1.8",
          date: "2025-7-14",
          notes: `
            <li>调整主页的布局</li>
            <li>更改了日志页面字体色</li>
            <li>修改了隧道关闭写法，放弃了调用 api 关闭的写法</li>
            <li>优化了签到功能（采用官方的方法进行签到）</li>
            <li>修复了 隧道关闭后会重启问题</li>
            <li>修复了 因频繁开关隧道导致出现数组错误 问题</li>
            <li>修复 各页面刷新出现数组错误 问题</li>
            <li>优化 因频繁刷新导致数组错误 问题</li>
          `,
          note: "注：优化和修复皆为调整刷新间隔，若全局刷新时碰到数组错误，重启图形化即可<br/>特注：<code>重置Token</code> 功能和密码因官方的人机验证无法使用，如有需求请前往官网进行操作",
        },
        {
          version: "v1.7",
          date: "2025-7-6",
          notes: `
            <li>优化部分区域 UI（主要为字体方面）</li>
            <li>优化托盘菜单</li>
            <li>优化设置界面的开机自启功能</li>
            <li>优化设置界面的窗口置顶功能</li>
            <li>修复了因为 节点删除 导致的隧道信息初始化失败问题</li>
            <li>完全修复了 登录时因数组错误导致图形化无法正常使用 问题</li>
          `,
        },
        {
          version: "v1.6",
          date: "2025-6-15",
          notes: `
            <li>优化登录失败问题</li>
            <li>修复 查看隧道信息窗口 退出按钮 无法退出或退出错误问题</li>
            <li>优化图形化部分区域 UI</li>
            <li>节点监控页面新增 <code>负载百分比</code> 显示</li>
          `,
          note: "注：本次登录更换了访问函数，登录成功率提升。若之前能登录而新版本不能，请添加作者 QQ 反馈，我会尽快修改。",
        },
        {
          version: "v1.5",
          date: "2025-6-8",
          notes: `
            <li>完善 <code>查看隧道信息</code>（已支持查看协议 HTTP 和 HTTPS）</li>
            <li>修复部分节点序号因编码导致出现 ?? 问题</li>
            <li>修复部分区域字体问题</li>
            <li>增加 <code>托盘菜单</code></li>
          `,
        },
        {
          version: "v1.4",
          date: "2025-5-25",
          notes: `
            <li>增加 <code>查看隧道信息</code>（目前仅支持协议 TCP 和 UDP）</li>
            <li>增加 <code>重置Token</code> 功能</li>
          `,
        },
        {
          version: "v1.3",
          date: "2025-5-5",
          notes: `
            <li>加了 <code>版本更新</code> 功能</li>
            <li>个人页面新增 <code>流量历史记录</code></li>
            <li>修复了 登录时，数组错误导致图形化无法正常使用 的问题之一</li>
            <li>优化了图形化部分区域 UI</li>
          `,
        },
        {
          version: "v1.2",
          date: "2025-4-20",
          notes: "<li>更改节点监控页面 UI</li>",
        },
        {
          version: "v1.1",
          date: "2025-4-8",
          notes: `
            <li>登录页面新增 <code>注册账号</code> 功能</li>
            <li>增加 <code>节点监控</code> 页面</li>
          `,
        },
        {
          version: "v1.0",
          date: "2025-3-16",
          notes: "<li>发布</li>",
        },
      ],
    };
  },
};
</script>

<style src="../../style.css"></style>
