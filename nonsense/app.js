// Curated 45 Classic Nonsense Sayings Database
const quotes = [
  {
    id: "q1",
    quote: "「聽君一席話，如聽一席話。」",
    category: "logic",
    index: 99,
    shatter: 100,
    icon: "fa-solid fa-microphone",
    analysis: "這句話運用了高度的語意重複法，表面上同意了對方的看法，但實際上沒有提供任何新的資訊。堪稱語言學上的完美閉環，能夠在不冒犯任何人的情況下，成功度過一秒鐘。",
    scene: "開會時被長官詢問意見、朋友講完超長廢話時的敷衍點頭、或者想製造哲學深度時。"
  },
  {
    id: "q2",
    quote: "「在台灣，每過 60 秒，就有一分鐘過去了。」",
    category: "nonsense",
    index: 100,
    shatter: 100,
    icon: "fa-solid fa-clock",
    analysis: "愛因斯坦相對論在日常生活中的終極體現。它無可辯駁地闡明了時間不可逆流的真理，以最科學、最客觀的數據說明了時間逝去的殘酷事實。",
    scene: "當你需要填充報告字數、或是想要用非常理性客觀的態度提醒朋友時間寶貴時。"
  },
  {
    id: "q3",
    quote: "「人被殺，就會死。」",
    category: "nonsense",
    index: 98,
    shatter: 95,
    icon: "fa-solid fa-skull-crossbones",
    analysis: "闡明了基本的生命科學常識。以絕對無可反駁的因果關係，點出生命在面對物理性消滅時的脆弱性，具有強烈的生存哲學警示意味。",
    scene: "看動作片時發表高深影評、或是作為健康教育課程的開場白。"
  },
  {
    id: "q4",
    quote: "「只要每天省下一杯大冰奶的錢，十天之後，你就能買十杯大冰奶。」",
    category: "logic",
    index: 95,
    shatter: 90,
    icon: "fa-solid fa-mug-hot",
    analysis: "這是一個在微觀經濟學上完美的儲蓄與投資閉環。它向我們揭示了資金的流動性與延遲享樂的儲蓄本質——即本金的累積並不會增值，但本金確實依然是本金。",
    scene: "當朋友找你討論如何理財、存第一桶金，或者你只是想說服自己再買一杯大冰奶時。"
  },
  {
    id: "q5",
    quote: "「人只要不放棄，就還有機會放棄。」",
    category: "soup",
    index: 92,
    shatter: 85,
    icon: "fa-solid fa-person-running",
    analysis: "這句毒雞湯打破了傳統的盲目樂觀，以極具辨證性的角度思考了「放棄」的權利。它提醒我們，主動的選擇權永遠在自己手上——包括放棄這件事本身。",
    scene: "工作累到快崩潰想休假時、或是用來安慰考試/比賽失利的死黨。"
  },
  {
    id: "q6",
    quote: "「如果妳男朋友嫌妳胖，那就換一個不嫌妳胖的男朋友。」",
    category: "love",
    index: 90,
    shatter: 80,
    icon: "fa-solid fa-heart-crack",
    analysis: "一針見血的情感切割法則。它避開了解決生理問題的複雜度，直接從社會關係的根本結構上進行重組，是最高效、成本最低的情感優化策略。",
    scene: "當閨蜜哭訴男友對她身材指指點點時、或是作為新時代戀愛指南。"
  },
  {
    id: "q7",
    quote: "「如果你能在早上 6 點起床，你就能在早上 6 點看見世界。」",
    category: "nonsense",
    index: 97,
    shatter: 98,
    icon: "fa-solid fa-sun",
    analysis: "揭示了視覺與時間、空間的三維連動關係。說明只要人的生理機能在特定時間保持清醒，光子就能順利穿過視網膜，讓人體驗到清晨的光景。",
    scene: "向同事吹噓自己生活規律、或是想要寫一句假裝積極向上的早安問候時。"
  },
  {
    id: "q8",
    quote: "「只要你不說，就沒有人知道你沒說話。」",
    category: "logic",
    index: 94,
    shatter: 96,
    icon: "fa-solid fa-comment-slash",
    analysis: "古典資訊論的終極演繹。只要發信源不釋放任何聲波訊號，在物理上接受端就只能觀測到背景雜訊。這是保持神祕感與沉默權的最簡單方法。",
    scene: "在尷尬的社交場合想要保持沉默、或是被老師/主管點名而不知道要說什麼時。"
  },
  {
    id: "q9",
    quote: "「張開你的眼睛，你就能看見世界。」",
    category: "nonsense",
    index: 96,
    shatter: 99,
    icon: "fa-solid fa-eye",
    analysis: "極為基礎的光學與眼科學原理。通過控制眼輪匝肌的收縮，揭開眼瞼，使外界光線射入眼球，大腦視覺皮質才能成像。完全是無懈可擊的科學真理。",
    scene: "當有人說他看不到希望、或者在跟瞎扯的朋友進行日常抬槓時。"
  },
  {
    id: "q10",
    quote: "「好不好啊阿華田，小心做事小叮噹。」",
    category: "logic",
    index: 99,
    shatter: 92,
    icon: "fa-solid fa-wand-magic-sparkles",
    analysis: "這是一句融合了台灣特有諧音文化的頂級順口溜。將人際關係中的叮嚀與飲品的提問巧妙連結，雖然字面上沒有邏輯關係，但在語感上形成了無懈可擊的押韻美感。",
    scene: "和朋友哈啦抬槓、或是工作交接時想用幹話叮嚀對方小心細心時。"
  },
  {
    id: "q11",
    quote: "「如果你不吃早餐，中午你就會覺得肚子餓。」",
    category: "nonsense",
    index: 95,
    shatter: 90,
    icon: "fa-solid fa-utensils",
    analysis: "這是有關生理消化系統的時序因果律。前一餐未攝取熱量，血糖降低，胃部分泌飢餓素。完全是一堂完美的生理衛生課。",
    scene: "關心朋友的健康、或者是想不到話題時找話聊的破冰開場白。"
  },
  {
    id: "q12",
    quote: "「只要你願意出門，你就不會待在家裡。」",
    category: "nonsense",
    index: 98,
    shatter: 98,
    icon: "fa-solid fa-door-open",
    analysis: "空間物理學與幾何拓撲學的簡單體現。同一個物體在同一時間只能佔據一個三維座標空間。只要座標移出家門，即判定為出門。",
    scene: "勸宅在家裡的朋友多出去走走、或是進行高深哲學論證時。"
  },
  {
    id: "q13",
    quote: "「如果全世界都反對你，那你就是站在了全世界的對立面。」",
    category: "logic",
    index: 94,
    shatter: 88,
    icon: "fa-solid fa-earth-asia",
    analysis: "集合論與空間相對位置的定義。只要全球 80 億人相對於你的向量相反，在統計學與拓撲學上，你就是那唯一反向的單點元素。",
    scene: "安慰自認為被世界遺棄的人、或是激勵自己要勇敢走不一樣的路時。"
  },
  {
    id: "q14",
    quote: "「世界上有 10% 的人看不懂這句話，而另外 90% 的人看得懂。」",
    category: "logic",
    index: 91,
    shatter: 85,
    icon: "fa-solid fa-percent",
    analysis: "完美的百分比互補算術。將母體一分為二，其中一部分與另一部分的加總必定為 100%。即使數值是隨便編的，數學邏輯依然無懈可擊。",
    scene: "寫簡報分析報表需要裝專業時、或是逗朋友玩的數學謎題。"
  },
  {
    id: "q15",
    quote: "「你這輩子如果活到 80 歲，那你大概就活了 80 年。」",
    category: "nonsense",
    index: 99,
    shatter: 100,
    icon: "fa-solid fa-hourglass-half",
    analysis: "時間長度單位的等價代換公式。一歲等同於一年，因此 80 歲的生命長度恰好等於 80 個地球公轉週期。此句完美展示了恆等式的無用魅力。",
    scene: "祝壽致詞想搞笑、或是寫自傳充字數時的最佳神句。"
  },
  {
    id: "q16",
    quote: "「當你買了一雙新鞋子，它就不是舊鞋子了。」",
    category: "nonsense",
    index: 93,
    shatter: 92,
    icon: "fa-solid fa-shoe-prints",
    analysis: "時間物性狀態的二元對立關係。新與舊是相對且互斥的概念。購買行為發生的當下，鞋子便獲得了「新」的狀態標籤，直到它被穿舊。",
    scene: "開箱新買的潮流球鞋、或是為自己的消費找一個完全合理的廢話藉口時。"
  },
  {
    id: "q17",
    quote: "「如果每個人都退一步，那大家都退了一步。」",
    category: "logic",
    index: 96,
    shatter: 94,
    icon: "fa-solid fa-arrows-left-right",
    analysis: "全體一致性向量移動。如果所有人向後方平移一個單位，系統整體的相對位置保持不變，但絕對座標確實都往後挪了一格。充滿合作哲學。",
    scene: "人際糾紛調解、或是想用一本正經的方式在開會時打哈哈。"
  },
  {
    id: "q18",
    quote: "「今天下雨的話，地上就會是濕的。」",
    category: "nonsense",
    index: 95,
    shatter: 95,
    icon: "fa-solid fa-cloud-showers-heavy",
    analysis: "氣象學與流體力學的簡單必然現象。水分從雲層降落到地表，在重力作用下覆蓋地表，使地表介質的含水量達到飽和。這是水的物理特性。",
    scene: "雨天跟同事尷尬搭電梯找話題聊、或是想展現觀察自然現象的能力時。"
  },
  {
    id: "q19",
    quote: "「你如果不睡覺，你就會一直保持清醒。」",
    category: "nonsense",
    index: 97,
    shatter: 97,
    icon: "fa-solid fa-bed",
    analysis: "生理學上的二元睡眠週期。意識清醒與睡眠是不可並存的生理狀態。只要大腦皮質的警覺神經元持續放電，個體就判定為清醒。",
    scene: "熬夜打電動/加班被關心時的回話、或是安慰失眠的朋友。"
  },
  {
    id: "q20",
    quote: "「如果你不把這杯水喝完，這杯水就不會是空的。」",
    category: "nonsense",
    index: 94,
    shatter: 94,
    icon: "fa-solid fa-glass-water",
    analysis: "物質留存定律。物理容積被液體分子占據。只要液體未被外力移出，容器的容積就依然存在內容物。在熱力學上，這杯水確實還裝著水。",
    scene: "喝酒聚會勸酒、或是吃火鍋看著高湯發呆時。"
  },
  {
    id: "q21",
    quote: "「吃苦不一定會成功，但一直吃苦就會一直吃苦。」",
    category: "soup",
    index: 96,
    shatter: 92,
    icon: "fa-solid fa-mug-hot",
    analysis: "反向因果律與重複性勞動真理。它打破了吃苦耐勞的成功學迷思，指出苦難本身只會帶來生理與心理的磨損，並不會自動轉化為財富。",
    scene: "抱怨工作太累、跟朋友聚餐吐槽主管、或者是遭遇挫折想自嘲時。"
  },
  {
    id: "q22",
    quote: "「上帝關了你一扇門，還會順手把窗戶也關上。」",
    category: "soup",
    index: 94,
    shatter: 88,
    icon: "fa-solid fa-window-maximize",
    analysis: "逆境生存哲學。它幽默地指出人生的多重困境，並不會因為某個地方受挫就自動在別處獲得補償。面對密閉空間，你需要的是一把鐵鎚。",
    scene: "生活接二連三不順利時發限時動態自嘲、或是安慰倒楣透頂的死黨。"
  },
  {
    id: "q23",
    quote: "「哪裡跌倒，就在哪裡躺好。」",
    category: "soup",
    index: 95,
    shatter: 90,
    icon: "fa-solid fa-couch",
    analysis: "重力順從與節能減碳心態。與其掙扎著站起來再次受傷，不如順應地心引力原地休息。這是一種極致的防禦性哲學，能有效防止二次傷害。",
    scene: "週五下班累癱在沙發上、或是想擺脫高壓生活、宣示躺平時。"
  },
  {
    id: "q24",
    quote: "「世上無難事，只要肯放棄。」",
    category: "soup",
    index: 97,
    shatter: 95,
    icon: "fa-solid fa-flag",
    analysis: "任務優化與難度降維法則。任何高難度任務在放棄的當下，其難度係數都會瞬間歸零。這是最快消除焦慮、實現自我解脫的終極算法。",
    scene: "減肥第3天想吃大餐、或是專案卡關快崩潰時的解脫神句。"
  },
  {
    id: "q25",
    quote: "「強者不是沒有眼淚，而是他比較會裝。」",
    category: "soup",
    index: 91,
    shatter: 82,
    icon: "fa-solid fa-mask",
    analysis: "職場演技與社交面具的現實解析。它告訴我們，所謂的堅強不過是演技純熟的產物，大家都在演戲，就看誰的撲克臉能撐到最後。",
    scene: "上班被主管罵卻依然保持禮貌微笑、或是自我安慰要堅強時。"
  },
  {
    id: "q26",
    quote: "「雖然你長得醜，但你想得美啊。」",
    category: "soup",
    index: 93,
    shatter: 86,
    icon: "fa-solid fa-face-grimace",
    analysis: "視覺現實與意識幻想的對稱平衡。它指出了個體在客觀外貌缺陷與主觀美好想像之間的巨大反差，是一句充滿打擊性卻充滿哲學的對比句。",
    scene: "吐槽朋友白日做夢（如中威力彩）、或是和死黨鬥嘴互嗆時。"
  },
  {
    id: "q27",
    quote: "「努力不一定有回報，但偷懶一定很舒服。」",
    category: "soup",
    index: 95,
    shatter: 89,
    icon: "fa-solid fa-umbrella-beach",
    analysis: "邊際效用與即時滿足的經濟學分析。偷懶的快樂是當下即可百分之百回收的生理正回饋，而努力的回報則存在著極高的不確定性。",
    scene: "週一早上不想起床上班、或是打算在辦公室摸魚時的至理名言。"
  },
  {
    id: "q28",
    quote: "「愛笑的女孩，運氣不會太差，因為運氣差的笑不出來。」",
    category: "soup",
    index: 94,
    shatter: 91,
    icon: "fa-solid fa-face-smile-beam",
    analysis: "倖存者偏差的邏輯詮釋。笑與運氣的關係並非因果，而是篩選後的結果。只有沒有遇到倒楣事的人，才有足夠的肌肉放鬆度去展現笑容。",
    scene: "反駁心靈雞湯的語句、或是跟朋友分析邏輯學「逆否命題」時。"
  },
  {
    id: "q29",
    quote: "「比你優秀的人還在努力，那你努力還有什麼用？」",
    category: "soup",
    index: 96,
    shatter: 93,
    icon: "fa-solid fa-person-arrow-up-from-line",
    analysis: "資源競爭與相對優勢的降維打擊。如果頂層菁英依然在瘋狂內捲，那麼底層努力帶來的邊際效應將微乎其微。這是一句極具破壞力的反向動力學。",
    scene: "準備考試讀不下去、或是被家長拿來和「別人的小孩」比較時的反擊幹話。"
  },
  {
    id: "q30",
    quote: "「熱臉貼冷屁股也沒關係，至少屁股是熱的。」",
    category: "soup",
    index: 92,
    shatter: 84,
    icon: "fa-solid fa-fire",
    analysis: "熱力學第二定律在社交中的溫馨體現。雖然人際關係受挫，但在物理接觸上，能量依然從高溫物體流向低溫物體。這是一種極致的樂觀自嘲。",
    scene: "單戀失敗、討好客戶被打槍、或是安慰在職場上委曲求全的人時。"
  },
  {
    id: "q31",
    quote: "「如果妳男朋友嫌妳不夠溫柔，妳就溫柔地跟他說再見。」",
    category: "love",
    index: 91,
    shatter: 83,
    icon: "fa-solid fa-handshake-angle",
    analysis: "文字字面定義的完美反制。用最符合對方期待的「溫柔」語氣，去執行最冷酷無情的「分手」指令。充滿了語意學與行為藝術的黑色幽默。",
    scene: "給正為情所困的閨蜜出謀劃策、或是感情需要果斷止損時。"
  },
  {
    id: "q32",
    quote: "「如果妳想哭，就去跑步吧，這樣水分就會化作汗水流乾。」",
    category: "love",
    index: 88,
    shatter: 79,
    icon: "fa-solid fa-person-running",
    analysis: "水分代謝管道的替代方案。將淚腺的排出功能，通過高強度運動轉移給汗腺，從而實現體內水分平衡。用科學運動法包裝文青傷感。",
    scene: "失戀後想重整生活、或是調侃言情小說/偶像劇的經典矯情台詞。"
  },
  {
    id: "q33",
    quote: "「如果妳為了錯過太陽而流淚，那麼妳也將錯過群星，因為妳的眼睛哭腫了。」",
    category: "love",
    index: 93,
    shatter: 87,
    icon: "fa-solid fa-star",
    analysis: "生理性視覺受阻的科學警示。泰戈爾詩意背後的物理現實——強烈的淚水刺激與結膜水腫，會導致角膜屈光不正，阻礙微弱的星光成像。",
    scene: "調侃過度感性的人、或是用非常理性的物理角度去幽默拆解文青語錄時。"
  },
  {
    id: "q34",
    quote: "「如果他給不了妳未來，那就讓他成為妳的過去。」",
    category: "love",
    index: 90,
    shatter: 81,
    icon: "fa-solid fa-backward",
    analysis: "時空維度的完美座標位移。既然無法在時間軸的 t > 0 方向共同前進，就將其狀態寫死在 t < 0 的歷史唯物主義紀錄中，保持時間線乾淨。",
    scene: "感情決斷期想發霸氣語錄、或是幫助朋友下定決心分手時。"
  },
  {
    id: "q35",
    quote: "「如果他真的愛妳，他一定會主動聯絡妳；如果他沒有，那就是他在跟別人聊天。」",
    category: "love",
    index: 92,
    shatter: 84,
    icon: "fa-solid fa-comments",
    analysis: "極致的排他性概率分析。在有限的注意力經濟中，不主動發起通訊連線的唯一原因，是其網絡帶寬正被其他高優先級的通訊對象占用。",
    scene: "當閨蜜抱著手機焦急等待曖昧對象回訊息時，給她一劑無情卻真實的清醒針。"
  },
  {
    id: "q36",
    quote: "「如果他對妳忽冷忽熱，說明他正在給熱水器調溫度。」",
    category: "love",
    index: 94,
    shatter: 89,
    icon: "fa-solid fa-temperature-half",
    analysis: "家電原理解析情感波動。將對方的態度起伏，具體化為恆溫控制系統的故障。這能有效幫助個體抽離情感傷害，轉為對熱水器品質的關懷。",
    scene: "遇到忽冷忽熱的情感渣男、或是跟死黨吐槽曖昧對象的心情變化時。"
  },
  {
    id: "q37",
    quote: "「如果妳的前男友和現任男友同時掉進水裡，妳可以選擇去吃麥當勞。」",
    category: "love",
    index: 95,
    shatter: 91,
    icon: "fa-solid fa-burger",
    analysis: "決策樹分支剪枝與旁觀者效應。面對與自己無關或多餘的歷史包袱，最理性的抉擇是退出博弈，去獲取高熱量的即時生理滿足感。",
    scene: "當有人問起無聊的假設性「掉水裡」問題、或是表達徹底告別過去的灑脫時。"
  },
  {
    id: "q38",
    quote: "「女人就像一本書，但大部分男人都只看插圖。」",
    category: "love",
    index: 89,
    shatter: 78,
    icon: "fa-solid fa-book-open-reader",
    analysis: "資訊閱讀偏好與視覺認知理論。大部分男性在閱讀複雜文本時，傾向於優先處理高彩度、高資訊密度的視覺圖像，而非耗費腦力閱讀冗長字句。",
    scene: "吐槽男性視覺動物的天性、或是討論男女認知差異時的黑色幽默。"
  },
  {
    id: "q39",
    quote: "「如果你 Girlfriend 說『沒事』，那就說明她即將引發一場大事。」",
    category: "love",
    index: 92,
    shatter: 85,
    icon: "fa-solid fa-triangle-exclamation",
    analysis: "否定句在情感危機中的反向預警。在情感情境下，「沒事」是一個經典的緩衝區溢位信號，其含意為「當前線程即將崩潰，請準備避難」。",
    scene: "給剛交女朋友的兄弟上求生法則課程、或是預警情感危機時。"
  },
  {
    id: "q40",
    quote: "「如果你覺得某個女孩很難追，說明你的存款還不夠追她的利息。」",
    category: "love",
    index: 91,
    shatter: 83,
    icon: "fa-solid fa-wallet",
    analysis: "金融資本市場在戀愛博弈中的殘酷定價。將情感交流的難度，量化為資本市場的信用貸款利息。點出了經濟基礎決定上層交往的硬道理。",
    scene: "吐槽拜金現象、或是兄弟聚會自嘲口袋不夠深追不到女神時。"
  },
  {
    id: "q41",
    quote: "「如果你能用錢解決問題，說明你很有錢，因為沒錢的人解決不了問題。」",
    category: "logic",
    index: 94,
    shatter: 92,
    icon: "fa-solid fa-money-bill-wave",
    analysis: "資本實力的同義反覆。將解決問題的媒介設定為資金，並推導出只有擁有該媒介的人才能使用它。邏輯閉環極度流暢，沒有一句廢話。",
    scene: "當有人說「能用錢解決的都是小事」時，用來無情戳破他裝闊的面具。"
  },
  {
    id: "q42",
    quote: "「如果你不努力，你就不知道什麼叫絕望。」",
    category: "soup",
    index: 95,
    shatter: 90,
    icon: "fa-solid fa-face-sad-cry",
    analysis: "測試極限的實驗精神。如果不將努力的參數調到最大，你就無法測量出自身天花板與現實重力之間的絕對差距。這是一場嚴謹的絕望測試。",
    scene: "大考前夕/專案收尾熬夜卻依然成果慘淡時，用來自嘲釋放壓力。"
  },
  {
    id: "q43",
    quote: "「如果每個人都說你很特別，那你其實就很普通，因為大家都一樣特別。」",
    category: "logic",
    index: 93,
    shatter: 89,
    icon: "fa-solid fa-people-group",
    analysis: "特別的相對概念消解。在一個所有元素都具備獨特屬性的集合中，『獨特』便成為了該集合的普適共性特徵，從而在統計學上失去了獨特意義。",
    scene: "拆穿社交客套讚美、或是進行群體統計學分析時的幽默總結。"
  },
  {
    id: "q44",
    quote: "「如果你這輩子沒成功，下輩子你可以繼續不成功。」",
    category: "soup",
    index: 96,
    shatter: 94,
    icon: "fa-solid fa-repeat",
    analysis: "命運輪迴的均值回歸與穩定狀態。指出個體行為習慣與社會經濟重力的跨生命週期延續性。下輩子繼續躺平是保持系統熵增最小的最佳途徑。",
    scene: "自認沒有出人頭地命的人想發洩、或是與朋友一起宣誓永世平庸時。"
  },
  {
    id: "q45",
    quote: "「只要你的心態好，你的困難就會一直留在那裡，不會變少。」",
    category: "soup",
    index: 97,
    shatter: 93,
    icon: "fa-solid fa-mountain",
    analysis: "主客觀世界的徹底割裂。心態改變只會優化你大腦中的皮質醇分泌，而外部物理世界的障礙物（如困難）是不會因為你的神經遞質改變而憑空消失的。",
    scene: "面臨巨大生活困難想吐苦水、或者是想要無情戳破所謂「轉念就好」時。"
  }
];

