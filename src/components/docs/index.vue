<script setup>
import { onMounted, onUnmounted } from "vue";
import { NCard, NTimeline, NTimelineItem } from "naive-ui";

/**
 * 在文档首页挂载时为 html/body 添加 no-scrollbar 类，隐藏PC端滚动条；
 * 在页面卸载时移除该类，恢复默认滚动条显示。
 */
function enableNoScrollbar() {
  if (typeof document === "undefined") return;
  const isPC = window.innerWidth >= 1024;
  if (!isPC) return;
  document.documentElement.classList.add("no-scrollbar");
  document.body.classList.add("no-scrollbar");
}

/**
 * 解除文档首页对滚动条的隐藏效果，确保离开页面后不影响其它路由。
 */
function disableNoScrollbar() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.remove("no-scrollbar");
  document.body.classList.remove("no-scrollbar");
}

onMounted(() => {
  enableNoScrollbar();
});

onUnmounted(() => {
  disableNoScrollbar();
});
</script>

<template>
  <NCard :bordered="true" class="dark-card">
    <!-- 标题 -->
    <div class="header">
      <h1>欢迎来到ME-Frp第三方客户端联盟</h1>
    </div>

    <!-- 简介 -->
    <div class="section">
      <p>ME-Frp第三方客户端联盟是一个专注于ME-Frp的第三方客户端的社区。</p>
      <p>我们的目标是为ME-Frp的用户提供更好的客户端支持。</p>
    </div>

    <!-- 本站内容 -->
    <div class="section">
      <h2>本站内容</h2>
      <p>
        本站收录了ME-Frp的第三方客户端，由
        <a
          href="https://qm.qq.com/cgi-bin/qm/qr?authKey=W%2BsWnBZYMUyqre2CMvoILZ4TQniiva5PNFFYkBtY0TaMNb%2BSWiToLDbiglufNaaT&k=bqlThMvikRF4ZaOwEq_ckpedjzthHccE&noverify=0"
          target="_blank"
          >群内</a
        >
        大佬们贡献，为了防止某些人的逆天操作，故我们不将这些第三方客户端开源。
      </p>
    </div>

    <!-- 如何加入 (使用时间线组件) -->
    <div class="section">
      <h2>如何加入</h2>
      <NTimeline>
        <NTimelineItem
          title="添加QQ群"
          content="添加QQ群联系群内@猫羽雫 1592239257 (群内直接at即可)"
          type="success"
        >
        </NTimelineItem>
        <NTimelineItem
          title="获得同意"
          content="在得到猫羽雫的同意后，参考下文。"
          type="success"
        >
        </NTimelineItem>
        <NTimelineItem
          title="Fork项目并创建文件"
          content="在Github上fork主分支，创建属于自己的vue文件。"
          type="success"
        >
        </NTimelineItem>
        <NTimelineItem
          title="上传图片（如有）"
          content="如果有图片的话，请在public文件夹中创建你的文件夹，然后将图片放入其中。"
          type="success"
        >
        </NTimelineItem>
        <NTimelineItem
          title="提交PR"
          content="提交PR，等待猫羽雫适配。"
          type="success"
        >
        </NTimelineItem>
      </NTimeline>
    </div>
  </NCard>
</template>

<style src="../../style.css"></style>
