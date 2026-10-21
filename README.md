# 李诗千 · 个人网站

算法 / AI 工程师李诗千的个人主页 —— 单文件静态站点，无构建步骤、无框架依赖。

## 特性

- **中英双语**：右上角切换，偏好保存在本地
- **明 / 暗 / 跟随系统** 三种主题
- **⌘K 命令面板**：键盘快速跳转到任意区块
- **交互动效**：玻璃拟态、光斑背景、卡片倾斜、滚动渐显；移动端支持陀螺仪
- **全息贴纸彩蛋**：右下角那颗「别点」
- **访问计数**：页脚访问量与贴纸点击量，经 `/api/counter` 转发 Supabase
- 尊重 `prefers-reduced-motion`

## 结构

```
index.html        # 全部内容、样式与交互（单文件）
api/counter.js    # Vercel Serverless Function：代理 Supabase 计数
favicon-32.png
apple-touch-icon.png
vercel.json
```

## 本地预览

无需安装依赖，任选其一：

```bash
npx serve .
# 或
python -m http.server 8000
```

> 计数依赖 `/api/counter`，纯静态预览时页脚计数会静默失败，不影响其他功能。

## 部署

部署到 Vercel 即可（根目录即输出目录），`api/` 会自动注册为 Serverless Function。

可选环境变量：

| 变量 | 说明 |
| --- | --- |
| `SB_URL` | Supabase 项目 URL |
| `SB_ANON` | Supabase anon key |

未设置时使用 `api/counter.js` 中的默认值。

## License

MIT © Shiqian Li
