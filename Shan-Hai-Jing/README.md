# 山海經 · 奇獸異誌 | Classic of Mountains & Seas

一個融合古典美學與現代網頁交互技術的《山海經》奇獸異誌探索網頁。本專案以中國古代神話巨著《山海經》為藍本，收錄了數百種珍禽異獸，並通過極具儀式感的互動介面（天體八卦羅盤、神話卷軸等），帶領使用者探尋遠古神祕的東方幻想世界。

---

## 🎨 專案特色與設計美學

- **古風視覺美學**：整體設計採用傳統宣紙/羊皮紙質感背景（Ink Wash），融合金色邊框、玄色主調與流動的微光粒子 Canvas 特效，營造神祕、高雅的古籍卷軸儀式感。
- **互動天體羅盤 (Luo Pan Compass)**：首頁配有可點擊旋轉的八卦天體羅盤，使用者可點擊「東、西、南、北、中」方位，或手動旋轉指針，來篩選不同地域（如《東山經》、《中山經》等）出沒的奇珍異獸。
- **山海百獸卡牌**：動態展示異獸卡片，支持「神獸」、「瑞獸」、「凶獸」等屬性分類篩選，每張卡片皆有滑鼠懸停微動畫。
- **靈性數值與古籍剖析**：點擊卡牌可展開精美詳情彈窗，展示該異獸的三維靈性數值（神性 Spiritual Power、凶性 Aggression、稀有度 Rarity），並附上《山海經》先秦古籍文言原文與現代白話文釋義。
- **神話卷軸 (Lore Scrolls)**：特設「神話傳說」專區，採用橫向卷軸展卷動畫，收錄了「夸父追日」、「精衛填海」、「女媧補天」等耳熟能詳的遠古神話故事。

---

## 🛠️ 技術棧

- **核心結構**：HTML5（語意化標籤，高可讀性與 SEO 優化）。
- **視覺呈現**：Vanilla CSS3（自訂 HSL 古典色盤、Glassmorphism 玻璃擬態、Flexbox/Grid 響應式佈局、Keyframe 平滑过渡動畫）。
- **核心邏輯**：Javascript ES6（負責動態渲染 450 隻異獸的數據庫、羅盤旋轉交互、篩選算法、彈窗狀態控制）。
- **特效引擎**：HTML5 Canvas API（繪製靈動的金色精神粒子飄落背景效果）。
- **外部資源**：Google Fonts (Cinzel Decorative, Montserrat, Noto Serif TC)、Font Awesome 圖標庫。

---

## 📂 檔案結構

```text
Shan-Hai-Jing/
├── index.html          # 主頁面結構與模態窗口
├── styles.css          # 全局樣式、古典設計系統與動畫特效
├── app.js              # 核心邏輯、事件監聽與 450 隻異獸數據庫
├── README.md           # 專案說明文件
└── assets/             # 視覺資源與 AI 生成的古風異獸插畫
    ├── ink_wash_bg.png       # 宣紙古風底圖
    ├── placeholder_beast.png # 默認異獸剪影佔位圖
    ├── nine_tailed_fox.png   # 九尾狐插圖
    ├── zhu_long.png          # 燭龍插圖
    ├── taotie.png            # 饕餮插圖
    ├── jingwei.png           # 精衛插圖
    ├── qilin.png             # 麒麟插圖
    ├── xing_tian.png         # 刑天插圖
    ├── hundun.png            # 混沌插圖
    ├── tiangou.png           # 天狗插圖
    ├── bi_fang.png           # 畢方插圖
    ├── ling_ling.png         # 軨軨插圖
    ├── fenghuang.png         # 鳳凰插圖
    ├── luwu.png              # 陸吾插圖
    ├── yinglong.png          # 應龍插圖
    ├── kui.png               # 夔插圖
    ├── bashe.png             # 巴蛇插圖
    ├── kaiming.png           # 開明獸插圖
    └── ... (其餘 400+ 異獸插圖正在生成中)
```

---

## 🐲 異獸插畫生成進度

目前數據庫共收錄 **450 隻** 異獸，AI 插畫生成採用 **「水墨工筆畫結合金色細線描邊，羊皮紙紋理背景」** 的統一美術風格。

