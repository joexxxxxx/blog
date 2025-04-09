# Electron读取多文件

## 方案一

- 安装依赖
  1. npm install clipboard-files -S
  2. npm install electron-rebuild -D
- (使用clipboard-files库)[https://github.com/alex8088/clipboard-files]

- (使用 electron-rebuild 编译 clipboard-files)[https://github.com/electron/rebuild]

  1. 新增脚本 "rebuild": "electron-rebuild -f -w clipboard-files"
  2. 指定编译成window 32位文件 "rebuild": "electron-rebuild -f -w -a=--ia32 clipboard-files"
  3. 执行脚本 npm run rebuild

- 打包适配可将 rebuild 命令打包脚本中
  1. 打包64位：
  1. 配置编译脚本
     "rebuild:64": "electron-rebuild -f -w -a=--x64 clipboard-files"
  1. 配置打包脚本
     "build:win:64": " npm run rebuild:64 && npm run build && electron-builder --win"
  1. 打包32位：
  1. 配置编译脚本
     "rebuild:32": "electron-rebuild -f -w -a=--ia32 clipboard-files"
  1. 配置打包脚本
     "build:win:32": " npm run rebuild:64 && npm run build && electron-builder --win"

## 方案二

1. 使用 clipboard-files 、 electron-rebuild 提交编译原生模块生成各操作系统的.node模块

2. 使用 pnpm patch 直接修改 node_modules中的clipboard-files模块 根据运行时的环境(系统环境、Electron版本)选择不同的.node模块

- 优点：

  1. 只需编译一次，无需每次下载或打包都需要编译
  2. 避免不同设备上的环境不同，导致编译失败

- 缺点：
  1. 升级Electron版本需要重新编译，并使用 pnpm patch 重新打补丁
