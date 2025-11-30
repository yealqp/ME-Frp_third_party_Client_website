<script setup>
import { ref, onMounted } from "vue";
import { NTag, NCard, NSpace, NCarousel, NAlert, NButton } from "naive-ui";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
const title = "PML 2";
const loading = ref(false);
const error = ref(null);
const updates = ref([]);

/**
 * 从 API 获取更新日志数据
 * @returns {Promise<Object>} API 响应数据
 */
async function fetchChangelog() {
  try {
    const response = await fetch("https://api.rycb.mxj.pub/api/changelog");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("获取更新日志失败:", err);
    throw err;
  }
}

/**
 * 比较两个版本号的大小
 * @param {string} version1 - 第一个版本号
 * @param {string} version2 - 第二个版本号
 * @returns {number} 返回 1 表示 version1 > version2，-1 表示 version1 < version2，0 表示相等
 */
function compareVersions(version1, version2) {
  // 移除版本号中的非数字和点号字符，然后按点号分割
  const v1Parts = version1
    .replace(/[^\d.]/g, "")
    .split(".")
    .map((num) => parseInt(num) || 0);
  const v2Parts = version2
    .replace(/[^\d.]/g, "")
    .split(".")
    .map((num) => parseInt(num) || 0);

  // 确保两个版本号数组长度相同，不足的部分用 0 补齐
  const maxLength = Math.max(v1Parts.length, v2Parts.length);
  while (v1Parts.length < maxLength) v1Parts.push(0);
  while (v2Parts.length < maxLength) v2Parts.push(0);

  // 逐段比较版本号
  for (let i = 0; i < maxLength; i++) {
    if (v1Parts[i] > v2Parts[i]) return 1;
    if (v1Parts[i] < v2Parts[i]) return -1;
  }

  return 0; // 版本号相等
}

/**
 * 将 API 返回的数据格式转换为模板所需的数组格式
 * @param {Object} apiData - API 返回的数据
 * @returns {Array} 转换后的更新日志数组
 */
function transformApiData(apiData) {
  if (!apiData.success || !apiData.data) {
    throw new Error("API 数据格式错误");
  }

  const transformedData = [];

  // 将对象转换为数组并按版本号排序（高版本在前）
  const versions = Object.keys(apiData.data).sort((a, b) => {
    return compareVersions(b, a); // 降序排列，高版本在前
  });

  versions.forEach((version) => {
    const versionData = apiData.data[version];
    transformedData.push({
      version: `v${version}`,
      notes: versionData.changes || [],
      date: versionData.date || "",
      description: versionData.description || "",
    });
  });

  return transformedData;
}

/**
 * 初始化更新日志数据
 */
async function initializeUpdates() {
  loading.value = true;
  error.value = null;

  try {
    const apiData = await fetchChangelog();
    updates.value = transformApiData(apiData);
  } catch (err) {
    error.value = "获取更新日志失败";
    updates.value = [];
    console.error("获取更新日志失败:", err);
  } finally {
    loading.value = false;
  }
}