目前已上線專屬插畫的異獸：
1. **九尾狐** (nine-tailed-fox) - 瑞獸
2. **燭龍** (zhu-long) - 神獸
3. **饕餮 (麅鴞)** (taotie) - 凶獸
4. **精衛** (jingwei) - 瑞獸
5. **麒麟** (qilin) - 瑞獸
6. **刑天** (xing-tian) - 神獸
7. **混沌 (帝江)** (hundun) - 凶獸
8. **天狗** (tiangou) - 瑞獸
9. **畢方** (bi-fang) - 神獸
10. **軨軨** (ling-ling) - 凶獸
11. **鳳凰** (fenghuang) - 瑞獸
12. **陸吾** (luwu) - 神獸
13. **夔** (kui) - 神獸
14. **應龍** (yinglong) - 神獸
15. **巴蛇** (bashe) - 凶獸
16. **開明獸** (kaiming) - 神獸
17. **英招** (yingzhao) - 神獸
18. **檮杌** (taowu) - 凶獸
19. **窮奇** (qiongqi) - 凶獸
20. **當康** (dangkang) - 瑞獸
21. **夫諸** (fuzhu) - 凶獸
22. **肥遺 (蛇)** (feiyi) - 凶獸
23. **鳴蛇** (mingshe) - 凶獸
24. **化蛇** (huashe) - 凶獸
25. **旋龜** (xuanguian) - 瑞獸
26. **鹿蜀** (lushu) - 瑞獸
27. **狌狌** (xingxing) - 瑞獸
28. **類** (lei) - 瑞獸
29. **猼訑** (boyi) - 瑞獸
30. **灌灌** (guanguan) - 瑞獸
31. **赤鱬** (chiru) - 瑞獸
32. **狸力** (lili) - 瑞獸
33. **鴒䳿** (lingyu) - 瑞獸
34. **瞿如** (quru) - 瑞獸
35. **虎蛟** (hujiao) - 神獸
36. **蜚** (fei) - 凶獸
37. **鱅鱅魚** (yongyong-fish) - 瑞獸
38. **絜鉤** (xiegou) - 凶獸
39. **數斯** (shusi) - 瑞獸
40. **冉遺魚** (ranyi-fish) - 瑞獸
41. **駁** (bo) - 瑞獸
42. **讙** (huan) - 瑞獸
43. **鵸鵌** (qitu) - 瑞獸
44. **諸懷** (zhuhuai) - 凶獸
45. **梁渠** (liangqu) - 凶獸
46. **狙如** (juru) - 凶獸
47. **獓𢀚** (aoye) - 凶獸
48. **玃如** (jueru) - 瑞獸
49. **舉父** (jufu) - 瑞獸
50. **孰湖** (shuhu) - 神獸
51. **竦斯** (songsi) - 瑞獸
52. **鸓** (lei-bird) - 瑞獸
53. **患** (huan-beast) - 瑞獸
54. **天馬** (tianma) - 瑞獸
55. **乘黃** (chenghuang) - 瑞獸
56. **九鳳** (jiufeng) - 神獸
57. **猙** (zheng) - 瑞獸
58. **狡** (jiao) - 瑞獸
59. **鸞鳥** (luanniao) - 瑞獸
60. **顒** (yong) - 凶獸
61. **蠱雕** (gudiao) - 凶獸
62. **無支祁** (wuzhiqi) - 神獸
63. **薄魚** (boyu) - 凶獸
64. **合窳** (heyu) - 凶獸
65. **文鰩魚** (wenyao-fish) - 瑞獸
66. **何羅魚** (helu-fish) - 瑞獸
67. **蠻蠻 (比翼鳥)** (manman-bird) - 瑞獸
68. **酸與** (suanyu) - 凶獸
69. **窫窳** (yayu) - 凶獸
70. **三足烏** (sanzuwu) - 神獸
71. **冰夷** (bingyi) - 神獸
72. **雨師妾** (yushiqie) - 神獸
73. **屏翳** (pingyi) - 神獸
74. **女丑** (nvchou) - 神獸
75. **吉量** (jiliang) - 瑞獸
76. **蠃魚** (luoyu) - 凶獸
77. **山膏** (shangao) - 凶獸
78. **居暨** (juji) - 凶獸
79. **長右** (changyou) - 凶獸
80. **猾褢** (huahuai) - 凶獸
81. **彘 (獸)** (zhi) - 凶獸
82. **羬羊** (qianyang) - 瑞獸
83. **儵魚** (shuyu) - 瑞獸
84. **鯥** (luyu) - 瑞獸
85. **𩣡馬** (yuma) - 瑞獸
86. **天犬** (tianquan) - 瑞獸
87. **獜** (lin) - 凶獸
88. **䍺** (huan-sheep) - 瑞獸
89. **峳峳** (youyou) - 瑞獸
90. **犰狳** (qiuyu) - 凶獸
91. **朱厭** (zhuyan) - 凶獸
92. **當扈** (danghu) - 瑞獸
93. **耳鼠** (ershu) - 瑞獸

