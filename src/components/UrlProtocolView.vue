<template>
    <div class="redirect-container">
        <h1 class="loading-text">请稍候，正在重定向...</h1>

        <div class="loading-dots">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div v-if="!protocolAvailable" class="protocol-error">
            协议不可用，请下载产品客户端
        </div>

        <div class="products-container">
            <div v-for="product in products" :key="product.id" class="product-box">
                <h2 class="product-title">{{ product.title }}</h2>
                <div class="product-meta">
                    {{ product.author }} · {{ product.version }}
                </div>
                <p class="product-description">{{ product.description }}</p>
                <button class="download-btn" @click="downloadProduct(product.downloadUrl)">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    下载
                </button>
            </div>
        </div>

        <div v-if="showRedirectBtn && protocolAvailable">
            <p>自动重定向失败，请手动点击按钮</p>
            <button class="redirect-btn" @click="startRedirect">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                跳转链接 ({{ countdown }}s)
            </button>
        </div>

        <div v-if="!protocolAvailable && showRedirectBtn">
            <p>倒计时结束，但协议不可用，请下载上方产品</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const protocolAvailable = ref(true)
const showRedirectBtn = ref(false)
const countdown = ref(5)
const id = ref('')

// 模拟产品数据
const products = ref([
    {
        id: 1,
        title: "XL-ME-Frp-Launcher",
        author: "yealqp",
        version: "v1.5.0",
        description:
            "由yealqp使用Tauri框架开发，界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。",
        downloadUrl: "https://mefrp-tpca.yealqp.cn/docs/XL"
    },
    {
        id: 2,
        title: "LX-ME-Frp-Launcher",
        author: "灵弦MuaMua",
        version: "v1.3.0",
        description: "由灵弦MuaMua使用易语言&Exui开发，界面高仿官方图形化V4.0。",
        downloadUrl: "https://mefrp-tpca.yealqp.cn/docs/LX"
    },
    {
        id: 3,
        title: "PML 2",
        author: "RYCB工作室",
        version: "v2.1.0",
        description: "PML 2使用.NET提供了简单便捷的操作, 也是目前三个产品中唯一一个跨平台的软件。支持常见主流平台(Windows, Linux, MacOS, Android)。",
        downloadUrl: "https://mefrp-tpca.yealqp.cn/docs/qyf"
    }
])

// 检查协议是否可用
const checkProtocol = () => {
    // 在实际应用中，这里应该检查 mefrp:// 协议是否可用
    // 这里我们模拟一个随机结果
    protocolAvailable.value = true
}

// 启动重定向
const startRedirect = () => {
    if (protocolAvailable.value) {
        window.location.href = `mefrp://StartProxy/${id.value}`
    }
}

// 倒计时函数
const startCountdown = () => {
    const timer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
            clearInterval(timer)
            showRedirectBtn.value = true
        }
    }, 1000)
}

// 下载产品
const downloadProduct = (url) => {
    window.open(url, '_blank')
}

onMounted(() => {
    // 从路由参数获取 id
    id.value = route.params.id

    checkProtocol()
    startCountdown()

    // 5秒后自动重定向（如果协议可用）
    setTimeout(() => {
        if (protocolAvailable.value) {
            startRedirect()
        }
    }, 5000)
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
}

.redirect-container {
    width: 100%;
    max-width: 900px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 40px;
    text-align: center;
    margin: 0 auto;
}

.loading-text {
    font-size: 24px;
    color: #2c3e50;
    margin-bottom: 30px;
    font-weight: 500;
}

.loading-dots {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 20px;
}

.loading-dots div {
    position: absolute;
    top: 0;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #3498db;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.loading-dots div:nth-child(1) {
    left: 8px;
    animation: loading-dots1 0.6s infinite;
}

.loading-dots div:nth-child(2) {
    left: 8px;
    animation: loading-dots2 0.6s infinite;
}

.loading-dots div:nth-child(3) {
    left: 32px;
    animation: loading-dots2 0.6s infinite;
}

.loading-dots div:nth-child(4) {
    left: 56px;
    animation: loading-dots3 0.6s infinite;
}

@keyframes loading-dots1 {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes loading-dots3 {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes loading-dots2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(24px, 0);
    }
}

.products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 40px 0;
}

.product-box {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid #e9ecef;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.product-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.product-title {
    font-size: 20px;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
}

.product-meta {
    color: #7f8c8d;
    font-size: 14px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e9ecef;
}

.product-description {
    color: #5a6c7d;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
}

.download-btn {
    background: #3498db;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.download-btn:hover {
    background: #2980b9;
    transform: translateY(-2px);
}

.download-btn:active {
    transform: translateY(0);
}

.redirect-btn {
    background: #2ecc71;
    color: white;
    border: none;
    padding: 14px 30px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.redirect-btn:hover {
    background: #27ae60;
    transform: translateY(-2px);
}

.redirect-btn:active {
    transform: translateY(0);
}

.protocol-error {
    color: #e74c3c;
    margin: 20px 0;
    font-size: 18px;
    padding: 15px;
    background: #fdf2f2;
    border-radius: 8px;
    border-left: 4px solid #e74c3c;
}

.countdown {
    color: #3498db;
    font-weight: 600;
}

.icon {
    width: 20px;
    height: 20px;
}
</style>