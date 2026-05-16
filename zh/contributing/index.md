---
title: 贡献指南
---

# 贡献指南

## 开发环境

```bash
# 克隆仓库
git clone https://github.com/YeLuo45/monopoly3d.git
cd monopoly3d

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 运行测试
npm test

# 构建生产版本
npm run build
```

## 测试

使用 Node.js 内置测试运行器：

```bash
node --test tests/*.test.js
```

当前测试覆盖：
- `tests/gameLogic.test.js` — 38 tests (boardConfig + 游戏常量)
- `tests/dice.test.js` — 6 tests (骰子工具 + 统计分布)
- `tests/aiThemes.test.js` — 15 tests (主题 + AI 评分函数)

**59/59 测试通过**

## 分支管理

- `feature/hermes` — 开发分支
- `master` — 主干 (触发 GitHub Pages 部署)

提交信息规范：
- `fix:` — 修复
- `feat:` — 新功能
- `style:` — 样式调整
- `refactor:` — 重构

## 添加新棋子

1. 在 `src/components/3d/Players.jsx` 中添加新模型
2. 更新 `themes.js` 中的棋子配置
3. 添加测试用例
4. 更新文档

## 添加新主题

1. 在 `src/game/themes.js` 中定义主题配置
2. 在 `src/components/3d/Board.jsx` 中应用主题材质
3. 添加测试用例
4. 更新文档

## 提交 PR

1. Fork 仓库
2. 创建 feature 分支
3. 编写代码和测试
4. 确保所有测试通过
5. 提交 PR 并描述变更内容

## 文档站

设计文档站源码位于 [monopoly3d-docs](https://github.com/YeLuo45/monopoly3d-docs)。

如需更新文档，请编辑对应 markdown 文件并提交 PR。