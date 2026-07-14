/* ==========================================
   🔮 JS Application: Cosmic Divination Oracle
   ========================================== */

// 1. Data Store: 22 Major Arcana Tarot Cards
const tarotDeck = [
    { id: 0, name: "愚者 (The Fool)", symbol: "🃏", meaningUp: "冒險的開始、無限可能、率性而為。現在是相信直覺、勇敢踏出新旅程的最佳時機。", meaningRev: "魯莽盲目、逃避責任、缺乏計畫。警告您需要停下腳步，冷靜評估潛在風險。" },
    { id: 1, name: "魔術師 (The Magician)", symbol: "🧙‍♂️", meaningUp: "創造力、溝通能力、付諸行動。您已具備所有成功所需的工具，展現才華的時刻到了。", meaningRev: "能力不足、欺騙操縱、意志消沉。需要警惕身邊的甜言蜜語或自身動機的偏差。" },
    { id: 2, name: "女祭司 (The High Priestess)", symbol: "📖", meaningUp: "直覺、潛意識、靜止等待。靜下心來傾聽內在聲音，有些秘密會在適當時機顯現。", meaningRev: "理智過度、忽視直覺、浮躁焦慮。過度干涉外在事物反而會使情況更加混亂。" },
    { id: 3, name: "皇后 (The Empress)", symbol: "👑", meaningUp: "豐收與母愛、創造力、生活富足。周圍正孕育著美好的事物，適合藝術創作與感情進展。", meaningRev: "過度控制、缺乏生產力、情緒化。可能面臨資源浪費或對身邊的人管束過嚴的困境。" },
    { id: 4, name: "皇帝 (The Emperor)", symbol: "🏛️", meaningUp: "權威控制、紀律秩序、穩定基石。有能力掌控全局，需制定長遠的計畫與執行策略。", meaningRev: "專制暴政、效率低下、缺乏掌控。面臨權力鬥爭或因缺乏自律而感到局勢混亂。" },
    { id: 5, name: "教皇 (The Hierophant)", symbol: "🛐", meaningUp: "傳統秩序、精神導師、尋求認同。適合遵循既定規則，或尋求長輩、專業導師的協助。", meaningRev: "打破傳統、思想叛逆、流言蜚語。可能對目前的體制感到不滿，尋求非傳統的突破道路。" },
    { id: 6, name: "戀人 (The Lovers)", symbol: "💑", meaningUp: "和諧結合、重大抉擇、人際吸引。面臨價值觀的抉擇，需要傾聽內心做出最誠實的決定。", meaningRev: "關係失和、錯誤決策、意志動搖。可能面臨溝通障礙，或是被外在誘惑干擾了判斷。" },
    { id: 7, name: "戰車 (The Chariot)", symbol: "🏎️", meaningUp: "意志力、克服困難、成功凱旋。保持專注與決心，憑藉著堅強的意志力衝破目前障礙。", meaningRev: "失去方向、失控受挫、情緒崩潰。提醒您需要調整步伐，過度衝動只會招致失敗。" },
    { id: 8, name: "力量 (Strength)", symbol: "🦁", meaningUp: "勇氣與堅韌、內在力量、溫柔掌控。用耐心與愛去包容挑戰，這比單純的暴力更有力量。", meaningRev: "軟弱無力、喪失自信、情緒失控。可能感到力不從心，需要找回內在的勇氣與平靜。" },
    { id: 9, name: "隱士 (The Hermit)", symbol: "🕯️", meaningUp: "內省沉思、尋找真理、自我沉澱。暫時遠離塵囂，向內探索能為您帶來真正的答案。", meaningRev: "孤立疏離、固執偏激、過度退縮。警惕自己不要陷入不健康的自我封閉與寂寞之中。" },
    { id: 10, name: "命運之輪 (Wheel of Fortune)", symbol: "🎡", meaningUp: "好運來臨、重大轉折、順應時局。命運的齒輪正在轉動，接受變化，機會就在身邊。", meaningRev: "壞運阻礙、抗拒改變、時機未到。處於低潮時更應保持信念，這只是暫時的考驗。" },
    { id: 11, name: "正義 (Justice)", symbol: "⚖️", meaningUp: "公平正義、誠實理性、因果報應。公正冷靜地面對局勢，您的付出將得到合理的應對。", meaningRev: "不公平對待、偏見失衡、逃避判決。可能存在不公情況，或自身決策受到了情緒偏頗的影響。" },
    { id: 12, name: "倒吊人 (The Hanged Man)", symbol: "🤸", meaningUp: "犧牲奉獻、換位思考、暫停等待。以全新的視角看待問題，暫時的等待是為了走更長遠的路。", meaningRev: "做無用功、抗拒犧牲、停滯不前。可能在錯誤的方向上白白浪費精力，需要重新審視自我。" },
    { id: 13, name: "死神 (Death)", symbol: "💀", meaningUp: "結束與重生、徹底變革、告別過去。舊的事物必須結束，才能迎來崭新的開始與希望。", meaningRev: "抗拒改變、苟延殘喘、停滯不前。抱著過去不放只會加深痛苦，勇敢放手才能重生。" },
    { id: 14, name: "節制 (Temperance)", symbol: "🧪", meaningUp: "調和與平衡、淨化療癒、耐心協調。尋求生活的和諧與中庸之道，情感與理性正漸趨平衡。", meaningRev: "失去平衡、溝通不良、過度消耗。生活或感情中出現了失衡現象，急需調整作息與人際溝通。" },
    { id: 15, name: "惡魔 (The Devil)", symbol: "😈", meaningUp: "慾望束縛、物質誘惑、執著不放。可能沉溺於某種不良習慣、感情執著或物質追求中。", meaningRev: "擺擺脫束縛、覺醒重生、自我解脫。您正逐漸看清事實真相，並獲得勇氣掙脫束縛。" },
    { id: 16, name: "高塔 (The Tower)", symbol: "⚡", meaningUp: "突發變故、信念崩塌、破舊立新。崩解雖然痛苦，但這是一次摧毀虛假、重築真實基石的契機。", meaningRev: "局勢動盪、緩慢磨難、逃避危機。變革已不可避免，越抗拒反而會帶來越長期的困擾。" },
    { id: 17, name: "星星 (The Star)", symbol: "⭐", meaningUp: "希望與靈感、心靈療癒、璀璨未來。黑暗已過，信心重回，您的願望正受到宇宙的祝福。", meaningRev: "失望失望、喪失信心、靈感枯竭。可能感到前路茫茫，需要重新點燃內心的火光與希望。" },
    { id: 18, name: "月亮 (The Moon)", symbol: "🌙", meaningUp: "不安與恐懼、直覺幻想、潛在謊言。目前局勢晦暗不明，小心受直覺中的恐懼與幻覺所干擾。", meaningRev: "迷霧散去、看清真相、克服恐懼。隱藏的秘密即將揭曉，心中的不安也正逐漸消退。" },
    { id: 19, name: "太陽 (The Sun)", symbol: "☀️", meaningUp: "成功榮耀、活力四射、幸福快樂。一切都在光明之下，您將獲得充沛的能量與喜悅。", meaningRev: "短暫失落、缺乏熱情、虛張聲勢。雖然成功可能稍微延遲，但大體方向仍然是樂觀的。" },
    { id: 20, name: "審判 (Judgement)", symbol: "🎺", meaningUp: "覺醒召喚、重大決定、因果清算。面臨人生關鍵轉折，過去的積累引導您做出決定性選擇。", meaningRev: "自我懷疑、逃避召喚、錯失良機。因為害怕改變而遲疑不決，可能會錯過轉變的關鍵時機。" },
    { id: 21, name: "世界 (The World)", symbol: "🌍", meaningUp: "圓滿結束、完美達成、環遊世界。一個階段的完美落幕，您已達到了和諧與成功的頂峰。", meaningRev: "未竟之業、美中不足、面臨瓶頸。雖然接近終點，但仍有最後的細節需要完善與努力。" }
];

