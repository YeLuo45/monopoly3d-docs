---
title: 架构概览
---

# 架构概览

## 技术栈

| 分类 | 技术 | 说明 |
|------|------|------|
| 前端框架 | React 19 | 核心 UI 框架 |
| 构建工具 | Vite | 快速开发与构建 |
| 样式 | TailwindCSS 4 | 原子化 CSS |
| 3D 引擎 | Three.js (@react-three/fiber, @react-three/drei) | 3D 渲染 |
| 状态管理 | Zustand | 轻量级状态管理 |
| 多人对战 | Supabase + PeerJS | 实时数据同步与 P2P 连接 |
| 国际化 | react-i18next | 中英文支持 |
| PWA | vite-plugin-pwa | 离线支持 |
| 测试 | Vitest | 单元测试 |

## 项目结构

```
src/
  game/
    store.js          # Zustand 游戏状态 (1501 行)
    boardConfig.js    # 36 格棋盘配置、常量
    dice.js           # 骰子投掷逻辑
    aiBrain.js        # AI 决策、评分函数
    playerProfile.js  # 玩家数据、XP、等级
    themes.js         # 棋盘主题 (Christmas/Retro/Neon)
  components/
    3d/
      Dice.jsx        # 3D 骰子 + 弹跳动画
      Players.jsx     # 棋子形状 + 移动动画
      MoveAnimator.jsx # 逐格移动同步
      Board.jsx       # 3D 棋盘渲染
    HUD.jsx           #抬头显示
    PropertyPanel.jsx # 地皮信息/购买面板
    MenuScreen.jsx    # 主菜单 + Tab
  features/
    achievement/      # 成就系统
    learning/         # AI 助手、练习模式
    teaching/         # 教学模式
  multiplayer/
    OnlineLobby.jsx   # 在线大厅
    RoomBrowser.jsx   # 房间浏览
    RealtimeChannel.js # 实时频道
    supabaseClient.js # Supabase 客户端
  editor/
    EditorPage.jsx    # 棋盘编辑器
    TilePalette.jsx   # 地皮面板
```

## 核心常量 (boardConfig.js)

```javascript
BOARD_SIZE = 36
STARTING_MONEY = 1500
PASSING_GO_BONUS = 200
HOUSE_COST = 50
MAX_HOUSES = 4
MAX_ROUNDS = 20
QUESTION_TILE_IDS = [7, 17, 25, 34]
TILE_TYPES = { PROPERTY, CHANCE, QUESTION, TAX, GO, JAIL, FREE_PARKING, GO_TO_JAIL }
```

## 状态管理 (Zustand store.js)

游戏状态由 Zustand 统一管理，核心 store 约 1501 行，包含：
- 当前玩家、回合数
- 棋盘状态（地皮拥有权、房屋数量）
- 骰子状态
- 多人同步

## 3D 渲染管线

使用 @react-three/fiber (R3F) 作为 Three.js 的 React 绑定：
- Board.jsx：3D 棋盘模型渲染
- Dice.jsx：物理弹跳骰子动画
- Players.jsx：玩家棋子 + 移动插值
- MoveAnimator.jsx：逐格移动同步（STEP_DURATION=0.3s）

## 多人架构

- **Supabase**：房间管理、实时数据库
- **PeerJS**：P2P 连接用于低延迟游戏数据同步
- 观战模式 (spectator) 待实现

## CI/CD

- GitHub Pages deployment via GitHub Actions
- vite-plugin-pwa with injectManifest mode
- 59/59 单元测试通过 (node --test)