94. **帝江 (神鳥)** (dijiang-origin) - 神獸
95. **飛鼠** (feishu) - 瑞獸
96. **領胡** (linghu) - 瑞獸
97. **土螻** (tulou) - 凶獸
98. **欽原** (qinyuan) - 凶獸
99. **䱱魚** (ti-yu) - 瑞獸
100. **三首國神** (sanshou-nation) - 神獸
101. **玉蟾** (yuchan) - 瑞獸
102. **青龍** (qinglong) - 神獸
103. **白虎** (baihu) - 神獸
104. **朱雀** (zhuque) - 神獸
105. **玄武** (xuanwu) - 神獸
106. **魍魎** (wangliang) - 凶獸
107. **玉兔** (yuchan-spirit) - 瑞獸
108. **三足烏 (精魂)** (sanshu-bird) - 神獸
109. **麒** (qilin-lin) - 神獸
110. **麟** (qilin-lin-female) - 神獸
111. **𩳁** (jiu-bird) - 瑞獸
112. **赤眼** (chiyan-beast) - 凶獸
113. **甡甡** (shenshen-beast) - 瑞獸
114. **𤲞** (xun-beast) - 瑞獸
115. **幽鴳** (youren-beast) - 瑞獸
116. **天之** (tianzhi-bird) - 瑞獸
117. **山君** (shanjun-beast) - 神獸
118. **𢕟𢖵** (mangcao-beast) - 瑞獸
119. **嬰處** (yingchu-beast) - 瑞獸
120. **禍斗** (huodou-beast) - 凶獸
121. **䲢魚 (天魚)** (yuzhi-fish) - 神獸
122. **重渠** (chongqu-beast) - 瑞獸
123. **大人神** (ran-min-giant) - 神獸
124. **天帝英靈** (tiandi-god) - 神獸
125. **蚩尤戰魂** (chiyou-spirit) - 神獸
126. **朝陽水伯** (zhaoyang-god) - 神獸
127. **三足烏 (神雛)** (sanshu-crow) - 瑞獸
128. **髯飛鳥 (當扈)** (danghu-whisker) - 瑞獸
129. **飛耳鼠 (耳鼠)** (ershu-flying) - 瑞獸
130. **朏朏** (mizhi) - 瑞獸
131. **騶虞** (zouyu) - 瑞獸
132. **白澤** (baize-spirit) - 瑞獸
133. **青耕** (qinggeng) - 瑞獸
134. **勝遇** (shengyu) - 凶獸
135. **天鯁** (tiangeng-divine) - 神獸
136. **䴤** (xianfu-ape) - 瑞獸
137. **獬豸** (hechi) - 神獸
138. **狻猊** (suanni-lion) - 瑞獸
139. **赑屭** (bixi-dragon) - 神獸
140. **睚眥** (yazi-sword) - 凶獸
141. **蒲牢** (pulao-bell) - 瑞獸
142. **螭吻** (chiwen-fire) - 瑞獸
143. **囚牛** (qiuniu-lute) - 瑞獸
144. **鱵魚** (yaxian-fish) - 瑞獸

*(其餘 300+ 隻異獸目前加載默認的 `placeholder_beast.png` 黑色九尾狐剪影，專屬插圖正由 AI 陸續繪製中...)*


---

## 🚀 如何運行

1. 本專案為純前端網頁，無須任何複雜的後端編譯或安裝環境。
2. 你可以直接雙擊 `index.html` 在瀏覽器中打開。
3. 若要獲得最佳體驗（避免本機路徑的 CORS 限制），建議使用本地輕量級伺服器啟動，例如：
   ```bash
   # 使用 npm 安裝並啟動 http-server
   npx http-server
   ```
   然後在瀏覽器中打開 `http://localhost:8080` 即可訪問。 