// 2. Data Store: Traditional Slips (靈籤)
const fortuneSlips = [
    { num: "第一籤", type: "上上籤", poem: "東洋海日照天紅\n風送乘鸞萬里通\n凡事皆得神力助\n謀望功名正合時", poetic: "如日初升，前途光明。好運當頭，謀事可成。", fortune: "求財得意，功名大成，婚姻和合，諸事大吉。" },
    { num: "第二籤", type: "中平籤", poem: "雲開霧散月重圓\n枯木逢春花再鮮\n路遙知馬力雖健\n事急且寬莫強前", poetic: "撥雲見日，否極泰來。唯需耐心，切莫急躁躁進。", fortune: "求財中平，訴訟宜和，婚姻稍待，尋人終見。" },
    { num: "第三籤", type: "下下籤", poem: "風刮暴雨打船桅\n浪大波濤路阻歸\n舟漏又逢當面浪\n此身猶如涉險梯", poetic: "雪上加霜，行事須極度謹慎防微，不宜盲目開展新計畫。", fortune: "求財落空，疾病有憂，出行受阻，宜守不宜動。" },
    { num: "第四籤", type: "上吉籤", poem: "桂花香氣飄滿園\n秋風送爽瑞氣全\n貴人指引登高處\n錦上添花喜事連", poetic: "貴人相助，喜氣盈門。事業將登高峰，家庭和諧。", fortune: "交易順利，合夥大吉，求官得位，疾病無礙。" },
    { num: "第五籤", type: "中吉籤", poem: "春風吹綠柳梢頭\n一江春水向東流\n功名富貴皆前定\n何必終日自憂憂", poetic: "順其自然，無須自尋煩惱，運勢正在悄然好轉。", fortune: "家宅平安，求財中平，婚姻可成，疾病自癒。" },
    { num: "第六籤", type: "中下籤", poem: "日落西山夜幕低\n荒郊野路馬蹄迷\n前途茫茫無處問\n且在林中暫歇棲", poetic: "局勢未明，不宜前行。暫時休整、沉澱是目前最佳策略。", fortune: "合夥防詐，出行不利，婚姻難成，宜安分守己。" },
    { num: "第七籤", type: "上上籤", poem: "祥雲朵朵現天門\n瑞氣千條降宅門\n積善之家天有眼\n福祿壽喜永相尊", poetic: "福星高照，積善有福。家庭圓滿，好運綿延不絕。", fortune: "百事皆吉，求財大得，婚姻美滿，疾病痊癒。" },
    { num: "第八籤", type: "下下籤", poem: "虎落平平被犬欺\n落魄何時見生機\n閉門思過防小人\n退後一步自然吉", poetic: "身處逆境，宜隱忍退讓。防範口舌是非與小人暗算。", fortune: "諸事不順，官司口舌，財物防盜，宜守舊避禍。" },
    { num: "第九籤", type: "中平籤", poem: "花開易謝月易虧\n世事無常莫強為\n得失隨緣心自在\n何須終日淚雙垂", poetic: "繁華易逝，得失隨緣. 保持內心擺正與泰然方能解脫困境。", fortune: "求財微利，家運平平，婚姻難諧，病求神助。" },
    { num: "第十籤", type: "上吉籤", poem: "金雞報曉氣象新\n萬事亨通喜迎門\n勤勞耕耘收成好\n天道酬勤福滿身", poetic: "一分耕耘一分收穫。天道酬勤，即將迎來豐收時節。", fortune: "學業進步，事業高升，財運大通，求醫得治。" }
];

// 3. Western Zodiac database
const zodiacData = {
    aries: { name: "牡羊座", title: "牡羊座 Aries", icon: "♈", element: "火象元素", ruler: "火星", summary: ["今日星象顯示您熱情充沛，直覺敏銳。適合主動開啟挑戰，在職場上表現果敢能獲得貴人青睞。", "感情方面有驚喜，單身者可能遇到合拍的夥伴。財運平穩，適合做好長遠規劃。"], advice: "行動是克服內心焦慮的良藥，勇敢邁出第一步。" },
    taurus: { name: "金牛座", title: "金牛座 Taurus", icon: "♉", element: "土象元素", ruler: "金星", summary: ["今日守護星運行平緩，您的心情趨於沉著。適合處理行政或財務等需要細心專注的工作。", "愛情上偏向保守溫情，多關心伴侶的感受。財富管理上有額外收益的機會，請妥善把握。"], advice: "沉著穩健的步伐可以幫您避開不必要的浮躁與損失。" },
    gemini: { name: "雙子座", title: "雙子座 Gemini", icon: "♊", element: "風象元素", ruler: "水星", summary: ["今日思維敏捷，交際能量高昂。適合業務談判、頭腦風暴或文書寫作，想法容易被採納。", "戀愛方面互動頻繁，幽默風氣加分。理財需避免衝動消費，健康方面注意喉嚨與支氣管保養。"], advice: "在資訊紛雜時，保持專注與獨立判斷是您的致勝法寶。" },
    cancer: { name: "巨蟹座", title: "巨蟹座 Cancer", icon: "♋", element: "水象元素", ruler: "月亮", summary: ["今日運勢側重於心靈修復與情感安全感。適合整理家居、陪伴家人或與知己談心，重塑內在平靜。", "職場上以柔克剛效果更佳。偏財運不錯，可能有精緻禮物或退款等好運，健康注意睡眠。"], advice: "溫柔是您的防護罩，給予他人體貼同時也別忘了滋養自己。" },
    leo: { name: "獅子座", title: "獅子座 Leo", icon: "♌", element: "火象元素", ruler: "太陽", summary: ["今日陽光能量普照，自信滿滿。適合擔任領導角色或在公開場合發表觀點，能收穫滿滿掌聲與崇拜。", "愛情中帶有掌控欲，需適度給予對方空間。開銷可能偏大，適合在充實自我的事物上進行投資。"], advice: "真正的王者懂得在適當時候隱藏光芒，傾聽他人的聲音。" },
    virgo: { name: "處女座", title: "處女座 Virgo", icon: "♍", element: "土象元素", ruler: "水星", summary: ["今日思考條理清晰，細節洞察力極強。適合整理舊檔案、進行精確分析或制定詳盡的健康計劃。", "感情上少些碎念多些包容會更甜蜜。財富運勢適合長線佈局，不宜短線投機，今日健康良好。"], advice: "完美並非終極追求，與自身的小瑕疵和解能釋放無窮能量。" },
    libra: { name: "天秤座", title: "天秤座 Libra", icon: "♎", element: "風象元素", ruler: "金星", summary: ["人際宮位能量暢旺，今日非常適合處理合作或調解紛爭。優雅的社交手腕能為您帶來好機會。", "感情方面處於甜蜜期，雙方默契十足。財政狀況朝向良性循環發展，適合規劃輕旅行犒賞自己。"], advice: "維持內外和諧的平衡，別因迎合他人而迷失自我主見。" },
    scorpio: { name: "天蠍座", title: "天蠍座 Scorpio", icon: "♏", element: "水象元素", ruler: "冥王星 / 火星", summary: ["今日直覺爆棚，事情背後的核心動機一覽無遺。非常適合進行深度研究、解密或克服長久以來的心理陰影。", "感情上表現深沉濃烈，適度展現溫柔能化解誤會。注意理財防漏財，健康宜做深層放鬆。"], advice: "將敏銳的洞察力轉化為慈悲，包容並接納世界的多樣性。" },
    sagittarius: { name: "射手座", title: "射手座 Sagittarius", icon: "♐", element: "火象元素", ruler: "木星", summary: ["今天求知與冒險欲望強烈，適合接觸新學術、報名課程或安排出差旅程，宇宙能量會拓寬您的眼界。", "感情中展現陽光開朗的魅力，深得人緣。財運有開源機會，注意不要因為粗心大意丟失小物品。"], advice: "身體雖在遠行，也別忘了審視內心是否同樣獲得了自由。" },
    capricorn: { name: "摩羯座", title: "摩羯座 Capricorn", icon: "♑", element: "土象元素", ruler: "土星", summary: ["事業宮位有吉星護持，今日執行力極佳，困難繁重的任務在您手下也能井然有序地完成，深受信任。", "感情上有些不解風情，記得偶爾製造點浪漫。財富穩定累積，健康上注意關節與骨骼保健。"], advice: "辛勤耕耘後的果實最甜美，但也別忘了適時停下腳步欣賞路旁風景。" },
    aquarius: { name: "水瓶座", title: "水瓶座 Aquarius", icon: "♒", element: "風象元素", ruler: "天王星 / 土星", summary: ["今天靈感泉湧，打破常規的創意會讓眾人驚艷。適合進行設計、程式開發或思考新型商業模式。", "感情上追求思想契合，單身者容易在興趣群組中擦出火花。財運有隨機小好運，保持開放心態。"], advice: "堅持獨特個性的同時，與群體保持友好的聯繫能帶給您更多力量。" },
    pisces: { name: "雙魚座", title: "雙魚座 Pisces", icon: "♓", element: "水象元素", ruler: "海王星 / 木星", summary: ["感性細胞異常活躍，藝術審美與共情能力達到頂峰。適合從事療癒、藝術創作或公益活動，能獲得極大滿足。", "情感上有依賴傾向，保持獨立性能讓關係更健康。財運適合儲蓄守財，睡前適合冥想放鬆。"], advice: "隨波逐流雖輕鬆，但唯有游向自己設定的燈塔才能找到歸屬。" }
};

const luckyColors = ["星際藍", "霓虹粉", "香檳金", "極光綠", "曜石黑", "珍珠白", "神秘紫", "珊瑚橙", "玫瑰金", "薄荷青"];
const luckyDirections = ["東方", "西方", "南方", "北方", "東北方", "西北方", "東南方", "西南方"];