function quark() {
  window.open("https://pan.quark.cn/s/dbc1e3b0c0a4?pwd=2Hxf", "_blank");
}
function baidu() {
  window.open(
    "https://pan.baidu.com/s/1c_oLBFQt6VSDhyUohefw_g?pwd=rycb",
    "_blank",
  );
}
function openlist() {
  window.open(
    "https://alist.yealqp.cn/mefrp-desktop/ME-Frp%20PML2/mefrp",
    "_blank",
  );
}
function lanzoo_win() {
  window.open("https://rycbstudio.lanzoue.com/b0zkfytmb", "_blank");
}
function lanzoo_linux() {
  window.open("https://rycbstudio.lanzoue.com/b0zkfytpe", "_blank");
}
function lanzoo_mac() {
  window.open("https://rycbstudio.lanzoue.com/b0zkfytqf", "_blank");
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

// 组件挂载时初始化数据和高亮代码块
onMounted(() => {
  // 初始化更新日志数据
  initializeUpdates();

  // 初始化代码高亮
  setTimeout(() => {
    const blocks = document.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, 100);
});
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
        <NTag :bordered="false" type="info">.NET 10.0</NTag>
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
            Windows, Linux 和 MacOS 三端。
            <em>也是目前三个产品中唯一一个支持跨平台的软件。</em>
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
    </div>

    <!-- 预览图 -->
    <div class="section">
      <h2>预览</h2>
      <NCarousel show-arrow autoplay>
        <img class="carousel-img" src="/rycb/homex.png" />
        <img class="carousel-img" src="/rycb/createx.png" />
        <img class="carousel-img" src="/rycb/managex.png" />
        <img class="carousel-img" src="/rycb/monitorx.png" />
        <img class="carousel-img" src="/rycb/settingsx.png" />
        <img class="carousel-img" src="/rycb/aboutx.png" />
        <img class="carousel-img" src="/rycb/terminalx.png" />
      </NCarousel>
    </div>
    <!-- 功能 
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
   -->

    <!-- 使用方法 -->
    <div class="section">
      <h2>使用方法</h2>
      <!-- <NAlert type="info" title="教程：如何在 Linux 上安装 .NET 8.0 运行时？">
        <ul>
          <li>
            若您认为您有技术，则请参考
            <a
              href="https://learn.microsoft.com/zh-cn/dotnet/core/install/linux"
              target="_blank"
              >官方文档</a
            >。
          </li>
          <li>
            若您认为您没有技术，则请按照下面的步骤来安装 .NET 运行时：
            <ol>
              <li>打开终端</li>
              <li>
                输入
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
      </NAlert> -->

      <NAlert type="warning" title="教程：如何在 Linux 上顺利运行本软件？">
        <ol>
          <li>请注意: 目前Ubuntu 22.04+(不包含22.04)还不支持.NET 10。请暂缓安装。</li> 
          <!-- <li>预先安装 .NET 8.0 运行时（参考上文）</li> -->
          <li>打开终端</li>
          <li>输入
            <code language="bash">bash <(curl -sSL https://content.rycb.mxj.pub/files/mefl/install.sh)</code>
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

      <!-- <NAlert type="warning">
        PML 2 Windows 版依赖于
        <a href="https://dotnet.microsoft.com/download/dotnet/10.0" target="_blank">.NET 10.0 桌面运行时</a>， 请预先安装。
        <br />
        <a href="https://dotnet.microsoft.com/download/dotnet/thank-you/runtime-desktop-10.0.0-windows-x64-installer"
          target="_blank">
          点击此处下载 10.0.0 版本
        </a>
        <br />
        Linux 用户请参考上文安装运行时。
      </NAlert> -->

      <h3>v2.1.0</h3>
      <ul>
        <NAlert type="info" title="请注意">
          Windows下安装时请不要将软件安装至C:\Program Files等需要管理员权限的目录，否则可能导致软件无法正常运行。<em>建议安装至用户主目录下。</em>
        </NAlert>
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
          <NButton @click="lanzoo_win" type="primary"> 蓝奏云-Windows分发 密码9839 </NButton>
        </li>
        <li>
          <NButton @click="lanzoo_linux" type="primary"> 蓝奏云-Linux分发 密码9iai </NButton>
        </li>
        <li>
          <NButton @click="lanzoo_mac" type="primary"> 蓝奏云-Mac分发 密码apeg </NButton>
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
        Alpine Linux)，以及 MacOS。
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

      <!-- 加载状态 -->
      <div v-if="loading" class="loading-state">
        <NAlert type="info" title="正在加载更新日志...">
          请稍候，正在从服务器获取最新的更新日志信息。
        </NAlert>
      </div>

      <!-- 错误状态 -->
      <div v-else-if="error" class="error-state">
        <NAlert type="error" title="获取更新日志失败">
          {{ error }}，请稍后重试或联系管理员。
        </NAlert>
      </div>

      <!-- 更新日志内容 -->
      <div v-else class="updates">
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
<style src="../../style.css"></style>