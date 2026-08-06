# Workspace Rules - Battle V3 Prototype (Art Integration Rules - Version 3.1)

## 【正式素材接入 Protocol - mandatory rules】

### 1. 禁止自行猜測圖片或自行引用
**嚴格禁止：**
- 盲猜圖片名稱、英文 ID、拼音檔名
- 自行建立圖片、下載圖片、AI 生成圖片
- **未經使用者明確確認，不得主動修碼替換素材**

### 2. 接入圖片 SOP（掃描 → 列出選項 → 停止修碼 → 詢問使用者）
當需要替換 Boss、玩家、卡牌、背景或 UI 素材時：
1. **掃描** `assets/` 目錄。
2. **完整列出** 所有符合條件的候選圖片檔名與相對路徑。
   - **【多圖嚴格禁令】若找到超過一張符合條件的圖片，不得依圖片尺寸、副檔名、建立日期或檔名長短自行判斷挑選哪一張是正式版，必須全數列出！**
3. **停止修改程式**。
4. **輸出視窗詢問使用者** 欲指定使用哪一張。
5. **取得使用者明確確認後**，始可修碼接入。

### 3. 圖片屬性規範
- 一律使用 `<img>` 標籤（禁用 `background-image`, `canvas`, `svg`）。
- 預設 CSS：
  ```css
  object-fit: contain;
  object-position: center;
  transform-origin: center bottom;
  ```

### 4. 戰鬥邏輯與 Battle Feel 保護
- 接入素材時禁止修動 `js/game.js` 戰鬥邏輯、Boss Hit、Boss Dead、HP、Buff、Debuff、Animation、DOM ID。
- 絕不破壞受擊震動、飛牌、五行共鳴、能量束、Victory 與 RWD 流程。
- 在正式素材尚未經使用者指定前，CSS Placeholder 需完整保留作為 Fallback。
- **`battle-v2` 與 `battle-v2-final-demo-20260806` 永久封版保護**。