// 4. Ziwei 14 Main Stars Database
const ziweiStars = [
    { star: "紫微星", tag: "北斗帝王主星", desc: "尊貴、霸氣、求好心切。您天生具有領導才能與強烈的自尊心，格局宏大，但也容易因主觀意識過強而顯得孤高不群。一生多得貴人提攜，能在大風大浪中穩站領導核心。", advice: "寬容與傾聽是帝王真正的冠冕，包容異己能使您的事業版圖更加穩固。" },
    { star: "天機星", tag: "南斗智多星", desc: "聰穎、多謀、反應敏捷。您心思細密、善於策劃分析，具有極佳的適應力與求知慾。然而思慮過多容易陷入精神緊繃或杞人憂天的情境，一生適合擔任軍師、專業策劃或創意技術人才。", advice: "心寬路自廣，適時放下腦中繁雜的運算，給靈魂放個假。" },
    { star: "太陽星", tag: "中天博愛星", desc: "熱情、公正、樂於助人。您的心胸寬廣、作風光明磊落，天生散發溫暖陽光的氣場。一生樂於付出，但需防範因過度好客或多管閒事而招致無謂的口舌誤會與體力透支。", advice: "陽光普照萬物，但過度燃燒自己也會疲憊，請留一分溫暖給自己。" },
    { star: "武曲星", tag: "北斗財帛星", desc: "剛毅、果決、務實求真。您行事作風雷厲風行、極具責任感與耐操力，天生對商業、金錢與實務操作有極高敏感度。性格略顯孤剛，在人際情感上稍欠柔軟度，是典型的實幹派與開創者。", advice: "剛硬的鋼鐵也需要淬火的柔軟，在感情中展現溫柔能收穫更多幸福。" },
    { star: "天同星", tag: "南斗福德星", desc: "溫和、知足、人緣極佳。您性格平易近人、充滿同理心且追求和諧，是典型的樂天派。一生命帶福氣，遇事常能化險為夷，但需警惕自身可能缺乏開創魄力，容易隨遇而安而停滯不前。", advice: "福報由天定，努力由己起。適度給予自己一些壓力，能激發出潛在的天賦。" },
    { star: "廉貞星", tag: "北斗次桃花星", desc: "狂放、感性、不拘小節。您極具個人魅力，直覺性強且敢作敢當。在事業上具有開創性，在社交場合左右逢源。但情緒起伏大，愛恨分明，有時顯得過於偏激或主觀。", advice: "理智是情感的韁繩，學會冷靜處理衝突能幫您避開許多人生陷阱。" },
    { star: "天府星", tag: "南斗令星 / 賢能之星", desc: "穩重、高雅、善於理財。您氣質高雅、行事有條不紊且極具包容心。天生善於整合資源與儲藏財富，適合在中大型組織擔任管理層，一生衣食無缺，生活追求品質與安穩。", advice: "安穩的港灣固然溫馨，偶爾駛向未知風浪才能領略海洋的遼闊。" },
    { star: "太陰星", tag: "中天富貴星", desc: "溫柔、細緻、富於幻想。您氣質陰柔、情感細膩，極具藝術天賦與審美。行事溫和內斂，追求心靈的和諧與家庭的溫馨。但有時過度敏感、多愁善感，容易受到外在環境的情緒感染。", advice: "月有陰晴圓缺，接納自己情緒的起伏，相信內在直覺的智慧。" },
    { star: "貪狼星", tag: "北斗第一大桃花星", desc: "多才多藝、長袖善舞、物慾強烈。您學習能力極快、見識廣博且富含幽默感，是社交場合的焦點。天生對神秘學、美學與新鮮事物充滿好奇心，但需防範做事三分鐘熱度、貪多不爛。", advice: "專注是通往大師之路的唯一捷徑，收斂心神，專攻一藝必有大成。" },
    { star: "巨門星", tag: "北斗暗曜 / 口才之星", desc: "心思慎密、觀察力極強、能言善辯。您天生具有卓越的邏輯思維與口才，善於挑錯與分析問題，適合法律、傳播、諮詢等行業。防範說話過於直接而引來口舌是非。", advice: "良言一句三冬暖，將銳利的言詞轉化為建設性的指導，能廣結善緣。" },
    { star: "天相星", tag: "南斗印星 / 輔佐之星", desc: "敦厚、誠實、樂於服務。您行事體貼周到、極具正義感且講究信用，是團隊中不可或缺的協調軸心。天生熱心助人，注重外表儀態與人際和諧，一生命運平穩，多受器重。", advice: "輔佐他人是您的天命，但也要勇敢為自己的願景與夢想站上舞台中心。" },
    { star: "天梁星", tag: "南斗蔭星 / 老人星", desc: "慈悲、成熟、大公無私。您性格穩重老成、熱心公益且樂於提攜後輩，具有宗教情懷與長者風範。一生命帶逢凶化吉的福蔭，適合從事教育、醫療、社工或諮詢顧問等職務。", advice: "護蔭他人是偉大的功德，但也別忘了給自己保留喘息與放鬆的私人空間。" },
    { star: "七殺星", tag: "南斗將星 / 開創主星", desc: "剛直、冒險、不屈不撓。您具有極強的開創魄力，行事果斷大膽，不畏艱難險阻。天生帶有軍人將領般的鐵血風格，渴望在競爭中證明自我，但性格急躁，容易大起大落。", advice: "謀定而後動，在衝鋒陷陣前先做好周全的退路規劃，方能立於不敗之地。" },
    { star: "破軍星", tag: "北斗耗星 / 改革之星", desc: "求新求變、破壞力強、特立獨行。您極度討厭一成不變的生活，具有強烈的改革意識與創造力，樂於打破既定規則。一生多起伏巨變，每一次的毀滅都伴隨著更絢麗的重生。", advice: "破舊是為了立新，在摧毀舊體制前，先想清楚要建設什麼樣的新世界。" }
];

// 5. I Ching Bagua Trigrams Database
const baguaTrigrams = [
    { name: "乾卦 (Chian) ・ 乾為天 ☰", element: "金", desc: "象徵純陽、天道、剛健剛強。您具有自強不息的奮鬥精神，行事磊落，但需注意防範剛愎自用與過剛易折。" },
    { name: "兌卦 (Dui) ・ 兌為澤 ☱", element: "金", desc: "象徵喜悅、口舌、澤潤大地。您善於溝通，人緣極佳，生活充滿歡樂氣息，但也需防範口舌是非與流言干擾。" },
    { name: "離卦 (Li) ・ 離為火 ☲", element: "火", desc: "象徵光明、美麗、依附共生。您熱情開朗，思想進步，在人群中十分耀眼，但需注意情緒控制，防範燥熱衝動。" },
    { name: "震卦 (Zhen) ・ 震為雷 ☳", element: "木", desc: "象徵震動、起步、春雷滾滾。您極具活力，執行力強，敢於打破僵局開創新局，但有時會顯得毛躁與虎頭蛇尾。" },
    { name: "巽卦 (Xun) ・ 巽為風 ☴", element: "木", desc: "象徵柔順、滲入、無孔不入。您處事圓滑柔順，極具適應力與滲透性，但需注意在決策時切忌猶豫不決。" },
    { name: "坎卦 (Kan) ・ 坎為水 ☵", element: "水", desc: "象徵艱難險阻、深邃智慧、川流不息。您智慧深沉，處變不驚，極具韌性，但需防範心思過度陰鬱沉悶。" },
    { name: "艮卦 (Gen) ・ 艮為山 ☶", element: "土", desc: "象徵靜止、阻擋、穩如泰山。您行事穩重可靠，做事有原則且能堅守底線，但需警惕自身顯得過於固執己見。" },
    { name: "坤卦 (Kun) ・ 坤為地 ☷", element: "土", desc: "象徵純陰、大地、厚德載物。您具有極佳的包容力與母性關懷，默默付出而不居功，但有時會顯得缺乏自主決魄力。" }
];

// 6. Glyphomancy (梅花易數測字) Database
const glyphomancyDatabase = [
    { char: "豐", title: "豐收充實之象", desc: "「豐」字由「井」與「豆」演變，代表器皿中盛滿祭品，象徵資源充沛、收穫在望。這顯示您目前或即將迎來一個物質或精神上的豐收期，合作順利，但也需防範物極必反、財多身弱，宜謙遜守成。" },
    { char: "泰", title: "安泰亨通之象", desc: "「泰」字象徵小往大來，天地交感。預示著局勢正朝向極為和諧、平安的方向發展。困境即將消散，人際關係融洽。若能保持真誠，任何計畫都將水到渠成。" },
    { char: "恆", title: "恆常有恆之象", desc: "「恆」字由「心」與「亘」組成，象徵心志長久。這表示您所問之事需要時間累積，切忌急功近利。只要堅持初衷，穩定推進，最終必定會獲得長遠且穩固的成功。" },
    { char: "臨", title: "居高臨下之象", desc: "「臨」代表君臨、觀察與指導。這表示您正面臨一個升遷或發揮影響力的關鍵契機。您需要拿出領導者的格局與氣度去照料他人，但要防範傲慢態度引來小人怨恨。" },
    { char: "明", title: "光明磊落之象", desc: "「明」由「日」與「月」合成，光芒普照。代表困擾您的迷霧即將散去，真相即將大白。此時適合坦誠溝通、簽署合約或公開計劃，光明正大的作風會為您帶來極大好運。" },
    { char: "靜", title: "心靈沉靜之象", desc: "「靜」字意味著抽離紛爭，回歸內省。這預示著目前不宜躁進或做重大變更，靜止等待、積蓄能量才是最佳策略。在混亂的環境中保持冷靜，智慧自然會顯現。" },
    { char: "順", title: "順水推舟之象", desc: "「順」字由「川」與「頁」組成，象徵順從天意、川流不息。代表您所求之事不宜強求，適合順應當前的大趨勢與旁人意見，隨遇而安，反而能不費吹灰之力達到目標。" },
    { char: "健", title: "剛健自強之象", desc: "「健」代表君子以自強不息。象徵蓬勃的生命力與堅強的意志力。這激勵您拿出最大的執行力與勇氣去突破障礙，您的身體與運勢正處於上升期，動起來便有生機。" }
];

