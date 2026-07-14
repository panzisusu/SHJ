# Walkthrough: Generating 17 New Beast Illustrations & Card Game Setup

This document summarizes the changes made to the "山海經 · 奇獸異誌" (Classic of Mountains & Seas) project to generate the subsequent batch of 17 beast illustrations and keep both the local and remote repositories updated.

## 🎨 Changes Made

### 1. Generated 17 New Beast Illustrations (Batch 4)
We generated 17 new AI illustrations in the custom ink-wash style (水墨工筆畫結合金色細線描邊，羊皮紙紋理背景) for:
1. **帝江 (神鳥)** (`dijiang-origin.png`)
2. **飛鼠** (`feishu.png`)
3. **領胡** (`linghu.png`)
4. **土螻** (`tulou.png`)
5. **欽原** (`qinyuan.png`)
6. **䱱魚** (`ti-yu.png`)
7. **三首國神** (`sanshou-nation.png`)
8. **玉蟾** (`yuchan.png`)
9. **青龍** (`qinglong.png`)
10. **白虎** (`baihu.png`)
11. **朱雀** (`zhuque.png`)
12. **玄武** (`xuanwu.png`)
13. **魍魎** (`wangliang.png`)
14. **玉兔** (`yuchan-spirit.png`)
15. **三足烏 (精魂)** (`sanshu-bird.png`)
16. **麒** (`qilin-lin.png`)
17. **麟** (`qilin-lin-female.png`)

These files have been successfully saved to:
- `Shan-Hai-Jing/assets/`
- `gogogo137-cmyk.github.io/Shan-Hai-Jing/assets/`

### 2. Updated README.md
We updated the list of illustrated beasts in the project's documentation.
- The list now includes **110 beasts** (updated from 93).
- Updated both `Shan-Hai-Jing/README.md` and `gogogo137-cmyk.github.io/Shan-Hai-Jing/README.md`.

### 3. Service Worker Version Update
- Bumped the service worker cache version to `shanhaijing-cache-v7` in both folders (`sw.js`) to ensure browsers retrieve the new illustrations on refresh.

### 4. Card Game Design & Layout Changes
- **Added `card_game_design.md`**: Created a detailed card game design proposal outlining the 3 attributes (Divine/Auspicious/Perilous), 5 directions/regions (East/South/West/North/Central), and card layout equations for 200 selected beasts. Saved in both `Shan-Hai-Jing/` directories.
- **Updated `index.html` Navigation Tabs**: Added a new tab button "卡牌遊戲(籌備中)" right next to "筆者說明".
- **Added `tab-cardgame` Pane**: Built the card game teaser pane displaying a summary of the card battle rules.
- **Next steps**: Preparing `filter_200_beasts.py` and the single-player combat simulator when the user is ready.

