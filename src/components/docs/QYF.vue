<script setup>
import { NTag, NCard, NSpace, NCarousel, NAlert, NButton } from "naive-ui";
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
const title = "PML 2";
function quark() {
  window.open("https://pan.quark.cn/s/dbc1e3b0c0a4?pwd=2Hxf", "_blank");
}
function baidu() {
  window.open(
    "https://pan.baidu.com/s/1c_oLBFQt6VSDhyUohefw_g?pwd=rycb",
    "_blank",
  );
}
function openlist(){
  window.open("https://alist.yealqp.cn/mefrp-desktop/ME-Frp%20PML2/mefrp", "_blank");
}
function lanzoo() {
  window.open("https://rycbstudio.lanzoue.com/b0zk6qxri", "_blank");
}
function lmw() {
  window.open(
    "https://lmcloud.yealqp.fun/f/19co/PML%20%E2%85%A1%20%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F%202.0.0.1.exe",
    "_blank",
  );
}
function lml() {
  window.open(
    "https://lmcloud.yealqp.fun/f/M6Hb/mefrplauncherx.2.0.0.1.linux-x64.deb",
    "_blank",
  );
}
</script>

<template>
  <NCard :bordered="true" class="dark-card">
    <div class="header">
      <h1>{{ title }}</h1>
    </div>

    <!-- 技术栈标签 -->
    <div class="section">
      <h2>技术栈</h2>
      <n-space>
        <NTag :bordered="false" type="info">.NET 8.0</NTag>
        <NTag :bordered="false" :color="{ color: '#165cff4b', textColor: '#165cff' }">
          Avalonia UI
        </NTag>
        <NTag :bordered="false" :color="{ color: '#047edb4b', textColor: '#047edb' }">
          Fluent Design
        </NTag>
      </n-space>
    </div>
    <!-- 简介 -->
    <div class="section">
      <h2>简介</h2>
      <div class="update-version">
        <ul>
          <li>
            Plain ME Frp Launcher X (PML 2)是对 ME Frp (幻缘映射)
            的图形化实现，提供了简单便捷的操作，可以快速启动实例 / 隧道，支持
            Windows 和 Linux 两端。
            <em>可能也是目前三个产品中唯一一个支持软件内控制台操作的软件。</em>
          </li>
          <li>
            作者:
            <n-tag :bordered="false" type="success" size="small">RYCB Studio</n-tag>
          </li>
          <li>
            命名灵感:
            <n-tag :bordered="false" type="info" size="small">PCL Ⅱ</n-tag>
          </li>
          <li>
            查看
            <a href="https://rycb.mxj.pub/mefl/" target="_blank">官网</a>
          </li>
        </ul>
      </div>

      <NAlert type="info" title="重要更新">
        基于 Avalonia 的 PML 2 2.0 已经发布！<br />
        支持 Windows 和 Linux 两端！<br />
        欢迎使用 PML Ⅱ !(doge)
      </NAlert>
    </div>

    <!-- 预览图 -->
    <div class="section">
      <h2>预览</h2>
      <NCarousel show-arrow autoplay>
        <img class="carousel-img" src="/rycb/homex.png" />
        <img class="carousel-img" src="/rycb/createx.png" />
        <img class="carousel-img" src="/rycb/managex.png" />
        <img class="carousel-img" src="/rycb/monitorx.png" />
        <img class="carousel-img" src="/rycb/aboutx.png" />
        <img class="carousel-img" src="/rycb/terminalx.png" />
      </NCarousel>
    </div>

    <!-- 功能 -->
    <div class="section">
      <h2>功能</h2>
      <div class="update-version">
        <ul>
          <li>连接到 ME Frp 服务端</li>
          <li>显示连接状态</li>
          <li>显示连接信息</li>
          <li>支持断开连接</li>
        </ul>
      </div>
    </div>

    <!-- 使用方法 -->
    <div class="section">
      <h2>使用方法</h2>
      <NAlert type="info" title="教程：如何在 Linux 上安装 .NET 8.0 运行时？">
        <ul>
          <li>
            若您认为您有技术，则请参考
            <a href="https://learn.microsoft.com/zh-cn/dotnet/core/install/linux" target="_blank">官方文档</a>。
          </li>
          <li>
            若您认为您没有技术，则请按照下面的步骤来安装 .NET 运行时：
            <ol>
              <li>打开终端</li>
              <li>输入
                <pre><code class="language-bash">bash <(curl -sSL https://content.rycb.mxj.pub/files/dotnet/install.sh)</code></pre>
              </li>
            </ol>
          </li>
          <li>
            若安装失败或提示 "Framework not found"，请参考官方文档或
            <a href="mailto:rycbstudio@163.com">向我们汇报</a>。
          </li>
          <li>
            已知在 Debian 13 上安装 .NET 8.0 后仍无法运行程序，原因正在排查。
          </li>
        </ul>
      </NAlert>

      <NAlert type="warning" title="教程：如何在 Linux 上顺利运行本软件？">
        <ol>
          <li>预先安装 .NET 8.0 运行时（参考上文）</li>
          <li>打开终端</li>
          <li>输入
            <pre><code class="language-bash">bash <(curl -sSL https://content.rycb.mxj.pub/files/hefl/install.sh)</code></pre>
          </li>
          <li>等待安装完成</li>
          <li>之后可直接输入 <code>mefrplauncherx</code> 启动</li>
        </ol>
      </NAlert>

      <NAlert type="info" title="为什么建议在 Linux 中使用终端运行？">
        <ul>
          <li>Linux 软件安装目录通常不在用户主目录下，无法双击运行。</li>
          <li>使用终端可追踪程序运行情况，便于错误排查。</li>
        </ul>
      </NAlert>
    </div>

    <!-- 下载 -->
    <div class="section">
      <h2>下载地址</h2>

      <NAlert type="warning">
        PML 2 Windows 版依赖于
        <a href="https://dotnet.microsoft.com/download/dotnet/8.0" target="_blank">.NET 8.0 桌面运行时</a>， 请预先安装。
        <br />
        <a href="https://dotnet.microsoft.com/download/dotnet/thank-you/runtime-desktop-8.0.18-windows-x64-installer"
          target="_blank">
          点击此处下载 8.0.18 版本
        </a>
        <br />
        Linux 用户请参考上文安装运行时。
      </NAlert>

      <h3>v2.0.6.0 (2.1.0.0 过渡版本)</h3>
      <p><strong>2.0.6.0 包含除插件外的所有更新内容。</strong></p>
      <ul>
        <!-- <li>
          <NButton @click="quack" type="primary"> 夸克云 密码2Hxf </NButton>
        </li>

        <li>
          <NButton @click="baidu" type="primary"> 百度云 密码rycb </NButton>
        </li>
      -->

        <li>
          <NButton @click="openlist" type="primary"> OpenList </NButton>
        </li>
        <li>
          <NButton @click="lanzoo" type="primary"> 蓝奏云 密码akev </NButton>
        </li>
        <!-- <li>
          <NButton @click="lmw" type="error">
            <del>联盟网盘 | Windows-x64 发行版 </del>
          </NButton>
        </li>
        <li>
          <NButton @click="lml" type="error">
            <del>联盟网盘 | Linux-x64 发行版 </del>
          </NButton>
        </li> -->
      </ul>

      <NAlert type="error" title="重要提醒">
        安装或使用本软件表明您同意本软件的
        <a href="https://rycb.mxj.pub/mefl/useragreement.html" target="_blank">用户协议</a>
        和
        <a href="https://rycb.mxj.pub/mefl/privacy.html" target="_blank">隐私政策</a>。
        <br />
        注意：本软件适于 Windows 10/11/Server 2019+, 常见 Linux x64 发行版(包括
        Alpine Linux)。
        <br />
        请使用
        <a href="https://www.mefrp.com/" target="_blank">ME Frp 官网</a>
        账号登录。
        <br />
        若在 Linux 下使用 root 账户运行，软件可能将无法正常运行。
      </NAlert>

      <NAlert type="warning">
        遇到问题，请先查看
        <a href="#快速修复">快速修复</a>
        <br />
        需要更多功能或报告 Bug, 请发送邮件至
        <a href="mailto:rycbstudio@163.com">rycbstudio@163.com</a>
      </NAlert>
    </div>

    <!-- 快速修复 -->
    <div class="section">
      <h2>快速修复</h2>

      <div class="update-version">
        <h3>Windows - 软件无法启动</h3>
        <p>
          <strong>问题重现：</strong>点击软件，窗口闪退 / 无响应 / 白色边框。
        </p>
        <p><strong>原因：</strong>特定目录下需要管理员权限。</p>
        <p><strong>解决方法：</strong></p>
        <ol>
          <li>打开安装目录（如 <code>C:\Program Files\...</code>）</li>
          <img class="img" src="/rycb/W-1-Step1.png" alt="Step 1" />
          <li>右键 <code>MEFrpLauncherX.exe</code> → 属性</li>
          <img class="img" src="/rycb/W-1-Step2.png" alt="Step 1" />
          <li>切换到“兼容性” → 点击“更改所有用户的设置”</li>
          <img class="img" src="/rycb/W-1-Step3.png" alt="Step 1" />
          <li>勾选“以管理员身份运行此程序” → 确定</li>
          <img class="img" src="/rycb/W-1-Step4.png" alt="Step 1" />
          <li>重新启动软件</li>
        </ol>
      </div>

      <div class="update-version">
        <h3>Linux - 软件无法启动</h3>
        <p>
          <strong>问题重现：</strong>无窗口，控制台报错
          "UnauthorizedException"。
        </p>
        <p><strong>原因：</strong>权限不足。</p>
        <p><strong>解决方法：</strong></p>
        <ol>
          <li>
            打开终端，执行：<code>chmod -R a+r,a+w /usr/share/mefrplauncherx/*</code>
          </li>
          <li>重新运行：<code>mefrplauncherx</code></li>
        </ol>
      </div>
    </div>

    <!-- 更新日志 -->
    <div class="section">
      <h2>更新日志</h2>

      <div class="updates">
        <div v-for="update in updates" :key="update.version" class="update-version">
          <h3>{{ update.version }}</h3>
          <ul>
            <li v-for="(item, index) in update.notes" :key="index" v-html="item"></li>
          </ul>
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
          version: "v2.1.0",
          notes: [
            "<strong>[重大更新][开发中]</strong>",
            "“插件”功能现已加入至PML Ⅱ。",
            "您可以在“插件”页面中安装、启用、禁用、卸载插件。",
            "插件支持自定义配置。",
            '<n-alert type="info">对于插件开发者：<br/>- 若您想成为插件开发者，请<a href="mailto:rycbstudio@163.com">与我们联系</a>。<br/>- 查看<a href="https://dev.mefl.mxj.pub" target="_blank">开发者文档</a>。</n-alert>',
          ],
        },
        {
          version: "v2.0.2",
          notes: [
            "优化“隧道管理”页面，增加命令语法功能和帮助。",
            "“隧道管理”页面搜索时支持拼音搜索。",
          ],
        },
        {
          version: "v2.0.1",
          notes: [
            "在“用户中心”中增加“流量统计”功能",
            "优化人机验证逻辑，登录和签到时可自动识别验证码。",
            "增加底部状态栏，显示正在运行的操作。",
            "增加崩溃窗口，在程序崩溃时显示错误信息。",
          ],
        },
        {
          version: "v2.0.0.2",
          notes: [
            "更新人机验证逻辑，与官网一致。",
            "修复无法登录的 bug（已登录用户不受影响）",
          ],
        },
        {
          version: "v2.0.0.1",
          notes: ["修复了 Windows 11 系统之外的兼容性问题"],
        },
        {
          version: "v2.0.0",
          notes: [
            "<strong>[ADDED]</strong>",
            "Windows & Linux 多平台支持",
            "统一 UI 风格为 Fluent Design",
            "完整 ME Frp 功能",
            "<strong>[REMOVED]</strong>",
            "移除 HandyControl 及其相关（辉光窗口、加载动画等）",
            "移除 WPF 相关内容（托盘图标、动画等）",
            "移除了 Herobrine",
            "<strong>[MODIFIED]</strong>",
            "修改了更新的默认下载源",
            "修改部分程序逻辑",
            "优化性能",
            "<strong>[FIXED]</strong>",
            "修复一言无法加载的问题",
            "修复加载两次用户数据的问题",
            "修复加载不存在节点时程序卡死的问题",
            "<strong>已知问题</strong>",
            "公告显示不支持标题 (MEFLX #001)：后续修复",
          ],
        },
        // 以下为 v1.x 版本...
        {
          version: "v1.2.0",
          notes: [
            "统一字体为 HarmonyOS Sans",
            "修复更新检查逻辑",
            "美化 UI，增加辉光效果",
            "修复多个界面和逻辑问题",
          ],
        },
        {
          version: "v1.1.1",
          notes: ["增加彩蛋", "增加设置界面", "增加“取消登录”选项"],
        },
        {
          version: "v1.1.0",
          notes: [
            "优化菜单栏",
            "完善用户中心",
            "支持后台运行",
            "增加 HideInsteadOfClose 设置",
          ],
        },
        {
          version: "v1.0.1",
          notes: [
            "修复连接状态显示错误",
            "修复控制台启动问题",
            "增加 KickWithoutDisable、ParallelDownload 等设置项",
          ],
        },
        { version: "v1.0.0", notes: ["发布"] },
      ],
    };
  },
  mounted() {
    const blocks = this.$el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
};
</script>

<style src="../../style.css"></style>
public\rycb\aboutx.png