// 7. Nordic Runes Database (北歐盧恩符文)
const nordicRunesDatabase = [
    { symbol: "ᚠ", name: "Fehu (財富)", desc: "象徵豐收的金錢與家畜。代表物質財富的累積、新項目的啟動以及辛勤付出的收穫。提醒您在獲得財富的同時，要慷慨分享以維持宇宙能量流動。" },
    { symbol: "ᚢ", name: "Uruz (力量)", desc: "象徵野牛的強悍力量與健康。代表狂野原始的生命力、克服疾病的治癒力以及突破逆境的勇氣。預示著您有足夠的精力克服眼前的挑戰。" },
    { symbol: "ᚦ", name: "Thurisaz (巨人之門)", desc: "象徵雷神之鎚與尖銳的荊棘。代表保護、反思與警惕。暗示您正站在命運的門檻前，不宜衝動冒險，需要冷靜評估，清除潛在的阻礙再前行。" },
    { symbol: "ᚨ", name: "Ansuz (智慧/信使)", desc: "象徵奧丁主神的聲音與啟示。代表智慧、考試順利、獲得重要消息或導師指引。提醒您多傾聽直覺與身邊長輩的建議，這是一次心智成長的契機。" },
    { symbol: "ᚱ", name: "Raido (旅程)", desc: "象徵馬車輪與移動。代表物理上的旅行、搬遷、或者是靈魂精神上的自我探索旅程。也暗示事情正朝向正確、有規律的軌道快速前進。" },
    { symbol: "ᚲ", name: "Kenaz (火炬)", desc: "象徵燃燒的火焰與靈感。代表創意的萌芽、熱情重燃、看清未知事物的真相。這是一顆充滿希望與能量的符文，適合進行藝術創作或技術攻關。" },
    { symbol: "ᚷ", name: "Gebo (禮物)", desc: "象徵結合的十字與恩賜。代表平等互利的合作關係、美滿的感情結合或意外的恩惠。提醒您珍惜與他人深層的心靈連結，真誠相待。" },
    { symbol: "ᚹ", name: "Wunjo (喜悅)", desc: "象徵勝利的旗幟與和諧。代表目標達成、痛苦結束、迎來充滿愛與和諧的快樂時光。您所擔憂的事將會有一個圓滿的收尾。" }
];

// 8. Tea Leaf Readings (英式茶葉占卜) Database
const teaLeafDatabase = [
    { pattern: "🦅 飛鳥 (Bird)", desc: "茶杯底部顯現一隻展翅高飛的鳥形茶渣。這代表近期將會從遠方傳來令人振奮的喜訊，或是一次出差、旅行的好機會。思維將會變得開闊。", advice: "保持通訊暢通，留意來自遠方或陌生人的訊息。" },
    { pattern: "💍 戒指 (Ring)", desc: "茶葉碎片在杯壁凝聚成圓環狀。這象徵著契約、承諾與關係的締結。預示著可能會有商業合約的簽署、一段感情的確定，或是一次真誠的盟約。", advice: "信守承諾，此時簽署正式文件對您非常有利。" },
    { pattern: "⚓ 錨 (Anchor)", desc: "茶葉沉在杯底，呈現穩定的鐵錨狀。這代表漂泊的結束與安定。您在事業、生活或感情上所追求的安全感即將落實，動盪的局勢正漸趨平穩。", advice: "現在適合做長遠定居或深耕的計畫，穩紮穩打即可。" },
    { pattern: "🔑 鑰匙 (Key)", desc: "茶葉拼湊成一把細長的鎖匙。這象徵著謎題的解答與新大門的開啟。一直以來困擾您的難題將會找到突破口，或者您將解鎖一項全新的技能與職位。", advice: "勇敢探索未知的路徑，轉機就在看似緊閉的大門背後。" },
    { pattern: "🌳 橡樹 (Oak)", desc: "茶渣散開，神似一棵枝葉繁茂的古樹。這代表著頑強的生命力、健康狀況好轉以及長壽。在事業上，這代表長輩或大企業的庇護，能為您遮風避雨。", advice: "多接觸大自然吸收能量，腳踏實地地累積自己的實力。" },
    { pattern: "🌋 火山 (Volcano)", desc: "茶渣在杯壁中央高聳突起。這預示著積壓的情緒、壓力或潛在的矛盾即將爆發。也代表局勢可能出現突如其來的劇烈轉變，挑戰您的臨場應變力。", advice: "切忌壓抑情緒，尋求健康的排解管道，冷靜以對變局。" },
    { pattern: "⛵ 船隻 (Ship)", desc: "茶葉浮成一艘帆船逆流而上的輪廓。這象徵著事業揚帆起航，或是面臨一次跨領域的全新嘗試。雖然過程可能有些許波折，但方向是正確的。", advice: "鼓起勇氣，不要害怕未知的風浪，勇敢駛向您的夢想港灣。" },
    { pattern: "🍀 三葉草 (Clover)", desc: "茶葉散落成三瓣對稱的花樣。這是極佳的好運符號！代表著今天或近期會有出乎意料的幸運事件發生（如抽獎中獎、意外撿便宜、遇到貴人順手相助）。", advice: "保持樂觀開朗的心情，隨喜迎接宇宙送給您的意外小禮物。" }
];

// 9. Aura-Soma (靈性彩油瓶) Database
const auraSomaDatabase = [
    { title: "B001 - 自然大天神瓶 (皇家藍 / 霓虹粉)", upperColor: "#1e3a8a", lowerColor: "#f472b6", desc: "上層皇家藍代表高維度的直覺與精神平靜，下層霓虹粉代表無條件的自我接納與溫柔。這顯示您的靈魂渴望在混亂中尋求平靜，並提醒您要溫柔地對待自己，直覺會指引您穿透眼前的迷霧。" },
    { title: "B002 - 翡翠天地療癒瓶 (翡翠綠 / 天空藍)", upperColor: "#047857", lowerColor: "#38bdf8", desc: "上層翡翠綠象徵心輪的空間、真理與新生，下層天空藍象徵清澈的溝通與神聖意志。代表您的靈魂正在經歷一次深層的療癒期。適合放下舊有的心靈包袱，向宇宙表達您最真實的想法。" },
    { title: "B003 - 太陽意志精華瓶 (金黃色 / 熔岩紅)", upperColor: "#eab308", lowerColor: "#dc2626", desc: "上層金黃色代表智慧、陽光與自信，下層熔岩紅代表行動力、熱情與生存意志。這顯示您體內正湧動著強大的創造能量！現在是將想法付諸實踐的最佳時機，勇敢燃燒您的熱情吧。" },
    { title: "B004 - 極光精靈水晶瓶 (極光青 / 冰雪白)", upperColor: "#06b6d4", lowerColor: "#f9fafb", desc: "上層極光青代表自由的創意與新時代的思維，下層白色代表純潔、淨化與淚水後的重生。代表您的靈魂需要一次徹底的清障與淨化。放下過去的執念，您將迎來如極光般璀璨的新生靈感。" },
    { title: "B005 - 智慧之泉平衡瓶 (深紫色 / 琥珀橙)", upperColor: "#6d28d9", lowerColor: "#f97316", desc: "上層深紫代表靈性自覺與蛻變，下層琥珀橙代表丹田能量、喜悅與克服深層恐懼。這顯示您正處於人生轉折點。深層的智慧正在甦醒，幫助您轉化過去的創傷，轉化為前行的喜悅能量。" },
    { title: "B006 - 玫瑰無條件之愛瓶 (玫瑰粉 / 玫瑰粉)", upperColor: "#fb7185", lowerColor: "#fda4af", desc: "雙層皆為溫柔的玫瑰粉色。代表無條件的愛與心靈的滋養。這顯示您的心靈目前較為柔軟敏感，極度需要被愛與呵護。請停止自我批判，用溫柔溫暖的眼光看待鏡子中的自己。" },
    { title: "B007 - 蔚藍海洋和平瓶 (蔚藍色 / 蔚藍色)", upperColor: "#0284c7", lowerColor: "#bae6fd", desc: "雙層皆為平靜的藍色調。代表海洋般的平靜、信任天意與無為而治。這代表您目前最需要的是「放手」，不要試圖去控制一切。相信宇宙的安排，順其自然，心靈便能獲得大安寧。" },
    { title: "B008 - 神秘黃金啟示瓶 (紫羅蘭 / 亮金色)", upperColor: "#7c3aed", lowerColor: "#fbbf24", desc: "上層紫羅蘭色象徵靈性蛻變，下層亮金色代表內在的智慧寶藏。代表您的心靈深處隱藏著巨大的智慧。當您開始探索神秘學或內心世界時，您將會找到照亮命運前途的黃金鑰匙。" }
];

