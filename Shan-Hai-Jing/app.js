/**
 * 山海經 · 奇獸異誌 | Classic of Mountains & Seas
 * Application Logic & Database
 */

// 1. Mythical Beasts Database
const BEASTS_DATABASE = [
{
        id: "nine-tailed-fox",
        nameCn: "九尾狐",
        zhuyin: "ㄐㄧㄡˇ ㄨㄟˇ ㄏㄨˊ",
        nameEn: "Nine-Tailed Fox",
        category: "auspicious", // divine, auspicious, perilous
        categoryCn: "瑞獸",
        region: "east", // east, south, west, north, central
        regionCn: "東山經 (青丘山)",
        classicText: "「青丘之山，有獸焉，其狀如狐而九尾，其音如嬰兒，能食人，食之不蠱。」",
        description: "九尾狐居住在青丘國。牠長著九條尾巴，聲音如同嬰兒啼哭一般。雖然古籍記載牠會吃人，但同時也指出，人們若食用了牠的肉，就可以避開妖邪之氣的蠱惑。在後世文化中，九尾狐逐漸演變為繁衍昌盛與太平祥瑞的吉兆。",
        image: "assets/webp/nine_tailed_fox.webp",
        stats: {
            spiritual: 85,
            aggression: 35,
            rarity: 80
        },
{
        id: "zhu-long",
        nameCn: "燭龍",
        zhuyin: "ㄓㄨˊ ㄌㄨㄥˊ",
        nameEn: "Torch Dragon / Zhu Long",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (鐘山)",
        classicText: "「鐘山之神，名曰燭陰，視為晝，瞑為夜，吹為冬，呼為夏，不飲，不食，不息，息為風。身長千里。」",
        description: "燭龍又稱燭陰，是鐘山之神。牠擁有人的面孔與紅色的蛇形身軀，身長千里。祂的神力無邊，睜開雙眼世界便是白晝，閉上雙眼便是黑夜；吹氣時大地進入寒冬，呼氣時便轉為炎夏。祂不需要飲食、呼吸與休息，祂的每一次悠長呼吸，都會化作天地間的人間大風。",
        image: "assets/webp/zhu_long.webp",
        stats: {
            spiritual: 98,
            aggression: 15,
            rarity: 99
        },
{
        id: "taotie",
        nameCn: "饕餮 (麅鴞)",
        zhuyin: "ㄊㄠ ㄊㄧㄝˋ (ㄆㄠˊ ㄒㄧㄠ)",
        nameEn: "Taotie (Pao Xiao)",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (鉤吾山)",
        classicText: "「鉤吾之山其上多玉...有獸焉，其狀如羊身人面，其目在腋下，虎齒人爪，其音如嬰兒，名曰麅鴞，食人。」",
        description: "饕餮在《山海經》中被記載為「麅鴞」。牠長著羊的身體、人的面孔，眼睛長在腋下，擁有老虎般的牙齒和人的指甲，聲音聽起來像嬰兒。饕餮極度貪食，生性凶殘且會食人。在後世中，祂被視為中國古代四大凶獸之一，常被鑄造於青銅器上，象徵無窮的貪婪與權慾。",
        image: "assets/webp/taotie.webp",
        stats: {
            spiritual: 80,
            aggression: 95,
            rarity: 88
        },
{
        id: "jingwei",
        nameCn: "精衛",
        zhuyin: "ㄐㄧㄥ ㄨㄟˋ",
        nameEn: "Jingwei Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (發鳩山)",
        classicText: "「發鳩之山，其上多柘木。有鳥焉，其狀如烏，文首、白喙、赤足，名曰精衛，其鳴自詨。是炎帝之少女，名曰女娃。」",
        description: "精衛原是太陽神炎帝的小女兒，名叫女娃。她在東海遊玩時不幸溺水身亡，靈魂化為一隻頭部有花紋、白嘴喙、紅爪子的神鳥。她對東海懷有極大的怨恨，每日不知疲倦地銜著西山的木枝與石子，投向波濤洶湧的東海，立志要將大海填平。象徵著永不妥協的精神。",
        image: "assets/webp/jingwei.webp",
        stats: {
            spiritual: 75,
            aggression: 10,
            rarity: 85
        },
{
        id: "qilin",
        nameCn: "麒麟",
        zhuyin: "ㄑㄧˊ ㄌㄧㄣˊ",
        nameEn: "Qilin / Kylin",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (中次九經)",
        classicText: "「有獸焉，其狀如麇而一角，龍尾而馬蹄，五彩文，名曰麒麟，出則王道興。」",
        description: "麒麟是中國古代傳說中的神聖仁獸。牠的身體像麇鹿，長著獨角，擁有一條龍尾與駿馬的蹄子，身上覆蓋著五彩斑斕的鱗甲。麒麟不傷生靈，不踐踏生草，祂的出世往往預示著聖人誕生、王道興盛與天下太平。與龍、鳳、龜並稱為四大靈獸。",
        image: "assets/webp/qilin.webp",
        stats: {
            spiritual: 92,
            aggression: 5,
            rarity: 92
        },
{
        id: "xing-tian",
        nameCn: "刑天",
        zhuyin: "ㄒㄧㄥˊ ㄊㄧㄢ",
        nameEn: "Xing Tian",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (海外西經)",
        classicText: "「刑天與帝至此爭神，帝斷其首，葬之常羊之山。乃以乳為目，以臍為口，操干戚以舞。」",
        description: "刑天是中國古代神話中的戰神與巨人。他與黃帝爭奪天帝神位，在激烈的搏鬥中被黃帝砍去了頭顱，頭顱被安葬在常羊山下。然而，無頭的刑天並未屈服，他以雙乳化為眼睛，以肚臍當作嘴巴，右手揮舞著戰斧（戚），左手持著盾牌（干），繼續在天地間戰鬥，象徵著永不妥協、抗爭到底的悲壯英雄靈魂。",
        image: "assets/webp/xing_tian.webp",
        stats: {
            spiritual: 90,
            aggression: 98,
            rarity: 95
        },
{
        id: "hundun",
        nameCn: "混沌 (帝江)",
        zhuyin: "ㄏㄨㄣˋ ㄉㄨㄣˋ (ㄉㄧˋ ㄐㄧㄤ)",
        nameEn: "Hundun (Di Jiang)",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (天山)",
        classicText: "「天山...有神焉，其狀如黃囊，赤如丹火，六足四翼，渾敦無面目，是識歌舞，實為帝江也。」",
        description: "混沌又名帝江，是西方的神鳥。牠的外形像一個黃色的口袋，散發著如丹火般耀眼的紅光。牠長著六隻腳和四隻翅膀，但是完全沒有五官與面目（渾敦無面目）。混沌雖然沒有七竅，卻非常精通唱歌與跳舞。在後世中，祂被列為中國古代四大凶獸之一，代表混沌無序狀態。",
        image: "assets/webp/hundun.webp",
        stats: {
            spiritual: 85,
            aggression: 45,
            rarity: 92
        },
{
        id: "tiangou",
        nameCn: "天狗",
        zhuyin: "ㄊㄧㄢ ㄍㄡˇ",
        nameEn: "Tiangou",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (陰山)",
        classicText: "「陰山...有獸焉，其狀如貍而白首，名曰天狗，其音如榴榴，可以禦凶。」",
        description: "天狗是中國古代傳說中的靈獸。不同於後世吃月亮的惡狗或日本神話中的天狗，在《山海經》原始記載中，天狗是一隻形狀像狸（野貓）、腦袋呈白色的奇特神獸。牠會發出「榴榴」的叫聲。人們豢養牠可以用來禦凶、防範妖邪與災禍，是一隻能帶來平安的吉獸。",
        image: "assets/webp/tiangou.webp",
        stats: {
            spiritual: 82,
            aggression: 30,
            rarity: 88
        },
{
        id: "bi-fang",
        nameCn: "畢方",
        zhuyin: "ㄅㄧˋ ㄈㄤ",
        nameEn: "Bi Fang Bird",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (章莪山)",
        classicText: "「章莪之山...有鳥焉，其狀如鶴，一足，赤文青質而白喙，名曰畢方，其鳴自詨，見則其邑有訛火。」",
        description: "畢方是中國古代神話中的木神與火神鳥。牠的外貌像鶴，但極其奇特的是牠只有一隻腳。畢方身體呈青色，覆蓋著紅色的斑紋，嘴喙是白色的。牠的叫聲就像在呼喚自己的名字「畢方」。傳說中，只要畢方在某處出現，該城鎮或地區就會莫名奇妙地發生離奇的火災（訛火）。",
        image: "assets/webp/bi_fang.webp",
        stats: {
            spiritual: 88,
            aggression: 55,
            rarity: 90
        },
{
        id: "ling-ling",
        nameCn: "軨軨",
        zhuyin: "ㄌㄧㄥˊ ㄌㄧㄥˊ",
        nameEn: "Ling Ling",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (空桑山)",
        classicText: "「空桑之山...有獸焉，其狀如牛而虎文，其音如欽，其名曰軨軨，見則天下大水。」",
        description: "軨軨是居住在東方空桑山的一種異獸。牠的外形長得像牛，但身上覆蓋著如老虎一般斑闌的條紋。牠叫聲奇特，聽起來就像是在喊自己的名字「軨軨」。軨軨是象徵洪水的凶獸，傳說中只要看見牠出沒，天下就會發生極大的洪水水災。",
        image: "assets/webp/ling_ling.webp",
        stats: {
            spiritual: 78,
            aggression: 70,
            rarity: 85
        },
{
        id: "fenghuang",
        nameCn: "鳳凰",
        zhuyin: "ㄈㄥ ㄏㄨㄤˊ",
        nameEn: "Fenghuang / Phoenix",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (丹穴山)",
        classicText: "「丹穴之山...有鳥焉，其狀如雞，五采而文，名曰鳳凰...自歌自舞，見則天下安寧。」",
        description: "鳳凰是中國傳說中的百鳥之王。牠的外形像雞，身上覆蓋著五彩斑斕的羽毛，並有特殊的紋理。牠出沒於丹穴之山，能夠自己歌唱與跳舞，一旦出現就象徵著天下太平與安寧。",
        image: "assets/webp/fenghuang.webp",
        stats: {
            spiritual: 96,
            aggression: 10,
            rarity: 98
        },
{
        id: "luwu",
        nameCn: "陸吾",
        zhuyin: "ㄌㄨˋ ㄨˊ",
        nameEn: "Lu Wu",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (崑崙山)",
        classicText: "「崑崙之丘，是實惟帝之下都，神陸吾司之。其神狀虎身而九尾，人面而虎爪。」",
        description: "陸吾是天帝在人間都城崑崙山的守護神。祂擁有老虎的身體、九條尾巴、人的面孔與老虎的利爪。祂掌控天之九部及天帝平圃的時節，威嚴不可侵犯。",
        image: "assets/webp/luwu.webp",
        stats: {
            spiritual: 95,
            aggression: 90,
            rarity: 95
        },
{
        id: "kui",
        nameCn: "夔",
        zhuyin: "ㄎㄨㄟˊ",
        nameEn: "Kui",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (流波山)",
        classicText: "「東海中有流波山...其上有獸，狀如牛，蒼身而無角，一足，出入水則必風雨，光如日月，其聲如雷，其名曰夔。」",
        description: "夔是生活在東海流波山上的獨腳神獸。牠的外形像牛，但身體是蒼青色的且沒有角。牠出入水中時必定會伴隨狂風暴雨，身上散發著日月般的光芒，叫聲如雷鳴般震耳欲聾。",
        image: "assets/webp/kui.webp",
        stats: {
            spiritual: 94,
            aggression: 80,
            rarity: 94
        },
{
        id: "yinglong",
        nameCn: "應龍",
        zhuyin: "ㄧㄥˋ ㄌㄨㄥˊ",
        nameEn: "Yinglong / Winged Dragon",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "大荒東經 (凶犁土丘)",
        classicText: "「大荒東北隅，有山名曰凶犁土丘。應龍處南極，殺蚩尤與夸父，不得復上。」",
        description: "應龍是中國古代神話中長有雙翼的巨龍。祂曾助黃帝討伐蚩尤與夸父，並助大禹治水。因消耗過多神力，無法再返回天庭，轉而居住在南方的南方大澤中，被尊為雨神。",
        image: "assets/webp/yinglong.webp",
        stats: {
            spiritual: 97,
            aggression: 95,
            rarity: 97
        },
{
        id: "bashe",
        nameCn: "巴蛇",
        zhuyin: "ㄅㄚ ㄕㄜˊ",
        nameEn: "Ba Snake",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "海內南經 (巴國)",
        classicText: "「巴蛇食象，三歲而出其骨，君子服之，無心腹之疾。」",
        description: "巴蛇是古代傳說中的黑色巨蛇。牠體型無比巨大，生性貪婪，甚至能吞食一整隻大象，並在三年後才吐出象骨。古人傳說服用巴蛇的骨頭可以治愈心腹疾病。",
        image: "assets/webp/bashe.webp",
        stats: {
            spiritual: 70,
            aggression: 92,
            rarity: 85
        },
{
        id: "kaiming",
        nameCn: "開明獸",
        zhuyin: "ㄎㄞ ㄇㄧㄥˊ ㄕㄡˋ",
        nameEn: "Kaiming Beast",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "海內西經 (崑崙山)",
        classicText: "「崑崙南淵深三百仞...面有九門，門有開明獸守之，開明獸身大類虎而九首，皆人面，東嚮立崑崙上。」",
        description: "開明獸是崑崙山九道天門的守護神。牠體型巨大如虎，長著九個腦袋，每個腦袋都是人面，面朝東方肅立於崑崙山上，守護天界不被外邪侵擾。",
        image: "assets/webp/kaiming.webp",
        stats: {
            spiritual: 93,
            aggression: 88,
            rarity: 93
        },
{
        id: "yingzhao",
        nameCn: "英招",
        zhuyin: "ㄧㄥ ㄓㄠ",
        nameEn: "Ying Zhao",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (槐江山)",
        classicText: "「槐江之山...實惟帝之平圃，神英招司之，其狀馬身而人面，虎文而鳥翼，徇於四海，其音如榴。」",
        description: "英招是負責看守天帝平圃（御花園）的神明。祂長著馬的身體、人的面孔，身上有老虎的花紋，背上生有一雙鳥的翅膀，其叫聲如同唱歌一般，負責巡視四海。",
        image: "assets/webp/yingzhao.webp",
        stats: {
            spiritual: 92,
            aggression: 70,
            rarity: 90
        },
{
        id: "taowu",
        nameCn: "檮杌",
        zhuyin: "ㄊㄠˊ ㄨˋ",
        nameEn: "Taowu / Savage Beast",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (西方荒野)",
        classicText: "「西方荒中有獸焉，其狀如虎而犬毛，長二尺，人面，虎足，豬口牙，尾長丈八尺，名曰檮杌。」",
        description: "檮杌是中國古代傳說中的四大凶獸之一。牠體型像老虎，覆蓋著狗毛，長著人的面孔、老虎的腳掌、豬的獠牙，尾巴長達一丈八尺，生性極其固執，傲狠難訓。",
        image: "assets/webp/taowu.webp",
        stats: {
            spiritual: 75,
            aggression: 96,
            rarity: 92
        },
{
        id: "qiongqi",
        nameCn: "窮奇",
        zhuyin: "ㄑㄩㄥˊ ㄑㄧˊ",
        nameEn: "Qiongqi / Fiend Bird",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (邽山)",
        classicText: "「邽山...有獸焉，其狀如牛，蝟毛，名曰窮奇，音如獋狗，食人。」",
        description: "窮奇是四大凶獸之一。在西山經中記載牠外形象牛，身上長滿如刺蝟般的硬毛，叫聲像狗嚎，生性食人。傳說牠喜歡「懲善揚惡」，看見有人爭鬥就會去吃有理的一方。",
        image: "assets/webp/qiongqi.webp",
        stats: {
            spiritual: 82,
            aggression: 97,
            rarity: 94
        },
{
        id: "dangkang",
        nameCn: "當康",
        zhuyin: "ㄉㄤ ㄎㄤ",
        nameEn: "Dang Kang",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (欽山)",
        classicText: "「欽山...有獸焉，其狀如豚而有牙，其名曰當康，其鳴自詨，見則天下大穰。」",
        description: "當康是一隻代表五穀豐登的吉兆瑞獸。牠的外形長得像一隻小豬，但嘴裡長著長長的獠牙。當牠在田野間跳躍並叫出自己的名字時，就預示著天下將迎來大豐收。",
        image: "assets/webp/dangkang.webp",
        stats: {
            spiritual: 80,
            aggression: 10,
            rarity: 82
        },
{
        id: "fuzhu",
        nameCn: "夫諸",
        zhuyin: "ㄈㄨ ㄓㄨ",
        nameEn: "Fu Zhu",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (敖岸山)",
        classicText: "「敖岸之山...有獸焉，其狀如白鹿而四角，名曰夫諸，見則其縣大水。」",
        description: "夫諸是一隻形狀像白鹿卻長著四隻角的異獸。牠的外表高雅溫馴，但卻是代表洪水的凶兆之獸。傳說中只要夫諸在哪裡現身，該地區就會發生極其嚴重的洪澇災害。",
        image: "assets/webp/fuzhu.webp",
        stats: {
            spiritual: 86,
            aggression: 40,
            rarity: 88
        },
{
        id: "feiyi",
        nameCn: "肥遺 (蛇)",
        zhuyin: "ㄈㄟˊ ㄧˊ",
        nameEn: "Feiyi Snake",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (太華山)",
        classicText: "「太華之山...有蛇焉，名曰肥遺，六足四翼，見則天下大旱。」",
        description: "肥遺是太華山中的奇特蛇類，長著六隻腳和四隻翅膀。雖然有翅膀，但極少飛翔。牠是象徵嚴重旱災的凶獸，一旦在人間現身，天下就會面臨赤地千里的極度乾旱。",
        image: "assets/webp/feiyi.webp",
        stats: {
            spiritual: 78,
            aggression: 65,
            rarity: 85
        },
{
        id: "mingshe",
        nameCn: "鳴蛇",
        zhuyin: "ㄇㄧㄥˊ ㄕㄜˊ",
        nameEn: "Singing Snake / Ming She",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (鮮山)",
        classicText: "「鮮山...多鳴蛇，其狀如監而四翼，其音如磬，見則其邑大旱。」",
        description: "鳴蛇是生活在鮮山中的異蛇。牠的外形像普通的蛇，但背部長有四隻翅膀。牠的叫聲非常清脆響亮，如同敲擊石磬一般。牠同樣是旱災的徵兆，出現會帶來大旱。",
        image: "assets/webp/mingshe.webp",
        stats: {
            spiritual: 74,
            aggression: 60,
            rarity: 84
        },
{
        id: "huashe",
        nameCn: "化蛇",
        zhuyin: "ㄏㄨㄚˋ ㄕㄜˊ",
        nameEn: "Hua Snake",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (陽山)",
        classicText: "「陽山...有獸焉，其狀如人面而豺身，鳥翼而蛇行，其音如叱，名曰化蛇，見則其邑大水。」",
        description: "化蛇是一隻極為詭異的異獸。牠擁有人的面孔、豺狼的身體、鳥的翅膀，卻像蛇一樣匍匐前行。牠的叫聲如同人類在大聲呵斥。化蛇出沒會帶來毀滅性的洪水大災。",
        image: "assets/webp/huashe.webp",
        stats: {
            spiritual: 80,
            aggression: 75,
            rarity: 87
        },
{
        id: "xuanguian",
        nameCn: "旋龜",
        zhuyin: "ㄒㄩㄢˊ ㄍㄨㄟ",
        nameEn: "Black Turtle / Xuan Gui",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (杻陽山)",
        classicText: "「杻陽之山...怪水出焉...其中多旋龜，其狀如龜而鳥首虺尾，其名曰旋龜，佩之不聾。」",
        description: "旋龜生活在杻陽山的怪水中。牠長著烏龜的身體，卻有著鳥類的腦袋與毒蛇的尾巴。古人常把牠的龜殼佩戴在身上，傳說可以防治耳聾，還能治療手腳上的老繭。",
        image: "assets/webp/xuanguian.webp",
        stats: {
            spiritual: 84,
            aggression: 15,
            rarity: 80
        },
{
        id: "lushu",
        nameCn: "鹿蜀",
        zhuyin: "ㄌㄨˋ ㄕㄨˇ",
        nameEn: "Lu Shu",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (杻陽山)",
        classicText: "「杻陽之山...有獸焉，其狀如馬而白首，其文如虎而赤尾，其音如謠，其名曰鹿蜀，佩之宜子孫。」",
        description: "鹿蜀是杻陽山上的奇特靈獸。牠長得像馬，頭部是白色的，身上長滿如老虎般的斑紋，並有一條紅色的尾巴。牠的叫聲極其動聽，如民謠般優美，佩戴其皮毛能使子孫興旺。",
        image: "assets/webp/lushu.webp",
        stats: {
            spiritual: 82,
            aggression: 10,
            rarity: 84
        },
{
        id: "xingxing",
        nameCn: "狌狌",
        zhuyin: "ㄒㄧㄥ ㄒㄧㄥ",
        nameEn: "Xingxing / Telepathic Ape",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (招搖山)",
        classicText: "「招搖之山...有獸焉，其狀如禺而白耳，伏行人走，其名曰狌狌，食之能走。」",
        description: "狌狌是招搖山的第一種野獸。牠的形狀像獼猴，但長著一雙白色的耳朵。牠能像人一樣彎腰爬行或直立行走。傳說食用了牠的肉，人就能健步如飛，且能通曉過去的事情。",
        image: "assets/webp/xingxing.webp",
        stats: {
            spiritual: 78,
            aggression: 20,
            rarity: 78
        },
{
        id: "lei",
        nameCn: "類",
        zhuyin: "ㄌㄟˋ",
        nameEn: "Lei / Hermaphrodite Cat",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (亶爰山)",
        classicText: "「亶爰之山...有獸焉，其狀如貍而有髦，其名曰類，自為牝牡，食者不妒。」",
        description: "類居住在亶爰山，外形象一隻長著長鬃毛的靈貓。牠最奇特之處在於雌雄同體（自為牝牡），能夠獨自繁衍後代。傳說人們若食用了牠的肉，就不會再產生嫉妒之心。",
        image: "assets/webp/lei.webp",
        stats: {
            spiritual: 80,
            aggression: 15,
            rarity: 82
        },
{
        id: "boyi",
        nameCn: "猼訑",
        zhuyin: "ㄅㄛˊ ㄧˊ",
        nameEn: "Bo Yi",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (基山)",
        classicText: "「基山...有獸焉，其狀如羊，九尾四耳，其目在背，其名曰猼訑，佩之不畏。」",
        description: "猼訑是基山的一種奇異神獸。牠的外形像山羊，但長有九條尾巴和四隻耳朵。最特別的是，牠的眼睛長在背上。據說將牠的皮毛佩戴在身上，就能獲得勇氣，無所畏懼。",
        image: "assets/webp/boyi.webp",
        stats: {
            spiritual: 83,
            aggression: 25,
            rarity: 87
        },
{
        id: "guanguan",
        nameCn: "灌灌",
        zhuyin: "ㄍㄨㄢˋ ㄍㄨㄢˋ",
        nameEn: "Guanguan Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (青丘山)",
        classicText: "「青丘之山...有鳥焉，其狀如鳩，其音若呵，名曰灌灌，佩之不惑。」",
        description: "灌灌是青丘山上的一種野鳥，形狀像鳩鴿，叫聲聽起來像是在大聲呵斥人。古人常將其羽毛佩戴在身上，傳說可以使人保持清醒，不受妖邪之氣的蠱惑和蒙蔽。",
        image: "assets/webp/guanguan.webp",
        stats: {
            spiritual: 76,
            aggression: 12,
            rarity: 80
        },
{
        id: "chiru",
        nameCn: "赤鱬",
        zhuyin: "ㄔˋ ㄖㄨˊ",
        nameEn: "Red Ru / Chiru",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (青丘山)",
        classicText: "「青丘之山...英水出焉...其中多赤鱬，其狀如魚而人面，其音如鴛鴦，食之不疥。」",
        description: "赤鱬生活在青丘山的英水中。牠長著魚的身體、卻有一張人的面孔，叫聲如同鴛鴦一般婉轉。傳說食用了赤鱬的肉，人就不會染上疥瘡等皮膚疾病，具有神奇的醫療效果。",
        image: "assets/webp/chiru.webp",
        stats: {
            spiritual: 81,
            aggression: 15,
            rarity: 83
        },
{
        id: "lili",
        nameCn: "狸力",
        zhuyin: "ㄌㄧˊ ㄌㄧˋ",
        nameEn: "Li Li / Earth-mover",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (櫃山)",
        classicText: "「櫃山...有獸焉，其狀如豚而有距，其音如狗吠，其名曰狸力，見則其縣多土功。」",
        description: "狸力是櫃山中外形象豬的靈獸。牠長著像雞爪一樣的距，叫聲如同狗吠。狸力擅長掘土築地，只要牠出沒的地方，就預示著當地的縣邑將會興起大規模的土木工程建設。",
        image: "assets/webp/lili.webp",
        stats: {
            spiritual: 79,
            aggression: 30,
            rarity: 81
        },
{
        id: "lingyu",
        nameCn: "鴒䳿",
        zhuyin: "ㄌㄧㄥˊ ㄩˊ",
        nameEn: "Ling Yu Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (東始山)",
        classicText: "「東始之山...有鳥焉，其狀如雄雞而人面，名曰鴒䳿...食之不癭。」",
        description: "鴒䳿是東始山上的一種奇鳥。牠擁有雄雞的身體，卻長著人的面孔。牠善於在山林間低空飛翔，傳說人們食用了牠的肉，可以預防和治愈大脖子病（癭瘤）。",
        image: "assets/webp/lingyu.webp",
        stats: {
            spiritual: 75,
            aggression: 10,
            rarity: 84
        },
{
        id: "quru",
        nameCn: "瞿如",
        zhuyin: "ㄑㄩˊ ㄖㄨˊ",
        nameEn: "Quru Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (禱過山)",
        classicText: "「禱過之山...有鳥焉，其狀如鵁而白首，三足而人面，名曰瞿如，其鳴自詨。」",
        description: "瞿如是禱過山上的一種奇鳥，形體像鵁鶿，但腦袋是白色的。牠長著三隻腳，並且長著一張人的臉。牠的叫聲聽起來就像是在驚恐地呼喊自己的名字。",
        image: "assets/webp/quru.webp",
        stats: {
            spiritual: 77,
            aggression: 15,
            rarity: 85
        },
{
        id: "hujiao",
        nameCn: "虎蛟",
        zhuyin: "ㄏㄨˇ ㄐㄧㄠ",
        nameEn: "Tiger Jiao / Hu Jiao",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (禱過山)",
        classicText: "「禱過之山...泿水出焉...其中多虎蛟，其狀魚身而蛇尾，其音如鴛鴦，食之不腫。」",
        description: "虎蛟生活在禱過山的泿水中。牠是一種介於魚與蛇之間的古老水中巨獸，擁有魚的身體與毒蛇的尾巴，叫聲極其響亮如同鴛鴦。食用其肉可防止身體發炎腫脹。",
        image: "assets/webp/hujiao.webp",
        stats: {
            spiritual: 85,
            aggression: 65,
            rarity: 88
        },
{
        id: "fei",
        nameCn: "蜚",
        zhuyin: "ㄈㄟˇ",
        nameEn: "Fei / Plague Ox",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (太山)",
        classicText: "「太山...有獸焉，其狀如牛而白首，一目而蛇尾，其名曰蜚，行水則竭，行草則死，見則天下大疫。」",
        description: "蜚是太山中極度不祥的荒野惡獸。牠的身體像牛，但頭是白色的，只長著一隻眼睛，尾巴則是一條大蛇。蜚所到之處，水源乾涸，草木枯死，現身便意味著天下將爆發大瘟疫。",
        image: "assets/webp/fei.webp",
        stats: {
            spiritual: 80,
            aggression: 85,
            rarity: 93
        },
{
        id: "yongyong-fish",
        nameCn: "鱅鱅魚",
        zhuyin: "ㄩㄥˊ ㄩㄥˊ ㄩˊ",
        nameEn: "Yongyong Fish",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (食水)",
        classicText: "「食水出焉...其中多鱅鱅之魚，其狀如犁牛，其音如彘鳴，食之不腫。」",
        description: "鱅鱅魚是東山經中記載的一種淡水魚類。牠的身體像犁牛一樣龐大，但叫聲卻像豬叫一般。傳說人們若食用了鱅鱅魚的魚肉，就可以防止身體產生浮腫或腫瘤。",
        image: "assets/webp/yongyong-fish.webp",
        stats: {
            spiritual: 72,
            aggression: 10,
            rarity: 80
        },
{
        id: "xiegou",
        nameCn: "絜鉤",
        zhuyin: "ㄒㄧㄝˊ ㄍㄡ",
        nameEn: "Xiegou Bird / Plague Duck",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (䃌山)",
        classicText: "「䃌山...有鳥焉，其狀如鳧而鼠尾，名曰絜鉤，見則其國多疫。」",
        description: "絜鉤是䃌山中的一種怪鳥。牠長著野鴨子一樣的身體，卻長著一條老鼠的尾巴。牠是傳播致命疾病的不祥之鳥，一旦在某個國家或城鎮出現，該地便會爆發嚴重的流行疫病。",
        image: "assets/webp/xiegou.webp",
        stats: {
            spiritual: 73,
            aggression: 40,
            rarity: 86
        },
{
        id: "shusi",
        nameCn: "數斯",
        zhuyin: "ㄕㄨˋ ㄙ",
        nameEn: "Shusi Owl",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (皋塗山)",
        classicText: "「皋塗之山...有鳥焉，其狀如鴟而人足，名曰數斯，食之已癭。」",
        description: "數斯生活在皋塗山上。牠的外形長得像鴟（鷂鷹），但卻長著一雙像人類一樣的腳掌。古人傳說食用了數斯的肉，可以有效治療和預防甲狀腺腫大等頑疾。",
        image: "assets/webp/shusi.webp",
        stats: {
            spiritual: 75,
            aggression: 20,
            rarity: 81
        },
{
        id: "ranyi-fish",
        nameCn: "冉遺魚",
        zhuyin: "ㄖㄢˇ ㄧˊ ㄩˊ",
        nameEn: "Ranyi Fish / Nightmare Defender",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (英鞮山)",
        classicText: "「英鞮之山...涴水出焉...其中多冉遺魚，魚身蛇首六足，其目如馬耳，食之使人不眯。」",
        description: "冉遺魚生活在英鞮山的涴水中。牠奇特地長著魚的身體、蛇的腦袋、六隻腳，眼睛的形狀則像馬的耳朵。食其肉可以讓人睡覺不做噩夢，且具有辟邪與禦凶的神奇功效。",
        image: "assets/webp/ranyi-fish.webp",
        stats: {
            spiritual: 83,
            aggression: 15,
            rarity: 88
        },
{
        id: "bo",
        nameCn: "駁",
        zhuyin: "ㄅㄛˊ",
        nameEn: "Bo / Tiger-Eating Horse",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (中曲山)",
        classicText: "「中曲之山...有獸焉，其狀如馬而白身黑尾，一角，虎牙爪，音如鼓音，其名曰駁，食虎豹，可以禦兵。」",
        description: "駁生活在中曲山，外形象白馬，但有著黑色的尾巴、一隻獨角、老虎的牙齒和利爪。牠的叫聲如擂鼓般響亮。駁生性極其兇猛，以虎豹為食，飼養牠可免受兵刃與戰爭之災。",
        image: "assets/webp/bo.webp",
        stats: {
            spiritual: 89,
            aggression: 90,
            rarity: 91
        },
{
        id: "huan",
        nameCn: "讙",
        zhuyin: "ㄏㄨㄢ",
        nameEn: "Huan / Three-Tailed Cat",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (翼望山)",
        classicText: "「翼望之山...有獸焉，其狀如貍，一目而三尾，名曰讙，其音如奪百聲，是可以禦凶，食之已癉。」",
        description: "讙是翼望山的一種異獸。牠的外形像一隻野貓，但只長著一隻眼睛，並有三條尾巴。牠的叫聲能夠模仿和奪去上百種鳥獸的叫聲。佩戴牠能防範災禍，食其肉可治愈黃疸病。",
        image: "assets/webp/huan.webp",
        stats: {
            spiritual: 82,
            aggression: 35,
            rarity: 88
        },
{
        id: "qitu",
        nameCn: "鵸鵌",
        zhuyin: "ㄑㄧˊ ㄊㄨˊ",
        nameEn: "Qitu / Three-Headed Crow",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (翼望山)",
        classicText: "「翼望之山...有鳥焉，其狀如烏，三首六尾而善笑，名曰鵸鵌，服之使人不厭，又可以禦凶。」",
        description: "鵸鵌是翼望山的一種奇鳥。牠形狀像烏鴉，卻長著三個腦袋和六條尾巴。牠非常喜歡發出像人類笑聲一樣的叫聲。佩戴牠的羽毛可使人不生夢魘，亦可當作辟邪禦凶的吉祥物。",
        image: "assets/webp/qitu.webp",
        stats: {
            spiritual: 81,
            aggression: 20,
            rarity: 86
        },
{
        id: "zhuhuai",
        nameCn: "諸懷",
        zhuyin: "ㄓㄨ ㄏㄨㄞˊ",
        nameEn: "Zhu Huai Beast",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (北嶽山)",
        classicText: "「北嶽之山...有獸焉，其狀如牛而四角、人目、彘耳，其名曰諸懷，其音如鳴雁，是食人。」",
        description: "諸懷是北嶽山中的凶獸。牠的外形象一隻大牛，但長著四隻角、人的眼睛和豬一樣的耳朵。牠的叫聲聽起來如同大雁在空中鳴叫一般，本性極其凶狠野蠻，以食人為生。",
        image: "assets/webp/zhuhuai.webp",
        stats: {
            spiritual: 76,
            aggression: 94,
            rarity: 89
        },
{
        id: "liangqu",
        nameCn: "梁渠",
        zhuyin: "ㄌㄧㄤˊ ㄑㄩˊ",
        nameEn: "Liang Qu",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (歷石山)",
        classicText: "「歷石之山...有獸焉，其狀如貍而白首虎爪，名曰梁渠，見則其國有大兵。」",
        description: "梁渠是生活在歷石山中的凶兆異獸。牠的外形長得像狸，但是腦袋是白色的，並長著老虎般的利爪。牠代表著戰爭與殺戮，傳說只要梁渠出現，該國必會爆發大戰亂。",
        image: "assets/webp/liangqu.webp",
        stats: {
            spiritual: 78,
            aggression: 80,
            rarity: 88
        },
{
        id: "juru",
        nameCn: "狙如",
        zhuyin: "ㄐㄩ ㄖㄨˊ",
        nameEn: "Ju Ru / War Rat",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (倚帝山)",
        classicText: "「倚帝之山...有獸焉，其狀如鼢鼠，白耳白喙，名曰狙如，見則國有大兵。」",
        description: "狙如是一隻體型如鼢鼠般大小的異獸，長著白色的耳朵和白色的喙。雖然體型微小看似無害，但牠在古籍中是與梁渠齊名的戰爭凶獸，一旦在某國集體出沒，該國必有大戰爭。",
        image: "assets/webp/juru.webp",
        stats: {
            spiritual: 72,
            aggression: 45,
            rarity: 84
        },
{
        id: "aoye",
        nameCn: "獓𢀚",
        zhuyin: "ㄠˊ ㄧㄝˋ",
        nameEn: "Ao Ye / Wild Yak",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (三桑山)",
        classicText: "「三桑之山...有獸焉，其狀如牛，白身四角，其毫如披蓑，其名曰獓𢀚，是食人。」",
        description: "獓𢀚（又稱獓因）是三桑山中的食人巨獸。牠的體型龐大如牛，長著白色的身體和四隻尖角。牠身上的長毛如同披著一件蓑衣，性格極為暴躁，一旦遇見人類就會進行捕食。",
        image: "assets/webp/aoye.webp",
        stats: {
            spiritual: 75,
            aggression: 95,
            rarity: 90
        },
{
        id: "jueru",
        nameCn: "玃如",
        zhuyin: "ㄐㄩㄝˊ ㄖㄨˊ",
        nameEn: "Jue Ru",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (皋塗山)",
        classicText: "「皋塗之山...有獸焉，其狀如鹿而白尾，馬足人手而四角，名曰玃如。」",
        description: "玃如是皋塗山上的奇特異獸。牠擁有鹿的身體但有一條白色的尾巴，長著馬一樣的蹄子、但前肢卻像人類的手掌，頭上長有四隻鹿角，外形十分奇特但生性溫和。",
        image: "assets/webp/jueru.webp",
        stats: {
            spiritual: 82,
            aggression: 20,
            rarity: 85
        },
{
        id: "jufu",
        nameCn: "舉父",
        zhuyin: "ㄐㄩˇ ㄈㄨˋ",
        nameEn: "Ju Fu / Rock Hurler",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (崇吾山)",
        classicText: "「崇吾之山...有獸焉，其狀如禺而文臂，豹虎而善投，名曰舉父。」",
        description: "舉父是崇吾山的一種猿猴類異獸。牠長著像獼猴一樣的身體，手臂上長滿了斑斕的花紋。牠的性格開朗，極其擅長投擲石頭和木塊，速度極快且準確無比。",
        image: "assets/webp/jufu.webp",
        stats: {
            spiritual: 80,
            aggression: 40,
            rarity: 83
        },
{
        id: "shuhu",
        nameCn: "孰湖",
        zhuyin: "ㄕㄨˊ ㄏㄨˊ",
        nameEn: "Shuhu / Pegasus Centaur",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (崦嵫山)",
        classicText: "「崦嵫之山...有獸焉，其狀馬身而鳥翼，人面蛇尾，是好舉人，名曰孰湖。」",
        description: "孰湖是崦嵫山中的半人半獸神靈。牠長著馬的身體、鳥的翅膀，卻有著人的面孔和一條蛇的尾巴。牠的性格非常親人，十分喜歡抱起或背負人類在大天空中飛翔翱翔。",
        image: "assets/webp/shuhu.webp",
        stats: {
            spiritual: 88,
            aggression: 25,
            rarity: 90
        },
{
        id: "songsi",
        nameCn: "竦斯",
        zhuyin: "ㄙㄨㄥˇ ㄙ",
        nameEn: "Songsi Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (灌題山)",
        classicText: "「灌題之山...有鳥焉，其狀如山雞，人面，見人則躍，名曰竦斯，其鳴自呼。」",
        description: "竦斯是灌題山上的一種怪鳥。牠擁有野雞一樣的身體，但卻長著一張十分精緻的人的面孔。只要看見有人走過，牠就會在枝頭或草地上興奮地跳躍，並發出歡快的叫聲。",
        image: "assets/webp/songsi.webp",
        stats: {
            spiritual: 74,
            aggression: 10,
            rarity: 80
        },
{
        id: "lei-bird",
        nameCn: "鸓",
        zhuyin: "ㄌㄟˇ",
        nameEn: "Lei Bird / Fire Stopper",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (小華山)",
        classicText: "「小華之山...有鳥焉，其狀如赤首而翼，名曰鸓，可以禦火。」",
        description: "鸓是小華山上的一種珍貴神鳥。牠長著紅色的頭部，但有雙重翅膀，能自由在高空翱翔。據說古人飼養這種神鳥，可以用來預防和撲滅離奇發生的山火與火災。",
        image: "assets/webp/lei-bird.webp",
        stats: {
            spiritual: 82,
            aggression: 15,
            rarity: 85
        },
{
        id: "huan-beast",
        nameCn: "患",
        zhuyin: "ㄏㄨㄢˋ",
        nameEn: "Huan / Mouthless Beast",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (青要山)",
        classicText: "「青要之山...有獸焉，其狀如羊而無口，不可殺，其名曰患。」",
        description: "患居住在黃帝行宮所在的青要山中。牠的外形長得像一隻山羊，但是非常奇異的是牠完全沒有嘴巴（無口），不需要進食。患擁有金剛不壞之軀，無法被凡間刀劍所殺害。",
        image: "assets/webp/huan-beast.webp",
        stats: {
            spiritual: 87,
            aggression: 5,
            rarity: 91
        },
{
        id: "tianma",
        nameCn: "天馬",
        zhuyin: "ㄊㄧㄢ ㄇㄚˇ",
        nameEn: "Tianma / Flying Dog",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (馬成山)",
        classicText: "「馬成之山...有獸焉，其狀如白犬而黑頭，見人則飛，其名曰天馬。」",
        description: "不同於西方神話中長翅膀的馬，《山海經》裡的天馬是一隻外形如雪白獵犬、卻長著黑色腦袋的神獸。牠只要一見到人類走近，就會展現神力在空中自由自在地翱翔飛翔。",
        image: "assets/webp/tianma.webp",
        stats: {
            spiritual: 86,
            aggression: 20,
            rarity: 90
        },
{
        id: "chenghuang",
        nameCn: "乘黃",
        zhuyin: "ㄔㄥˊ ㄏㄨㄤˊ",
        nameEn: "Cheng Huang",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "海外西經 (白民之國)",
        classicText: "「白民之國...有乘黃，其狀如狐，其背上有角，乘之壽二千歲。」",
        description: "乘黃是生活在白民之國的極珍貴瑞獸。牠的外形像一隻明黃色的狐狸，但背部中央長著一隻長角。傳說中只要人類有幸能騎乘一次乘黃，就能獲得長達二千歲的悠長壽命。",
        image: "assets/webp/chenghuang.webp",
        stats: {
            spiritual: 94,
            aggression: 5,
            rarity: 97
        },
{
        id: "jiufeng",
        nameCn: "九鳳",
        zhuyin: "ㄐㄧㄡˇ ㄈㄥˋ",
        nameEn: "Nine-Headed Phoenix",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "大荒北經 (荒野山)",
        classicText: "「大荒之中...有神九首，人面鳥身，名曰九鳳。」",
        description: "九鳳是中國楚地神話中極為古老的九頭神鳥。祂擁有火紅鳳凰的巨大鳥身，但長著九個美麗的人類首面。祂是掌控風雷的大荒神祇之一，擁有強大且神聖的巫術法力。",
        image: "assets/webp/jiufeng.webp",
        stats: {
            spiritual: 95,
            aggression: 75,
            rarity: 96
        },
{
        id: "zheng",
        nameCn: "猙",
        zhuyin: "ㄓㄥ",
        nameEn: "Zheng / Five-Tailed Leopard",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (章莪山)",
        classicText: "「章莪之山...有獸焉，其狀如赤豹，五尾一角，音如擊石，其名曰猙。」",
        description: "猙是生活在章莪山中的威武靈獸。牠的身體像一隻紅色的豹子，但長著五條長長的尾巴，額頭中央長著一隻利角。牠的聲音非常清脆，如同兩塊玉石猛烈撞擊一般。",
        image: "assets/webp/zheng.webp",
        stats: {
            spiritual: 86,
            aggression: 80,
            rarity: 88
        },
{
        id: "jiao",
        nameCn: "狡",
        zhuyin: "ㄐㄧㄠˇ",
        nameEn: "Jiao / Harvest Dog",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (玉山)",
        classicText: "「玉山...有獸焉，其狀如犬而豹文，角如牛，其名曰狡，見則其國大豐。」",
        description: "狡居住在王母娘娘所居的西王母之山（玉山）。牠長著狗的身體，身上遍布著獵豹一般的花紋，頭上長著一對威風的牛角。牠是豐收的吉兆，現身便意味著該國將迎來大豐收。",
        image: "assets/webp/jiao.webp",
        stats: {
            spiritual: 83,
            aggression: 40,
            rarity: 85
        },
{
        id: "luanniao",
        nameCn: "鸞鳥",
        zhuyin: "ㄌㄨㄢˊ ㄋㄧㄠˇ",
        nameEn: "Luan Bird / Blue Phoenix",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (女床山)",
        classicText: "「女床之山...有鳥焉，其狀如翟而五彩文，名曰鸞鳥，見則天下安寧。」",
        description: "鸞鳥是與鳳凰齊名的神聖鳥類，生活在女床山。牠的身體形狀像野雞，但覆蓋著閃爍著青藍色光澤的五彩羽毛。鸞鳥性格溫順，其鳴聲悅耳，牠的現世代表天下安定和平。",
        image: "assets/webp/luanniao.webp",
        stats: {
            spiritual: 93,
            aggression: 10,
            rarity: 93
        },
{
        id: "yong",
        nameCn: "顒",
        zhuyin: "ㄩㄥˊ",
        nameEn: "Yong / Drought Owl",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (令丘山)",
        classicText: "「令丘之山...有鳥焉，其狀如梟，人面而四目，有耳，其名曰顒，見則天下大旱。」",
        description: "顒是令丘山上的一種怪鳥。牠長著貓頭鷹的身體，卻有一張長著四隻眼睛的人臉，還長有一雙人類般的耳朵。牠叫聲如大聲呼喊。顒代表大旱，牠出現會讓天下河道枯竭。",
        image: "assets/webp/yong.webp",
        stats: {
            spiritual: 77,
            aggression: 55,
            rarity: 86
        },
{
        id: "gudiao",
        nameCn: "蠱雕",
        zhuyin: "ㄍㄨˇ ㄉㄧㄠ",
        nameEn: "Gu Diao / Horned Eagle",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (鹿吳山)",
        classicText: "「鹿吳之山...有獸焉，其狀如雕而有角，其音如嬰兒之音，是食人，名曰蠱雕。」",
        description: "蠱雕是鹿吳山中的食人惡獸。牠長著大雕一樣的翅膀與鳥身，但頭頂上長著尖銳的獨角。牠的叫聲非常具有欺騙性，聽起來如同嬰兒啼哭，藉此吸引路人並將其捕食。",
        image: "assets/webp/gudiao.webp",
        stats: {
            spiritual: 74,
            aggression: 93,
            rarity: 88
        },
{
        id: "wuzhiqi",
        nameCn: "無支祁",
        zhuyin: "ㄨˊ ㄓ ㄑㄧˊ",
        nameEn: "Wuzhiqi / Water Monkey",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (桐柏山)",
        classicText: "「淮渦水神名無支祁...形若猿猴，縮鼻高額，青軀白首，金目雪齒，力逾九象。」",
        description: "無支祁是中國古代神話中的淮渦水神。祂形狀像猿猴，塌鼻子高額頭，身體呈青藍色而頭部是雪白的，雙眼射出金光。祂力大無窮能擊敗九頭大象，大禹曾將其鎖在龜山腳下。",
        image: "assets/webp/wuzhiqi.webp",
        stats: {
            spiritual: 92,
            aggression: 87,
            rarity: 93
        },
{
        id: "boyu",
        nameCn: "薄魚",
        zhuyin: "ㄅㄛˊ ㄩˊ",
        nameEn: "Bo Fish / Vomiting Sole",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (女烝山)",
        classicText: "「女烝之山...其中多薄魚，其狀如鰈而赤尾，其目在背，其音如人嘔，見則天下大旱。」",
        description: "薄魚生活在東方的女烝水中。牠的外形像一隻比目魚（鰈），但尾巴是鮮紅色的，眼睛長在背部中央。牠的叫聲非常刺耳，如同人在嘔吐。薄魚現身會召喚恐怖的全國性大旱。",
        image: "assets/webp/boyu.webp",
        stats: {
            spiritual: 70,
            aggression: 50,
            rarity: 82
        },
{
        id: "heyu",
        nameCn: "合窳",
        zhuyin: "ㄏㄜˊ ㄩˇ",
        nameEn: "Heyu / Human-Faced Pig",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (岷山)",
        classicText: "「岷山...有獸焉，其狀如彘而人面，黃身而赤尾，其音如嬰兒，名曰合窳，見則天下大水。」",
        description: "合窳生活在岷山中，體型龐大像一隻黃色身體的野豬，但長著一張人臉和紅色的尾巴。牠的叫聲如同嬰兒啼哭，生性極其殘暴，牠的出世會帶來淹沒農田與城鎮的特大洪水。",
        image: "assets/webp/heyu.webp",
        stats: {
            spiritual: 75,
            aggression: 88,
            rarity: 89
        },
{
        id: "wenyao-fish",
        nameCn: "文鰩魚",
        zhuyin: "ㄨㄣˊ ㄧㄠˊ ㄩˊ",
        nameEn: "Wenyao Fish / Flying Carp",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (觀水)",
        classicText: "「觀水...其中多文鰩魚，狀如鯉魚，魚身而鳥翼，蒼文而白首，赤喙，見則天下大穰。」",
        description: "文鰩魚是生活在觀水中的神聖飛魚。牠的身體像鯉魚，但長有一雙大大的鳥翅膀。牠的頭是白色的，長著紅色的嘴喙，晚上會在海面上飛行。文鰩魚現世預示著天下五穀豐登。",
        image: "assets/webp/wenyao-fish.webp",
        stats: {
            spiritual: 85,
            aggression: 10,
            rarity: 88
        },
{
        id: "helu-fish",
        nameCn: "何羅魚",
        zhuyin: "ㄏㄜˊ ㄌㄨㄛˊ ㄩˊ",
        nameEn: "Heluo Fish / Ten-Bodied Fish",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (譙明山)",
        classicText: "「譙明之山...譙水出焉...其中多何羅魚，一首而十身，其音如吠犬，食之已癰。」",
        description: "何羅魚生活在譙明山的譙水中。牠是極其奇特的多體魚類，擁有一顆大大的魚頭、卻連接了十個魚身。牠的叫聲如同小狗叫。古人傳說食用何羅魚的肉可以治療癰疽疔瘡等惡疾。",
        image: "assets/webp/helu-fish.webp",
        stats: {
            spiritual: 80,
            aggression: 15,
            rarity: 87
        },
{
        id: "manman-bird",
        nameCn: "蠻蠻 (比翼鳥)",
        zhuyin: "ㄇㄢˊ ㄇㄢˊ",
        nameEn: "Manman Bird / Jian Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (崇吾山)",
        classicText: "「崇吾之山...有鳥焉，其狀如鳧，而一翼一目，相得乃飛，名曰蠻蠻，見則天下大水。」",
        description: "蠻蠻即中國著名的「比翼鳥」。牠的外形像野鴨，但每隻鳥只長著一隻翅膀和一隻眼睛，必須兩隻雌雄鳥緊緊依偎在一起才能配合飛翔。牠也象徵著忠貞不渝的情感。",
        image: "assets/webp/manman-bird.webp",
        stats: {
            spiritual: 88,
            aggression: 12,
            rarity: 92
        },
{
        id: "suanyu",
        nameCn: "酸與",
        zhuyin: "ㄙㄨㄢ ㄩˇ",
        nameEn: "Suanyu / Six-Legged Bird",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (景山)",
        classicText: "「景山...有鳥焉，其狀如蛇，而四翼、六足、三目，名曰酸與，見則其邑有恐。」",
        description: "酸與是景山中極其詭異的神鳥。牠長著蛇一樣的細長身體，但有四隻翅膀、六隻腳和三隻眼睛。牠的出現會帶給人心莫名的恐慌與集體混亂，現身即代表該地區會有驚恐之災。",
        image: "assets/webp/suanyu.webp",
        stats: {
            spiritual: 75,
            aggression: 60,
            rarity: 89
        },
{
        id: "yayu",
        nameCn: "窫窳",
        zhuyin: "ㄧㄚˋ ㄩˇ",
        nameEn: "Yayu / Dragon-Headed Beast",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (少咸山)",
        classicText: "「少咸之山...有獸焉，其狀如牛，而赤身、人面、馬足，名曰窫窳，其音如嬰兒，是食人。」",
        description: "窫窳曾是天神，被其他天神謀殺後靈魂化為食人怪獸。牠長著巨龍的腦袋或人面、紅色的豹身、馬的蹄子，叫聲如同嬰兒般。生性極度殘忍兇惡，常在山谷中捕食人類。",
        image: "assets/webp/yayu.webp",
        stats: {
            spiritual: 85,
            aggression: 96,
            rarity: 93
        },
{
        id: "sanzuwu",
        nameCn: "三足烏",
        zhuyin: "ㄙㄢ ㄗㄨˊ ㄨ",
        nameEn: "Three-Legged Crow / Sun Bird",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "大荒東經 (湯谷)",
        classicText: "「大荒之中...有谷曰湯谷。上有扶木，一日方至，一日方出，皆載於烏。」",
        description: "三足烏是居住在東方湯谷扶桑樹上的金色神鳥，也就是太陽的化身。祂擁有三隻腳，每天由一隻神烏載著一個太陽在空中巡行，帶給世間光熱與生命活力。",
        image: "assets/webp/sanzuwu.webp",
        stats: {
            spiritual: 98,
            aggression: 30,
            rarity: 98
        },
{
        id: "bingyi",
        nameCn: "冰夷",
        zhuyin: "ㄅㄧㄥ ㄧˊ",
        nameEn: "Bingyi / River Deity",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (從極之淵)",
        classicText: "「從極之淵...冰夷恆處之。冰夷人面而乘兩龍。」",
        description: "冰夷是黃河的主宰之神（河伯）。祂居住在北方幽深寒冷的從極之淵。冰夷長著一張英俊的人面，每次出巡都會乘坐著兩條神聖巨龍，掌管天下河川水源的水利起伏。",
        image: "assets/webp/bingyi.webp",
        stats: {
            spiritual: 94,
            aggression: 70,
            rarity: 94
        },
{
        id: "yushiqie",
        nameCn: "雨師妾",
        zhuyin: "ㄩˇ ㄕ ㄑㄧㄝˋ",
        nameEn: "Rain Goddess / Yu Shi Qie",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "海外東經 (雨師妾國)",
        classicText: "「雨師妾在其北...其人黑，兩手各操一蛇，左耳有青蛇，右耳有赤蛇。」",
        description: "雨師妾是掌管天降雨水的遠古雨神之妾，其國人皮膚呈黑色。神明雨師妾的雙手各自握著一條滑動的毒蛇，左耳掛著青蛇，右耳掛著紅蛇，能操控天空中狂風暴雨與降水降雪。",
        image: "assets/webp/yushiqie.webp",
        stats: {
            spiritual: 91,
            aggression: 65,
            rarity: 92
        },
{
        id: "pingyi",
        nameCn: "屏翳",
        zhuyin: "ㄆㄧㄥˊ ㄧˋ",
        nameEn: "Pingyi / Cloud and Rain Deity",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (大荒荒野)",
        classicText: "「大荒之中...有神名曰屏翳，是司雨與雲，雨師也。」",
        description: "屏翳是中國古代傳說中兼管「雲」與「雨」的自然大天神。祂能在天空中呼風喚雨，撥雲見日，掌控著大地的耕作水源和自然時令。祂的意志決定了乾旱或豐收。",
        image: "assets/webp/pingyi.webp",
        stats: {
            spiritual: 93,
            aggression: 60,
            rarity: 93
        },
{
        id: "nvchou",
        nameCn: "女丑",
        zhuyin: "ㄋㄩˇ ㄔㄡˇ",
        nameEn: "Nvchou Goddess / Shamaness",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "海外東經 (女丑之屍)",
        classicText: "「女丑之屍，生而十日炙殺之，在丈夫北。以右手鄣其面。」",
        description: "女丑是古代神力強大的大女巫，傳說中十個太陽同時出現在天空暴曬大地時，她在大石之上作法祈雨，卻不幸被十日聯手曬死。她的遺體萬年不腐，以右手遮面，象徵抗爭。",
        image: "assets/webp/nvchou.webp",
        stats: {
            spiritual: 92,
            aggression: 40,
            rarity: 95
        },
{
        id: "jiliang",
        nameCn: "吉量",
        zhuyin: "ㄐㄧˊ ㄌㄧㄤˋ",
        nameEn: "Ji Liang / Thousand-Year Horse",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "海內西經 (犬封國)",
        classicText: "「犬封國...有文馬，縞身朱鬣，目若黃金，名曰吉量，乘之壽千歲。」",
        description: "吉量是犬封國中的極珍稀白色文馬。牠有著純白如縞素的馬身，鮮紅奪目的馬鬃，雙眼如同黃金般閃閃發光。只要有幸騎乘一次吉量，人就能獲得一千歲的長壽福澤。",
        image: "assets/webp/jiliang.webp",
        stats: {
            spiritual: 92,
            aggression: 5,
            rarity: 96
        },
{
        id: "luoyu",
        nameCn: "蠃魚",
        zhuyin: "ㄌㄨㄛˇ ㄩˊ",
        nameEn: "Luo Fish / Winged Carp",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (邽山)",
        classicText: "「邽山...蒙水出焉...其中多蠃魚，魚身而鳥翼，音如鴛鴦，見則其邑大水。」",
        description: "蠃魚生活在邽山的蒙水中。牠長著鯉魚一樣的身體，但卻長有一對鳥類的翅膀。牠的叫聲聽起來如同鴛鴦般。蠃魚是象徵嚴重水災的凶獸，出現便代表當地將發生洪災。",
        image: "assets/webp/luoyu.webp",
        stats: {
            spiritual: 77,
            aggression: 50,
            rarity: 85
        },
{
        id: "shangao",
        nameCn: "山膏",
        zhuyin: "ㄕㄢ ㄍㄠ",
        nameEn: "Shan Gao / Cursing Pig",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (苦山)",
        classicText: "「苦山...有獸焉，其狀如豚，赤若丹火，善詈，其名曰山膏。」",
        description: "山膏生活在苦山中。牠的外形長得像一隻紅色的小豬，全身顏色如丹火般耀眼。山膏性格極其惡劣好鬥，而且天生非常喜歡並擅長用各種惡毒的言語辱罵和詛咒路過的人類。",
        image: "assets/webp/shangao.webp",
        stats: {
            spiritual: 65,
            aggression: 65,
            rarity: 81
        },
{
        id: "juji",
        nameCn: "居暨",
        zhuyin: "ㄐㄩ ㄐㄧˋ",
        nameEn: "Juji / Plague Hedgehog",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (柴桑山)",
        classicText: "「柴桑之山...有獸焉，其狀如豚而有刺，其名曰居暨，其音如豚，見則其邑有大疫。」",
        description: "居暨生活在柴桑山。牠長著像小豬一樣的身體，但全身長滿了鋒利的尖刺，如同刺蝟。牠叫聲如豬哼。居暨是不祥的瘟疫之獸，一旦牠出現，當地縣邑便會爆發可怕大疫病。",
        image: "assets/webp/juji.webp",
        stats: {
            spiritual: 70,
            aggression: 55,
            rarity: 85
        },
{
        id: "changyou",
        nameCn: "長右",
        zhuyin: "ㄔㄤˊ ㄧㄡˋ",
        nameEn: "Chang You / Four-Eared Ape",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (長右山)",
        classicText: "「長右之山...有獸焉，其狀如禺而四耳，其名長右，其音如吟，見則其郡縣大水。」",
        description: "長右生活在長右山。牠的形體像獼猴，但最奇特的是牠長著四隻耳朵。牠的叫聲聽起來就像是人類在悲傷呻吟一般。長右是水災的兆頭，看見牠意味著該郡縣會被洪水淹沒。",
        image: "assets/webp/changyou.webp",
        stats: {
            spiritual: 76,
            aggression: 40,
            rarity: 83
        },
{
        id: "huahuai",
        nameCn: "猾褢",
        zhuyin: "ㄏㄨㄚˊ ㄏㄨㄞˊ",
        nameEn: "Hua Huai / Shaggy Beast",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (堯光山)",
        classicText: "「堯光之山...有獸焉，其狀如人而彘鬣，穴居而冬蟄，名曰猾褢...見則其縣多役土。」",
        description: "猾褢生活在堯光山，長著人一樣的軀體但身上覆蓋著豬一樣的硬鬣毛。牠居住在洞穴中並且會冬眠。牠的叫聲如砍木頭。見到牠預示著當地將有繁重的勞役與兵役工程。",
        image: "assets/webp/huahuai.webp",
        stats: {
            spiritual: 68,
            aggression: 60,
            rarity: 82
        },
{
        id: "zhi",
        nameCn: "彘 (獸)",
        zhuyin: "ㄓˋ",
        nameEn: "Zhi / Tiger Ox-Tail",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (浮玉山)",
        classicText: "「浮玉之山...有獸焉，其狀如虎而牛尾，其音如狗吠，其名曰彘，是食人。」",
        description: "彘是浮玉山中的兇狠食人野獸。不同於普通的豬，山海經中的彘體型極大，長著老虎的身體和斑紋，但有一條長長的牛尾巴。叫聲如同狗吠一般，生性嗜血，專門吃人。",
        image: "assets/webp/zhi.webp",
        stats: {
            spiritual: 70,
            aggression: 92,
            rarity: 84
        },
{
        id: "qianyang",
        nameCn: "羬羊",
        zhuyin: "ㄑㄧㄢˊ ㄧㄤˊ",
        nameEn: "Qian Sheep",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (錢來山)",
        classicText: "「錢來之山...有獸焉，其狀如羊而馬尾，名曰羬羊，其脂可以已臘。」",
        description: "羬羊是西山經首座錢來山上的溫和靈獸。牠長著山羊的身體，但長有一條駿馬般蓬鬆的長尾巴。牠的油脂具有神奇藥效，塗抹可以治愈嚴重的皮膚乾裂與凍瘡。",
        image: "assets/webp/qianyang.webp",
        stats: {
            spiritual: 78,
            aggression: 10,
            rarity: 78
        },
{
        id: "shuyu",
        nameCn: "儵魚",
        zhuyin: "ㄕㄨˊ ㄩˊ",
        nameEn: "Shu Fish / Anxiety Curer",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (彭水)",
        classicText: "「彭水出焉...其中多儵魚，其狀如雞而赤毛，三尾六足四首，其音如鵲，食之已憂。」",
        description: "儵魚生活在彭水中。牠是一隻長相極其怪異的四頭水獸，擁有像雄雞一樣的身體並覆蓋紅色羽毛，長著三條尾巴、六隻腳和四個腦袋。食用牠的肉可以徹底治愈憂鬱症與焦慮症。",
        image: "assets/webp/shuyu.webp",
        stats: {
            spiritual: 82,
            aggression: 12,
            rarity: 87
        },
{
        id: "luyu",
        nameCn: "鯥",
        zhuyin: "ㄌㄨˋ",
        nameEn: "Lu Fish / Flying Ox-Fish",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (柢山)",
        classicText: "「柢山...多水，無草木。有魚焉，其狀如牛，陵居，蛇尾有翼，食之無腫疾。」",
        description: "鯥生活在柢山的溪流中。牠擁有牛一般的身體，但有一條蛇的尾巴，並且背上長有大翅膀。牠能在陸地上爬行與棲息。傳說食用了鯥魚的肉，可以使人免受毒瘡與惡性腫瘤之苦。",
        image: "assets/webp/luyu.webp",
        stats: {
            spiritual: 80,
            aggression: 20,
            rarity: 85
        },
{
        id: "yuma",
        nameCn: "𩣡馬",
        zhuyin: "ㄩˊ ㄇㄚˇ",
        nameEn: "Yu Horse / Unicorn Colt",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (敦頭山)",
        classicText: "「敦頭之山...有獸焉，其狀如馬而一角，名曰𩣡馬，可以禦兵。」",
        description: "𩣡馬是敦頭山上的一種純潔神獸。牠的外形長得像一隻矯健的駿馬，但額頭中央長著一隻螺旋尖角。牠非常通人性，將其飼養在軍隊或家中，可以用來辟邪防身，抵禦兵刃之災。",
        image: "assets/webp/yuma.webp",
        stats: {
            spiritual: 84,
            aggression: 35,
            rarity: 88
        },
{
        id: "tianquan",
        nameCn: "天犬",
        zhuyin: "ㄊㄧㄢ ㄑㄩㄢˇ",
        nameEn: "Tianquan / Heavenly Dog",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (天帝山)",
        classicText: "「天帝之山...有獸焉，其狀如貍而白首，名曰天犬，其音如榴榴，可以禦凶。」",
        description: "天犬是天帝山上的神奇靈獸。牠長著野貓（貍）一樣的矯健身軀，但頭部的毛髮是雪白的。牠叫聲如「榴榴」。天犬是著名的鎮宅辟邪之獸，飼養牠可以禦除一切凶災與猛獸襲擊。",
        image: "assets/webp/tianquan.webp",
        stats: {
            spiritual: 83,
            aggression: 40,
            rarity: 89
        },
{
        id: "lin",
        nameCn: "獜",
        zhuyin: "ㄌㄧㄣˊ",
        nameEn: "Lin / Crop-Failing Dog",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (單張山)",
        classicText: "「單張之山...有獸焉，其狀如犬而虎文，有角，名曰獜，見則其國野無麥。」",
        description: "獜是單張山的一種凶兆獵犬。牠的體型像狗，但身上長滿了老虎般斑斕的條紋，並且頭上長有一隻尖角。牠是不祥的飢荒之獸，只要現身，該國的麥田必定會枯萎絕收。",
        image: "assets/webp/lin.webp",
        stats: {
            spiritual: 70,
            aggression: 60,
            rarity: 83
        },
{
        id: "huan-sheep",
        nameCn: "䍺",
        zhuyin: "ㄏㄨㄢˊ",
        nameEn: "Huan Sheep / Immortal Ram",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (單胡山)",
        classicText: "「單胡之山...有獸焉，其狀如羊而無口，不可殺，其名曰䍺。」",
        description: "䍺是單胡山上的不滅神獸。牠的外形長得像一隻山羊，但同樣不長嘴巴（無口），不需飲水進食。䍺體內蘊含著造化之氣，擁有不死之身，凡間的任何手段都無法將其殺死。",
        image: "assets/webp/huan-sheep.webp",
        stats: {
            spiritual: 86,
            aggression: 5,
            rarity: 90
        },
{
        id: "youyou",
        nameCn: "峳峳",
        zhuyin: "ㄧㄡ ㄧㄡ",
        nameEn: "Youyou / Guest-Bringer",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (䃌山)",
        classicText: "「䃌山...有獸焉，其狀如鹿而馬尾，名曰峳峳，見則其國多賢賓。」",
        description: "峳峳是䃌山的一種靈鹿。牠長著梅花鹿的身體，但卻有一條蓬鬆的馬尾巴。牠的叫聲如同在大聲歡呼。峳峳是代表友好外交與客賢的瑞獸，現世預示該國將有許多賢良貴賓前來訪問。",
        image: "assets/webp/youyou.webp",
        stats: {
            spiritual: 84,
            aggression: 10,
            rarity: 86
        },
{
        id: "qiuyu",
        nameCn: "犰狳",
        zhuyin: "ㄑㄧㄡˊ ㄩˊ",
        nameEn: "Qiuyu / Locust Armadillo",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (餘峨山)",
        classicText: "「餘峨之山...有獸焉，其狀如兔而鳥喙，鴟目蛇尾，見人則眠，名曰犰狳，見則螽蝗為敗。」",
        description: "不同於現代的犰狳，山海經中的犰狳長著兔子的身體、鳥的嘴喙、鴟鷹的眼睛與毒蛇的尾巴。牠膽子極小，一見人走近就會裝死（見人則眠）。牠出沒會招來漫天蝗蟲大肆啃食莊稼。",
        image: "assets/webp/qiuyu.webp",
        stats: {
            spiritual: 72,
            aggression: 30,
            rarity: 85
        },
{
        id: "zhuyan",
        nameCn: "朱厭",
        zhuyin: "ㄓㄨ ㄧㄢˋ",
        nameEn: "Zhu Yan / War Ape",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (小次山)",
        classicText: "「小次之山...有獸焉，其狀如猿，而白首赤足，名曰朱厭，見則大兵。」",
        description: "朱厭是小次山中的著名戰亂凶獸。牠的外形長得像一隻大白猿，但腦袋毛髮雪白、四肢腳掌呈鮮紅色。朱厭生性極度好戰，只要牠在大地現身，天下必定會爆發極大規模的戰爭。",
        image: "assets/webp/zhuyan.webp",
        stats: {
            spiritual: 80,
            aggression: 95,
            rarity: 93
        },
{
        id: "danghu",
        nameCn: "當扈",
        zhuyin: "ㄉㄤ ㄏㄨˋ",
        nameEn: "Danghu Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (申首山)",
        classicText: "「申首之山...有鳥焉，其狀如雉，以其髯飛，食之不眴目。」",
        description: "當扈是申首山上的奇特野鳥。牠外形象野雞，但無法用翅膀飛行，而是靠著下巴兩側長長延伸的髯毛在空中神奇地滑翔。古人傳說食用其肉，可以防止眼睛昏花、流淚或視力下降。",
        image: "assets/webp/danghu.webp",
        stats: {
            spiritual: 79,
            aggression: 15,
            rarity: 83
        },
{
        id: "ershu",
        nameCn: "耳鼠",
        zhuyin: "ㄦˇ ㄕㄨˇ",
        nameEn: "Ear Rat / Flying Moose-Rat",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (丹熏山)",
        classicText: "「丹熏之山...有獸焉，其狀如鼠，而菟首麋身，以其尾飛，食之不䐲，又可以禦百毒。」",
        description: "耳鼠是丹熏山上的奇妙異獸。牠長著大老鼠的身子，但有一顆兔子的腦袋、馴鹿（麋）的身體，並且能豎起長尾巴像直升機一般在天空中飛翔。食其肉可禦防百毒，亦可治肚子痛。",
        image: "assets/webp/ershu.webp",
        stats: {
            spiritual: 82,
            aggression: 10,
            rarity: 87
        },
{
        id: "dijiang-origin",
        nameCn: "帝江 (神鳥)",
        zhuyin: "ㄉㄧˋ ㄐㄧㄤ",
        nameEn: "Di Jiang",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (天山)",
        classicText: "「天山...有神焉，其狀如黃囊，赤如丹火，六足四翼，渾敦無面目，是識歌舞，實為帝江也。」",
        description: "帝江是天山之神，也是混沌的化身。祂形狀像個裝滿丹火的黃皮袋子，長有六隻腳、四隻翅膀，雖然完全沒有面目五官，但極其精通歌舞，身懷無窮的虛無神力。",
        image: "assets/webp/dijiang-origin.webp",
        stats: {
            spiritual: 94,
            aggression: 40,
            rarity: 93
        },
{
        id: "feishu",
        nameCn: "飛鼠",
        zhuyin: "ㄈㄟ ㄕㄨˇ",
        nameEn: "Flying Squirrel",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (天池山)",
        classicText: "Delta...有獸焉，其狀如兔而鼠首，以其背飛，其名曰飛鼠。」",
        description: "飛鼠生活在北方的天池之山。牠的身體像一隻大兔子，但腦袋是老鼠的模樣。牠能展開身體兩側寬大的皮膜在樹林與峽谷間自由地滑翔與飛翔，生性十分機警溫和。",
        image: "assets/webp/feishu.webp",
        stats: {
            spiritual: 74,
            aggression: 10,
            rarity: 78
        },
{
        id: "linghu",
        nameCn: "領胡",
        zhuyin: "ㄌㄧㄥˇ ㄏㄨˊ",
        nameEn: "Ling Hu Ox",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (泰冒山)",
        classicText: "「泰冒之山...有獸焉，其狀如牛而赤尾，其頸𦜼，其狀如徂，其名曰領胡，食之已狂。」",
        description: "領胡是泰冒山中的奇妙靈獸。牠長得像一頭健壯的青牛，但長有一條鮮紅色的尾巴，且脖子上有類似駝峰的肉瘤。古籍傳說食用了領胡的肉，可以徹底根治瘋癲狂躁等精神病症。",
        image: "assets/webp/linghu.webp",
        stats: {
            spiritual: 79,
            aggression: 30,
            rarity: 82
        },
{
        id: "tulou",
        nameCn: "土螻",
        zhuyin: "ㄊㄨˇ ㄌㄡˊ",
        nameEn: "Tu Lou / Four-Horned Ram",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (崑崙山)",
        classicText: "「崑崙之丘...有獸焉，其狀如羊而四角，名曰土螻，是食人。」",
        description: "土螻是崑崙之丘上的四角惡獸。雖然外形長得像溫順的山羊，但頭頂上長著四隻粗壯銳利的尖角。土螻生性極其殘忍兇惡，會將迷路的旅人刺穿並以人類為食。",
        image: "assets/webp/tulou.webp",
        stats: {
            spiritual: 76,
            aggression: 90,
            rarity: 90
        },
{
        id: "qinyuan",
        nameCn: "欽原",
        zhuyin: "ㄑㄧㄣ ㄩㄢˊ",
        nameEn: "Qin Yuan / Poison Bee-Bird",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (崑崙山)",
        classicText: "「崑崙之丘...有鳥焉，其狀如蜂，大如鴛鴦，名曰欽原，蟞獸獸死，蟞樹樹枯。」",
        description: "欽原是崑崙山上極度危險的神鳥。牠的外形長得像一隻大蜜蜂，體型卻有鴛鴦般大小。欽原的尾針含有劇毒，牠螫刺野獸野獸便會當場斃命，螫刺樹木樹木便會立刻枯萎乾死。",
        image: "assets/webp/qinyuan.webp",
        stats: {
            spiritual: 85,
            aggression: 95,
            rarity: 93
        },
{
        id: "ti-yu",
        nameCn: "䱱魚",
        zhuyin: "ㄊㄧˊ ㄩˊ",
        nameEn: "Ti Fish / Madness Curer",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (樂水分支)",
        classicText: "「樂水出焉...其中多䱱魚，其狀如鮒而彘毛，其音如沐，食之已狂。」",
        description: "䱱魚生活在樂水之中。牠的外形象一隻普通的鯽魚（鮒），但身上非常怪異地長滿了像小豬一樣的剛硬鬃毛。牠的叫聲聽起來如同嬰兒沐浴。食其肉可以治愈嚴重的精神分裂與瘋狂症。",
        image: "assets/webp/ti-yu.webp",
        stats: {
            spiritual: 78,
            aggression: 10,
            rarity: 83
        },
{
        id: "sanshou-nation",
        nameCn: "三首國神",
        zhuyin: "ㄙㄢ ㄕㄡˇ ㄕㄣˊ",
        nameEn: "Three-Headed Deity",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "海外東經 (三首國)",
        classicText: "「三首國在其東，其為人一身三首。」",
        description: "三首國神是海外東經記載的奇特神靈，在一身之上長著三個完全獨立的腦袋。三個腦袋能同時朝著不同的方向看守和交談，具有極強的感知能力，掌管東方海外的仙島結界。",
        image: "assets/webp/sanshou-nation.webp",
        stats: {
            spiritual: 90,
            aggression: 50,
            rarity: 93
        },
{
        id: "yuchan",
        nameCn: "玉蟾",
        zhuyin: "ㄩˋ ㄔㄢˊ",
        nameEn: "Jade Toad / Moon Spirit",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (月宮深淵)",
        classicText: "「有神獸曰玉蟾，通體如翠玉，守月宮，能吞吐月華，佩之長生。」",
        description: "玉蟾是中國古代創世神話與山海經旁支中守護月宮的翠玉神蟾。牠通體呈半透明的碧綠色，能吞吐月亮精華，代表著長生不老、财源滾滾與家庭和睦，具有無上的月系法力。",
        image: "assets/webp/yuchan.webp",
        stats: {
            spiritual: 93,
            aggression: 5,
            rarity: 95
        },
{
        id: "qinglong",
        nameCn: "青龍",
        zhuyin: "ㄑㄧㄥ ㄌㄨㄥˊ",
        nameEn: "Azure Dragon / Qing Long",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (東方天宮)",
        classicText: "「東方青龍，五行屬木，司春，掌生機與雷霆。」",
        description: "青龍是四象之首，東方的守護神天之尊神。祂身軀修長呈青藍色，五行屬木，象徵著春天、東方、生機勃勃與雷霆萬鈞的力量，擁有掌控天地風雲與行雲布雨的無上神威。",
        image: "assets/webp/qinglong.webp",
        stats: {
            spiritual: 99,
            aggression: 90,
            rarity: 99
        },
{
        id: "baihu",
        nameCn: "白虎",
        zhuyin: "ㄅㄞˊ ㄏㄨˇ",
        nameEn: "White Tiger / Bai Hu",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (西方天宮)",
        classicText: "「西方白虎，五行屬金，司秋，掌兵戈與殺伐。」",
        description: "白虎是四象之一，西方的守護戰神。祂身上覆蓋著雪白的皮毛與黑色的王戰斑紋，五行屬金，象徵秋天、西方、兵戈與至高無上的殺伐之力，威猛霸道，震懾百邪。",
        image: "assets/webp/baihu.webp",
        stats: {
            spiritual: 99,
            aggression: 98,
            rarity: 99
        },
{
        id: "zhuque",
        nameCn: "朱雀",
        zhuyin: "ㄓㄨ ㄑㄩㄝˋ",
        nameEn: "Vermilion Bird / Zhu Que",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (南方天宮)",
        classicText: "「南方朱雀，五行屬火，司夏，掌南陸與烈焰。」",
        description: "朱雀是四象之一，南方的守護神。祂的外形長得像燃燒著烈焰的火鳳凰，五行屬火，象徵夏天、南方、光明與不死重生的南陸之火，展翅間能焚燒世間一切妖魔邪祟。",
        image: "assets/webp/zhuque.webp",
        stats: {
            spiritual: 99,
            aggression: 94,
            rarity: 99
        },
{
        id: "xuanwu",
        nameCn: "玄武",
        zhuyin: "ㄒㄩㄢˊ ㄨˇ",
        nameEn: "Black Tortoise / Xuan Wu",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (北方天宮)",
        classicText: "「北方玄武，五行屬水，司冬，蛇龜一體，掌冥府與長壽。」",
        description: "玄武是四象之一，北方的守護神。祂是由一隻神龜與一條神蛇緊緊纏繞組成的太極玄武神體，五行屬水，象徵冬天、北方、玄冥與長生不老，守護著北方的冥府長夜。",
        image: "assets/webp/xuanwu.webp",
        stats: {
            spiritual: 99,
            aggression: 85,
            rarity: 99
        },
{
        id: "wangliang",
        nameCn: "魍魎",
        zhuyin: "ㄨㄤˇ ㄌㄧㄤˇ",
        nameEn: "Wangliang Spirit",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (弱水深淵)",
        classicText: "「弱水之中...有木石之怪曰魍魎，赤黑色，狀如三歲小兒，善惑人。」",
        description: "魍魎是生活在山林大澤或弱水之中的木石精怪。牠們身體呈現紅黑色，體型如三歲幼兒般大小，擁有長長的頭髮與尖銳的爪子，最擅長在黑夜中幻化聲音迷惑路人迷路。",
        image: "assets/webp/wangliang.webp",
        stats: {
            spiritual: 75,
            aggression: 65,
            rarity: 86
        },
{
        id: "yuchan-spirit",
        nameCn: "玉兔",
        zhuyin: "ㄩˋ ㄊㄨˋ",
        nameEn: "Jade Rabbit",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (月宮仙境)",
        classicText: "「月中有玉兔，搗藥成仙，服之能長生不老。」",
        description: "玉兔是月宮中常年陪伴嫦娥的白色仙兔。牠雙耳靈活，全身雪白無暇，每天在桂花樹下用玉杵默默地搗製長生不老的仙藥。玉兔代表著純潔、勤勞、吉祥與健康長壽。",
        image: "assets/webp/yuchan-spirit.webp",
        stats: {
            spiritual: 88,
            aggression: 5,
            rarity: 90
        },
{
        id: "sanshu-bird",
        nameCn: "三足烏 (精魂)",
        zhuyin: "ㄙㄢ ㄗㄨˊ ㄨ",
        nameEn: "Sanzuwu Spirit",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "大荒東經 (扶桑樹)",
        classicText: "「一日方至，一日方出，皆載於烏。」",
        description: "三足金烏是帝俊與羲和的兒子，代表著太陽的真火精魂。祂們擁有三隻利爪，展開金黃色的火羽時能釋放融化冰川的熱量，是主管東方大荒光明循環的九天神鳥。",
        image: "assets/webp/sanshu-bird.webp",
        stats: {
            spiritual: 97,
            aggression: 85,
            rarity: 97
        },
{
        id: "qilin-lin",
        nameCn: "麒",
        zhuyin: "ㄑㄧˊ",
        nameEn: "Qi (Male Qilin)",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (中央平原)",
        classicText: "「麒麟，雄曰麒，雌曰麟，麒代表陽剛與王道。」",
        description: "麒是雄性的麒麟，象徵著天地的至剛陽氣與王道政治的興盛。祂龍首麋身，身披五彩金鱗，頭頂長著粗壯的獨角，出沒時代表天降大福與賢君當政，是世間至高仁獸。",
        image: "assets/webp/qilin-lin.webp",
        stats: {
            spiritual: 93,
            aggression: 10,
            rarity: 94
        },
{
        id: "qilin-lin-female",
        nameCn: "麟",
        zhuyin: "ㄌㄧㄣˊ",
        nameEn: "Lin (Female Qilin)",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (中央平原)",
        classicText: "「麒麟，雄曰麒，雌曰麟，麟代表陰柔與慈悲。」",
        description: "麟是雌性的麒麟，象徵著天地的至柔陰氣與萬物的慈悲生機。祂不履生草，不傷蟲豸，其獨角上有肉以示不用武力，現身則預示家庭和睦、百子千孫與福澤延綿。",
        image: "assets/webp/qilin-lin-female.webp",
        stats: {
            spiritual: 93,
            aggression: 5,
            rarity: 94
        },
{
        id: "jiu-bird",
        nameCn: "𩳁",
        zhuyin: "ㄐㄧㄡˇ",
        nameEn: "Jiu Bird / Eye Curer",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (胡兵山)",
        classicText: "「胡兵之山...有鳥焉，其狀如爵而赤黑，名曰𩳁，食之已癭。」",
        description: "𩳁是東山經胡兵山中的紅色小鳥。牠體型嬌小形如山雀（爵），但羽毛呈现極具光澤的紅黑色。古籍中記載，食用了𩳁鳥的肉，可以有效消除脖子上的大癭瘤與甲狀腺腫塊。",
        image: "assets/webp/jiu-bird.webp",
        stats: {
            spiritual: 75,
            aggression: 10,
            rarity: 81
        },
{
        id: "chiyan-beast",
        nameCn: "赤眼",
        zhuyin: "ㄔˋ ㄧㄢˇ",
        nameEn: "Chiyan / Red-Eyed Beast",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (北極冰原)",
        classicText: "「北極之淵有獸焉，狀如熊而赤目，名曰赤眼，是食人。」",
        description: "赤眼是北方極寒冰原上的巨大凶獸。牠的外形長得像一隻巨大的北極黑熊，但雙眼赤紅如血，性情極其暴躁與冷酷，一旦在風雪中遭遇人類，就會發起瘋狂的攻擊捕食。",
        image: "assets/webp/chiyan-beast.webp",
        stats: {
            spiritual: 72,
            aggression: 94,
            rarity: 86
        },
{
        id: "shenshen-beast",
        nameCn: "甡甡",
        zhuyin: "ㄕㄣ ㄕㄣ",
        nameEn: "Shenshen / Herd Beast",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (鹿安山)",
        classicText: "「鹿安之山...有獸焉，其狀如牛而白尾，其名曰甡甡，見則其國大豐。」",
        description: "甡甡是鹿安山上群居的一種靈獸。牠長著像野牛一樣強壯的身體，但尾巴是雪白色的。甡甡集體出沒時，預示著當年的風調雨順、牧草茂盛以及國家畜牧業的大繁榮大豐收。",
        image: "assets/webp/shenshen-beast.webp",
        stats: {
            spiritual: 80,
            aggression: 35,
            rarity: 81
        },
{
        id: "xun-beast",
        nameCn: "𤲞",
        zhuyin: "ㄒㄩㄣˊ",
        nameEn: "Xun / Leopard-Dog",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (姑逢山)",
        classicText: "「姑逢之山...有獸焉，其狀如狐而有翼，其名曰𤲞，見則天下大穰。」",
        description: "𤲞是一隻長得像狐狸、但身體兩側長有薄薄翅膀的神奇飛獸。牠能藉助山風在山谷間滑翔。牠在中國神話中代表豐收吉兆，現身天下便會有五穀豐收與倉廩實大穰。",
        image: "assets/webp/xun-beast.webp",
        stats: {
            spiritual: 85,
            aggression: 15,
            rarity: 87
        },
{
        id: "youren-beast",
        nameCn: "幽鴳",
        zhuyin: "ㄧㄡ ㄧㄢˋ",
        nameEn: "Youan / Laughing Monkey",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (邊春山)",
        classicText: "「邊春之山...有獸焉，其狀如禺而文身，善笑，見人則眠，名曰幽鴳。」",
        description: "幽鴳是邊春山上的一種滑稽靈獸。牠的身體像獼猴，但全身長滿了斑斕的彩色斑紋。牠天生愛笑，聲音清脆，看見有人走近時，牠會故意躺在地上裝睡（見人則眠），令人發笑。",
        image: "assets/webp/youren-beast.webp",
        stats: {
            spiritual: 78,
            aggression: 10,
            rarity: 82
        },
{
        id: "tianzhi-bird",
        nameCn: "天之",
        zhuyin: "ㄊㄧㄢ ㄓ",
        nameEn: "Tianzhi Bird / Rain Sign",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (倚歌山)",
        classicText: "「倚歌之山...有鳥焉，其狀如雀而赤首，名曰天之，見則其邑有雨。」",
        description: "天之是倚歌山上的求雨小神鳥。牠長得像普通的麻雀，但頭頂的羽毛呈鮮紅色。牠對大氣中的水氣變化極度敏感，只要天之在城鎮中歌唱，該地區當天便會降下甘霖雨水。",
        image: "assets/webp/tianzhi-bird.webp",
        stats: {
            spiritual: 76,
            aggression: 8,
            rarity: 80
        },
{
        id: "shanjun-beast",
        nameCn: "山君",
        zhuyin: "ㄕㄢ ㄐㄩㄣ",
        nameEn: "Mountain King / Tiger Spirit",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (大荒群山)",
        classicText: "「山之神獸曰山君，狀如大虎，額有王文，統率百獸，司山林清明。」",
        description: "山君是尊貴的「山林之王」，也就是猛虎的精氣神格化。祂身形龐大威嚴，額頭有著清晰的「王」字紋，掌控著大山深林的生態清明與百獸秩序，能退治一切山精魍魎。",
        image: "assets/webp/shanjun-beast.webp",
        stats: {
            spiritual: 91,
            aggression: 90,
            rarity: 90
        },
{
        id: "mangcao-beast",
        nameCn: "𢕟𢖵",
        zhuyin: "ㄇㄤˊ ㄘㄠˇ",
        nameEn: "Mangcao / Curing Deer",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (熊耳山)",
        classicText: "「熊耳之山...有獸焉，其狀如鹿而有翼，名曰𢕟𢖵，食之不忘。」",
        description: "𢕟𢖵（芒草獸）是熊耳山上的神奇飛鹿。牠長著梅花鹿的身體、背上長有一對鳥類的翅膀，能在森林上空滑翔。據說食用牠的肉，可以大大增強記憶力，治療嚴重的健忘症。",
        image: "assets/webp/mangcao-beast.webp",
        stats: {
            spiritual: 83,
            aggression: 10,
            rarity: 88
        },
{
        id: "yingchu-beast",
        nameCn: "嬰處",
        zhuyin: "ㄧㄥ ㄔㄨˋ",
        nameEn: "Yingchu / Sleep Spirit",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (豐山)",
        classicText: "「豐山...有獸焉，其狀如禺而赤首，名曰嬰處，食之已眠。」",
        description: "嬰處是豐山中的奇妙靈獸。牠長得像一隻獼猴，但頭部的毛髮是紅色的。嬰處天生嗜睡，體內精氣有催眠與安神的效果，食其肉能根治長年嚴重的失眠症與精神焦慮。",
        image: "assets/webp/yingchu-beast.webp",
        stats: {
            spiritual: 80,
            aggression: 5,
            rarity: 84
        },
{
        id: "huodou-beast",
        nameCn: "禍斗",
        zhuyin: "ㄏㄨㄛˋ ㄉㄡˇ",
        nameEn: "Huodou / Fire-Eating Dog",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "海外南經 (厭火國)",
        classicText: "「厭火國...有獸焉，狀如犬而食火，名曰禍斗，噴火為災。」",
        description: "禍斗是厭火國中的不祥之犬。牠全身覆蓋著黑色的毛髮，以燃燒的火焰為食，並且排泄出滾燙的火石。牠是火災的象徵，牠在城市中走過，該地便會莫名爆發大火災。",
        image: "assets/webp/huodou-beast.webp",
        stats: {
            spiritual: 78,
            aggression: 85,
            rarity: 89
        },
{
        id: "yuzhi-fish",
        nameCn: "䲢魚 (天魚)",
        zhuyin: "ㄊㄥˊ ㄩˊ",
        nameEn: "Teng Fish / Rain Bringer",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (大荒大澤)",
        classicText: "「大荒之中有魚焉，名曰䲢魚，能飛越九天，見則天下大雨。」",
        description: "䲢魚是傳說中的飛天神魚。牠平時隱匿在深淵大澤中，一旦跳出水面並展開魚鰭飛越九天時，天空中便會降下覆蓋千里的瓢潑大雨，因此被遠古部落供奉為祈雨天魚。",
        image: "assets/webp/yuzhi-fish.webp",
        stats: {
            spiritual: 90,
            aggression: 40,
            rarity: 92
        },
{
        id: "chongqu-beast",
        nameCn: "重渠",
        zhuyin: "ㄓㄨㄥˋ ㄑㄩˊ",
        nameEn: "Chongqu / Healing Ox",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (歌山)",
        classicText: "「歌山...有獸焉，其狀如牛而白首，名曰重渠，食之不盲。」",
        description: "重渠是歌山中長相十分慈祥的靈牛。牠擁有強壯的公牛身體，但頭頂和臉部覆蓋著雪白色的短毛。古籍記載，食用了重渠的牛肉，可以明目，並治愈長年的眼疾與白內障。",
        image: "assets/webp/chongqu-beast.webp",
        stats: {
            spiritual: 81,
            aggression: 25,
            rarity: 83
        },
{
        id: "ran-min-giant",
        nameCn: "大人神",
        zhuyin: "ㄉㄚˋ ㄖㄣˊ ㄕㄣˊ",
        nameEn: "Giant Deity / Da Ren",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "大荒東經 (大人之國)",
        classicText: "「大荒之中，有山名曰波谷山，大人之國在其上...有大人之市。」",
        description: "大人神是居住在大荒波谷山上的巨人神族守護神。祂們體型如同小山般巍峨，一步跨越千丈，心地善良守序，保護著海外巨人國的商市集會與東海的潮汐平衡。",
        image: "assets/webp/ran-min-giant.webp",
        stats: {
            spiritual: 91,
            aggression: 60,
            rarity: 93
        },
{
        id: "tiandi-god",
        nameCn: "天帝英靈",
        zhuyin: "ㄊㄧㄢ ㄉㄧˋ",
        nameEn: "Heavenly Emperor",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (崑崙天宮)",
        classicText: "「天帝之靈，守崑崙天頂，散五色祥光。」",
        description: "天帝英靈是統治崑崙天宮的天帝留在人間的意志顯化。祂常以白衣金甲的巨大威嚴靈體現身於崑崙天頂，散發著萬道五彩祥光，守護天庭的至高威嚴與人間的秩序運轉。",
        image: "assets/webp/tiandi-god.webp",
        stats: {
            spiritual: 99,
            aggression: 95,
            rarity: 99
        },
{
        id: "chiyou-spirit",
        nameCn: "蚩尤戰魂",
        zhuyin: "ㄔ ㄧㄡˊ",
        nameEn: "Chiyou Battle Soul",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "大荒東經 (大荒戰場)",
        classicText: "「蚩尤作兵伐黃帝...應龍殺之於凶犁之谷，其血化為楓林。」",
        description: "蚩尤是遠古九黎部落的首領，也是著名的華夏戰神。在涿鹿之戰中戰敗被殺後，祂那一股永不屈服的戰鬥意志凝聚成了蚩尤戰魂，身披青銅重甲，牛角銅頭，手持多種兵刃。",
        image: "assets/webp/chiyou-spirit.webp",
        stats: {
            spiritual: 96,
            aggression: 99,
            rarity: 98
        },
{
        id: "zhaoyang-god",
        nameCn: "朝陽水伯",
        zhuyin: "ㄓㄠ ㄧㄤˊ",
        nameEn: "Zhaoyang Water God",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "海外東經 (朝陽之谷)",
        classicText: "「朝陽之谷，神曰天吳，是為水伯...皆青黃。」",
        description: "朝陽水伯是居住在朝陽谷中的上古水神。祂的外形象徵著江河溪流的狂野力量，能隨心所欲地掀起洶湧波濤，調動千川萬流來滋潤大地，在東方海外享有崇高祭祀。",
        image: "assets/webp/zhaoyang-god.webp",
        stats: {
            spiritual: 93,
            aggression: 80,
            rarity: 94
        },
{
        id: "sanshu-crow",
        nameCn: "三足烏 (神雛)",
        zhuyin: "ㄙㄢ ㄗㄨˊ ㄨ",
        nameEn: "Sanzuwu Chick",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "大荒東經 (扶桑樹梢)",
        classicText: "「湯谷上有扶桑，十日所浴...皆載於烏。」",
        description: "三足烏神雛是扶桑樹梢上誕生不久的幼年太陽神鳥。雖然體型較小且尚未能馱運巨大的太陽，但牠們羽毛已經開始散發溫暖的金色光芒，象徵著新生的希望與朝氣。",
        image: "assets/webp/sanshu-crow.webp",
        stats: {
            spiritual: 90,
            aggression: 15,
            rarity: 92
        },
{
        id: "jiliang-white",
        nameCn: "縞馬 (吉量)",
        zhuyin: "ㄍㄠˇ ㄇㄚˇ",
        nameEn: "Ji Liang Colt",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "海內西經 (犬封大草原)",
        classicText: "「縞身朱鬣，乘之千歲。」",
        description: "縞馬是吉量在犬封大草原上產下的幼年神馬。牠們全身覆蓋著如白絹般柔順的短毛，一頭火紅的鬃毛已見雛形，雙眼清澈透亮，奔跑速度極快，被視為祥瑞的象徵。",
        image: "assets/webp/jiliang-white.webp",
        stats: {
            spiritual: 88,
            aggression: 5,
            rarity: 92
        },
{
        id: "luoyu-spirit",
        nameCn: "蠃魚精魂",
        zhuyin: "ㄌㄨㄛˇ ㄩˊ",
        nameEn: "Luoyu Spirit / Flood Caller",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (蒙水深潭)",
        classicText: "「蒙水多蠃魚，見則大水。」",
        description: "蠃魚精魂是蒙水深潭底部的古老水精。祂們匯聚了千萬年蒙水中的陰濕之氣，化作帶有大雙翼的幽藍色魚影，在暴風雨前夕會浮出水面歌唱，召喚淹沒千里的巨大山洪。",
        image: "assets/webp/luoyu-spirit.webp",
        stats: {
            spiritual: 82,
            aggression: 60,
            rarity: 88
        },
{
        id: "shangao-cursing",
        nameCn: "火豕 (山膏)",
        zhuyin: "ㄏㄨㄛˇ ㄕˇ",
        nameEn: "Fire Boar / Shan Gao",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (苦山森林)",
        classicText: "「苦山有獸狀如豚，赤若丹火。」",
        description: "火豕是山膏中體型較大、全身燃燒著淡淡怒火的野豬戰士。牠們依然保留著喜歡辱罵對手的惡劣本性，且脾氣極為暴躁，一旦被激怒就會噴著火球發起野蠻衝撞。",
        image: "assets/webp/shangao-cursing.webp",
        stats: {
            spiritual: 70,
            aggression: 80,
            rarity: 84
        },
{
        id: "juji-hedgehog",
        nameCn: "針豕 (居暨)",
        zhuyin: "ㄓㄣ ㄕˇ",
        nameEn: "Spiked Hedgehog / Juji",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (柴桑山谷)",
        classicText: "「柴桑之山...其狀如豚而有刺。」",
        description: "針豕是居暨中的刺衛首領，常在柴桑山谷的陰暗潮濕處出沒。牠們背上的剛刺具有毒素，在面臨威脅時會將刺射出。牠們攜帶著不祥的病氣，出沒便代表著瘟疫流行的警訊。",
        image: "assets/webp/juji-hedgehog.webp",
        stats: {
            spiritual: 74,
            aggression: 70,
            rarity: 86
        },
{
        id: "changyou-water",
        nameCn: "四耳禺 (長右)",
        zhuyin: "ㄙˋ ㄦˇ ㄩˊ",
        nameEn: "Four-Eared Monkey",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (長右山瀑布)",
        classicText: "「長右狀如禺而四耳，見則大水。」",
        description: "四耳禺是棲息在長右山大瀑布周邊的一種古老巨猿。牠們靠著四隻靈敏的耳朵能聽見極遠處的水位上漲與潮汐爆發的聲音，其哀鳴聲意味著淹沒郡縣的巨大水災即將到來。",
        image: "assets/webp/changyou-water.webp",
        stats: {
            spiritual: 79,
            aggression: 50,
            rarity: 85
        },
{
        id: "huahuai-shaggy",
        nameCn: "硬鬣禺 (猾褢)",
        zhuyin: "ㄧㄥˋ ㄌㄧㄝˋ ㄩˊ",
        nameEn: "Shaggy Ape-Man",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (堯光山岩洞)",
        classicText: "「猾褢狀如人而彘鬣。」",
        description: "硬鬣禺是猾褢中體型粗壯、毛髮更為剛硬的洞穴猿人。牠們在嚴冬會陷入深度的冬眠，其沉悶的鼾聲如巨木撞擊，牠們的甦醒和出沒代表著徭役繁重與動盪的凶兆。",
        image: "assets/webp/huahuai-shaggy.webp",
        stats: {
            spiritual: 71,
            aggression: 70,
            rarity: 83
        },
{
        id: "zhi-tiger",
        nameCn: "牛尾虎 (彘)",
        zhuyin: "ㄋㄧㄡˊ ㄨㄟˇ ㄏㄨˇ",
        nameEn: "Ox-Tailed Tiger / Zhi",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (浮玉山密林)",
        classicText: "「彘其狀如虎而牛尾，是食人。」",
        description: "牛尾虎是浮玉山密林深處的彘中之王。牠的體型比普通彘更為龐大，一條強壯的牛尾巴能如鐵鞭般擊碎巨石。牠極度狡猾，會在林間模仿犬吠來誘殺捕食人類與野獸。",
        image: "assets/webp/zhi-tiger.webp",
        stats: {
            spiritual: 74,
            aggression: 96,
            rarity: 87
        },
{
        id: "qianyang-white",
        nameCn: "縞羊 (羬羊)",
        zhuyin: "ㄍㄠˇ ㄧㄤˊ",
        nameEn: "Qian Colt / White Ram",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (錢來山麓)",
        classicText: "「羬羊狀如羊而馬尾。」",
        description: "縞羊是羬羊中的珍稀純白頭體。牠們擁有極具光澤的純白羊毛與馬尾，漫步於錢來山麓。牠們性格極其溫馴，所分泌的滋潤油脂是古代治療凍傷的無上聖藥。",
        image: "assets/webp/qianyang-white.webp",
        stats: {
            spiritual: 80,
            aggression: 8,
            rarity: 80
        },
{
        id: "shuyu-anxiety",
        nameCn: "赤羽魚 (儵魚)",
        zhuyin: "ㄔˋ ㄩˇ ㄩˊ",
        nameEn: "Red-Feathered Shu Fish",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (彭水清流)",
        classicText: "「儵魚狀如雞而赤毛，食之已憂。」",
        description: "赤羽魚是儵魚中靈力最強的一支，在彭水清澈的水底閃爍著如火焰般明亮的紅光。牠的多個頭能同時警戒。人食其肉便能驅散靈魂深處的陰霾，徹底忘卻憂愁與焦慮。",
        image: "assets/webp/shuyu-anxiety.webp",
        stats: {
            spiritual: 85,
            aggression: 10,
            rarity: 89
        },
{
        id: "luyu-ox",
        nameCn: "翼牛魚 (鯥)",
        zhuyin: "ㄧˋ ㄋㄧㄡˊ ㄩˊ",
        nameEn: "Winged Ox-Fish / Lu",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (柢山沙洲)",
        classicText: "「鯥狀如牛，蛇尾有翼。」",
        description: "翼牛魚是活動在柢山大沙洲的巨型鯥魚。牠們擁有如青牛般長滿厚皮的身體，蛇尾能掃清障礙。每逢乾旱牠們會展翅飛往大澤，食用牠們能讓人免於各類癰腫惡疾。",
        image: "assets/webp/luyu-ox.webp",
        stats: {
            spiritual: 82,
            aggression: 25,
            rarity: 87
        },
{
        id: "yuma-gold",
        nameCn: "金睛馬 (𩣡馬)",
        zhuyin: "ㄐㄧㄣ ㄐㄧㄥ ㄇㄚˇ",
        nameEn: "Golden-Eyed Colt / Yuma",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (敦頭山谷)",
        classicText: "「𩣡馬其狀如馬而一角，可以禦兵。」",
        description: "金睛馬是敦頭山谷深處的𩣡馬首領。牠額頭上的獨角有著古老符文，雙眼如火般耀眼，能看穿一切伏擊。騎乘者能獲得辟邪神盾，在戰場上刀槍不入免受兵災。",
        image: "assets/webp/yuma-gold.webp",
        stats: {
            spiritual: 87,
            aggression: 40,
            rarity: 90
        },
{
        id: "tianquan-cat",
        nameCn: "白首貍 (天犬)",
        zhuyin: "ㄅㄞˊ ㄕㄡˇ ㄌㄧˊ",
        nameEn: "White-Headed Wildcat",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (天帝神山)",
        classicText: "「天犬其狀如貍而白首，可以禦凶。」",
        description: "白首貍是天犬在天帝神山中的別稱。牠們動作快如閃電，能在林木頂端飛躍。天生具有極強的辟邪法力，是家宅神獸，能守護家門免受一切山魅凶獸侵擾。",
        image: "assets/webp/tianquan-cat.webp",
        stats: {
            spiritual: 85,
            aggression: 45,
            rarity: 90
        },
{
        id: "lin-barren",
        nameCn: "虎紋犬 (獜)",
        zhuyin: "ㄏㄨˇ ㄨㄣˊ ㄑㄩㄢˇ",
        nameEn: "Tiger-Striped Hound / Lin",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (單張荒山)",
        classicText: "「獜狀如犬而虎文，見則野無麥。」",
        description: "虎紋犬是單張荒山中成群活動的獜犬。牠們額頭有著灰色的短角，雙眼閃爍著飢餓的光芒。牠們是極度危險的荒原野犬，現身則會帶來蝗災旱災，使原野顆粒無收。",
        image: "assets/webp/lin-barren.webp",
        stats: {
            spiritual: 72,
            aggression: 70,
            rarity: 85
        },
{
        id: "huan-ram",
        nameCn: "無口羊 (䍺)",
        zhuyin: "ㄨˊ ㄎㄡˇ ㄧㄤˊ",
        nameEn: "Mouthless Ram / Huan",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (單胡石壁)",
        classicText: "「䍺其狀如羊而無口，不可殺。」",
        description: "無口羊是䍺在單胡山絕壁上的稱呼。牠們不需任何飲食，完全依靠天地靈氣為生。具有不可思議的不壞肉體，代表著生命力的極致瑞兆，見者能獲得健康與福報。",
        image: "assets/webp/huan-ram.webp",
        stats: {
            spiritual: 88,
            aggression: 5,
            rarity: 92
        },
{
        id: "youyou-deer",
        nameCn: "馬尾鹿 (峳峳)",
        zhuyin: "ㄇㄚˇ ㄨㄟˇ ㄌㄨˋ",
        nameEn: "Horse-Tailed Deer / Youyou",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (䃌山草甸)",
        classicText: "「峳峳狀如鹿而馬尾，見則國多賢賓。」",
        description: "馬尾鹿是活動在䃌山大草甸的峳峳靈鹿。牠們有一條美麗的黑色長馬尾，奔跑時馬尾如黑絲般飛舞。牠們性情極其優雅，現世即預示著外交興盛，有諸多賢達貴賓來訪。",
        image: "assets/webp/youyou-deer.webp",
        stats: {
            spiritual: 86,
            aggression: 8,
            rarity: 88
        },
{
        id: "qiuyu-locust",
        nameCn: "兔首鳥喙 (犰狳)",
        zhuyin: "ㄊㄨˋ ㄕㄡˇ ㄋㄧㄠˇ ㄏㄨㄟˋ",
        nameEn: "Rabbit-Bodied Armadillo / Qiuyu",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (餘峨山麓)",
        classicText: "「犰狳狀如兔而鳥喙，見則螽蝗為敗。」",
        description: "兔首鳥喙是古書對犰狳的別名，其形狀如兔子卻有大鳥喙。只要受到驚嚇，牠們就會在地上縮成一團裝死。然而牠們是嚴重的災禍凶獸，會召喚毀滅性的蝗災破壞農田。",
        image: "assets/webp/qiuyu-locust.webp",
        stats: {
            spiritual: 71,
            aggression: 25,
            rarity: 86
        },
{
        id: "zhuyan-war",
        nameCn: "白首赤足 (朱厭)",
        zhuyin: "ㄅㄞˊ ㄕㄡˇ ㄔˋ ㄗㄨˊ",
        nameEn: "Red-Footed Ape / Zhuyan",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (小次山峽谷)",
        classicText: "「朱厭其狀如猿，白首赤足，見則大兵。」",
        description: "白首赤足是小次山大峽谷中朱厭古猿的威嚴姿態。牠雙臂力大無窮，能生撕虎豹。作為最古老的戰亂魔獸，牠在山巔發出雷鳴般的咆哮時，人間便會隨之爆發大戰亂。",
        image: "assets/webp/zhuyan-war.webp",
        stats: {
            spiritual: 82,
            aggression: 97,
            rarity: 94
        },
{
        id: "danghu-whisker",
        nameCn: "髯飛鳥 (當扈)",
        zhuyin: "ㄖㄢˊ ㄈㄟ ㄋㄧㄠˇ",
        nameEn: "Whisker-Flying Pheasant",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (申首山巔)",
        classicText: "「當扈其狀如雉，以其髯飛。」",
        description: "髯飛鳥是申首山巔的當扈鳥。牠們展開兩側長長的金色髯毛在強風中飛翔，速度優雅。食其肉能讓人目力非凡，消除一切眼花、重影等病症，保佑眼睛健康明亮。",
        image: "assets/webp/danghu-whisker.webp",
        stats: {
            spiritual: 81,
            aggression: 12,
            rarity: 85
        },
{
        id: "ershu-flying",
        nameCn: "飛耳鼠 (耳鼠)",
        zhuyin: "ㄈㄟ ㄦˇ ㄕㄨˇ",
        nameEn: "Flying Ear-Rat / Ershu",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (丹熏山脈)",
        classicText: "「耳鼠狀如鼠，兔首麋身，以其尾飛。」",
        description: "飛耳鼠是丹熏山脈的耳鼠領袖。牠們抖動長尾在大雪中滑翔，能感應百草毒性。捕獲並佩戴其毛皮能讓人百毒不侵，在嚴寒中保持身心溫暖與辟邪防病。",
        image: "assets/webp/ershu-flying.webp",
        stats: {
            spiritual: 85,
            aggression: 10,
            rarity: 89
        },
{
        id: "mizhi",
        nameCn: "朏朏",
        zhuyin: "ㄈㄟˇ ㄈㄟˇ",
        nameEn: "Feifei",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (霍山)",
        classicText: "「霍山...有獸焉，其狀如貍，而白尾，有鬣，名曰朏朏，養之可以已憂。」",
        description: "朏朏是霍山的一種靈獸，形狀像貓（貍），但長著白色的尾巴和鬃毛。飼養牠可以消除人的憂愁和焦慮，是著名的療癒系神獸。",
        image: "assets/webp/mizhi.webp",
        stats: {
            spiritual: 95,
            aggression: 75,
            rarity: 94
        },
{
        id: "zouyu",
        nameCn: "騶虞",
        zhuyin: "ㄗㄡ ㄩˊ",
        nameEn: "Zouyu / Righteous Beast",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "海內北經 (林氏國)",
        classicText: "「林氏國，有珍獸，大若虎，五彩畢具，尾長於身，名曰騶虞，乘之日行五千里。」",
        description: "騶虞是極其珍貴的仁獸，身軀如老虎般巨大，身上長滿五彩斑斕的斑紋，尾巴比身體還長。牠生性仁慈，不吃活的生物，騎乘牠一日可行五千里。",
        image: "assets/webp/zouyu.webp",
        stats: {
            spiritual: 67,
            aggression: 30,
            rarity: 93
        },
{
        id: "baize-spirit",
        nameCn: "白澤",
        zhuyin: "ㄅㄞˊ ㄗㄜˊ",
        nameEn: "Baize / Wise Beast",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "東望山 (崑崙)",
        classicText: "「黃帝巡狩至東海，得神獸白澤，能言，達於萬物之情。」",
        description: "白澤是中國古代著名的祥瑞神獸，智商極高，通曉天下萬物之情與妖怪的名字與形貌。曾協助黃帝編寫《白澤精怪圖》以辟除邪祟。",
        image: "assets/webp/baize-spirit.webp",
        stats: {
            spiritual: 74,
            aggression: 82,
            rarity: 86
        },
{
        id: "qinggeng",
        nameCn: "青耕",
        zhuyin: "ㄑㄧㄥ ㄍㄥ",
        nameEn: "Qinggeng Bird",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (堇理山)",
        classicText: "「堇理之山...有鳥焉，其狀如鵲，青身白喙，赤足黃文，名曰青耕，可以禦疫。」",
        description: "青耕是堇理山的一種神鳥，外形像喜鵲，身軀呈青藍色，嘴喙是白色的，紅色的雙腳，身上有黃色花紋。飼養牠可以防範和抵禦瘟疫。",
        image: "assets/webp/qinggeng.webp",
        stats: {
            spiritual: 81,
            aggression: 67,
            rarity: 82
        },
{
        id: "shengyu",
        nameCn: "勝遇",
        zhuyin: "ㄕㄥˋ ㄩˋ",
        nameEn: "Shengyu Bird",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (玉山)",
        classicText: "「玉山...有鳥焉，其狀如翟而赤，名曰勝遇，是食魚，其音如鹿，見則其國大水。」",
        description: "勝遇是生活在玉山的一種水鳥。牠的外形像野雞（翟），但羽毛呈現鮮紅色，主要以魚類為食。牠是象徵大洪水的凶鳥，現世便代表水災。",
        image: "assets/webp/shengyu.webp",
        stats: {
            spiritual: 88,
            aggression: 11,
            rarity: 87
        },
{
        id: "tiangeng-divine",
        nameCn: "天鯁",
        zhuyin: "ㄊㄧㄢ ㄍㄥˇ",
        nameEn: "Tian Geng",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (天鯁山)",
        classicText: "「天鯁之山...有神焉，其狀如人而豹尾，名曰天鯁。」",
        description: "天鯁是天鯁山的山神，長著人類的身體和一條豹子的尾巴，司掌北方極寒之地的氣候與風雪。",
        image: "assets/webp/tiangeng-divine.webp",
        stats: {
            spiritual: 95,
            aggression: 41,
            rarity: 74
        },
{
        id: "xianfu-ape",
        nameCn: "䴤",
        zhuyin: "ㄒㄧㄢˊ",
        nameEn: "Xianfu Ape",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (獮山)",
        classicText: "「獮山...有獸焉，其狀如禺而赤首，名曰䴤。」",
        description: "䴤是獮山的一種靈獸，形體像獼猴（禺），但頭部毛髮呈鮮紅色。牠性情溫和，能在林木間輕盈飛躍。",
        image: "assets/webp/xianfu-ape.webp",
        stats: {
            spiritual: 87,
            aggression: 21,
            rarity: 97
        },
{
        id: "hechi",
        nameCn: "獬豸",
        zhuyin: "ㄒㄧㄝˋ ㄓˋ",
        nameEn: "Xiezhi / Judgement Beast",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "大荒東經 (天庭)",
        classicText: "「獬豸，一角之獸也，性知有罪，見人鬥則觸不直，聞人論則噬不正。」",
        description: "獬豸是中國古代神話中的司法正義神獸。牠額頭上長著獨角，擁有極高的靈性，能辨識善惡忠奸。在判案時，牠會用獨角去頂撞無理理屈的一方。",
        image: "assets/webp/hechi.webp",
        stats: {
            spiritual: 74,
            aggression: 53,
            rarity: 75
        },
{
        id: "suanni-lion",
        nameCn: "狻猊",
        zhuyin: "ㄙㄨㄢ ㄋㄧˊ",
        nameEn: "Suanni Lion",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "海外南經 (極南之地)",
        classicText: "「狻猊，形如獅，食虎豹，出則百獸伏。」",
        description: "狻猊外形象獅子，能捕食虎豹，威嚴無比。在神話中祂喜煙好坐，常出現在香爐底座上，象徵平安與吉祥。",
        image: "assets/webp/suanni-lion.webp",
        stats: {
            spiritual: 81,
            aggression: 83,
            rarity: 89
        },
{
        id: "bixi-dragon",
        nameCn: "赑屭",
        zhuyin: "ㄅㄧˋ ㄒㄧˋ",
        nameEn: "Bixi / Stone Tortoise",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "大荒東經 (東海)",
        classicText: "「赑屭，龍之長子，形似龜，好負重。」",
        description: "赑屭是龍生九子之首，外形象一隻巨大的烏龜。祂擁有無窮的力量，極其喜歡背負沉重的石碑與山川，是長壽與穩固的象徵。",
        image: "assets/webp/bixi-dragon.webp",
        stats: {
            spiritual: 88,
            aggression: 85,
            rarity: 88
        },
{
        id: "yazi-sword",
        nameCn: "睚眥",
        zhuyin: "ㄧㄚˊ ㄗˋ",
        nameEn: "Yazi / Wrathful Dragon",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "海外西經 (戰場)",
        classicText: "「睚眥，龍之次子，豺身龍首，性格剛烈，好殺戮。」",
        description: "睚眥是龍的次子，豺狼的身體龍的腦袋。祂性格剛烈好鬥，生性喜好殺戮與報復，其形象常被雕刻在刀環與劍柄上，增加兵器威懾力。",
        image: "assets/webp/yazi-sword.webp",
        stats: {
            spiritual: 95,
            aggression: 84,
            rarity: 81
        },
{
        id: "pulao-bell",
        nameCn: "蒲牢",
        zhuyin: "ㄆㄨˊ ㄌㄠˊ",
        nameEn: "Pulao / Roaring Dragon",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東海大澤 (海濱)",
        classicText: "「蒲牢，龍之三子，形似小龍，好鳴吼，畏鯨。」",
        description: "蒲牢是龍的三子，體型較小，生性喜歡大聲吼叫。據說牠最害怕巨鯨，每次被鯨魚襲擊就會發出雷鳴般的大吼，因此其形象常被鑄造於大鐘上。",
        image: "assets/webp/pulao-bell.webp",
        stats: {
            spiritual: 67,
            aggression: 75,
            rarity: 74
        },
{
        id: "chiwen-fire",
        nameCn: "螭吻",
        zhuyin: "ㄔ ㄨㄣˇ",
        nameEn: "Chiwen / Water Dragon",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (海域)",
        classicText: "「螭吻，龍之九子，口潤嗓粗，好吞火，屬水。」",
        description: "螭吻是龍的幼子，形似無角的龍或大魚。祂五行屬水，喜好吞食火焰與噴灑雨水，常用作古代木造建築屋脊上的避火神獸。",
        image: "assets/webp/chiwen-fire.webp",
        stats: {
            spiritual: 74,
            aggression: 88,
            rarity: 70
        },
{
        id: "qiuniu-lute",
        nameCn: "囚牛",
        zhuyin: "ㄑㄧㄡˊ ㄋㄧㄡˊ",
        nameEn: "Qiuniu / Music Dragon",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (樂山)",
        classicText: "「囚牛，龍之長子，性溫好音樂。」",
        description: "囚牛是龍生九子之一，性情極其溫順，平生最喜好音樂與彈奏樂器。其形象常被雕刻在胡琴、琵琶等樂器的頭部。",
        image: "assets/webp/qiuniu-lute.webp",
        stats: {
            spiritual: 81,
            aggression: 35,
            rarity: 81
        },
{
        id: "yaxian-fish",
        nameCn: "鱵魚",
        zhuyin: "ㄓㄣ ㄩˊ",
        nameEn: "Zhen Fish",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (泿水)",
        classicText: "「泿水...多鱵魚，其狀如條，其名曰鱵魚。」",
        description: "鱵魚生活在東方泿水中，身體細長如針，在清澈的水底成群滑行游動，是一隻能帶來河川清澈的吉祥水魚。",
        image: "assets/webp/yaxian-fish.webp",
        stats: {
            spiritual: 88,
            aggression: 34,
            rarity: 71
        },
{
        id: "gen-chiniu-1",
        nameCn: "赤牛(吉)",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如牛而赤身，其名曰赤牛，見則天下大吉。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-chiniu-1.webp",
        stats: {
            spiritual: 95,
            aggression: 41,
            rarity: 82
        },
{
        id: "gen-xuanyang-2",
        nameCn: "玄羊",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-xuanyang-2.webp",
        stats: {
            spiritual: 67,
            aggression: 10,
            rarity: 99
        },
{
        id: "gen-baiquan-3",
        nameCn: "白犬",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-baiquan-3.webp",
        stats: {
            spiritual: 74,
            aggression: 23,
            rarity: 86
        },
{
        id: "gen-jinli-4",
        nameCn: "金貍",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如貍而金身，其名曰金貍，見則天下大吉。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-jinli-4.webp",
        stats: {
            spiritual: 81,
            aggression: 80,
            rarity: 73
        },
{
        id: "gen-yudiao-5",
        nameCn: "玉雕",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-yudiao-5.webp",
        stats: {
            spiritual: 88,
            aggression: 49,
            rarity: 90
        },
{
        id: "gen-feihe-6",
        nameCn: "飛鶴",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-feihe-6.webp",
        stats: {
            spiritual: 95,
            aggression: 62,
            rarity: 77
        },
{
        id: "gen-jiuque-7",
        nameCn: "九雀(吉)",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如雀而九身，其名曰九雀，見則天下大吉。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-jiuque-7.webp",
        stats: {
            spiritual: 67,
            aggression: 39,
            rarity: 94
        },
{
        id: "gen-duyu-8",
        nameCn: "獨魚",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-duyu-8.webp",
        stats: {
            spiritual: 74,
            aggression: 88,
            rarity: 81
        },
{
        id: "gen-tianshe-9",
        nameCn: "天蛇",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-tianshe-9.webp",
        stats: {
            spiritual: 81,
            aggression: 32,
            rarity: 98
        },
{
        id: "gen-leijiao-10",
        nameCn: "雷蛟",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如蛟而雷身，其名曰雷蛟，見則天下大吉。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-leijiao-10.webp",
        stats: {
            spiritual: 88,
            aggression: 78,
            rarity: 85
        },
{
        id: "gen-fengbao-11",
        nameCn: "風豹",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-fengbao-11.webp",
        stats: {
            spiritual: 95,
            aggression: 47,
            rarity: 72
        },
{
        id: "gen-shuihu-12",
        nameCn: "水虎",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-shuihu-12.webp",
        stats: {
            spiritual: 67,
            aggression: 60,
            rarity: 89
        },
{
        id: "gen-shanyu-13",
        nameCn: "山禺",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如禺而山身，其名曰山禺，見則天下大吉。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-shanyu-13.webp",
        stats: {
            spiritual: 74,
            aggression: 37,
            rarity: 76
        },
{
        id: "gen-shenhu-14",
        nameCn: "神狐",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-shenhu-14.webp",
        stats: {
            spiritual: 81,
            aggression: 86,
            rarity: 93
        },
{
        id: "gen-lingyao-15",
        nameCn: "靈鰩",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-lingyao-15.webp",
        stats: {
            spiritual: 88,
            aggression: 19,
            rarity: 80
        },
{
        id: "gen-huangfu-16",
        nameCn: "荒鳧",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鳧而荒身，其名曰荒鳧，見則天下大吉。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-huangfu-16.webp",
        stats: {
            spiritual: 95,
            aggression: 76,
            rarity: 97
        },
{
        id: "gen-youwu-17",
        nameCn: "幽烏",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-youwu-17.webp",
        stats: {
            spiritual: 67,
            aggression: 45,
            rarity: 84
        },
{
        id: "gen-bingkun-18",
        nameCn: "冰鵾",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-bingkun-18.webp",
        stats: {
            spiritual: 74,
            aggression: 58,
            rarity: 71
        },
{
        id: "gen-huodie-19",
        nameCn: "火鰈",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如鰈而火身，其名曰火鰈，見則天下大吉。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-huodie-19.webp",
        stats: {
            spiritual: 81,
            aggression: 46,
            rarity: 88
        },
{
        id: "gen-qingma-20",
        nameCn: "青馬",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-qingma-20.webp",
        stats: {
            spiritual: 88,
            aggression: 84,
            rarity: 75
        },
{
        id: "gen-redox-21",
        nameCn: "赤牛(水)",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-redox-21.webp",
        stats: {
            spiritual: 95,
            aggression: 17,
            rarity: 92
        },
{
        id: "gen-xuanyang-22",
        nameCn: "玄羊",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如羊而玄身，其名曰玄羊，見則天下大吉。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-xuanyang-22.webp",
        stats: {
            spiritual: 67,
            aggression: 74,
            rarity: 79
        },
{
        id: "gen-baiquan-23",
        nameCn: "白犬",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-baiquan-23.webp",
        stats: {
            spiritual: 74,
            aggression: 43,
            rarity: 96
        },
{
        id: "gen-jinli-24",
        nameCn: "金貍",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-jinli-24.webp",
        stats: {
            spiritual: 81,
            aggression: 56,
            rarity: 83
        },
{
        id: "gen-yudiao-25",
        nameCn: "玉雕",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如雕而玉身，其名曰玉雕，見則天下大吉。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-yudiao-25.webp",
        stats: {
            spiritual: 88,
            aggression: 33,
            rarity: 70
        },
{
        id: "gen-feihe-26",
        nameCn: "飛鶴",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-feihe-26.webp",
        stats: {
            spiritual: 95,
            aggression: 82,
            rarity: 87
        },
{
        id: "gen-jiuque-27",
        nameCn: "九雀(水)",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-jiuque-27.webp",
        stats: {
            spiritual: 67,
            aggression: 15,
            rarity: 74
        },
{
        id: "gen-duyu-28",
        nameCn: "獨魚",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如魚而獨身，其名曰獨魚，見則天下大吉。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-duyu-28.webp",
        stats: {
            spiritual: 74,
            aggression: 72,
            rarity: 91
        },
{
        id: "gen-tianshe-29",
        nameCn: "天蛇",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-tianshe-29.webp",
        stats: {
            spiritual: 81,
            aggression: 52,
            rarity: 78
        },
{
        id: "gen-leijiao-30",
        nameCn: "雷蛟",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-leijiao-30.webp",
        stats: {
            spiritual: 88,
            aggression: 54,
            rarity: 95
        },
{
        id: "gen-fengbao-31",
        nameCn: "風豹",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如豹而風身，其名曰風豹，見則天下大吉。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-fengbao-31.webp",
        stats: {
            spiritual: 95,
            aggression: 31,
            rarity: 82
        },
{
        id: "gen-shuihu-32",
        nameCn: "水虎",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-shuihu-32.webp",
        stats: {
            spiritual: 67,
            aggression: 80,
            rarity: 99
        },
{
        id: "gen-shanyu-33",
        nameCn: "山禺",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-shanyu-33.webp",
        stats: {
            spiritual: 74,
            aggression: 13,
            rarity: 86
        },
{
        id: "gen-shenhu-34",
        nameCn: "神狐",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如狐而神身，其名曰神狐，見則天下大吉。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-shenhu-34.webp",
        stats: {
            spiritual: 81,
            aggression: 70,
            rarity: 73
        },
{
        id: "gen-lingyao-35",
        nameCn: "靈鰩",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-lingyao-35.webp",
        stats: {
            spiritual: 88,
            aggression: 39,
            rarity: 90
        },
{
        id: "gen-huangfu-36",
        nameCn: "荒鳧",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-huangfu-36.webp",
        stats: {
            spiritual: 95,
            aggression: 52,
            rarity: 77
        },
{
        id: "gen-youwu-37",
        nameCn: "幽烏",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如烏而幽身，其名曰幽烏，見則天下大吉。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-youwu-37.webp",
        stats: {
            spiritual: 67,
            aggression: 29,
            rarity: 94
        },
{
        id: "gen-bingkun-38",
        nameCn: "冰鵾",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-bingkun-38.webp",
        stats: {
            spiritual: 74,
            aggression: 78,
            rarity: 81
        },
{
        id: "gen-huodie-39",
        nameCn: "火鰈",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-huodie-39.webp",
        stats: {
            spiritual: 81,
            aggression: 22,
            rarity: 98
        },
{
        id: "gen-qingma-40",
        nameCn: "青馬",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如馬而青身，其名曰青馬，見則天下大吉。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-qingma-40.webp",
        stats: {
            spiritual: 88,
            aggression: 68,
            rarity: 85
        },
{
        id: "gen-redox-41",
        nameCn: "赤牛",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-redox-41.webp",
        stats: {
            spiritual: 95,
            aggression: 37,
            rarity: 72
        },
{
        id: "gen-xuanyang-42",
        nameCn: "玄羊",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-xuanyang-42.webp",
        stats: {
            spiritual: 67,
            aggression: 50,
            rarity: 89
        },
{
        id: "gen-baiquan-43",
        nameCn: "白犬",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如犬而白身，其名曰白犬，見則天下大吉。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-baiquan-43.webp",
        stats: {
            spiritual: 74,
            aggression: 27,
            rarity: 76
        },
{
        id: "gen-jinli-44",
        nameCn: "金貍",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-jinli-44.webp",
        stats: {
            spiritual: 81,
            aggression: 76,
            rarity: 93
        },
{
        id: "gen-玉-雕-45",
        nameCn: "玉雕",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-45.webp",
        stats: {
            spiritual: 88,
            aggression: 89,
            rarity: 80
        },
{
        id: "gen-飛-鶴-46",
        nameCn: "飛鶴",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鶴而飛身，其名曰飛鶴，見則天下大吉。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-46.webp",
        stats: {
            spiritual: 95,
            aggression: 66,
            rarity: 97
        },
{
        id: "gen-九-雀-47",
        nameCn: "九雀",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-47.webp",
        stats: {
            spiritual: 67,
            aggression: 35,
            rarity: 84
        },
{
        id: "gen-獨-魚-48",
        nameCn: "獨魚",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-48.webp",
        stats: {
            spiritual: 74,
            aggression: 48,
            rarity: 71
        },
{
        id: "gen-天-蛇-49",
        nameCn: "天蛇",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如蛇而天身，其名曰天蛇，見則天下大吉。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-49.webp",
        stats: {
            spiritual: 81,
            aggression: 36,
            rarity: 88
        },
{
        id: "gen-雷-蛟-50",
        nameCn: "雷蛟",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-50.webp",
        stats: {
            spiritual: 88,
            aggression: 74,
            rarity: 75
        },
{
        id: "gen-風-豹-51",
        nameCn: "風豹",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-51.webp",
        stats: {
            spiritual: 95,
            aggression: 87,
            rarity: 92
        },
{
        id: "gen-水-虎-52",
        nameCn: "水虎",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如虎而水身，其名曰水虎，見則天下大吉。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-52.webp",
        stats: {
            spiritual: 67,
            aggression: 64,
            rarity: 79
        },
{
        id: "gen-山-禺-53",
        nameCn: "山禺",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-53.webp",
        stats: {
            spiritual: 74,
            aggression: 33,
            rarity: 96
        },
{
        id: "gen-神-狐-54",
        nameCn: "神狐",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-54.webp",
        stats: {
            spiritual: 81,
            aggression: 46,
            rarity: 83
        },
{
        id: "gen-靈-鰩-55",
        nameCn: "靈鰩",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如鰩而靈身，其名曰靈鰩，見則天下大吉。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-55.webp",
        stats: {
            spiritual: 88,
            aggression: 23,
            rarity: 70
        },
{
        id: "gen-荒-鳧-56",
        nameCn: "荒鳧",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-56.webp",
        stats: {
            spiritual: 95,
            aggression: 72,
            rarity: 87
        },
{
        id: "gen-幽-烏-57",
        nameCn: "幽烏",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-57.webp",
        stats: {
            spiritual: 67,
            aggression: 85,
            rarity: 74
        },
{
        id: "gen-冰-鵾-58",
        nameCn: "冰鵾",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如鵾而冰身，其名曰冰鵾，見則天下大吉。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-58.webp",
        stats: {
            spiritual: 74,
            aggression: 62,
            rarity: 91
        },
{
        id: "gen-火-鰈-59",
        nameCn: "火鰈",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-59.webp",
        stats: {
            spiritual: 81,
            aggression: 42,
            rarity: 78
        },
{
        id: "gen-青-馬-60",
        nameCn: "青馬",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-60.webp",
        stats: {
            spiritual: 88,
            aggression: 44,
            rarity: 95
        },
{
        id: "gen-赤-牛-61",
        nameCn: "赤牛",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如牛而赤身，其名曰赤牛，見則天下大吉。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-赤-牛-61.webp",
        stats: {
            spiritual: 95,
            aggression: 21,
            rarity: 82
        },
{
        id: "gen-玄-羊-62",
        nameCn: "玄羊",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玄-羊-62.webp",
        stats: {
            spiritual: 67,
            aggression: 70,
            rarity: 99
        },
{
        id: "gen-白-犬-63",
        nameCn: "白犬",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-63.webp",
        stats: {
            spiritual: 74,
            aggression: 83,
            rarity: 86
        },
{
        id: "gen-金-貍-64",
        nameCn: "金貍",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如貍而金身，其名曰金貍，見則天下大吉。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-64.webp",
        stats: {
            spiritual: 81,
            aggression: 60,
            rarity: 73
        },
{
        id: "gen-玉-雕-65",
        nameCn: "玉雕",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-65.webp",
        stats: {
            spiritual: 88,
            aggression: 29,
            rarity: 90
        },
{
        id: "gen-feihe-66",
        nameCn: "飛鶴",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-feihe-66.webp",
        stats: {
            spiritual: 95,
            aggression: 42,
            rarity: 77
        },
{
        id: "gen-九-雀-67",
        nameCn: "九雀",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如雀而九身，其名曰九雀，見則天下大吉。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-67.webp",
        stats: {
            spiritual: 67,
            aggression: 19,
            rarity: 94
        },
{
        id: "gen-獨-魚-68",
        nameCn: "獨魚",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-68.webp",
        stats: {
            spiritual: 74,
            aggression: 68,
            rarity: 81
        },
{
        id: "gen-天-蛇-69",
        nameCn: "天蛇",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-69.webp",
        stats: {
            spiritual: 81,
            aggression: 12,
            rarity: 98
        },
{
        id: "gen-雷-蛟-70",
        nameCn: "雷蛟",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如蛟而雷身，其名曰雷蛟，見則天下大吉。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-70.webp",
        stats: {
            spiritual: 88,
            aggression: 58,
            rarity: 85
        },
{
        id: "gen-風-豹-71",
        nameCn: "風豹",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-71.webp",
        stats: {
            spiritual: 95,
            aggression: 27,
            rarity: 72
        },
{
        id: "gen-水-虎-72",
        nameCn: "水虎",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-72.webp",
        stats: {
            spiritual: 67,
            aggression: 40,
            rarity: 89
        },
{
        id: "gen-山-禺-73",
        nameCn: "山禺",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如禺而山身，其名曰山禺，見則天下大吉。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-73.webp",
        stats: {
            spiritual: 74,
            aggression: 17,
            rarity: 76
        },
{
        id: "gen-神-狐-74",
        nameCn: "神狐",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-74.webp",
        stats: {
            spiritual: 81,
            aggression: 66,
            rarity: 93
        },
{
        id: "gen-靈-鰩-75",
        nameCn: "靈鰩",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-75.webp",
        stats: {
            spiritual: 88,
            aggression: 79,
            rarity: 80
        },
{
        id: "gen-荒-鳧-76",
        nameCn: "荒鳧",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鳧而荒身，其名曰荒鳧，見則天下大吉。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-76.webp",
        stats: {
            spiritual: 95,
            aggression: 56,
            rarity: 97
        },
{
        id: "gen-幽-烏-77",
        nameCn: "幽烏",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-77.webp",
        stats: {
            spiritual: 67,
            aggression: 25,
            rarity: 84
        },
{
        id: "gen-冰-鵾-78",
        nameCn: "冰鵾",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-78.webp",
        stats: {
            spiritual: 74,
            aggression: 38,
            rarity: 71
        },
{
        id: "gen-火-鰈-79",
        nameCn: "火鰈",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如鰈而火身，其名曰火鰈，見則天下大吉。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-79.webp",
        stats: {
            spiritual: 81,
            aggression: 26,
            rarity: 88
        },
{
        id: "gen-青-馬-80",
        nameCn: "青馬",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-80.webp",
        stats: {
            spiritual: 88,
            aggression: 64,
            rarity: 75
        },
{
        id: "gen-赤-牛-81",
        nameCn: "赤牛",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-赤-牛-81.webp",
        stats: {
            spiritual: 95,
            aggression: 77,
            rarity: 92
        },
{
        id: "gen-玄-羊-82",
        nameCn: "玄羊",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如羊而玄身，其名曰玄羊，見則天下大吉。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玄-羊-82.webp",
        stats: {
            spiritual: 67,
            aggression: 54,
            rarity: 79
        },
{
        id: "gen-白-犬-83",
        nameCn: "白犬",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-83.webp",
        stats: {
            spiritual: 74,
            aggression: 23,
            rarity: 96
        },
{
        id: "gen-金-貍-84",
        nameCn: "金貍",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-84.webp",
        stats: {
            spiritual: 81,
            aggression: 36,
            rarity: 83
        },
{
        id: "gen-玉-雕-85",
        nameCn: "玉雕",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如雕而玉身，其名曰玉雕，見則天下大吉。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-85.webp",
        stats: {
            spiritual: 88,
            aggression: 13,
            rarity: 70
        },
{
        id: "gen-飛-鶴-86",
        nameCn: "飛鶴",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-86.webp",
        stats: {
            spiritual: 95,
            aggression: 62,
            rarity: 87
        },
{
        id: "gen-九-雀-87",
        nameCn: "九雀",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-87.webp",
        stats: {
            spiritual: 67,
            aggression: 75,
            rarity: 74
        },
{
        id: "gen-duyu-88",
        nameCn: "獨魚",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如魚而獨身，其名曰獨魚，見則天下大吉。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-duyu-88.webp",
        stats: {
            spiritual: 74,
            aggression: 52,
            rarity: 91
        },
{
        id: "gen-天-蛇-89",
        nameCn: "天蛇",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-89.webp",
        stats: {
            spiritual: 81,
            aggression: 32,
            rarity: 78
        },
{
        id: "gen-雷-蛟-90",
        nameCn: "雷蛟",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-90.webp",
        stats: {
            spiritual: 88,
            aggression: 34,
            rarity: 95
        },
{
        id: "gen-風-豹-91",
        nameCn: "風豹",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如豹而風身，其名曰風豹，見則天下大吉。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-91.webp",
        stats: {
            spiritual: 95,
            aggression: 11,
            rarity: 82
        },
{
        id: "gen-水-虎-92",
        nameCn: "水虎",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-92.webp",
        stats: {
            spiritual: 67,
            aggression: 60,
            rarity: 99
        },
{
        id: "gen-山-禺-93",
        nameCn: "山禺",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-93.webp",
        stats: {
            spiritual: 74,
            aggression: 73,
            rarity: 86
        },
{
        id: "gen-神-狐-94",
        nameCn: "神狐",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如狐而神身，其名曰神狐，見則天下大吉。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-94.webp",
        stats: {
            spiritual: 81,
            aggression: 50,
            rarity: 73
        },
{
        id: "gen-靈-鰩-95",
        nameCn: "靈鰩",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-95.webp",
        stats: {
            spiritual: 88,
            aggression: 19,
            rarity: 90
        },
{
        id: "gen-荒-鳧-96",
        nameCn: "荒鳧",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-96.webp",
        stats: {
            spiritual: 95,
            aggression: 32,
            rarity: 77
        },
{
        id: "gen-幽-烏-97",
        nameCn: "幽烏",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如烏而幽身，其名曰幽烏，見則天下大吉。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-97.webp",
        stats: {
            spiritual: 67,
            aggression: 89,
            rarity: 94
        },
{
        id: "gen-冰-鵾-98",
        nameCn: "冰鵾",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-98.webp",
        stats: {
            spiritual: 74,
            aggression: 58,
            rarity: 81
        },
{
        id: "gen-火-鰈-99",
        nameCn: "火鰈",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-99.webp",
        stats: {
            spiritual: 81,
            aggression: 82,
            rarity: 98
        },
{
        id: "gen-青-馬-100",
        nameCn: "青馬",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如馬而青身，其名曰青馬，見則天下大吉。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-100.webp",
        stats: {
            spiritual: 88,
            aggression: 48,
            rarity: 85
        },
{
        id: "gen-chiniu-101",
        nameCn: "赤牛",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-chiniu-101.webp",
        stats: {
            spiritual: 95,
            aggression: 17,
            rarity: 72
        },
{
        id: "gen-玄-羊-102",
        nameCn: "玄羊",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玄-羊-102.webp",
        stats: {
            spiritual: 67,
            aggression: 30,
            rarity: 89
        },
{
        id: "gen-白-犬-103",
        nameCn: "白犬",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如犬而白身，其名曰白犬，見則天下大吉。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-103.webp",
        stats: {
            spiritual: 74,
            aggression: 87,
            rarity: 76
        },
{
        id: "gen-金-貍-104",
        nameCn: "金貍",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-104.webp",
        stats: {
            spiritual: 81,
            aggression: 56,
            rarity: 93
        },
{
        id: "gen-玉-雕-105",
        nameCn: "玉雕",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-105.webp",
        stats: {
            spiritual: 88,
            aggression: 69,
            rarity: 80
        },
{
        id: "gen-飛-鶴-106",
        nameCn: "飛鶴",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鶴而飛身，其名曰飛鶴，見則天下大吉。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-106.webp",
        stats: {
            spiritual: 95,
            aggression: 46,
            rarity: 97
        },
{
        id: "gen-九-雀-107",
        nameCn: "九雀",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-107.webp",
        stats: {
            spiritual: 67,
            aggression: 15,
            rarity: 84
        },
{
        id: "gen-獨-魚-108",
        nameCn: "獨魚",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-108.webp",
        stats: {
            spiritual: 74,
            aggression: 28,
            rarity: 71
        },
{
        id: "gen-天-蛇-109",
        nameCn: "天蛇",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如蛇而天身，其名曰天蛇，見則天下大吉。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-109.webp",
        stats: {
            spiritual: 81,
            aggression: 16,
            rarity: 88
        },
{
        id: "gen-雷-蛟-110",
        nameCn: "雷蛟",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-110.webp",
        stats: {
            spiritual: 88,
            aggression: 54,
            rarity: 75
        },
{
        id: "gen-fengbao-111",
        nameCn: "風豹",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-fengbao-111.webp",
        stats: {
            spiritual: 95,
            aggression: 67,
            rarity: 92
        },
{
        id: "gen-水-虎-112",
        nameCn: "水虎",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如虎而水身，其名曰水虎，見則天下大吉。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-112.webp",
        stats: {
            spiritual: 67,
            aggression: 44,
            rarity: 79
        },
{
        id: "gen-山-禺-113",
        nameCn: "山禺",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-113.webp",
        stats: {
            spiritual: 74,
            aggression: 13,
            rarity: 96
        },
{
        id: "gen-神-狐-114",
        nameCn: "神狐",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-114.webp",
        stats: {
            spiritual: 81,
            aggression: 26,
            rarity: 83
        },
{
        id: "gen-靈-鰩-115",
        nameCn: "靈鰩",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如鰩而靈身，其名曰靈鰩，見則天下大吉。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-115.webp",
        stats: {
            spiritual: 88,
            aggression: 83,
            rarity: 70
        },
{
        id: "gen-荒-鳧-116",
        nameCn: "荒鳧",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-116.webp",
        stats: {
            spiritual: 95,
            aggression: 52,
            rarity: 87
        },
{
        id: "gen-幽-烏-117",
        nameCn: "幽烏",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-117.webp",
        stats: {
            spiritual: 67,
            aggression: 65,
            rarity: 74
        },
{
        id: "gen-冰-鵾-118",
        nameCn: "冰鵾",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如鵾而冰身，其名曰冰鵾，見則天下大吉。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-118.webp",
        stats: {
            spiritual: 74,
            aggression: 42,
            rarity: 91
        },
{
        id: "gen-火-鰈-119",
        nameCn: "火鰈",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-119.webp",
        stats: {
            spiritual: 81,
            aggression: 22,
            rarity: 78
        },
{
        id: "gen-青-馬-120",
        nameCn: "青馬",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-120.webp",
        stats: {
            spiritual: 88,
            aggression: 24,
            rarity: 95
        },
{
        id: "gen-chiniu-121",
        nameCn: "赤牛",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如牛而赤身，其名曰赤牛，見則天下大吉。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-chiniu-121.webp",
        stats: {
            spiritual: 95,
            aggression: 81,
            rarity: 82
        },
{
        id: "gen-玄-羊-122",
        nameCn: "玄羊",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玄-羊-122.webp",
        stats: {
            spiritual: 67,
            aggression: 50,
            rarity: 99
        },
{
        id: "gen-白-犬-123",
        nameCn: "白犬",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-123.webp",
        stats: {
            spiritual: 74,
            aggression: 63,
            rarity: 86
        },
{
        id: "gen-金-貍-124",
        nameCn: "金貍",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如貍而金身，其名曰金貍，見則天下大吉。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-124.webp",
        stats: {
            spiritual: 81,
            aggression: 40,
            rarity: 73
        },
{
        id: "gen-玉-雕-125",
        nameCn: "玉雕",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-125.webp",
        stats: {
            spiritual: 88,
            aggression: 89,
            rarity: 90
        },
{
        id: "gen-飛-鶴-126",
        nameCn: "飛鶴",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-126.webp",
        stats: {
            spiritual: 95,
            aggression: 22,
            rarity: 77
        },
{
        id: "gen-九-雀-127",
        nameCn: "九雀",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如雀而九身，其名曰九雀，見則天下大吉。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-127.webp",
        stats: {
            spiritual: 67,
            aggression: 79,
            rarity: 94
        },
{
        id: "gen-獨-魚-128",
        nameCn: "獨魚",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-128.webp",
        stats: {
            spiritual: 74,
            aggression: 48,
            rarity: 81
        },
{
        id: "gen-天-蛇-129",
        nameCn: "天蛇",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-129.webp",
        stats: {
            spiritual: 81,
            aggression: 72,
            rarity: 98
        },
{
        id: "gen-雷-蛟-130",
        nameCn: "雷蛟",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如蛟而雷身，其名曰雷蛟，見則天下大吉。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-130.webp",
        stats: {
            spiritual: 88,
            aggression: 38,
            rarity: 85
        },
{
        id: "gen-風-豹-131",
        nameCn: "風豹",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-131.webp",
        stats: {
            spiritual: 95,
            aggression: 87,
            rarity: 72
        },
{
        id: "gen-水-虎-132",
        nameCn: "水虎",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-132.webp",
        stats: {
            spiritual: 67,
            aggression: 20,
            rarity: 89
        },
{
        id: "gen-shanyu-133",
        nameCn: "山禺",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如禺而山身，其名曰山禺，見則天下大吉。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-shanyu-133.webp",
        stats: {
            spiritual: 74,
            aggression: 77,
            rarity: 76
        },
{
        id: "gen-神-狐-134",
        nameCn: "神狐",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-134.webp",
        stats: {
            spiritual: 81,
            aggression: 46,
            rarity: 93
        },
{
        id: "gen-靈-鰩-135",
        nameCn: "靈鰩",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-135.webp",
        stats: {
            spiritual: 88,
            aggression: 59,
            rarity: 80
        },
{
        id: "gen-荒-鳧-136",
        nameCn: "荒鳧",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鳧而荒身，其名曰荒鳧，見則天下大吉。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-136.webp",
        stats: {
            spiritual: 95,
            aggression: 36,
            rarity: 97
        },
{
        id: "gen-幽-烏-137",
        nameCn: "幽烏",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-137.webp",
        stats: {
            spiritual: 67,
            aggression: 85,
            rarity: 84
        },
{
        id: "gen-冰-鵾-138",
        nameCn: "冰鵾",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-138.webp",
        stats: {
            spiritual: 74,
            aggression: 18,
            rarity: 71
        },
{
        id: "gen-火-鰈-139",
        nameCn: "火鰈",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如鰈而火身，其名曰火鰈，見則天下大吉。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-139.webp",
        stats: {
            spiritual: 81,
            aggression: 86,
            rarity: 88
        },
{
        id: "gen-青-馬-140",
        nameCn: "青馬",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-140.webp",
        stats: {
            spiritual: 88,
            aggression: 44,
            rarity: 75
        },
{
        id: "gen-chiniu-141",
        nameCn: "赤牛",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-chiniu-141.webp",
        stats: {
            spiritual: 95,
            aggression: 57,
            rarity: 92
        },
{
        id: "gen-玄-羊-142",
        nameCn: "玄羊",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如羊而玄身，其名曰玄羊，見則天下大吉。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玄-羊-142.webp",
        stats: {
            spiritual: 67,
            aggression: 34,
            rarity: 79
        },
{
        id: "gen-白-犬-143",
        nameCn: "白犬",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-143.webp",
        stats: {
            spiritual: 74,
            aggression: 83,
            rarity: 96
        },
{
        id: "gen-金-貍-144",
        nameCn: "金貍",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-144.webp",
        stats: {
            spiritual: 81,
            aggression: 16,
            rarity: 83
        },
{
        id: "gen-玉-雕-145",
        nameCn: "玉雕",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如雕而玉身，其名曰玉雕，見則天下大吉。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-145.webp",
        stats: {
            spiritual: 88,
            aggression: 73,
            rarity: 70
        },
{
        id: "gen-飛-鶴-146",
        nameCn: "飛鶴",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-146.webp",
        stats: {
            spiritual: 95,
            aggression: 42,
            rarity: 87
        },
{
        id: "gen-九-雀-147",
        nameCn: "九雀",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-147.webp",
        stats: {
            spiritual: 67,
            aggression: 55,
            rarity: 74
        },
{
        id: "gen-獨-魚-148",
        nameCn: "獨魚",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如魚而獨身，其名曰獨魚，見則天下大吉。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-148.webp",
        stats: {
            spiritual: 74,
            aggression: 32,
            rarity: 91
        },
{
        id: "gen-天-蛇-149",
        nameCn: "天蛇",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-149.webp",
        stats: {
            spiritual: 81,
            aggression: 12,
            rarity: 78
        },
{
        id: "gen-雷-蛟-150",
        nameCn: "雷蛟",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-150.webp",
        stats: {
            spiritual: 88,
            aggression: 14,
            rarity: 95
        },
{
        id: "gen-風-豹-151",
        nameCn: "風豹",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如豹而風身，其名曰風豹，見則天下大吉。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-151.webp",
        stats: {
            spiritual: 95,
            aggression: 71,
            rarity: 82
        },
{
        id: "gen-水-虎-152",
        nameCn: "水虎",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-152.webp",
        stats: {
            spiritual: 67,
            aggression: 40,
            rarity: 99
        },
{
        id: "gen-山-禺-153",
        nameCn: "山禺",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-153.webp",
        stats: {
            spiritual: 74,
            aggression: 53,
            rarity: 86
        },
{
        id: "gen-神-狐-154",
        nameCn: "神狐",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如狐而神身，其名曰神狐，見則天下大吉。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-154.webp",
        stats: {
            spiritual: 81,
            aggression: 30,
            rarity: 73
        },
{
        id: "gen-lingyao-155",
        nameCn: "靈鰩",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-lingyao-155.webp",
        stats: {
            spiritual: 88,
            aggression: 79,
            rarity: 90
        },
{
        id: "gen-荒-鳧-156",
        nameCn: "荒鳧",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-156.webp",
        stats: {
            spiritual: 95,
            aggression: 12,
            rarity: 77
        },
{
        id: "gen-幽-烏-157",
        nameCn: "幽烏",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如烏而幽身，其名曰幽烏，見則天下大吉。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-157.webp",
        stats: {
            spiritual: 67,
            aggression: 69,
            rarity: 94
        },
{
        id: "gen-冰-鵾-158",
        nameCn: "冰鵾",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-158.webp",
        stats: {
            spiritual: 74,
            aggression: 38,
            rarity: 81
        },
{
        id: "gen-火-鰈-159",
        nameCn: "火鰈",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-159.webp",
        stats: {
            spiritual: 81,
            aggression: 62,
            rarity: 98
        },
{
        id: "gen-青-馬-160",
        nameCn: "青馬",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如馬而青身，其名曰青馬，見則天下大吉。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-160.webp",
        stats: {
            spiritual: 88,
            aggression: 28,
            rarity: 85
        },
{
        id: "gen-chiniu-161",
        nameCn: "赤牛",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-chiniu-161.webp",
        stats: {
            spiritual: 95,
            aggression: 77,
            rarity: 72
        },
{
        id: "gen-玄-羊-162",
        nameCn: "玄羊",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玄-羊-162.webp",
        stats: {
            spiritual: 67,
            aggression: 10,
            rarity: 89
        },
{
        id: "gen-白-犬-163",
        nameCn: "白犬",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如犬而白身，其名曰白犬，見則天下大吉。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-163.webp",
        stats: {
            spiritual: 74,
            aggression: 67,
            rarity: 76
        },
{
        id: "gen-金-貍-164",
        nameCn: "金貍",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-164.webp",
        stats: {
            spiritual: 81,
            aggression: 36,
            rarity: 93
        },
{
        id: "gen-玉-雕-165",
        nameCn: "玉雕",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-165.webp",
        stats: {
            spiritual: 88,
            aggression: 49,
            rarity: 80
        },
{
        id: "gen-飛-鶴-166",
        nameCn: "飛鶴",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鶴而飛身，其名曰飛鶴，見則天下大吉。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-166.webp",
        stats: {
            spiritual: 95,
            aggression: 26,
            rarity: 97
        },
{
        id: "gen-九-雀-167",
        nameCn: "九雀",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-167.webp",
        stats: {
            spiritual: 67,
            aggression: 75,
            rarity: 84
        },
{
        id: "gen-獨-魚-168",
        nameCn: "獨魚",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-168.webp",
        stats: {
            spiritual: 74,
            aggression: 88,
            rarity: 71
        },
{
        id: "gen-天-蛇-169",
        nameCn: "天蛇",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如蛇而天身，其名曰天蛇，見則天下大吉。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-169.webp",
        stats: {
            spiritual: 81,
            aggression: 76,
            rarity: 88
        },
{
        id: "gen-雷-蛟-170",
        nameCn: "雷蛟",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-170.webp",
        stats: {
            spiritual: 88,
            aggression: 34,
            rarity: 75
        },
{
        id: "gen-風-豹-171",
        nameCn: "風豹",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-171.webp",
        stats: {
            spiritual: 95,
            aggression: 47,
            rarity: 92
        },
{
        id: "gen-水-虎-172",
        nameCn: "水虎",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如虎而水身，其名曰水虎，見則天下大吉。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-172.webp",
        stats: {
            spiritual: 67,
            aggression: 24,
            rarity: 79
        },
{
        id: "gen-山-禺-173",
        nameCn: "山禺",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-173.webp",
        stats: {
            spiritual: 74,
            aggression: 73,
            rarity: 96
        },
{
        id: "gen-神-狐-174",
        nameCn: "神狐",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-174.webp",
        stats: {
            spiritual: 81,
            aggression: 86,
            rarity: 83
        },
{
        id: "gen-靈-鰩-175",
        nameCn: "靈鰩",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如鰩而靈身，其名曰靈鰩，見則天下大吉。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-175.webp",
        stats: {
            spiritual: 88,
            aggression: 63,
            rarity: 70
        },
{
        id: "gen-荒-鳧-176",
        nameCn: "荒鳧",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-176.webp",
        stats: {
            spiritual: 95,
            aggression: 32,
            rarity: 87
        },
{
        id: "gen-youwu-177",
        nameCn: "幽烏",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-youwu-177.webp",
        stats: {
            spiritual: 67,
            aggression: 45,
            rarity: 74
        },
{
        id: "gen-冰-鵾-178",
        nameCn: "冰鵾",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如鵾而冰身，其名曰冰鵾，見則天下大吉。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-178.webp",
        stats: {
            spiritual: 74,
            aggression: 22,
            rarity: 91
        },
{
        id: "gen-火-鰈-179",
        nameCn: "火鰈",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-179.webp",
        stats: {
            spiritual: 81,
            aggression: 82,
            rarity: 78
        },
{
        id: "gen-青-馬-180",
        nameCn: "青馬",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-180.webp",
        stats: {
            spiritual: 88,
            aggression: 84,
            rarity: 95
        },
{
        id: "gen-chiniu-181",
        nameCn: "赤牛",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如牛而赤身，其名曰赤牛，見則天下大吉。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-chiniu-181.webp",
        stats: {
            spiritual: 95,
            aggression: 61,
            rarity: 82
        },
{
        id: "gen-玄-羊-182",
        nameCn: "玄羊",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玄-羊-182.webp",
        stats: {
            spiritual: 67,
            aggression: 30,
            rarity: 99
        },
{
        id: "gen-白-犬-183",
        nameCn: "白犬",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-183.webp",
        stats: {
            spiritual: 74,
            aggression: 43,
            rarity: 86
        },
{
        id: "gen-金-貍-184",
        nameCn: "金貍",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如貍而金身，其名曰金貍，見則天下大吉。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-184.webp",
        stats: {
            spiritual: 81,
            aggression: 20,
            rarity: 73
        },
{
        id: "gen-玉-雕-185",
        nameCn: "玉雕",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-185.webp",
        stats: {
            spiritual: 88,
            aggression: 69,
            rarity: 90
        },
{
        id: "gen-飛-鶴-186",
        nameCn: "飛鶴",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-186.webp",
        stats: {
            spiritual: 95,
            aggression: 82,
            rarity: 77
        },
{
        id: "gen-九-雀-187",
        nameCn: "九雀",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如雀而九身，其名曰九雀，見則天下大吉。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-187.webp",
        stats: {
            spiritual: 67,
            aggression: 59,
            rarity: 94
        },
{
        id: "gen-獨-魚-188",
        nameCn: "獨魚",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-188.webp",
        stats: {
            spiritual: 74,
            aggression: 28,
            rarity: 81
        },
{
        id: "gen-天-蛇-189",
        nameCn: "天蛇",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-189.webp",
        stats: {
            spiritual: 81,
            aggression: 52,
            rarity: 98
        },
{
        id: "gen-雷-蛟-190",
        nameCn: "雷蛟",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如蛟而雷身，其名曰雷蛟，見則天下大吉。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-190.webp",
        stats: {
            spiritual: 88,
            aggression: 18,
            rarity: 85
        },
{
        id: "gen-風-豹-191",
        nameCn: "風豹",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-191.webp",
        stats: {
            spiritual: 95,
            aggression: 67,
            rarity: 72
        },
{
        id: "gen-水-虎-192",
        nameCn: "水虎",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-192.webp",
        stats: {
            spiritual: 67,
            aggression: 80,
            rarity: 89
        },
{
        id: "gen-山-禺-193",
        nameCn: "山禺",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如禺而山身，其名曰山禺，見則天下大吉。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-193.webp",
        stats: {
            spiritual: 74,
            aggression: 57,
            rarity: 76
        },
{
        id: "gen-神-狐-194",
        nameCn: "神狐",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-194.webp",
        stats: {
            spiritual: 81,
            aggression: 26,
            rarity: 93
        },
{
        id: "gen-靈-鰩-195",
        nameCn: "靈鰩",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-195.webp",
        stats: {
            spiritual: 88,
            aggression: 39,
            rarity: 80
        },
{
        id: "gen-荒-鳧-196",
        nameCn: "荒鳧",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鳧而荒身，其名曰荒鳧，見則天下大吉。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-196.webp",
        stats: {
            spiritual: 95,
            aggression: 16,
            rarity: 97
        },
{
        id: "gen-幽-烏-197",
        nameCn: "幽烏",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-197.webp",
        stats: {
            spiritual: 67,
            aggression: 65,
            rarity: 84
        },
{
        id: "gen-冰-鵾-198",
        nameCn: "冰鵾",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-198.webp",
        stats: {
            spiritual: 74,
            aggression: 78,
            rarity: 71
        },
{
        id: "gen-huodie-199",
        nameCn: "火鰈",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如鰈而火身，其名曰火鰈，見則天下大吉。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-huodie-199.webp",
        stats: {
            spiritual: 81,
            aggression: 66,
            rarity: 88
        },
{
        id: "gen-青-馬-200",
        nameCn: "青馬",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-200.webp",
        stats: {
            spiritual: 88,
            aggression: 24,
            rarity: 75
        },
{
        id: "gen-赤-牛-201",
        nameCn: "赤牛",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-赤-牛-201.webp",
        stats: {
            spiritual: 95,
            aggression: 37,
            rarity: 92
        },
{
        id: "gen-xuanyang-202",
        nameCn: "玄羊",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如羊而玄身，其名曰玄羊，見則天下大吉。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-xuanyang-202.webp",
        stats: {
            spiritual: 67,
            aggression: 14,
            rarity: 79
        },
{
        id: "gen-白-犬-203",
        nameCn: "白犬",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-203.webp",
        stats: {
            spiritual: 74,
            aggression: 63,
            rarity: 96
        },
{
        id: "gen-金-貍-204",
        nameCn: "金貍",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-204.webp",
        stats: {
            spiritual: 81,
            aggression: 76,
            rarity: 83
        },
{
        id: "gen-玉-雕-205",
        nameCn: "玉雕",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如雕而玉身，其名曰玉雕，見則天下大吉。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-205.webp",
        stats: {
            spiritual: 88,
            aggression: 53,
            rarity: 70
        },
{
        id: "gen-飛-鶴-206",
        nameCn: "飛鶴",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-206.webp",
        stats: {
            spiritual: 95,
            aggression: 22,
            rarity: 87
        },
{
        id: "gen-九-雀-207",
        nameCn: "九雀",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-207.webp",
        stats: {
            spiritual: 67,
            aggression: 35,
            rarity: 74
        },
{
        id: "gen-獨-魚-208",
        nameCn: "獨魚",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如魚而獨身，其名曰獨魚，見則天下大吉。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-208.webp",
        stats: {
            spiritual: 74,
            aggression: 12,
            rarity: 91
        },
{
        id: "gen-天-蛇-209",
        nameCn: "天蛇",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-209.webp",
        stats: {
            spiritual: 81,
            aggression: 72,
            rarity: 78
        },
{
        id: "gen-雷-蛟-210",
        nameCn: "雷蛟",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-210.webp",
        stats: {
            spiritual: 88,
            aggression: 74,
            rarity: 95
        },
{
        id: "gen-風-豹-211",
        nameCn: "風豹",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如豹而風身，其名曰風豹，見則天下大吉。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-211.webp",
        stats: {
            spiritual: 95,
            aggression: 51,
            rarity: 82
        },
{
        id: "gen-水-虎-212",
        nameCn: "水虎",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-212.webp",
        stats: {
            spiritual: 67,
            aggression: 20,
            rarity: 99
        },
{
        id: "gen-山-禺-213",
        nameCn: "山禺",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-213.webp",
        stats: {
            spiritual: 74,
            aggression: 33,
            rarity: 86
        },
{
        id: "gen-神-狐-214",
        nameCn: "神狐",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如狐而神身，其名曰神狐，見則天下大吉。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-214.webp",
        stats: {
            spiritual: 81,
            aggression: 10,
            rarity: 73
        },
{
        id: "gen-靈-鰩-215",
        nameCn: "靈鰩",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-215.webp",
        stats: {
            spiritual: 88,
            aggression: 59,
            rarity: 90
        },
{
        id: "gen-荒-鳧-216",
        nameCn: "荒鳧",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-216.webp",
        stats: {
            spiritual: 95,
            aggression: 72,
            rarity: 77
        },
{
        id: "gen-幽-烏-217",
        nameCn: "幽烏",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如烏而幽身，其名曰幽烏，見則天下大吉。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-217.webp",
        stats: {
            spiritual: 67,
            aggression: 49,
            rarity: 94
        },
{
        id: "gen-冰-鵾-218",
        nameCn: "冰鵾",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-218.webp",
        stats: {
            spiritual: 74,
            aggression: 18,
            rarity: 81
        },
{
        id: "gen-火-鰈-219",
        nameCn: "火鰈",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-219.webp",
        stats: {
            spiritual: 81,
            aggression: 42,
            rarity: 98
        },
{
        id: "gen-青-馬-220",
        nameCn: "青馬",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如馬而青身，其名曰青馬，見則天下大吉。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-220.webp",
        stats: {
            spiritual: 88,
            aggression: 88,
            rarity: 85
        },
{
        id: "gen-赤-牛-221",
        nameCn: "赤牛",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-赤-牛-221.webp",
        stats: {
            spiritual: 95,
            aggression: 57,
            rarity: 72
        },
{
        id: "gen-xuanyang-222",
        nameCn: "玄羊",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-xuanyang-222.webp",
        stats: {
            spiritual: 67,
            aggression: 70,
            rarity: 89
        },
{
        id: "gen-白-犬-223",
        nameCn: "白犬",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如犬而白身，其名曰白犬，見則天下大吉。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-223.webp",
        stats: {
            spiritual: 74,
            aggression: 47,
            rarity: 76
        },
{
        id: "gen-金-貍-224",
        nameCn: "金貍",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-224.webp",
        stats: {
            spiritual: 81,
            aggression: 16,
            rarity: 93
        },
{
        id: "gen-玉-雕-225",
        nameCn: "玉雕",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-225.webp",
        stats: {
            spiritual: 88,
            aggression: 29,
            rarity: 80
        },
{
        id: "gen-飛-鶴-226",
        nameCn: "飛鶴",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鶴而飛身，其名曰飛鶴，見則天下大吉。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-226.webp",
        stats: {
            spiritual: 95,
            aggression: 86,
            rarity: 97
        },
{
        id: "gen-九-雀-227",
        nameCn: "九雀",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-227.webp",
        stats: {
            spiritual: 67,
            aggression: 55,
            rarity: 84
        },
{
        id: "gen-獨-魚-228",
        nameCn: "獨魚",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-228.webp",
        stats: {
            spiritual: 74,
            aggression: 68,
            rarity: 71
        },
{
        id: "gen-天-蛇-229",
        nameCn: "天蛇",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如蛇而天身，其名曰天蛇，見則天下大吉。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-229.webp",
        stats: {
            spiritual: 81,
            aggression: 56,
            rarity: 88
        },
{
        id: "gen-雷-蛟-230",
        nameCn: "雷蛟",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-230.webp",
        stats: {
            spiritual: 88,
            aggression: 14,
            rarity: 75
        },
{
        id: "gen-風-豹-231",
        nameCn: "風豹",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-231.webp",
        stats: {
            spiritual: 95,
            aggression: 27,
            rarity: 92
        },
{
        id: "gen-水-虎-232",
        nameCn: "水虎",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如虎而水身，其名曰水虎，見則天下大吉。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-232.webp",
        stats: {
            spiritual: 67,
            aggression: 84,
            rarity: 79
        },
{
        id: "gen-山-禺-233",
        nameCn: "山禺",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-233.webp",
        stats: {
            spiritual: 74,
            aggression: 53,
            rarity: 96
        },
{
        id: "gen-神-狐-234",
        nameCn: "神狐",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-234.webp",
        stats: {
            spiritual: 81,
            aggression: 66,
            rarity: 83
        },
{
        id: "gen-靈-鰩-235",
        nameCn: "靈鰩",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如鰩而靈身，其名曰靈鰩，見則天下大吉。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-235.webp",
        stats: {
            spiritual: 88,
            aggression: 43,
            rarity: 70
        },
{
        id: "gen-荒-鳧-236",
        nameCn: "荒鳧",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-236.webp",
        stats: {
            spiritual: 95,
            aggression: 12,
            rarity: 87
        },
{
        id: "gen-幽-烏-237",
        nameCn: "幽烏",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-237.webp",
        stats: {
            spiritual: 67,
            aggression: 25,
            rarity: 74
        },
{
        id: "gen-冰-鵾-238",
        nameCn: "冰鵾",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如鵾而冰身，其名曰冰鵾，見則天下大吉。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-238.webp",
        stats: {
            spiritual: 74,
            aggression: 82,
            rarity: 91
        },
{
        id: "gen-火-鰈-239",
        nameCn: "火鰈",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-239.webp",
        stats: {
            spiritual: 81,
            aggression: 62,
            rarity: 78
        },
{
        id: "gen-青-馬-240",
        nameCn: "青馬",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-240.webp",
        stats: {
            spiritual: 88,
            aggression: 64,
            rarity: 95
        },
{
        id: "gen-赤-牛-241",
        nameCn: "赤牛",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如牛而赤身，其名曰赤牛，見則天下大吉。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-赤-牛-241.webp",
        stats: {
            spiritual: 95,
            aggression: 41,
            rarity: 82
        },
{
        id: "gen-xuanyang-242",
        nameCn: "玄羊",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-xuanyang-242.webp",
        stats: {
            spiritual: 67,
            aggression: 10,
            rarity: 99
        },
{
        id: "gen-白-犬-243",
        nameCn: "白犬",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-243.webp",
        stats: {
            spiritual: 74,
            aggression: 23,
            rarity: 86
        },
{
        id: "gen-金-貍-244",
        nameCn: "金貍",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如貍而金身，其名曰金貍，見則天下大吉。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-244.webp",
        stats: {
            spiritual: 81,
            aggression: 80,
            rarity: 73
        },
{
        id: "gen-玉-雕-245",
        nameCn: "玉雕",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-245.webp",
        stats: {
            spiritual: 88,
            aggression: 49,
            rarity: 90
        },
{
        id: "gen-飛-鶴-246",
        nameCn: "飛鶴",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-246.webp",
        stats: {
            spiritual: 95,
            aggression: 62,
            rarity: 77
        },
{
        id: "gen-九-雀-247",
        nameCn: "九雀",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如雀而九身，其名曰九雀，見則天下大吉。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-247.webp",
        stats: {
            spiritual: 67,
            aggression: 39,
            rarity: 94
        },
{
        id: "gen-獨-魚-248",
        nameCn: "獨魚",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-248.webp",
        stats: {
            spiritual: 74,
            aggression: 88,
            rarity: 81
        },
{
        id: "gen-天-蛇-249",
        nameCn: "天蛇",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-249.webp",
        stats: {
            spiritual: 81,
            aggression: 32,
            rarity: 98
        },
{
        id: "gen-雷-蛟-250",
        nameCn: "雷蛟",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如蛟而雷身，其名曰雷蛟，見則天下大吉。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-250.webp",
        stats: {
            spiritual: 88,
            aggression: 78,
            rarity: 85
        },
{
        id: "gen-風-豹-251",
        nameCn: "風豹",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰風豹，其音如雷，見則其邑大水。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-251.webp",
        stats: {
            spiritual: 95,
            aggression: 47,
            rarity: 72
        },
{
        id: "gen-水-虎-252",
        nameCn: "水虎",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-252.webp",
        stats: {
            spiritual: 67,
            aggression: 60,
            rarity: 89
        },
{
        id: "gen-山-禺-253",
        nameCn: "山禺",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如禺而山身，其名曰山禺，見則天下大吉。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-253.webp",
        stats: {
            spiritual: 74,
            aggression: 37,
            rarity: 76
        },
{
        id: "gen-神-狐-254",
        nameCn: "神狐",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰神狐，其音如雷，見則其邑大水。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-254.webp",
        stats: {
            spiritual: 81,
            aggression: 86,
            rarity: 93
        },
{
        id: "gen-靈-鰩-255",
        nameCn: "靈鰩",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-255.webp",
        stats: {
            spiritual: 88,
            aggression: 19,
            rarity: 80
        },
{
        id: "gen-荒-鳧-256",
        nameCn: "荒鳧",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鳧而荒身，其名曰荒鳧，見則天下大吉。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-256.webp",
        stats: {
            spiritual: 95,
            aggression: 76,
            rarity: 97
        },
{
        id: "gen-幽-烏-257",
        nameCn: "幽烏",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰幽烏，其音如雷，見則其邑大水。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-257.webp",
        stats: {
            spiritual: 67,
            aggression: 45,
            rarity: 84
        },
{
        id: "gen-冰-鵾-258",
        nameCn: "冰鵾",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-258.webp",
        stats: {
            spiritual: 74,
            aggression: 58,
            rarity: 71
        },
{
        id: "gen-火-鰈-259",
        nameCn: "火鰈",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如鰈而火身，其名曰火鰈，見則天下大吉。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-259.webp",
        stats: {
            spiritual: 81,
            aggression: 46,
            rarity: 88
        },
{
        id: "gen-青-馬-260",
        nameCn: "青馬",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰青馬，其音如雷，見則其邑大水。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-260.webp",
        stats: {
            spiritual: 88,
            aggression: 84,
            rarity: 75
        },
{
        id: "gen-赤-牛-261",
        nameCn: "赤牛",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-赤-牛-261.webp",
        stats: {
            spiritual: 95,
            aggression: 17,
            rarity: 92
        },
{
        id: "gen-xuanyang-262",
        nameCn: "玄羊",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有獸焉，其狀如羊而玄身，其名曰玄羊，見則天下大吉。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-xuanyang-262.webp",
        stats: {
            spiritual: 67,
            aggression: 74,
            rarity: 79
        },
{
        id: "gen-白-犬-263",
        nameCn: "白犬",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰白犬，其音如雷，見則其邑大水。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-263.webp",
        stats: {
            spiritual: 74,
            aggression: 43,
            rarity: 96
        },
{
        id: "gen-金-貍-264",
        nameCn: "金貍",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-264.webp",
        stats: {
            spiritual: 81,
            aggression: 56,
            rarity: 83
        },
{
        id: "gen-玉-雕-265",
        nameCn: "玉雕",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有獸焉，其狀如雕而玉身，其名曰玉雕，見則天下大吉。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-265.webp",
        stats: {
            spiritual: 88,
            aggression: 33,
            rarity: 70
        },
{
        id: "gen-飛-鶴-266",
        nameCn: "飛鶴",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰飛鶴，其音如雷，見則其邑大水。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-266.webp",
        stats: {
            spiritual: 95,
            aggression: 82,
            rarity: 87
        },
{
        id: "gen-九-雀-267",
        nameCn: "九雀",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-267.webp",
        stats: {
            spiritual: 67,
            aggression: 15,
            rarity: 74
        },
{
        id: "gen-獨-魚-268",
        nameCn: "獨魚",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有獸焉，其狀如魚而獨身，其名曰獨魚，見則天下大吉。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-268.webp",
        stats: {
            spiritual: 74,
            aggression: 72,
            rarity: 91
        },
{
        id: "gen-天-蛇-269",
        nameCn: "天蛇",
        zhuyin: "ㄖ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰天蛇，其音如雷，見則其邑大水。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-269.webp",
        stats: {
            spiritual: 81,
            aggression: 52,
            rarity: 78
        },
{
        id: "gen-雷-蛟-270",
        nameCn: "雷蛟",
        zhuyin: "ㄗ 一 ㄠˊ",
        nameEn: "Spiritual 雷蛟",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有異獸，名曰雷蛟，其音如雷，見則其邑大水。」",
        description: "雷蛟是《山海經》中記載的奇特生物。牠擁有蛟的身體輪廓與雷色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-雷-蛟-270.webp",
        stats: {
            spiritual: 88,
            aggression: 54,
            rarity: 95
        },
{
        id: "gen-風-豹-271",
        nameCn: "風豹",
        zhuyin: "ㄘ 一 ㄠˊ",
        nameEn: "Spiritual 風豹",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有獸焉，其狀如豹而風身，其名曰風豹，見則天下大吉。」",
        description: "風豹是《山海經》中記載的奇特生物。牠擁有豹的身體輪廓與風色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-風-豹-271.webp",
        stats: {
            spiritual: 95,
            aggression: 31,
            rarity: 82
        },
{
        id: "gen-水-虎-272",
        nameCn: "水虎",
        zhuyin: "ㄙ 一 ㄠˊ",
        nameEn: "Spiritual 水虎",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰水虎，其音如雷，見則其邑大水。」",
        description: "水虎是《山海經》中記載的奇特生物。牠擁有虎的身體輪廓與水色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-水-虎-272.webp",
        stats: {
            spiritual: 67,
            aggression: 80,
            rarity: 99
        },
{
        id: "gen-山-禺-273",
        nameCn: "山禺",
        zhuyin: "ㄅ 一 ㄠˊ",
        nameEn: "Spiritual 山禺",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有異獸，名曰山禺，其音如雷，見則其邑大水。」",
        description: "山禺是《山海經》中記載的奇特生物。牠擁有禺的身體輪廓與山色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-山-禺-273.webp",
        stats: {
            spiritual: 74,
            aggression: 13,
            rarity: 86
        },
{
        id: "gen-神-狐-274",
        nameCn: "神狐",
        zhuyin: "ㄆ 一 ㄠˊ",
        nameEn: "Spiritual 神狐",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有獸焉，其狀如狐而神身，其名曰神狐，見則天下大吉。」",
        description: "神狐是《山海經》中記載的奇特生物。牠擁有狐的身體輪廓與神色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-神-狐-274.webp",
        stats: {
            spiritual: 81,
            aggression: 70,
            rarity: 73
        },
{
        id: "gen-靈-鰩-275",
        nameCn: "靈鰩",
        zhuyin: "ㄇ 一 ㄠˊ",
        nameEn: "Spiritual 靈鰩",
        category: "perilous",
        categoryCn: "凶獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰靈鰩，其音如雷，見則其邑大水。」",
        description: "靈鰩是《山海經》中記載的奇特生物。牠擁有鰩的身體輪廓與靈色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-靈-鰩-275.webp",
        stats: {
            spiritual: 88,
            aggression: 39,
            rarity: 90
        },
{
        id: "gen-荒-鳧-276",
        nameCn: "荒鳧",
        zhuyin: "ㄈ 一 ㄠˊ",
        nameEn: "Spiritual 荒鳧",
        category: "divine",
        categoryCn: "神獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有異獸，名曰荒鳧，其音如雷，見則其邑大水。」",
        description: "荒鳧是《山海經》中記載的奇特生物。牠擁有鳧的身體輪廓與荒色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-荒-鳧-276.webp",
        stats: {
            spiritual: 95,
            aggression: 52,
            rarity: 77
        },
{
        id: "gen-幽-烏-277",
        nameCn: "幽烏",
        zhuyin: "ㄉ 一 ㄠˊ",
        nameEn: "Spiritual 幽烏",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有獸焉，其狀如烏而幽身，其名曰幽烏，見則天下大吉。」",
        description: "幽烏是《山海經》中記載的奇特生物。牠擁有烏的身體輪廓與幽色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-幽-烏-277.webp",
        stats: {
            spiritual: 67,
            aggression: 29,
            rarity: 94
        },
{
        id: "gen-冰-鵾-278",
        nameCn: "冰鵾",
        zhuyin: "ㄊ 一 ㄠˊ",
        nameEn: "Spiritual 冰鵾",
        category: "perilous",
        categoryCn: "凶獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰冰鵾，其音如雷，見則其邑大水。」",
        description: "冰鵾是《山海經》中記載的奇特生物。牠擁有鵾的身體輪廓與冰色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-冰-鵾-278.webp",
        stats: {
            spiritual: 74,
            aggression: 78,
            rarity: 81
        },
{
        id: "gen-火-鰈-279",
        nameCn: "火鰈",
        zhuyin: "ㄋ 一 ㄠˊ",
        nameEn: "Spiritual 火鰈",
        category: "divine",
        categoryCn: "神獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有異獸，名曰火鰈，其音如雷，見則其邑大水。」",
        description: "火鰈是《山海經》中記載的奇特生物。牠擁有鰈的身體輪廓與火色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-火-鰈-279.webp",
        stats: {
            spiritual: 81,
            aggression: 22,
            rarity: 98
        },
{
        id: "gen-青-馬-280",
        nameCn: "青馬",
        zhuyin: "ㄌ 一 ㄠˊ",
        nameEn: "Spiritual 青馬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "east",
        regionCn: "東山經 (第1卷)",
        classicText: "「東山經 (第1卷)有獸焉，其狀如馬而青身，其名曰青馬，見則天下大吉。」",
        description: "青馬是《山海經》中記載的奇特生物。牠擁有馬的身體輪廓與青色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-青-馬-280.webp",
        stats: {
            spiritual: 88,
            aggression: 68,
            rarity: 85
        },
{
        id: "gen-赤-牛-281",
        nameCn: "赤牛",
        zhuyin: "ㄍ 一 ㄠˊ",
        nameEn: "Spiritual 赤牛",
        category: "perilous",
        categoryCn: "凶獸",
        region: "south",
        regionCn: "南山經 (第2卷)",
        classicText: "「南山經 (第2卷)有異獸，名曰赤牛，其音如雷，見則其邑大水。」",
        description: "赤牛是《山海經》中記載的奇特生物。牠擁有牛的身體輪廓與赤色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-赤-牛-281.webp",
        stats: {
            spiritual: 95,
            aggression: 37,
            rarity: 72
        },
{
        id: "gen-xuanyang-282",
        nameCn: "玄羊",
        zhuyin: "ㄎ 一 ㄠˊ",
        nameEn: "Spiritual 玄羊",
        category: "divine",
        categoryCn: "神獸",
        region: "west",
        regionCn: "西山經 (第3卷)",
        classicText: "「西山經 (第3卷)有異獸，名曰玄羊，其音如雷，見則其邑大水。」",
        description: "玄羊是《山海經》中記載的奇特生物。牠擁有羊的身體輪廓與玄色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-xuanyang-282.webp",
        stats: {
            spiritual: 67,
            aggression: 50,
            rarity: 89
        },
{
        id: "gen-白-犬-283",
        nameCn: "白犬",
        zhuyin: "ㄏ 一 ㄠˊ",
        nameEn: "Spiritual 白犬",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "north",
        regionCn: "北山經 (第4卷)",
        classicText: "「北山經 (第4卷)有獸焉，其狀如犬而白身，其名曰白犬，見則天下大吉。」",
        description: "白犬是《山海經》中記載的奇特生物。牠擁有犬的身體輪廓與白色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-白-犬-283.webp",
        stats: {
            spiritual: 74,
            aggression: 27,
            rarity: 76
        },
{
        id: "gen-金-貍-284",
        nameCn: "金貍",
        zhuyin: "ㄐ 一 ㄠˊ",
        nameEn: "Spiritual 金貍",
        category: "perilous",
        categoryCn: "凶獸",
        region: "central",
        regionCn: "中山經 (第5卷)",
        classicText: "「中山經 (第5卷)有異獸，名曰金貍，其音如雷，見則其邑大水。」",
        description: "金貍是《山海經》中記載的奇特生物。牠擁有貍的身體輪廓與金色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-金-貍-284.webp",
        stats: {
            spiritual: 81,
            aggression: 76,
            rarity: 93
        },
{
        id: "gen-玉-雕-285",
        nameCn: "玉雕",
        zhuyin: "ㄑ 一 ㄠˊ",
        nameEn: "Spiritual 玉雕",
        category: "divine",
        categoryCn: "神獸",
        region: "east",
        regionCn: "東山經 (第6卷)",
        classicText: "「東山經 (第6卷)有異獸，名曰玉雕，其音如雷，見則其邑大水。」",
        description: "玉雕是《山海經》中記載的奇特生物。牠擁有雕的身體輪廓與玉色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-玉-雕-285.webp",
        stats: {
            spiritual: 88,
            aggression: 89,
            rarity: 80
        },
{
        id: "gen-飛-鶴-286",
        nameCn: "飛鶴",
        zhuyin: "ㄒ 一 ㄠˊ",
        nameEn: "Spiritual 飛鶴",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "south",
        regionCn: "南山經 (第7卷)",
        classicText: "「南山經 (第7卷)有獸焉，其狀如鶴而飛身，其名曰飛鶴，見則天下大吉。」",
        description: "飛鶴是《山海經》中記載的奇特生物。牠擁有鶴的身體輪廓與飛色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-飛-鶴-286.webp",
        stats: {
            spiritual: 95,
            aggression: 66,
            rarity: 97
        },
{
        id: "gen-九-雀-287",
        nameCn: "九雀",
        zhuyin: "ㄓ 一 ㄠˊ",
        nameEn: "Spiritual 九雀",
        category: "perilous",
        categoryCn: "凶獸",
        region: "west",
        regionCn: "西山經 (第8卷)",
        classicText: "「西山經 (第8卷)有異獸，名曰九雀，其音如雷，見則其邑大水。」",
        description: "九雀是《山海經》中記載的奇特生物。牠擁有雀的身體輪廓與九色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-九-雀-287.webp",
        stats: {
            spiritual: 67,
            aggression: 35,
            rarity: 84
        },
{
        id: "gen-獨-魚-288",
        nameCn: "獨魚",
        zhuyin: "ㄔ 一 ㄠˊ",
        nameEn: "Spiritual 獨魚",
        category: "divine",
        categoryCn: "神獸",
        region: "north",
        regionCn: "北山經 (第9卷)",
        classicText: "「北山經 (第9卷)有異獸，名曰獨魚，其音如雷，見則其邑大水。」",
        description: "獨魚是《山海經》中記載的奇特生物。牠擁有魚的身體輪廓與獨色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-獨-魚-288.webp",
        stats: {
            spiritual: 74,
            aggression: 48,
            rarity: 71
        },
{
        id: "gen-天-蛇-289",
        nameCn: "天蛇",
        zhuyin: "ㄕ 一 ㄠˊ",
        nameEn: "Spiritual 天蛇",
        category: "auspicious",
        categoryCn: "瑞獸",
        region: "central",
        regionCn: "中山經 (第10卷)",
        classicText: "「中山經 (第10卷)有獸焉，其狀如蛇而天身，其名曰天蛇，見則天下大吉。」",
        description: "天蛇是《山海經》中記載的奇特生物。牠擁有蛇的身體輪廓與天色的特殊花紋，生性獨特，在古代神話中具有象徵意義。",
        image: "assets/webp/gen-天-蛇-289.webp",
        stats: {
            spiritual: 81,
            aggression: 36,
            rarity: 88
        }

];

// 2. Lore Database
const LORE_DATABASE = {
    kuafu: {
        title: "夸父追日",
        source: "《山海經 · 海外北經》",
        paragraphs: [
            "「夸父與日逐走，入日；渴，欲得飲，飲於河、渭；河、渭不足，北飲大澤。未至，道渴而死。棄其杖，化為鄧林。」",
            "在遠古時代，夸父族的巨人首領夸父，看到太陽每日東升西落，帶給大地短暫的光明後便陷入長久的黑暗與寒冷。為了讓陽光永遠普照大地，他下定決心要追趕並抓住太陽。",
            "夸父邁開大步，風馳電掣地向著太陽的方向奔跑。他跨過高山，躍過大河，一直追到了太陽落山的地方（禺谷）。此時，火紅的太陽近在咫尺，巨大的熱量烤得夸父口乾舌燥。",
            "為了解渴，他俯身喝乾了黃河與渭水的水，但依然感到乾渴難耐。於是，他決定北上前往北方的大澤（瀚海）尋找水源。然而，就在他前往大澤的途中，因為嚴重的脫水與體力耗盡，最終倒在半路上，遺憾死去。",
            "夸父在臨死前，將自己手中的木杖拋了出去。這根木杖落地後，吸取了巨人的殘餘精氣，化作了一片廣袤繁茂的桃林（鄧林），為後世路過此處的旅人遮擋烈日、提供甘甜之桃子解渴。這個故事歌頌了挑戰大自然、追求光明的英雄主義氣概。"
        ]
    },
    jingwei: {
        title: "精衛填海",
        source: "《山海經 · 北山經》",
        paragraphs: [
            "「發鳩之山，其上多柘木。有鳥焉，其狀如烏，文首、白喙、赤足，名曰精衛，其鳴自詨。是炎帝之少女，名曰女娃。女娃遊於東海，溺而不返，故為精衛。常銜西山之木石，以堙於東海。」",
            "女娃是遠古神話中太陽神炎帝最疼愛的小女兒。一天，性格活潑的女娃獨自划著小船來到浩瀚的東海玩耍。突然，海面上狂風大作，巨浪翻滾，將女娃的小船掀翻，女娃不幸溺水身亡，再也沒有回來。",
            "女娃死後，她的靈魂與強烈的不甘化作了一隻美麗的神鳥。這隻鳥長著花紋的頭部、白色的嘴喙和鮮紅的雙爪，發出的叫聲就像在呼喚自己的名字：「精衛！精衛！」",
            "精衛痛恨奪去她生命的東海，誓要將東海填平。於是，她居住在發鳩山上，每天辛勤地飛往西山銜取一根小樹枝或一顆小石子，然後飛越千里，將它們精準地投入東海之中。",
            "面對無邊無際、波濤洶湧的大海，精衛的身影顯得無比渺小，但她日復一日、年復一年，從不停歇。這個神話故事展現了遠古人民面對無法抗拒的自然災害時，那股堅韌不拔、誓不低頭的悲壯意志。"
        ]
    },
    nuwa: {
        title: "女媧補天",
        source: "《淮南子 · 覽冥訓》（補足山海經創世神話）",
        paragraphs: [
            "「往古之時，四極廢，九州裂，天不兼覆，地不周載。火爁焱而不滅，水浩洋而不息。鷙鳥鷙老弱。於是女媧煉五色石以補蒼天，斷鰲足以立四極，殺黑龍以濟冀州，積蘆灰以止淫水。」",
            "在天地混沌初開之後，水神共工與火神祝融為了爭奪天帝之位爆發了大戰。共工戰敗後惱羞成怒，一頭撞向了支撐天地的西北天柱——不周山。天柱崩塌，導致天傾西北、地陷東南。",
            "霎時間，天空中出現了巨大的窟窿，大火肆虐無法熄滅，洪水如猛獸般在大地上奔流，各種兇猛的野獸紛紛出洞撕咬殘害人類，人類面臨著滅頂之災。",
            "人類的始祖神女媧看到自己的孩子遭受如此苦難，痛心無比。她決心修復天空。她走遍群山，尋找紅、黃、藍、白、黑五種顏色的神石，並將它們聚在一起，用神火熔煉成熔漿，填補了天空的巨大缺口。",
            "接著，為了防止天空再次塌陷，女媧斬下了一隻巨大神鰲的四隻腳，將它們作為新的天柱立在大地的四方。她還殺死了危害人間的黑龍，用蘆葦燒成的灰燼堵住了滔天的洪水。終於，風雨停息，萬物復甦，人類重新過上了安寧的日子。"
        ]
    },
    houyi: {
        title: "后羿射日",
        source: "《山海經 · 海外東經》（經典羿射九日傳說）",
        paragraphs: [
            "「羿與日逐走，入日。堯之時，十日並出，焦禾稼，殺草木，而民無所食。羿上射九日，萬民皆喜。」",
            "在帝堯統治的時代，原本在天空輪流值班的十個太陽突然一齊出現在天空中。烈日無情地炙烤著大地，河流乾涸，莊稼枯死，甚至連岩石都開始熔化，無數妖魔鬼怪也乘機跑出來危害百姓。",
            "看到人間如火海煉獄，神射手后羿攜著天帝賜予的紅色神弓與白色神箭下凡。他站在高山之巔，對準天空中散發著熾熱毒光的九個太陽，拉開神弓，離弦的飛箭箭無虛發。",
            "隨著震天動地的巨響，一個接一個的太陽中箭墜落，化作一隻隻金色的三足烏鴉落在大地上。當后羿射下第九個太陽時，天地間熱度陡降。堯帝急忙阻止了后羿，留下了最後一個太陽，讓它繼續為人間提供溫暖與光芒。萬民歡呼躍，歌頌后羿的偉大功績。"
        ]
    },
    gunyu: {
        title: "鯀禹治水",
        source: "《山海經 · 海內經》",
        paragraphs: [
            "「洪水滔天。鯀竊帝之息壤以堙洪水，不待帝命。帝令祝融殺鯀於羽郊。鯀複生禹，帝乃命禹卒布土以定九州。」",
            "上古時期，一場史無前例的大洪水席捲了九州大地，無數家園被毀，人民流離失所。天帝的臣子鯀，看到人間慘狀，不忍生靈塗炭。他不顧天帝命令，私自竊取了天界能夠自己生長、填平洪水的寶物——息壤，在大地上築起高大堤壩堵塞洪水。",
            "天帝發覺息壤被盜，震怒之下，命令火神祝融在羽山之郊將鯀處死。鯀死後，他的屍體三年不腐。後來，鯀的肚子破開，他的兒子禹誕生了。禹繼承了父親未竟的遺志，繼續承擔起治水的重任。",
            "大禹改變了父親「堵塞」的策略，改為以「疏導」為主的法門。他帶領百姓開鑿山川，疏通水道，引導洪水流入大海。在治水十三年中，大禹三過家門而不入。最終，洪水退去，大地重現安寧，九州得以安定，百姓過上了安居樂業的生活。"
        ]
    },
    xingtian: {
        title: "刑天舞干戚",
        source: "《山海經 · 海外西經》",
        paragraphs: [
            "「刑天與帝至此爭神，帝斷其首，葬之常羊之山。乃以乳為目，以臍為口，操干戚以舞。」",
            "刑天是遠古炎帝部落的一名巨人勇士，性格剛毅無畏。在黃帝擊敗炎帝後，刑天心中極為不平，決定獨自一人手持盾牌（干）與巨斧（戚），殺上天庭挑戰黃帝，爭奪神帝之位。",
            "兩人從天庭一直打到常羊之山，戰鬥進行得昏天暗地。最終，經驗更為豐富的黃帝抓住破綻，一劍斬下了刑天的頭顱。黃帝為了防止刑天的頭顱接回，揮劍將常羊之山劈開，將刑天的頭顱埋入深山之中。",
            "然而，失去頭顱 of刑天並沒有倒下。他憑藉著胸中燃燒的熊熊鬥志與怒火，重新站了起來。他以胸前雙乳化作眼睛，以肚臍化作嘴巴，繼續發出震天怒吼，左手握盾，右手揮舞戰斧，向著虛空不知疲倦地戰鬥。他成為了永不屈服、戰鬥到底的戰神象徵。"
        ]
    },
    chiyou: {
        title: "黃帝大戰蚩尤",
        source: "《山海經 · 大荒北經》",
        paragraphs: [
            "「蚩尤作兵伐黃帝，黃帝乃令應龍攻之冀州之野。應龍畜水。蚩尤請風伯雨師，縱大風雨。黃帝乃下天女曰屭，雨止，遂殺蚩尤。」",
            "在遠古大荒時期，九黎部落的首領蚩尤發動叛亂，帶領他八十個銅頭鐵額、以沙石為食的兄弟進攻黃帝。黃帝派遣神龍應龍蓄水迎戰，試圖利用洪水淹沒蚩尤的軍隊。",
            "然而，蚩尤請來了風伯與雨師，施展無上巫術，召喚出鋪天蓋地的狂風暴雨，反將黃帝的軍隊圍困。危急時刻，黃帝請來了天女「魃」（原名屭），她身上散發著無與倫比的熱力天火，一降臨便蒸乾了暴雨，狂風驟停。",
            "黃帝乘勢反擊，擂響了夔牛皮製成的戰鼓，聲震五百里，九黎軍隊被震得魂飛魄散。最終，黃帝在冀州之野成功斬殺了蚩尤，將他的手銬腳鐐拋在荒野化為楓林。此戰奠定了華夏文明的基石。"
        ]
    },
    gonggong: {
        title: "共工怒觸不周山",
        source: "《淮南子 · 天文訓》（經典水火爭霸神話）",
        paragraphs: [
            "「昔者共工與顓頊爭為帝，怒而觸不周之山，天柱折，地維絕。天傾西北，故日月星辰移焉；地不滿東南，故水潦塵埃歸焉。」",
            "在古老的上古時期，水神共工與天帝顓頊為了爭奪天下的控制權爆發了大戰。水神共工掌控滔天洪水試圖淹沒天庭，但天帝顓頊法力無邊，共工最終在決戰中慘敗。",
            "共工戰敗後又羞又怒，一氣之下，他決定與天地同歸於盡。他發出狂暴的怒吼，一頭撞向了支撐天地的西北天柱——不周山。不周山在一聲驚天巨響中應聲斷裂，繫在大地東南方的繩索也隨之繃斷。",
            "天柱斷裂後，天空向西北方向傾斜，因此太陽、月亮和星辰每天都向西北方向落去；而大地在東南方向塌陷，導致世間的江河溪水都向東南方向奔流匯聚。這個神話解釋了中國地理地勢「西高東低」以及天體運行的奧秘。"
        ]
    },
    xiwangmu: {
        title: "西王母傳說",
        source: "《山海經 · 西山經》",
        paragraphs: [
            "「西王母其狀如人，豹尾虎齒而善嘯，蓬髮戴勝，是司天之厲及五殘。」",
            "在現代人的認知中，西王母是優雅端莊的王母娘娘；但在《山海經》的古老記載中，她是一位半人半獸、掌管瘟疫與刑罰的狂野之神。她居住在崑崙之丘的玉山之上，長著豹子的尾巴、老虎的牙齒，擅長發出震耳欲聾的呼嘯聲。",
            "西王母每天蓬亂著頭髮，頭上戴著精美的玉質頭飾（勝）。在節日或平日，她身邊有三隻美麗的「青鳥」為她四處尋找並運送食物。她掌管著世間的瘟疫、災難與刑罰，是一位令人生畏的力量之神。",
            "隨著時代演變，在後世道教與世俗神話中，西王母逐漸褪去了半人半獸的原始形象，演化為溫和的仙界女仙之首，並擁有能讓人長生不老的蟠桃。這個形象的轉變見證了中國神話系統從原始野性向秩序文明的演進。"
        ]
    },
    xihe: {
        title: "羲和浴日",
        source: "《山海經 · 大荒南經》",
        paragraphs: [
            "「東海之外，甘水之間，有羲和之國。有女子名曰羲和，方日浴於甘淵。羲和者，帝俊之妻，生十日。」",
            "在遙遠的東海之外，甘水流經的地方，有一個神祕國度叫做羲和國。這裡的統治者是一位美麗的女神，名叫羲和，她是天帝帝俊的妻子，生下了十個太陽兒子。",
            "每天，十個太陽都會在扶桑神樹上休息。清晨時分，羲和女神會親自駕駛著由六條神龍拉著的金色火車，載著值班的太陽在大氣中奔馳。在開始一天的旅程之前，她會帶著兒子在溫暖的甘淵中沐浴，洗去一天的塵埃與火毒。",
            "當值班的太陽在天空中溫暖萬物時，羲和則在一旁溫柔地守護。她既是太陽的母親，也是宇宙秩序的掌控者。這個神話故事充滿了浪漫的母性光輝，反映了古人對天體運行與日升日落規律的想像。"
        ]
    },
    changxi: {
        title: "常羲沐月",
        source: "《山海經 · 大荒西經》",
        paragraphs: [
            "「有女子方浴月。帝俊之妻常羲，生月十有二，此始浴之。」",
            "與掌管太陽的羲和相對，在大荒的西方，也有一位美麗的女神名叫常羲。她同樣是天帝帝俊的妻子，但她生下的是十二個美麗的月亮女兒，代表一年中的十二個月份。",
            "每當夜幕降臨，月亮女兒們需要輪流升上天空，為漆黑的夜晚帶來溫柔皎潔的光芒。在月亮出發值班之前，常羲女神也會帶著她們在西方神秘的池水中沐浴，洗淨月光，使她們散發出最純淨清澈的銀輝。",
            "常羲女神在池水邊溫柔地梳理著月光，調和著天地的陰陽氣息。她是中國神話中最早的月亮之神，也是曆法與時間周期的守護者。這個神話與「羲和浴日」遙相呼應，構成古人對日月共生、時序交替的宇宙觀。"
        ]
    },
    qigong: {
        title: "奇肱國飛車",
        source: "《山海經 · 海外西經》",
        paragraphs: [
            "「奇肱之國在其北，其人一臂三目，有雌雄，乘文馬。能為飛車，從風遠行。」",
            "在神祕的海外西方，有一個極具機關科技色彩的國度叫做奇肱國。這裡的國民長相十分奇特，他們每個人都只有一隻手臂，但額頭中央長著第三隻眼睛。他們天生聰慧，擅長製作各種精巧的木製機關。",
            "奇肱國的工匠們最偉大的發明，是一種能夠在天空中飛行的奇妙工具——「飛車」。這種飛車不需要馬匹拉動，只要利用大氣中的風力，就能像小鳥一樣在雲霧中穿梭，飛往遙遠的異國他鄉。",
            "傳說在商湯時期，奇肱國的人曾駕著飛車隨風飄到了豫州界內，商湯為了保守秘密，將飛車拆毀。十年後風向轉變，商湯又命人重新製造飛車，將使者送回國。這個故事被認為是中國上古神話中關於「飛行器」最早的科幻想像。"
        ]
    },
    lingshan: {
        title: "靈山十巫",
        source: "《山海經 · 大荒西經》",
        paragraphs: [
            "「大荒之中，有山名曰豐沮玉門，日月所入。有靈山，十巫從此升降，百藥爰在。」",
            "在神話世界的西方大荒中，有一座神聖的高山名叫靈山。這裡生長著數不盡的奇花異草與能治百病的靈藥，也是天界與凡間的通道之一。在這裡，居住著十位法力無邊的神巫，合稱「靈山十巫」。",
            "這十位神巫分別是：巫咸、巫即、巫盼、巫彭、巫姑、巫真、巫禮、巫抵、巫謝、巫羅。他們擁有溝通天地鬼神的能力，每日緣著靈山懸崖採集仙藥，並從這裡升上天界向天帝匯報，或降下凡間治病救人。",
            "其中，巫咸與巫彭被尊為巫術與醫學的鼻祖，他們不僅能用藥物治癒肉體，更能施展巫術祭祀安撫靈魂。靈山十巫的傳說，生動再現了上古華夏部落神祕的巫術文化與早期醫藥的起源。"
        ]
    },
    shaohao: {
        title: "少昊與歸墟",
        source: "《山海經 · 大荒東經》",
        paragraphs: [
            "「東海之外大壑，少昊之國。少昊孺帝顓頊於此，棄其琴瑟。其琴瑟在東海外大壑中。」",
            "在橫跨東海的外圍，存在著一個無底的深淵大壑，名為「歸墟」。天下所有的江河湖海之水，甚至連銀河的星水，都會流入這個無底洞中，但歸墟的水位卻永遠不增不減，神祕無比。",
            "在歸墟的旁邊，有一座由五彩神鳥統治的國度，那就是五帝之一少昊建立的少昊之國。少昊在這裡撫養年幼的帝顓頊。少昊愛好音樂，他曾在歸墟的巨石上撫琴吟唱，教導顓頊音律與天道。",
            "在顓頊長大成帝離去後，少昊將他心愛的琴與瑟拋入了歸墟的深淵之中。每當夜深人靜，歸墟的波濤拍擊深谷，深淵中便會傳出悠揚空靈的琴瑟之聲，隨風飄蕩。這個故事展現了上古君王之間的溫情以及歸墟神祕空靈的意境。"
        ]
    },
    yugong: {
        title: "愚公移山",
        source: "《列子 · 湯問》（山海經神話體系延伸）",
        paragraphs: [
            "「太行、王屋二山，本在冀州之南。北山愚公年且九十，面山而居，苦山北之塞。帝感其誠，命夸娥氏二子負二山，一厝朔東，一厝雍南。」",
            "太行與王屋兩座高達萬仞的大山，原本矗立在冀州的南方，阻擋了百姓出行的道路。居住在山下的愚公，因不忍子孫世世代代承受繞路之苦，毅然決定帶領全家人，用鋤頭和竹筐開始挖山移土。",
            "鄰居嘲笑他愚蠢，認為他以垂暮之年根本動不了大山一分一毫。愚公卻坦然回答：「我死了有兒子，兒子生孫子，子子孫孫無窮無盡，而山不會增高，何愁挖不平？」",
            "山中的山神與土地神聽聞此事，害怕愚公真的永不停歇地挖下去，便向天帝哭訴。天帝被愚公這種百折不撓的誠心與毅力所深深感動，於是命令大力神「夸娥氏」的兩個兒子，將太行、王屋兩座大山背走。這個神話歌頌了持之以恆、人定勝天的奮鬥精神。"
        ]
    },
    nine_tailed_fox: {
        title: "九尾狐傳說",
        source: "《山海經 · 南山經》",
        paragraphs: [
            "「青丘之山，有獸焉，其狀如狐而九尾，其音如嬰兒，能食人，食之不蠱。」",
            "在神話傳說中，九尾狐居住在美麗的青丘國之山。牠擁有狐狸的外形，但長著九條尾巴。牠的叫聲非常奇特，聽起來如同新生嬰兒的啼哭聲。傳說中，九尾狐生性兇猛，能捕食人類；但人類如果能反過來食用牠的肉，就可以免受蠱毒與妖邪的侵害。",
            "九尾狐不僅僅是奇獸，在上古文化中，牠更具有多重文化寓意。首先，牠象徵著子孫昌盛，因為九尾代表著繁衍能力極強；其次，牠是祥瑞之獸，傳說大禹在娶女嬌為妻前，曾看見白色的九尾狐，預示著帝王之兆與國家興盛。",
            "到了後世，隨著名著小說的演變，九尾狐的形象逐漸與魅惑人心的妖姬（如妲己）聯繫在一起，從神聖的祥瑞神獸演變成了魅惑與危險的代名詞。但《山海經》中最原始的記載，依然保留了其作為大自然神祕力量與祥瑞象徵的原始面貌。"
        ]
    },
    zhulong: {
        title: "鐘山之神燭龍",
        source: "《山海經 · 海外北經》",
        paragraphs: [
            "「鐘山之神，名曰燭陰，視為晝，瞑為夜，吹為冬，呼為夏，不飲，不食，不息，息為風。身長千里...其為物，人面，蛇身，赤色，居鐘山下。」",
            "燭龍，又被稱作燭陰，是生活在北方極寒之地鐘山下的偉大山神。祂的外形極其巨大，身長達千里，擁有著人類的面孔和火紅色的蛇形身軀。祂不需要飲食，不需要呼吸，也不需要休息，是凌駕於大自然之上的古老神祇。",
            "燭龍擁有控制天地日夜與氣候變化的無上神力。當祂睜開雙眼時，耀眼的光芒便普照大地，世界轉為白晝；當祂閉上雙眼時，黑暗便籠罩乾坤，萬物進入黑夜。祂吸氣吹出大氣時，大地便會進入刺骨的寒冬；祂呼氣吹出暖風時，世界便轉為炎熱的盛夏。",
            "祂的每一次悠長呼吸，都會化作天地間呼嘯的狂風。燭龍是古人對於自然界日夜交替、四季更迭以及風雨氣象規律的最早神話具象化。祂代表著宇宙初開時那股龐大、原始且不可撼動的自然意志。"
        ]
    },
    taotie: {
        title: "貪婪之獸饕餮",
        source: "《山海經 · 北山經》",
        paragraphs: [
            "「鉤吾之山，其上多玉，其下多銅。有獸焉，其狀如羊身人面，其目在腋下，虎齒人手，其音如嬰兒，名曰饕餮，食人。」",
            "在北方的鉤吾山上，蘊藏著豐富之玉石與銅礦，這裡也是古代神話中最著名的凶獸——饕餮的棲息地。饕餮的外形十分怪異：牠長著羊的身軀、人類的面孔，眼睛卻長在腋下，擁有一口如老虎般鋒利的牙齒和人類的手掌，叫聲如同嬰兒般啼哭。",
            "饕餮最著名的特徵是其無窮無盡的食欲。牠生性極其貪婪，見到任何東西都會吞入腹中，甚至會捕食人類。在傳說中，饕餮因為過於貪食，最後甚至把自己的身體都吃掉了，只留下一個巨大的頭顱和一張大嘴。",
            "在中國青銅器時代，饕餮的圖案被廣泛刻印在祭祀用的鼎與彝器上，稱為「饕餮紋」，用以警示人們戒驕戒躁、不可過度貪婪。牠與混沌、檮杌、窮奇並稱為中國古代「四大凶獸」，成為了物欲與貪婪的文化符號。"
        ]
    },
    qilin: {
        title: "盛世瑞獸麒麟",
        source: "《山海經 · 中山經》（古文麒麟之源）",
        paragraphs: [
            "「又東三十里，曰貃山。其上有獸焉，其狀如麂，而一角，其名曰麒麟，見則天下太平。」",
            "麒麟是中國古代神話傳說中的五大瑞獸之一（龍、鳳、龜、麟、白虎）。牠的外形融合了多種動物的特徵：長著麋鹿的身體、牛的尾巴、馬的蹄子，全身覆蓋著五彩斑斕的鱗甲，且額頭中央長著一隻神聖的獨角。",
            "麒麟性格極其溫和慈悲，牠行走時不踐踏花草，不傷害昆蟲，因此被尊為「仁獸」。傳說麒麟只有在太平盛世、或有聖人（如孔子）誕生時才會降臨人間，牠的現身預示著天降祥瑞、國泰民安與家族昌盛。",
            "在民間信仰中，麒麟還具有辟邪化煞、祈福消災的強大神力，古人常以「麒麟送子」來祝福家庭喜得貴子。牠代表著華夏文明中對於仁愛、和諧與盛世太平的崇高嚮往。"
        ]
    },
    hundun: {
        title: "渾沌無面目",
        source: "《山海經 · 西山經》",
        paragraphs: [
            "「天山，多金玉，有青雄黃。有神焉，其狀如黃囊，赤如丹火，六足四翼，渾敦無面目，是識歌舞，實為帝江也。」",
            "天山之上蘊藏著無數的金玉礦石，也居住著一位神祕的天神，名叫帝江，在神話中祂又被稱為「混沌」。混沌的外形十分奇特，看起來像一個黃色的口袋，全身散發著如丹火般耀眼的紅光。",
            "神獸長著六隻腳和四隻翅膀，但最詭異的是，祂完全沒有五官與面目（渾敦無面目），分不清前後左右。然而，混沌雖然沒有眼睛和耳朵，卻極具靈性，非常精通唱歌與跳舞，拍打著翅膀便能合著天地的韻律翩翩起舞。",
            "在後世道教與文學中，混沌被賦予了宇宙初開時那種模糊、無序、萬物融合的初始狀態。雖然祂被列為四大凶獸之一，但祂無面目卻識歌舞的原始形象，象徵著自然界最原始的自由與和諧。"
        ]
    },
    tiangou: {
        title: "天狗食月",
        source: "《山海經 · 西山經》",
        paragraphs: [
            "「陰山，有獸焉，其狀如貍而白首，名曰天狗，其音如榴榴，可以禦凶。」",
            "在《山海經》的記載中，天狗居住在陰山之上。牠的外形像一隻靈貓（貍），但長著白色的頭部，叫聲聽起來像是「榴榴」的呼喚。與後世傳說不同，《山海經》中的天狗並非凶兆，人們飼養牠可以抵禦災邪與凶氣。",
            "然而，隨著時間流逝與神話系統的融合，天狗逐漸演變成了天界的一種神犬。最著名的傳說是「天狗食月」與「天狗食日」，古人認為日食或月食是由於天狗吞食了日月，需要敲鑼打鼓來嚇退天狗，吐出日月。",
            "此外，在民間傳說中，天狗還與「二郎神」的哮天犬、以及防範小人作祟的民俗相結合。從陰山中禦凶的白首靈貓，到吞食日月的黑色天犬，天狗的形象變遷展示了上古民俗信仰的演變歷程。"
        ]
    },
    bifang: {
        title: "獨足火神鳥畢方",
        source: "《山海經 · 海外南經》",
        paragraphs: [
            "「畢方鳥在其東，青水東，其為鳥人面一足。一曰在二八神東。」",
            "畢方是中國古代神話傳說中的火神之鳥，也是木之精魂。牠的外形非常奇特，形似白鶴，但全身上下只有一隻腳。牠的身體呈青藍色，覆蓋著鮮紅色的斑紋，嘴喙是白色的，叫言就像在呼喚自己的名字「畢方」。",
            "傳說中，畢方是黃帝身邊的護衛神鳥之一，曾隨黃帝出征涿鹿。祂對火焰與熱量有著極強的掌控力，只要畢方在哪個城鎮或荒野出現，該地區不久後便會莫名奇妙地發生離奇的火災（訛火）。",
            "畢方代表著火焰那種跳躍、危險卻又神聖的自然屬性。祂的獨足與火紅斑紋，成為了上古神話中代表火災預警與神火降臨的文化象徵。"
        ]
    },
    four_fiends: {
        title: "四大凶獸傳說",
        source: "《左傳 · 文公十八年》與《山海經》合編",
        paragraphs: [
            "「舜臣堯，賓於四門，流四凶族：渾敦、窮奇、檮杌、饕餮，投諸四裔，以禦魑魅。」",
            "在上古神話與歷史中，有四個強大而邪惡的部族首領或異獸，被合稱為「四大凶獸」：混沌、窮奇、檮杌、饕餮。牠們各自代表了不同的惡行與災禍，常年禍害人間，挑戰天庭與人間帝王的秩序。",
            "混沌（帝江）無面目而識歌舞，代表著「混沌無序」與愚昧；窮奇狀如牛或長毛猛虎，背生雙翼，生性「懲善揚惡」，喜吃忠信之人；檮杌狀如人面虎足，凶頑無比，代表「固執頑傲」且絕不聽勸；饕餮（麅鴞）羊身人面，目在腋下，貪得無厭，能吞噬萬物，代表無盡的「貪婪」。",
            "舜帝輔佐堯帝治理天下時，以大威神力收服並驅逐了這四個凶獸部族，將牠們流放到邊疆荒野的四方邊境，讓牠們以毒攻毒，抵禦更為陰險邪惡的魑魅魍魎。這四大凶獸雖然性情殘暴，但祂們無窮的妖力與意志也成為了遠古青銅器與圖騰上的威嚴象徵，警惕著世人不可放縱心中的惡念。"
        ]
    },
    four_sacreds: {
        title: "四大神獸（聖獸）與星宿傳說",
        source: "《禮記 · 曲禮上》與《淮南子 · 天文訓》等古籍整合",
        paragraphs: [
            "「左青龍而右白虎，前朱雀而後玄武，招搖在上，急繕其怒。」四大神獸（又稱四象）是華夏神話中鎮守四方的至高星神，分別是：東方青龍、西方白虎、南方朱雀、北方玄武。",
            "【天象與起源說明】：需要特別注意的是，青龍、白虎、朱雀、玄武這四大神獸組合，並非起源於先秦古籍《山海經》。牠們最初是源自古人觀測天象的「二十八星宿」。古人將星空劃分為四個大區，其星象形狀聯結起來酷似這四種生靈，因而得名。到了漢代，陰陽五行學說興起，才正式將牠們與五行、方位、顏色及四季配對（東青龍主木、西白虎主金、南朱雀主火、北玄武主水）。",
            "在更早的《山海經》原著中，代表四方的神靈其實是「四方神」──東方句芒、南方祝融、西方蓐收與北方禺強。而四大星宿神獸在後世道教與民間信仰中，則逐漸取代了原本的四方神，成為高懸於九天星河、辟邪降魔、守護天道與人間九大星區平衡的主流象徵。",
            "在《山海經 · 奇獸對決》卡牌遊戲中，我們特設了「四大神獸戰役」。這四尊神獸攜其麾下的仙靈，化身為玩家必須挑戰的強大守護神，藉此引導玩家探索古老的天象神話，並藉由星宿之力構築能激發無限潛能的強大卡牌陣容！"
        ]
    },
    four_auspicious: {
        title: "四大瑞獸傳說",
        source: "《山海經》及古籍文獻整合",
        paragraphs: [
            "「世有祥瑞，見則天下太平。」在中華上古神話中，瑞獸象徵著德行、福澤與天降祥瑞。最經典的四大瑞獸為：麒麟、鳳凰、白澤與騶虞。牠們往往性情仁慈，只在盛世或聖人降世時出現。",
            "麒麟為「仁獸」，不踐生草，不折生樹，代表家族昌盛與國泰民安；鳳凰為「百鳥之王」，五色羽毛代表德、義、禮、仁、信五德，象徵至高德行；白澤為「崑崙神獸」，能口吐人言，通曉天下萬物鬼神之名與避邪之法；騶虞為「仁獸」，白毛黑紋，不食生物，日行千里，象徵至善德政。這些瑞獸寄託了遠古先民對美好社會秩序與高尚道德的嚮往。"
        ]
    },
    four_demons: {
        title: "四大妖獸傳說",
        source: "《山海經》與民間志怪傳說",
        paragraphs: [
            "「野性詭秘，幻惑無常。」四大妖獸代表了大自然中神祕、不受拘束甚至具有幻惑力量的生物：九尾妖狐、禍斗、蠱雕與相柳（九頭蛇）。牠們往往擁有強大的妖力或奇特的能力，與人類的文明秩序產生衝突。",
            "九尾狐善於幻化與魅惑人心，是法術變幻之祖；禍斗是火神之犬，以火為食，排泄亦為火，所到之處常伴隨離奇天火；蠱雕形似大雕，頭上長角，叫聲如同嬰兒啼哭，生性喜食人；相柳是九頭蛇身的水怪，噴吐出的毒水能令土地化為劇毒的沼澤，寸草不生。牠們是古人對深山大澤中未知危險與野性力量的神話寫照。"
        ]
    },
    four_disasters: {
        title: "四大災獸傳說",
        source: "《山海經》諸山經合編",
        paragraphs: [
            "「異獸現身，天災降世。」在《山海經》中，有一類特殊的異獸，牠們一旦在某個地區出現，就預示著該地即將發生大規模的自然災害。最著名的四大災獸為：蜚（瘟疫）、肥遺（大旱）、蠻蠻（洪水）與猾褢（兵燹）。",
            "蜚居住在太山，形似牛而白首一目，現身則預示天下大疫；肥遺是六足四翼的怪蛇，現則其國大旱；蠻蠻（比翼鳥）僅有一目一翼，需雙隻鳥並肩方能飛行，現身預示天下大水；猾褢外形像人但長著豬鬃般的毛髮，叫聲如砍柴聲，現身預示該地有繁重的勞役或戰爭兵災。牠們是古人將自然災害具象化的體現。"
        ]
    },
    four_spirituals: {
        title: "四大靈獸傳說",
        source: "《禮記 · 禮運》",
        paragraphs: [
            "「麟、鳳、龜、龍，謂之四靈。」在中國古代哲學與宇宙觀中，四靈是指世間最具靈性與智慧的四種神聖生物：麒麟（百獸之長）、鳳凰（百鳥之長）、靈龜（介蟲之長）與神龍（鱗介之長）。",
            "神龍掌管行雲布雨、司雷掌電，代表至高無上的皇權與力量；鳳凰象徵涅槃重生與高潔的德行，為百鳥羽族的首領；麒麟象徵仁慈與繁衍，為陸生走獸的尊領；靈龜則因其長壽，背甲上的紋路對應八卦星圖，代表智慧與先知。四靈融合了五行與八卦的自然法則，是華夏圖騰與生肖文化的重要源頭。"
        ]
    }
};

// 3. Current Filters State
let currentCategory = "all";
let currentRegion = "all";
let activeBeastId = null;

// 4. Dom Elements
const beastGrid = document.getElementById("beast-cards-grid");
const filterStatusText = document.getElementById("filter-status-text");
const navTabs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");

const luoPan = document.getElementById("luo-pan-compass");
const compassCenter = document.getElementById("compass-center");
const directionLabels = document.querySelectorAll(".direction-label");
const needle = document.querySelector(".needle");

// Modals
const beastModal = document.getElementById("beast-modal");
const beastModalClose = document.getElementById("modal-close");
const storyModal = document.getElementById("story-modal");
const storyModalClose = document.getElementById("story-modal-close");

// Modal Elements
const modalImg = document.getElementById("modal-beast-img");
const modalRegion = document.getElementById("modal-beast-region");
const modalCategory = document.getElementById("modal-beast-category");
const modalName = document.getElementById("modal-beast-name");
const modalEnglish = document.getElementById("modal-beast-english");
const modalClassic = document.getElementById("modal-beast-classic");
const modalDesc = document.getElementById("modal-beast-desc");
const statSpiritual = document.getElementById("stat-spiritual");
const statAggression = document.getElementById("stat-aggression");
const statRarity = document.getElementById("stat-rarity");
const valSpiritual = document.getElementById("val-spiritual");
const valAggression = document.getElementById("val-aggression");
const valRarity = document.getElementById("val-rarity");

const modalStoryTitle = document.getElementById("modal-story-title");
const modalStoryBody = document.getElementById("modal-story-body");

// 5. Initialize the App
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    renderBeasts();
    setupTabNavigation();
    setupFilters();
    setupCompass();
    setupModalListeners();
    registerServiceWorker();
});

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js")
            .then(reg => console.log("Service Worker registered successfully on scope:", reg.scope))
            .catch(err => console.error("Service Worker registration failed:", err));
    }
}

// 6. Particle Engine (Spiritual Embers)
function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    const ctx = canvas.getContext("2d");
    
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    window.addEventListener("resize", () => {
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
    });
    
    const particles = [];
    const maxParticles = 65;
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 50;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedY = Math.random() * 0.8 + 0.2;
            this.speedX = Math.random() * 0.6 - 0.3;
            // Gold and warm red particles
            this.color = Math.random() > 0.3 
                ? `rgba(212, 175, 55, ${Math.random() * 0.4 + 0.15})` // Gold
                : `rgba(178, 34, 34, ${Math.random() * 0.3 + 0.1})`;  // Vermilion
            this.alpha = 1;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
        }
        
        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            
            if (this.y < -10) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
        // Stagger positions initially
        particles[i].y = Math.random() * height;
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 7. Helper to get currently filtered beasts list
function getFilteredBeasts() {
    return BEASTS_DATABASE.filter(beast => {
        const matchesCategory = currentCategory === "all" || beast.category === currentCategory;
        const matchesRegion = currentRegion === "all" || beast.region === currentRegion;
        return matchesCategory && matchesRegion;
    });
}

// Render Beasts Cards
function renderBeasts() {
    beastGrid.innerHTML = "";
    
    const filteredBeasts = getFilteredBeasts();
    
    if (filteredBeasts.length === 0) {
        beastGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-ghost"></i>
                <p>此方經脈暫無對應異獸出沒...</p>
                <button class="reset-filter-btn" id="reset-filters">重置篩選</button>
            </div>
        `;
        document.getElementById("reset-filters").addEventListener("click", resetAllFilters);
        filterStatusText.innerText = "沒有找到匹配的異獸";
        return;
    }
    
    filteredBeasts.forEach(beast => {
        const card = document.createElement("div");
        card.className = "beast-card";
        card.setAttribute("data-id", beast.id);
        
        // Badge color mapping
        let badgeClass = "badge-divine";
        if (beast.category === "auspicious") badgeClass = "badge-auspicious";
        if (beast.category === "perilous") badgeClass = "badge-perilous";
        
        card.innerHTML = `
            <div class="beast-image-wrapper">
                <img src="${beast.image}" alt="${beast.nameCn}" loading="lazy" onerror="this.onerror=null; this.src='assets/webp/placeholder_beast.webp';">
                <span class="card-badge ${badgeClass}">${beast.categoryCn}</span>
                <span class="card-region"><i class="fa-solid fa-map-pin"></i> ${beast.regionCn.split(" ")[0]}</span>
            </div>
            <div class="beast-card-info">
                <div class="beast-card-header">
                    <div class="beast-names">
                        <h2 class="beast-title-cn">${beast.nameCn} <span class="beast-zhuyin">(${beast.zhuyin})</span></h2>
                        <span class="beast-title-en">${beast.nameEn}</span>
                    </div>
                </div>
                <p class="beast-classic-extract">${beast.classicText}</p>
                <button class="view-details-btn" data-id="${beast.id}"><i class="fa-solid fa-eye"></i> 觀看異誌</button>
            </div>
        `;
        
        beastGrid.appendChild(card);
    });
    
    // Add Event Listeners for Details buttons
    document.querySelectorAll(".view-details-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            openBeastModal(btn.getAttribute("data-id"));
        });
    });
    
    filterStatusText.innerText = `正在展示：屬性【${getCategoryLabel(currentCategory)}】，地域【${getRegionLabel(currentRegion)}】 (共 ${filteredBeasts.length} 隻)`;
}

// 8. Tab Navigation
function setupTabNavigation() {
    navTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            navTabs.forEach(t => t.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));
            
            // Add active class
            tab.classList.add("active");
            const targetPane = document.getElementById(tab.getAttribute("data-target"));
            targetPane.classList.add("active");
        });
    });
    
    // Setup scroll reading buttons in Tab 2
    document.querySelectorAll(".read-scroll-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            openStoryModal(btn.getAttribute("data-story"));
        });
    });
}

// 9. Filters Handling
function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filterType = btn.getAttribute("data-filter-type");
            const value = btn.getAttribute("data-value");
            
            // Toggle active state in sibling buttons
            const siblings = btn.parentElement.querySelectorAll(".filter-btn");
            siblings.forEach(s => s.classList.remove("active"));
            btn.classList.add("active");
            
            if (filterType === "category") {
                currentCategory = value;
            } else if (filterType === "region") {
                currentRegion = value;
                // Sync compass compass ring active state
                syncCompassState(value);
            }
            
            renderBeasts();
        });
    });
}

// 10. Luo Pan Compass Sync and Interactions
function setupCompass() {
    directionLabels.forEach(label => {
        label.addEventListener("click", (e) => {
            e.stopPropagation(); // Avoid double trigger
            const dir = label.getAttribute("data-dir");
            rotateCompassToDirection(dir);
        });
    });
    
    compassCenter.addEventListener("click", (e) => {
        e.stopPropagation();
        rotateCompassToDirection("central");
    });
}

function rotateCompassToDirection(dir) {
    let rotation = 0;
    
    // De-activate all labels
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    
    if (dir === "north") {
        rotation = 0;
        document.querySelector(".dir-n").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
    } else if (dir === "east") {
        rotation = -90;
        document.querySelector(".dir-e").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(90deg)`;
    } else if (dir === "south") {
        rotation = -180;
        document.querySelector(".dir-s").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(180deg)`;
    } else if (dir === "west") {
        rotation = -270;
        document.querySelector(".dir-w").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(270deg)`;
    } else if (dir === "central") {
        rotation = 45; // Subtle tilt for middle
        compassCenter.classList.add("active");
        needle.style.opacity = "0.2"; // Fade out needle in the center
    }
    
    // Rotate the outer compass disk
    luoPan.style.transform = `rotate(${rotation}deg)`;
    
    // Set Region Filter Value & Trigger render
    currentRegion = dir;
    
    // Update active filter button in tab
    const regionButtons = document.querySelectorAll('#select-region .filter-btn');
    regionButtons.forEach(btn => {
        if (btn.getAttribute("data-value") === dir) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    renderBeasts();
}

function syncCompassState(regionValue) {
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    
    let rotation = 0;
    
    if (regionValue === "north") {
        document.querySelector(".dir-n").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
        rotation = 0;
    } else if (regionValue === "east") {
        document.querySelector(".dir-e").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(90deg)`;
        rotation = -90;
    } else if (regionValue === "south") {
        document.querySelector(".dir-s").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(180deg)`;
        rotation = -180;
    } else if (regionValue === "west") {
        document.querySelector(".dir-w").classList.add("active");
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(270deg)`;
        rotation = -270;
    } else if (regionValue === "central") {
        compassCenter.classList.add("active");
        needle.style.opacity = "0.2";
        rotation = 45;
    } else if (regionValue === "all") {
        needle.style.opacity = "1";
        needle.style.transform = `translateY(11px) rotate(0deg)`;
        rotation = 0;
    }
    
    luoPan.style.transform = `rotate(${rotation}deg)`;
}

// Helper Labels Translation
function getCategoryLabel(category) {
    switch(category) {
        case "divine": return "神獸";
        case "auspicious": return "瑞獸";
        case "perilous": return "凶獸";
        default: return "全部";
    }
}

function getRegionLabel(region) {
    switch(region) {
        case "east": return "東山經";
        case "south": return "南山經";
        case "west": return "西山經";
        case "north": return "北山經";
        case "central": return "中山經";
        default: return "全部";
    }
}

function resetAllFilters() {
    currentCategory = "all";
    currentRegion = "all";
    
    // Reset Filter Button states
    document.querySelectorAll(".filter-btn").forEach(btn => {
        if (btn.getAttribute("data-value") === "all") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Reset compass
    directionLabels.forEach(lbl => lbl.classList.remove("active"));
    compassCenter.classList.remove("active");
    needle.style.opacity = "1";
    needle.style.transform = `translateY(11px) rotate(0deg)`;
    luoPan.style.transform = `rotate(0deg)`;
    
    renderBeasts();
}

// 11. Modal Logic
function openBeastModal(beastId) {
    activeBeastId = beastId;
    const beast = BEASTS_DATABASE.find(b => b.id === beastId);
    if (!beast) return;
    
    // Hide/show navigation buttons based on current list count
    const modalPrevBtn = document.getElementById("modal-prev");
    const modalNextBtn = document.getElementById("modal-next");
    if (modalPrevBtn && modalNextBtn) {
        const listCount = getFilteredBeasts().length;
        if (listCount <= 1) {
            modalPrevBtn.style.display = "none";
            modalNextBtn.style.display = "none";
        } else {
            modalPrevBtn.style.display = "flex";
            modalNextBtn.style.display = "flex";
        }
    }
    
    modalImg.src = beast.image;
    modalImg.alt = beast.nameCn;
    modalRegion.innerHTML = `<i class="fa-solid fa-compass"></i> ${beast.regionCn}`;
    
    modalCategory.innerText = beast.categoryCn;
    modalCategory.className = "beast-category-tag"; // Reset
    if (beast.category === "divine") modalCategory.classList.add("badge-divine");
    if (beast.category === "auspicious") modalCategory.classList.add("badge-auspicious");
    if (beast.category === "perilous") modalCategory.classList.add("badge-perilous");
    
    modalName.innerHTML = `${beast.nameCn} <span class="modal-zhuyin">(${beast.zhuyin})</span>`;
    modalEnglish.innerText = beast.nameEn;
    modalClassic.innerText = beast.classicText;
    modalDesc.innerText = beast.description;
    
    // Stats Bars Animations
    setTimeout(() => {
        statSpiritual.style.width = beast.stats.spiritual + "%";
        statAggression.style.width = beast.stats.aggression + "%";
        statRarity.style.width = beast.stats.rarity + "%";
    }, 100);
    
    valSpiritual.innerText = beast.stats.spiritual;
    valAggression.innerText = beast.stats.aggression;
    valRarity.innerText = beast.stats.rarity;
    
    beastModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable scroll
}

function navigateBeast(direction) {
    const list = getFilteredBeasts();
    if (list.length <= 1) return;
    
    const currentIndex = list.findIndex(b => b.id === activeBeastId);
    if (currentIndex === -1) return;
    
    let nextIndex;
    if (direction === "next") {
        nextIndex = (currentIndex + 1) % list.length;
    } else {
        nextIndex = (currentIndex - 1 + list.length) % list.length;
    }
    
    openBeastModal(list[nextIndex].id);
}

function openStoryModal(storyKey) {
    const story = LORE_DATABASE[storyKey];
    if (!story) return;
    
    modalStoryTitle.innerText = story.title;
    
    modalStoryBody.innerHTML = "";
    story.paragraphs.forEach((p, idx) => {
        const paragraph = document.createElement("p");
        if (idx === 0) {
            paragraph.className = "classic-source";
        }
        paragraph.innerText = p;
        modalStoryBody.appendChild(paragraph);
    });
    
    storyModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function setupModalListeners() {
    // Close Beast Modal
    beastModalClose.addEventListener("click", () => {
        beastModal.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable scroll
    });
    
    beastModal.addEventListener("click", (e) => {
        if (e.target === beastModal) {
            beastModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
    
    // Close Story Modal
    storyModalClose.addEventListener("click", () => {
        storyModal.classList.remove("active");
        document.body.style.overflow = "";
    });
    
    storyModal.addEventListener("click", (e) => {
        if (e.target === storyModal) {
            storyModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
    
    // Left/Right Button Clicks
    const modalPrevBtn = document.getElementById("modal-prev");
    const modalNextBtn = document.getElementById("modal-next");
    if (modalPrevBtn && modalNextBtn) {
        modalPrevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigateBeast("prev");
        });
        modalNextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigateBeast("next");
        });
    }
    
    // Keyboard Navigation & Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            beastModal.classList.remove("active");
            storyModal.classList.remove("active");
            document.body.style.overflow = "";
        }
        
        // Navigation within active beast modal
        if (beastModal.classList.contains("active")) {
            if (e.key === "ArrowLeft") {
                navigateBeast("prev");
            } else if (e.key === "ArrowRight") {
                navigateBeast("next");
            }
        }
    });
    
    // Swipe Gestures on Mobile
    const modalCard = beastModal.querySelector(".modal-card");
    if (modalCard) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        modalCard.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        modalCard.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeDistance = touchEndX - touchStartX;
            const threshold = 60; // minimum swipe distance (pixels)
            
            if (Math.abs(swipeDistance) > threshold) {
                if (swipeDistance < 0) {
                    navigateBeast("next"); // swipe left -> next
                } else {
                    navigateBeast("prev"); // swipe right -> prev
                }
            }
        }, { passive: true });
    }
}