// Current State
let activeCategory = "all";

// Render original stats on load
document.addEventListener("DOMContentLoaded", () => {
    renderAllCards();
    updateQuotesCount();
    
    // Set first quote as default spotlight
    if (quotes.length > 0) {
        renderPreviewCard(quotes[0], false);
    }
});

// Filter functions
function filterCategory(category) {
    activeCategory = category;
    document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`cbtn-${category}`).classList.add("active");
    renderAllCards();
    updateQuotesCount();
}

// Get currently filtered list
function getFilteredList() {
    return quotes.filter(q => {
        return activeCategory === "all" || q.category === activeCategory;
    });
}

// Render cards in the pool gallery
function renderAllCards() {
    const listContainer = document.getElementById("quote-grid");
    if (!listContainer) return;
    const filtered = getFilteredList();
    listContainer.innerHTML = "";
    
    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="no-data">沒有符合篩選條件的金句</div>`;
        return;
    }
    
    filtered.forEach(q => {
        // Translate category
        let catText = "邏輯鬼才";
        if (q.category === "nonsense") catText = "廢話大師";
        if (q.category === "soup") catText = "心靈毒雞湯";
        if (q.category === "love") catText = "情感指南針";

        const card = document.createElement("div");
        card.className = "quote-mini-card";
        card.innerHTML = `
            <div class="mini-card-icon-placeholder">
                <i class="${q.icon}"></i>
            </div>
            <div class="mini-card-info">
                <h4>${q.quote}</h4>
                <p class="mini-card-category-text">${catText}</p>
                <div class="mini-card-badges">
                    <span class="badge-index">幹話度 ${q.index}%</span>
                </div>
            </div>
        `;
        
        // Allow clicking the mini card to inspect immediately
        card.style.cursor = "pointer";
        card.onclick = () => {
            renderPreviewCard(q, false);
            triggerCelebration();
        };
        
        listContainer.appendChild(card);
    });
}

// Update the count on the screen
function updateQuotesCount() {
    const filtered = getFilteredList();
    const poolCountText = document.getElementById("pool-count");
    if (poolCountText) {
        poolCountText.textContent = `當前篩選池：${filtered.length} 句`;
    }
}

// Weighted Random Picker based on SQRT(index * shatter)
function spinWheel() {
    const filtered = getFilteredList();
    if (filtered.length === 0) {
        alert("當前篩選池內沒有金句，請調整篩選標籤！");
        return;
    }
    const btn = document.getElementById("btn-spin");
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> 正在連線哲學腦迴...`;

    const avatarEl = document.getElementById("spotlight-avatar");
    avatarEl.classList.add("spinning-effect");

    // Visual Spin Effect (rapid swapping quotes)
    let count = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
        const tempIdx = Math.floor(Math.random() * filtered.length);
        const temp = filtered[tempIdx];
        
        // Draw temporary text
        document.getElementById("spotlight-quote").textContent = temp.quote;
        document.getElementById("spotlight-index").textContent = "??%";
        document.getElementById("spotlight-shatter").textContent = "計算中...";
        document.getElementById("spotlight-analysis").textContent = "正在下載哲學賞析內容...";
        document.getElementById("spotlight-scene").textContent = "正在載入行為場景建議...";
        
        count++;
        
        if (count >= maxSpins) {
            clearInterval(interval);
            
            // Execute the actual math picker
            // Weight = Math.sqrt(index * shatter)
            const weights = filtered.map(q => Math.sqrt(q.index * q.shatter));
            const totalWeight = weights.reduce((sum, w) => sum + w, 0);
            const randomNum = Math.random() * totalWeight;
            
            let winner = filtered[filtered.length - 1];
            let weightSum = 0;
            
            for (let i = 0; i < filtered.length; i++) {
                weightSum += weights[i];
                if (randomNum <= weightSum) {
                    winner = filtered[i];
                    break;
                }
            }
            
            // Display Winner
            renderPreviewCard(winner, false);
            avatarEl.classList.remove("spinning-effect");
            triggerCelebration();
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-shuffle"></i> 隨機抽取一句幹話！`;
        }
    }, 90);
}

