---
title: 3D 组件
---

# 3D 组件

## Dice.jsx

3D 骰子组件，支持物理弹跳动画。

### 动画阶段

| 阶段 | 说明 |
|------|------|
| idle | 静止状态 |
| airborne | 抛物线弧度 (峰值 1.8 单位) |
| bouncing | 最多 3 次弹跳，45% 衰减 |
| settling | 最终停顿 |
| idle | 返回静止 |

### 关键参数

```javascript
ROLL_DURATION = 1.2s    // 完整滚动时长
bounceY                 // 弹跳高度
bounceVel              // 弹跳速度
```

### Six Faces

每个面有正确的最终朝向：

| 值 | 朝向 |
|----|------|
| 1 | +Y |
| 2 | -X |
| 3 | +Z |
| 4 | -Z |
| 5 | +X |
| 6 | -Y |

---

## Players.jsx

玩家棋子组件，支持移动动画和跳跃弧度。

### 动画参数

| 参数 | 值 |
|------|-----|
| STEP_DURATION | 0.3s (与 MoveAnimator 同步) |
| Jump arc | `4 * t * (1 - t) * 0.4` 抛物线 |
| Easing | Cubic bezier ease-in-out |
| Landing squashY | ~0.7 |
| Landing squashXZ | ~1.15 |

### 3D Tilt

使用 `rotateOnWorldAxis` 向移动方向倾斜，峰值在半空。

---

## MoveAnimator.jsx

逐格移动同步器，确保多玩家移动步调一致。

### 关键常量

```javascript
STEP_DURATION = 0.3s  // 与 Players.jsx 同步
```

---

## Board.jsx

3D 棋盘渲染，支持多主题（Christmas/Retro/Neon）。

### 棋盘尺寸

- BOARD_SIZE = 36 格
- 围绕正方形边框排列

### 地皮类型

- PROPERTY：可购买地皮
- CHANCE：机会卡
- QUESTION：问答卡
- TAX：税收
- GO：起点
- JAIL：监狱
- FREE_PARKING：免费停车场
- GO_TO_JAIL：入狱