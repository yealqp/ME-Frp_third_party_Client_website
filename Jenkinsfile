pipeline {
    agent any

    environment {
        // 构建目录
        BUILD_DIR = 'dist'
        // 远程服务器配置名称（需要在 Jenkins 中配置 Publish Over SSH）
        SSH_SERVER = 'hkfxy'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Cloning repository...'
                git branch: 'main',
                    url: 'https://fastgit.cc/https://github.com/yealqp/ME-Frp_third_party_Client_website.git',
                    credentialsId: 'github-credentials' // 如果是私有仓库需要配置凭据
            }
        }

        stage('Setup Environment') {
            steps {
                echo '🛠️ Setting up Node.js environment...'
                sh '''
                    # 安装 NVM
                    if [ ! -d "$HOME/.nvm" ]; then
                        echo "Installing NVM..."
                        curl -o- https://cdn.yealqp.cn/Script/InstallNvm.sh | bash
                    fi

                    # 加载 NVM
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"

                    # 安装并使用指定版本的 Node.js
                    nvm install 24
                    nvm use 24

                    # 验证安装
                    node --version
                    npm --version

                    # 安装 pnpm
                    if ! command -v pnpm &> /dev/null; then
                        echo "Installing pnpm..."
                        npm install -g pnpm
                    fi

                    pnpm --version
                    pnpm install
                    pnpm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "${SSH_SERVER}",
                                transfers: [
                                    sshTransfer(
                                        cleanRemote: true,
                                        sourceFiles: "${BUILD_DIR}/**",
                                        removePrefix: BUILD_DIR,
                                        remoteDirectory: 'mefrp-tpca'
                                    )
                                ],
                                usePromotionTimestamp: false,
                                useWorkspaceInPromotion: false,
                                verbose: true
                            )
                        ]
                    )
                }
            }
        }
    }

    post {
        always {
            echo '🧹 Cleaning up workspace...'
            cleanWs()
        }

        success {
            echo '🎉 Pipeline completed successfully!'
            // 可以添加成功通知，比如发送邮件或 Slack 消息
        }

        failure {
            echo '❌ Pipeline failed!'
            // 可以添加失败通知
        }
    }
}