// Show the quote in the spotlight card
function renderPreviewCard(q, isSpinning) {
    const quoteEl = document.getElementById("spotlight-quote");
    const catEl = document.getElementById("spotlight-category");
    const indexEl = document.getElementById("spotlight-index");
    const shatterEl = document.getElementById("spotlight-shatter");
    const analysisEl = document.getElementById("spotlight-analysis");
    const sceneEl = document.getElementById("spotlight-scene");
    const avatarEl = document.getElementById("spotlight-avatar");

    // Update Avatar Icon
    avatarEl.innerHTML = `<i class="${q.icon}"></i>`;

    // Category translations
    let catText = "邏輯鬼才組";
    if (q.category === "nonsense") catText = "廢話大師組";
    if (q.category === "soup") catText = "心靈毒雞湯";
    if (q.category === "love") catText = "情感指南針";

    quoteEl.textContent = q.quote;
    catEl.textContent = catText;
    indexEl.textContent = q.index + "%";
    shatterEl.textContent = q.shatter + "%";
    analysisEl.textContent = q.analysis;
    sceneEl.textContent = q.scene;
}

// Celebration bounce animation
function triggerCelebration() {
    const card = document.querySelector(".spotlight-card");
    if (!card) return;
    card.classList.add("bounce-anim");
    setTimeout(() => {
        card.classList.remove("bounce-anim");
    }, 600);
}
