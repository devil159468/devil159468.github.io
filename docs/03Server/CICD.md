# CI & CD

## PM2 自动化部署脚本示例
```ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'CMSSystem',
            script: 'server/index.js',
            append_env_to_name: true,
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_perdeploy: {
                NODE_ENV: 'perdeploy'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],
    deploy: {
        perdeploy: {
            user: 'root',
            host: ['xx.xx.xx.xx'],
            port: '22',
            ref: 'origin/perdeploy',
            repo: 'git地址',
            path: '/www/newCMS/Perdeploy',
            ssh_options: 'StrictHostKeyChecking=no',
            'post-deploy': 'yarn install && npm run build && pm2 startOrRestart ecosystem.config.js --env perdeploy'
        },
        production: {
            user: 'root',
            host: ['xx.xx.xx.xx'],
            port: '22',
            ref: 'origin/master',
            repo: 'git地址',
            path: '/www/newCMS/Production',
            ssh_options: 'StrictHostKeyChecking=no',
            'post-deploy': 'yarn install && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
        }
    }
}

```