// 10. Totem Animals (印地安守護靈獸) Database
const totemAnimalsDatabase = [
    { animal: "🦆 鵝 (Goose - 1月)", desc: "鵝圖騰代表忠誠、耐力與雄心勃勃。您行事非常有毅力，不畏嚴寒，願意為了長遠目標進行超長距離的奮鬥。在團隊中是極佳的開路先鋒。", advice: "保持您的專注力，但也要記得適時與隊友輪流帶頭，防範體力透支。" },
    { animal: "🦦 水獺 (Otter - 2月)", desc: "水獺圖騰象徵玩樂、好奇心與人道主義。您思維獨特活潑，不喜歡墨守成規，總能以樂觀童趣的眼光看待世界，給身邊人帶來歡樂。", advice: "堅持您的特立獨行，不要因為旁人的質疑而收起您的創意與玩心。" },
    { animal: "🐺 狼 (Wolf - 3月)", desc: "狼圖騰代表直覺、智慧與群體紀律。您擁有強烈的心靈直覺，既能合群作戰，又能在孤獨的深思中找到智慧的答案。是靈魂的探索者。", advice: "傾聽您內心深處的野性直覺，它在關鍵時刻從不欺騙您。" },
    { animal: "🦅 獵鷹 (Falcon - 4月)", desc: "獵鷹圖騰代表遠見、速度與精準行動。您是天生的獵手，洞察力極強，一旦鎖定目標便能以極快的執行力將其拿下。具有極佳的開創魄力。", advice: "在高空俯瞰時要保持冷靜，動手前做好通盤評估，以免衝動躁進。" },
    { animal: "🦫 海狸 (Beaver - 5月)", desc: "海狸圖騰象徵著建造、團隊合作與防護防守。您是天生的工程師與實幹派，擅長將混亂的資源組織建構成穩固的家園或系統，極具耐心。", advice: "築壩需要時間，一步一個腳印，您的努力終將會建構出堅不可摧的帝國。" },
    { animal: "🦌 鹿 (Deer - 6月)", desc: "鹿圖騰代表溫柔、警覺與優雅。您心思細膩，對周圍的能量環境非常敏感。行事溫和優雅，善於用溫柔的力量融化人際糾紛。", advice: "溫柔是您的武器，但面對侵犯時也要勇敢立起您的鹿角，捍衛底線。" },
    { animal: "🐦 啄木鳥 (Woodpecker - 7月)", desc: "啄木鳥圖騰象徵滋養、家庭與敏銳探知。您具有極強的母性與保護欲，善於傾聽他人心聲並給予關懷。同時，您對問題的核心有極佳洞察力。", advice: "在照顧他人之前，先築好自己心靈的避風港，別讓自己受委屈。" },
    { animal: "🐟 鮭魚 (Salmon - 8月)", desc: "鮭魚圖騰代表堅持、勇氣與逆流而上。您生命力蓬勃，面對困難與世俗的阻礙，敢於展現逆流而上的勇氣。渴望在生命中留下屬於自己的印記。", advice: "逆流前行雖然疲憊，但終點的豐收無可比擬，保持信念勇往直前。" },
    { animal: "🐻 棕熊 (Brown Bear - 9月)", desc: "棕熊圖騰代表力量、平靜與內省療癒。您行事沉穩可靠，內心蘊含著巨大的能量，但平時溫和內斂。擅長在安靜的獨處中療癒自己與他人。", advice: "在感到混亂時，主動給自己一次「冬眠」期，沉澱後的力量會更強大。" },
    { animal: "🐦 烏鴉 (Raven - 10月)", desc: "烏鴉圖騰象徵魔法、神秘與命運轉折。您對神秘事物有著天生的好奇心，思維深邃，總能看穿事物的本質，預知未來的轉變。是天生的變革者。", advice: "接納生活中的每一次轉變，每一次的告別都是新魔法的開始。" },
    { animal: "🐍 蛇 (Snake - 11月)", desc: "蛇圖騰代表蛻變、再生與薩滿療癒。您具有極強的適應力與自我修復能力，一生會經歷多次身份與心靈的重大蛻變，每一次蛻皮都更強大。", advice: "不要害怕痛苦的改變，勇敢拋棄舊的模式，您正朝向更高維度再生。" },
    { animal: "🦌 麋鹿 (Elk - 12月)", desc: "麋鹿圖騰象徵高貴、尊嚴與持久耐力。您氣場高雅尊貴，做事有始有終，具備超乎常人的長途耐力與堅韌意志。在群體中深受敬重。", advice: "昂起您的頭顱，保持您的尊嚴，您的耐力終將引領您走過最寒冷的冬季。" }
];

// 11. Arabic Geomancy (阿拉伯沙書占卜) Database
const geomancyDatabase = [
    { figure: "⚬<br>⚬<br>⚬<br>⚬", name: "Via (道路)", desc: "由四個單點組成的直線。代表前行的路徑、移動與改變。這表示您所問之事正處於出發、前進的動態過程中，不宜停滯。雖然旅途漫長，但方向是明確的。" },
    { figure: "⚬ ⚬<br>⚬ ⚬<br>⚬ ⚬<br>⚬ ⚬", name: "Populus (人民)", desc: "由四對雙點組成的寬闊形狀。代表群眾、社交、聚會與共識。這顯示您目前的事務需要藉助團體的力量，或是您正受到周圍環境與輿論的強大影響。適合進行團隊合作。" },
    { figure: "⚬ ⚬<br>⚬ ⚬<br>⚬<br>⚬", name: "Albus (白色)", desc: "上寬下窄的結構。象徵純潔、智慧、和平與精神上的成功。代表目前的局勢非常清明，沒有陰謀。只要以誠實、理性的態度面對，就能獲得和諧完美的結局。" },
    { figure: "⚬<br>⚬<br>⚬ ⚬<br>⚬ ⚬", name: "Conjunctio (結合)", desc: "上窄下寬的結構。代表盟約、婚姻、合夥與重新聚攏。這是一個非常利於談判與建立關係的卦象，預示著雙方的矛盾將會化解，達成互利共贏的完美共識。" },
    { figure: "⚬ ⚬<br>⚬<br>⚬<br>⚬ ⚬", name: "Carcer (監獄)", desc: "兩端寬、中間窄的封閉形狀。代表限制、固守、延遲與保護。這表示目前局勢受到外在力量的制約，強行突破只會碰壁。此時最適合閉關修煉、固守陣地、等待解鎖。" },
    { figure: "⚬<br>⚬ ⚬<br>⚬ ⚬<br>⚬", name: "Fortuna Major (大幸運)", desc: "中間寬、兩端窄的穩固形狀。代表極大的成功、榮耀、保護與自力更生的成就。這是沙書占卜中最強大的吉祥卦象，預示著您將憑藉著自己的智慧與努力獲得輝煌成就。" },
    { figure: "⚬ ⚬<br>⚬<br>⚬<br>⚬", name: "Fortuna Minor (小幸運)", desc: "頂端為雙點，下方為單點。代表外在力量帶來的短暫幸運、順利通過與貴人相助。這代表事情會進展得很順利，但好運多來自於外在機遇，需要快速把握，不宜拖延。" },
    { figure: "⚬ ⚬<br>⚬<br>⚬ ⚬<br>⚬", name: "Puella (少女)", desc: "不對稱的優雅形狀。象徵美感、愛情、享樂與短暫的和諧。這代表您目前的心情愉快，事物進展帶有藝術與美感，利於社交與戀愛，但可能缺乏長久的穩定性。" }
];

// 12. Indian Vedic Nakshatras Database (印度吠陀星宿)
const vedicDatabase = [
    { name: "婁宿 (Ashwini) ・ 疾速之星", desc: "婁宿受雙子馬神（Ashwins）守護，象徵開創、療癒與極快的速度。這預示著您靈魂中帶有極強的開拓精神與治癒天賦，行事雷厲風行，總能迅速找到解決問題的方法。", advice: "行動迅速是您的優勢，但也要學會放慢腳步，防範因粗心大意而留下隱患。" },
    { name: "畢宿 (Rohini) ・ 成長之星", desc: "畢宿受創造之神（Prajapati）守護，代表美麗、富足與孕育成長。這表示您具有極佳的審美觀、親和力與物質顯化能力，生活富含藝術氣息，能默默培育出偉大的項目。", advice: "相信時間的孕育力量，保持耐心，您的努力終將開花結果。" },
    { name: "參宿 (Ardra) ・ 變革之星", desc: "參宿受暴風雨之神（Rudra）守護，象徵淚水、風暴與大變革之後的覺醒。這預示著您的靈魂需經歷挑戰與重塑，每一次的人生低潮與磨難，都將淬煉出您更強大的智慧。", advice: "暴風雨過後便是晴天，擁抱變革，淚水是洗滌靈魂雙眼的雨露。" },
    { name: "軫宿 (Hasta) ・ 手藝之星", desc: "軫宿受太陽神（Savitr）守護，象徵雙手、創意、技巧與掌控。這顯示您手藝精巧，極具創造力，擅長技術操作、文字創作或手作工藝，能憑藉著雙手創造出豐盛的生活。", advice: "您的力量就在雙手與大腦的結合中，專注於專業技術的磨練必有大成。" },
    { name: "心宿 (Jyeshtha) ・ 權威之星", desc: "心宿受雷雨之王（Indra）守護，代表成熟、尊嚴、權力與自我克制。這顯示您在群體中極具威信，思維成熟，天生有著大姐大/大哥大的風範，能挑起重擔捍衛群體利益。", advice: "權威來自於內心的寬容，用慈悲心去引導他人，能贏得更真誠的尊重。" },
    { name: "斗宿 (Uttarashadha) ・ 勝利之星", desc: "斗宿受十位宇宙法規之神（Vishwadevas）守護，象徵終極勝利與道德正義。這表示您具有極高的道德標準與堅韌不拔的精神，做事問心無愧，最終必定能獲得持久的成功。", advice: "堅持走正道，正義的法則會站在您身後，護佑您獲得最後的勝利。" },
    { name: "室宿 (Purvabhadrapada) ・ 靈修之星", desc: "室宿受獨腳火龍守護，象徵神秘力量、熱情奉獻與靈魂深處的覺醒。這預示著您對玄學、哲學或靈性修行有著極高的天賦，甘願為了信仰或理想做出巨大的犧牲與努力。", advice: "將您的精神力量引導向有益於大眾的事物，靈魂將獲得無上的豐盛。" },
    { name: "角宿 (Chitra) ・ 創造之星", desc: "角宿受宇宙工匠之神（Vishwakarma）守護，象徵璀璨的寶石、設計與卓越的創造力。這代表您具有極佳的視覺審美、空間設計或美感天賦，擅長將抽象想法具體美化呈現。", advice: "您是天生的靈魂工匠，勇敢用您的創意與審美去美化這個世界吧。" }
];

