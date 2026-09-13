# Changelog

## 0.1.0 (2026-09-11)

首发版本。

### 服务器看板:SSH 连接多台 GPU 主机,实时展示 GPU/CPU/内存/磁盘、占用进程与训练日志曲线;停滞/离线/高温即时提醒;实验日志零配置自动发现

- 兼容 DeepSeek Harness 0.1.5-rc.2(peer 范围 `^0.1.5-rc.2`)
- 单包双半:host 侧(node)+ client 侧(浏览器 bundle)
- 全部自定义路由仅接受本机(loopback)访问
- 详见 README

### 已知限制

见 README「已知限制」一节。