// Life Path Numbers Database (1 to 9)
const lifePathData = {
    1: { desc: "獨立開創者。您極具領導才能與原創想法，渴望自主獨立，但需注意不要過於自我中心或顯得孤傲。", keywords: ["領導力", "獨立性", "開創者", "自尊心"] },
    2: { desc: "和平協調者。您心思細膩，具備卓越的同理心與合作外交能力，但需注意防範過度依賴他人或委曲求全。", keywords: ["合作伴侶", "同理心", "外交手腕", "敏感度"] },
    3: { desc: "創意表達者。您天生樂觀，具備極佳的藝術天賦、溝通能力與創造力，但有時會顯得注意力分散或浮躁。", keywords: ["藝術天賦", "樂觀風趣", "自我表達", "社交力"] },
    4: { desc: "務實建構者。您做事腳踏實地，追求秩序與穩定性，極具耐心與責任感，但有時會顯得過於保守與固執。", keywords: ["秩序感", "責任心", "組織力", "穩固基石"] },
    5: { desc: "自由冒險家。您熱愛自由，渴望多元體驗與變革，具備極強的適應力，但需防範生活缺乏規律或浮躁逃避。", keywords: ["追求自由", "冒險精神", "多才多藝", "適應力"] },
    6: { desc: "負責關懷者。您富有責任感，熱愛家庭與社區，善於照顧他人與進行心理療癒，但要小心過度干涉他人私事。", keywords: ["奉獻關懷", "療癒能力", "家庭和諧", "美感追求"] },
    7: { desc: "真理尋求者。您天生具備分析思考與研究天賦，追求精神真理與獨立思考，但有時會顯得冷漠或自我封閉。", keywords: ["分析探求", "心靈直覺", "精神追求", "孤芳自賞"] },
    8: { desc: "商業掌控者。您極具商業頭腦、組織魄力與物質掌控力，渴望成功與權威，但需注意金錢物慾與權力失衡。", keywords: ["商業巨擎", "掌控魄力", "實務成就", "物質宮位"] },
    9: { desc: "人道關懷者。您心懷大愛，具備卓越的人道主義情懷、靈性直覺與無私奉獻精神，但需注意避免不切實際與聖母心。", keywords: ["人道關懷", "靈性自覺", "無私大愛", "藝術想像"] }
};

// ==========================================
// 6. Global User State & Form Management
// ==========================================
let userData = {
    name: '',
    birthday: '',
    gender: ''
};

function activateDestinyMap() {
    const nameInput = document.getElementById('input-name').value.trim();
    const birthdayInput = document.getElementById('input-birthday').value;
    const genderSelect = document.getElementById('input-gender').value;

    if (!nameInput) {
        alert("請輸入您的姓名或稱呼，以啟動天命運算！");
        return;
    }
    if (!birthdayInput) {
        alert("請選擇您的出生日期！");
        return;
    }

    // Save state
    userData.name = nameInput;
    userData.birthday = birthdayInput;
    userData.gender = genderSelect;

    // Display user name in dashboard templates
    document.getElementById('destiny-user-name').textContent = userData.name;
    document.querySelectorAll('.user-placeholder-name').forEach(el => {
        el.textContent = userData.name;
    });

    // Run Calculations
    calculateDestiny();

    // Toggle UI transitions
    document.getElementById('onboarding-panel').style.display = 'none';
    document.getElementById('oracle-tabs').style.display = 'flex';
    document.getElementById('workspace-card').style.display = 'block';

    // Switch to Destiny Tab
    switchMode('destiny');
}

function showOnboardingForm() {
    // Hidden workspace panels
    document.getElementById('oracle-tabs').style.display = 'none';
    document.getElementById('workspace-card').style.display = 'none';
    
    // Reset cards and input views
    document.getElementById('onboarding-panel').style.display = 'grid';
}

// ==========================================
// 7. Core Destiny Algorithms (八卦, 紫微, 靈數, 星座)
// ==========================================
function calculateDestiny() {
    const bday = new Date(userData.birthday);
    const year = bday.getFullYear();
    const month = bday.getMonth() + 1; // 1-indexed
    const date = bday.getDate();

    // 1. Life Path Number (生命靈數)
    const digitsStr = year.toString() + month.toString().padStart(2, '0') + date.toString().padStart(2, '0');
    let sum = 0;
    for (let char of digitsStr) {
        sum += parseInt(char);
    }
    while (sum >= 10) {
        let tempSum = 0;
        for (let char of sum.toString()) {
            tempSum += parseInt(char);
        }
        sum = tempSum;
    }
    document.getElementById('lifepath-number').textContent = sum;
    document.getElementById('lifepath-desc').textContent = lifePathData[sum].desc;
    
    const keywordsContainer = document.getElementById('lifepath-keywords');
    keywordsContainer.innerHTML = '';
    lifePathData[sum].keywords.forEach(keyword => {
        const span = document.createElement('span');
        span.className = 'keyword-tag';
        span.textContent = `# ${keyword}`;
        keywordsContainer.appendChild(span);
    });

    // 2. Western Zodiac (西洋星座)
    let zodiacKey = "";
    if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) zodiacKey = "aries";
    else if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) zodiacKey = "taurus";
    else if ((month == 5 && date >= 21) || (month == 6 && date <= 21)) zodiacKey = "gemini";
    else if ((month == 6 && date >= 22) || (month == 7 && date <= 22)) zodiacKey = "cancer";
    else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) zodiacKey = "leo";
    else if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) zodiacKey = "virgo";
    else if ((month == 9 && date >= 23) || (month == 10 && date <= 23)) zodiacKey = "libra";
    else if ((month == 10 && date >= 24) || (month == 11 && date <= 22)) zodiacKey = "scorpio";
    else if ((month == 11 && date >= 23) || (month == 12 && date <= 21)) zodiacKey = "sagittarius";
    else if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) zodiacKey = "capricorn";
    else if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) zodiacKey = "aquarius";
    else zodiacKey = "pisces";

    const zInfo = zodiacData[zodiacKey];
    document.getElementById('zodiac-card-icon').textContent = zInfo.icon;
    document.getElementById('zodiac-card-title').textContent = zInfo.title;
    document.getElementById('zodiac-ruler').textContent = zInfo.ruler;
    document.getElementById('zodiac-element').textContent = zInfo.element;
    
    const customZodiacSummary = `${userData.name}，根據您西洋出生星盤，您受守護星【${zInfo.ruler}】與【${zInfo.element}】引導。${zInfo.summary[0]}`;
    document.getElementById('zodiac-desc').textContent = customZodiacSummary;
    document.getElementById('zodiac-advice').textContent = zInfo.advice;

    // Auto-highlight zodiac item in Tab 3 (Horoscope)
    const items = document.querySelectorAll('.zodiac-item');
    items.forEach(item => {
        if(item.id === `zodiac-${zodiacKey}`) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
    selectZodiac(zodiacKey);

    // 3. Ziwei Doushu Life Palace Star (紫微主星)
    const ziweiSeed = (month * 7 + date * 3) % ziweiStars.length;
    const starInfo = ziweiStars[ziweiSeed];
    document.getElementById('ziwei-title').textContent = `${starInfo.star} ・ ${starInfo.tag}`;
    document.getElementById('ziwei-desc').textContent = `${userData.name}，您的命宮本命主星坐落於【${starInfo.star}】。這表示您性格中帶有：${starInfo.desc}`;
    document.getElementById('ziwei-advice').textContent = starInfo.advice;

    // 4. I Ching Bagua & Five Elements (易經八卦與五行)
    const nameCodeSum = Array.from(userData.name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const baguaSeed = (nameCodeSum + date) % baguaTrigrams.length;
    const trigram = baguaTrigrams[baguaSeed];
    document.getElementById('bagua-title').textContent = trigram.name;
    document.getElementById('bagua-desc').textContent = `${userData.name}，您的名字與生辰在易經磁場中合為【${trigram.name}】，五行本源屬【${trigram.element}】。此卦象意味著：${trigram.desc}`;

    // Deterministic Five Elements balance percentages
    const wSeed = nameCodeSum + year;
    let wWood = (wSeed % 25) + 10;
    let wFire = ((wSeed >> 2) % 25) + 10;
    let wEarth = ((wSeed >> 4) % 25) + 10;
    let wMetal = ((wSeed >> 6) % 25) + 10;
    
    if (trigram.element === "木") wWood += 20;
    else if (trigram.element === "火") wFire += 20;
    else if (trigram.element === "土") wEarth += 20;
    else if (trigram.element === "金") wMetal += 20;
    
    let wWater = 100 - (wWood + wFire + wEarth + wMetal);
    if (wWater < 5) {
        wWater = 10;
        const total = wWood + wFire + wEarth + wMetal + wWater;
        wWood = Math.floor((wWood / total) * 100);
        wFire = Math.floor((wFire / total) * 100);
        wEarth = Math.floor((wEarth / total) * 100);
        wMetal = Math.floor((wMetal / total) * 100);
        wWater = 100 - (wWood + wFire + wEarth + wMetal);
    }

    document.getElementById('elem-wood').style.width = `${wWood}%`;
    document.getElementById('elem-fire').style.width = `${wFire}%`;
    document.getElementById('elem-earth').style.width = `${wEarth}%`;
    document.getElementById('elem-metal').style.width = `${wMetal}%`;
    document.getElementById('elem-water').style.width = `${wWater}%`;

    // 5. 易經梅花測字 (Glyphomancy)
    const glyphSeed = (nameCodeSum + year + month + date) % glyphomancyDatabase.length;
    const glyph = glyphomancyDatabase[glyphSeed];
    document.getElementById('destiny-glyph-char').textContent = glyph.char;
    document.getElementById('destiny-glyph-title').textContent = glyph.title;
    document.getElementById('destiny-glyph-desc').textContent = `${userData.name}，今日占測所得之命運漢字為【${glyph.char}】。${glyph.desc}`;

    // 6. 北歐盧恩符文 (Nordic Runes)
    const runeSeed = (nameCodeSum * 3 + date * 7) % nordicRunesDatabase.length;
    const rune = nordicRunesDatabase[runeSeed];
    document.getElementById('destiny-rune-symbol').textContent = rune.symbol;
    document.getElementById('destiny-rune-title').textContent = rune.name;
    document.getElementById('destiny-rune-desc').textContent = `${userData.name}，您的本命北歐守護符文為【${rune.name.split(' ')[0]}】。${rune.desc}`;

    // 7. 英式茶葉占卜 (Tea Leaf Reading)
    const teaSeed = (nameCodeSum + month * 13 + date * 5) % teaLeafDatabase.length;
    const tea = teaLeafDatabase[teaSeed];
    document.getElementById('destiny-tea-pattern').textContent = tea.pattern;
    document.getElementById('destiny-tea-desc').textContent = `${userData.name}，茶杯中呈現出【${tea.pattern.split(' ')[1]}】的圖示。${tea.desc}`;
    document.getElementById('destiny-tea-advice').textContent = tea.advice;

    // 8. 靈性彩油 Aura-Soma
    const auraSeed = (nameCodeSum * 2 + year + month) % auraSomaDatabase.length;
    const aura = auraSomaDatabase[auraSeed];
    document.getElementById('destiny-aura-title').textContent = aura.title;
    document.getElementById('destiny-aura-desc').textContent = `${userData.name}，您的脈輪彩油頻率為【${aura.title.split(' - ')[1]}】。${aura.desc}`;
    
    // Set colors of CSS liquid
    document.getElementById('aura-liquid-upper').style.backgroundColor = aura.upperColor;
    document.getElementById('aura-liquid-lower').style.backgroundColor = aura.lowerColor;

    // 9. 印地安守護靈獸 (Totem Animal)
    const totemIdx = (month - 1) % 12; // Based on birth month
    const totem = totemAnimalsDatabase[totemIdx];
    document.getElementById('destiny-totem-title').textContent = totem.animal;
    document.getElementById('destiny-totem-desc').textContent = `${userData.name}，依您出生月份，您的印地安守護靈獸為【${totem.animal.split(' ')[1]}】。${totem.desc}`;
    document.getElementById('destiny-totem-advice').textContent = totem.advice;

    // 10. 阿拉伯沙書占卜 Geomancy
    const geomSeed = (nameCodeSum + date * 11) % geomancyDatabase.length;
    const geom = geomancyDatabase[geomSeed];
    document.getElementById('destiny-geom-fig').innerHTML = geom.figure;
    document.getElementById('destiny-geom-title').textContent = geom.name;
    document.getElementById('destiny-geom-desc').textContent = `${userData.name}，沙地占文顯現【${geom.name.split(' ')[0]}】符號。${geom.desc}`;

    // 11. 印度吠陀星宿 Nakshatras
    const vedicSeed = (month * 11 + date * 17) % vedicDatabase.length;
    const vedic = vedicDatabase[vedicSeed];
    document.getElementById('destiny-vedic-title').textContent = vedic.name;
    document.getElementById('destiny-vedic-desc').textContent = `${userData.name}，在印度吠陀星空中，您的本命宿為【${vedic.name.split('宿 (')[0]}宿】。${vedic.desc}`;
    document.getElementById('destiny-vedic-advice').textContent = vedic.advice;
}

// ==========================================
// 8. Controller: Mode Switcher Tabs
// ==========================================
function switchMode(mode) {
    if (!userData.name) {
        alert("請先完成上方天命排盤，再解鎖功能！");
        return;
    }

    // 1. Toggle active class in tabs
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        if(btn.getAttribute('onclick').includes(mode)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Switch visible section with smooth transition
    const sections = document.querySelectorAll('.oracle-section');
    sections.forEach(sec => {
        if(sec.id === `mode-${mode}`) {
            sec.classList.add('active');
        } else {
            sec.classList.remove('active');
        }
    });
}

// ==========================================
// 9. Controller: Tarot Divination Logic
// ==========================================
let tarotState = {
    deck: [],
    drawnIndices: [],
    flips: [false, false, false]
};

function drawTarot() {
    // Reset cards display
    for(let i = 0; i < 3; i++) {
        const card = document.getElementById(`tarot-${i}`);
        card.classList.remove('flipped');
        tarotState.flips[i] = false;
    }

    // Hide result box with fade
    document.getElementById('tarot-results').style.display = 'none';

    // Shuffle and pick 3 cards randomly with random orientations (Upright/Reversed)
    setTimeout(() => {
        tarotState.deck = [];
        // Draw 3 unique random card indices
        let indices = [];
        while(indices.length < 3) {
            let r = Math.floor(Math.random() * tarotDeck.length);
            if(!indices.includes(r)) indices.push(r);
        }

        indices.forEach((cardIdx, posIdx) => {
            const isReversed = Math.random() < 0.35; // 35% chance of being reversed
            const originalCard = tarotDeck[cardIdx];
            
            tarotState.deck.push({
                ...originalCard,
                reversed: isReversed
            });

            // Update DOM face for the card back face representation
            const backFace = document.getElementById(`tarot-back-${posIdx}`);
            const rotationClass = isReversed ? 'style="transform: rotate(180deg);"' : '';
            backFace.innerHTML = `
                <div class="tarot-img-symbol" ${rotationClass}>${originalCard.symbol}</div>
                <div class="tarot-card-name">${originalCard.name.split(' (')[0]}</div>
                <div class="tarot-card-orient ${isReversed ? 'reversed' : ''}">${isReversed ? '逆位' : '正位'}</div>
                <div class="tarot-card-index">ARCANUM ${originalCard.id}</div>
            `;
        });

        // Trigger float glow animation for unrevealed cards
        const board = document.querySelector('.tarot-board');
        board.classList.add('ready');
        
        // Show status helper
        alert(`${userData.name}，洗牌已完成！請由左至右點擊三張卡牌，揭示您的過去、現在與未來。`);
    }, 300);
}

function flipTarotCard(index) {
    if(tarotState.deck.length === 0) {
        alert("請先點擊下方按鈕進行『洗牌並抽取啟示』！");
        return;
    }
    if(tarotState.flips[index]) return; // Already flipped

    const card = document.getElementById(`tarot-${index}`);
    card.classList.add('flipped');
    tarotState.flips[index] = true;

    // Check if all cards are flipped, if so, render the interpretation box
    if(tarotState.flips.every(f => f)) {
        setTimeout(() => {
            renderTarotInterpretations();
        }, 800);
    }
}

function renderTarotInterpretations() {
    const resultsBox = document.getElementById('tarot-results');
    resultsBox.style.display = 'block';

    tarotState.deck.forEach((card, idx) => {
        const box = document.getElementById(`result-${idx}`);
        const nameText = `${card.name} (${card.reversed ? '逆位' : '正位'})`;
        const description = card.reversed ? card.meaningRev : card.meaningUp;

        box.querySelector('.card-name').textContent = nameText;
        box.querySelector('.card-name').style.color = card.reversed ? 'var(--cyan)' : 'var(--accent)';
        box.querySelector('.card-desc').textContent = `${userData.name}，這代表您：${description}`;
    });

    // Scroll smoothly to results
    resultsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================
// 10. Controller: Daily Horoscope Logic
// ==========================================
// Hash algorithm using Date + Sign string to ensure consistent daily readings per sign
function getDailySeed(sign) {
    const dateStr = new Date().toDateString(); // e.g. "Mon Jun 22 2026"
    const combinedStr = dateStr + sign;
    
    let hash = 0;
    for (let i = 0; i < combinedStr.length; i++) {
        hash = combinedStr.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
}

// Deterministic pseudo-random number generator using seed
function getSeededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function selectZodiac(sign) {
    // 1. Set active class on grid items
    const items = document.querySelectorAll('.zodiac-item');
    items.forEach(item => {
        if(item.getAttribute('onclick').includes(sign)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });

    const report = document.getElementById('horoscope-report');
    report.style.display = 'block';

    // 2. Generate seeded scores for consistent daily experience
    const seed = getDailySeed(sign);
    const scoreLove = Math.floor(getSeededRandom(seed + 1) * 41) + 60; // 60-100%
    const scoreWork = Math.floor(getSeededRandom(seed + 2) * 41) + 60; // 60-100%
    const scoreMoney = Math.floor(getSeededRandom(seed + 3) * 41) + 60; // 60-100%
    const scoreHealth = Math.floor(getSeededRandom(seed + 4) * 41) + 60; // 60-100%

    // 3. Select seeded advice texts
    const luckyColorIdx = Math.floor(getSeededRandom(seed + 5) * luckyColors.length);
    const luckyDirIdx = Math.floor(getSeededRandom(seed + 6) * luckyDirections.length);
    const luckyNumber = Math.floor(getSeededRandom(seed + 7) * 9) + 1; // 1-9

    const config = zodiacData[sign];
    const summaryIdx = Math.floor(getSeededRandom(seed + 8) * config.summary.length);
    const summaryText = config.summary[summaryIdx];

    // 4. Update UI DOM Elements
    document.getElementById('report-icon').textContent = config.icon;
    document.getElementById('report-title').textContent = config.title;
    document.getElementById('report-date').textContent = `今日星相刻度 (西元 ${new Date().toLocaleDateString('zh-TW')} 能量分佈)`;

    // Trigger progressive score bar fill animations
    setTimeout(() => {
        updateBar('love', scoreLove);
        updateBar('work', scoreWork);
        updateBar('money', scoreMoney);
        updateBar('health', scoreHealth);
    }, 100);

    // Update text boxes
    const userNameGreeting = userData.name ? `${userData.name}，` : "";
    document.getElementById('horo-summary').textContent = userNameGreeting + summaryText;
    document.getElementById('lucky-color').textContent = luckyColors[luckyColorIdx];
    document.getElementById('lucky-number').textContent = luckyNumber;
    document.getElementById('lucky-dir').textContent = luckyDirections[luckyDirIdx];
}

function updateBar(type, val) {
    const bar = document.getElementById(`bar-${type}`);
    const pct = document.getElementById(`pct-${type}`);
    if (bar && pct) {
        bar.style.width = `${val}%`;
        pct.textContent = `${val}%`;
    }
}

// ==========================================
// 11. Controller: Traditional Divination (求籤 & 擲筊)
// ==========================================
let divinationState = {
    hasQian: false,
    drawnQian: null,
    jiaoTossedCount: 0
};

function shakeQian() {
    const barrel = document.getElementById('qian-barrel');
    const button = document.getElementById('btn-shake-qian');
    const slipCard = document.getElementById('qian-result-card');

    if(barrel.classList.contains('shaking')) return;

    // Reset old states
    divinationState.hasQian = false;
    divinationState.drawnQian = null;
    divinationState.jiaoTossedCount = 0;
    barrel.classList.remove('spit-out');
    slipCard.style.display = 'none';
    
    document.getElementById('jiao-status-hud').className = "jiao-status-hud";
    document.getElementById('jiao-status-hud').textContent = `${userData.name}，正在搖動籤筒，默想心中祈求之事...`;
    document.getElementById('btn-toss-jiao').disabled = true;

    // Add shaking classes
    barrel.classList.add('shaking');
    button.disabled = true;

    // Play shaking sounds or delays
    setTimeout(() => {
        barrel.classList.remove('shaking');
        barrel.classList.add('spit-out');
        button.disabled = false;

        // Draw a random qian stick index
        const randomIdx = Math.floor(Math.random() * fortuneSlips.length);
        divinationState.drawnQian = fortuneSlips[randomIdx];
        divinationState.hasQian = true;

        // Prompt user to toss jiao blocks (擲筊)
        document.getElementById('jiao-status-hud').className = "jiao-status-hud success-text";
        document.getElementById('jiao-status-hud').innerHTML = `🔮 <b>${userData.name} 已抽得：${divinationState.drawnQian.num}</b><br>請點擊右方『擲筊請示』，向神明確認是否為此靈籤！`;
        document.getElementById('btn-toss-jiao').disabled = false;
    }, 1800);
}

function tossJiao() {
    if(!divinationState.hasQian || !divinationState.drawnQian) {
        alert("請先搖動左方籤筒求取一支靈籤！");
        return;
    }

    const jiaoLeft = document.getElementById('jiao-left');
    const jiaoRight = document.getElementById('jiao-right');
    const hud = document.getElementById('jiao-status-hud');
    const tossBtn = document.getElementById('btn-toss-jiao');

    // Prevent double clicking during animation
    tossBtn.disabled = true;
    hud.className = "jiao-status-hud";
    hud.textContent = "筊杯彈跳翻轉中，請靜心等待神明裁示...";

    // Remove older animation classes to restart
    jiaoLeft.classList.remove('tossing-left');
    jiaoRight.classList.remove('tossing-right');
    void jiaoLeft.offsetWidth; // Trigger reflow to restart animations
    void jiaoRight.offsetWidth;

    // Generate random toss results
    // Combinations:
    // 0 = 聖筊 (1 flat, 1 convex) - Success
    // 1 = 笑筊 (2 flat) - God smiling, toss again
    // 2 = 陰筊 (2 convex) - God angry, redraw qian
    const r = Math.random();
    let outcome;
    
    if (r < 0.5) {
        outcome = "sheng"; // 50% chance of Sheng Jiao (聖筊)
    } else if (r < 0.75) {
        outcome = "xiao"; // 25% chance of Xiao Jiao (笑筊)
    } else {
        outcome = "yin"; // 25% chance of Yin Jiao (陰筊)
    }

    // Set rotation variables in CSS properties for randomized landing look
    let rotLeft = 0;
    let rotRight = 0;

    if (outcome === "sheng") {
        // One flat (0deg), one convex (180deg)
        const leftIsFlat = Math.random() < 0.5;
        rotLeft = leftIsFlat ? 360 : 540;
        rotRight = leftIsFlat ? 540 : 360;
    } else if (outcome === "xiao") {
        // Two flat (0deg, shown as 360 or 720)
        rotLeft = 360;
        rotRight = 720;
    } else {
        // Two convex (180deg, shown as 540 or 900)
        rotLeft = 540;
        rotRight = 900;
    }

    jiaoLeft.style.setProperty('--rot-left', `${rotLeft}deg`);
    jiaoRight.style.setProperty('--rot-right', `${rotRight}deg`);

    // Trigger animations
    jiaoLeft.classList.add('tossing-left');
    jiaoRight.classList.add('tossing-right');

    setTimeout(() => {
        tossBtn.disabled = false;
        
        if (outcome === "sheng") {
            hud.className = "jiao-status-hud success-text";
            hud.innerHTML = `🎉 <b>【聖筊】神明允示！</b><br>此籤確實為 ${userData.name} 所求，靈籤啟示已解鎖於下方！`;
            tossBtn.disabled = true; // Complete, disable toss
            
            // Reveal Slip Details
            revealFortuneSlip();
        } else if (outcome === "xiao") {
            hud.className = "jiao-status-hud success-text";
            hud.innerHTML = `😅 <b>【笑筊】神明微笑不言。</b><br>神明笑而不答，或是您問事不夠明確。請 ${userData.name} 再次『擲筊』請示！`;
        } else {
            hud.className = "jiao-status-hud fail-text";
            hud.innerHTML = `❌ <b>【陰筊】神明不允，並非此籤！</b><br>此籤不對。請 ${userData.name} 重按左方籤筒『重新求籤』並再次擲筊請示！`;
            tossBtn.disabled = true; // Reject, must redraw qian
            divinationState.hasQian = false;
            divinationState.drawnQian = null;
        }
    }, 1250);
}

function revealFortuneSlip() {
    const slip = divinationState.drawnQian;
    const card = document.getElementById('qian-result-card');

    document.getElementById('slip-type').textContent = slip.type;
    // Set color based on slip level
    const badge = document.getElementById('slip-type');
    if(slip.type.includes('上上') || slip.type.includes('上吉')) {
        badge.style.background = '#b91c1c';
    } else if(slip.type.includes('中')) {
        badge.style.background = '#d97706';
    } else {
        badge.style.background = '#4b5563';
    }

    document.getElementById('slip-num').textContent = slip.num;
    document.getElementById('slip-poem').innerHTML = slip.poem.split('\n').join('<br>');
    document.getElementById('slip-poetic-meaning').textContent = `${userData.name}，此籤詩意為：${slip.poetic}`;
    document.getElementById('slip-fortune-meaning').textContent = slip.fortune;

    card.style.display = 'block';
    
    // Smooth scroll down to slip
    setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}
