// Cheerleaders Database
const cheerleaders = [
  {
    "id": "dahye",
    "name": "李多慧 (이다혜)",
    "nameEn": "Dahye Lee",
    "team": "味全龍 Dragon Beauties / 台啤雲豹",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "korea",
    "popularity": 980000,
    "emoji": "🐉",
    "image": "assets/dahye.png",
    "bio": "來自韓國的應援女神，以頂尖的爆發力舞技與極具親和力的標誌性笑容風靡全台，掀起了中職與職籃啦啦隊的「韓流旋風」，實力深受各界認可。",
    "direction": "專業舞蹈編排與表演、個人YouTube Vlogger、電視廣告品牌代言、多棲藝人發展。"
  },
  {
    "id": "mizuki",
    "name": "林襄 (林襄)",
    "nameEn": "Mizuki",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 920000,
    "emoji": "🍒",
    "image": "assets/mizuki.png",
    "bio": "台灣指標性的啦啦隊超人氣隊員，笑容甜美、身形姣好。不僅在球場上活力四射，也是潮流時尚、寫真集與廣告代言的流量焦點，海外名氣響亮。",
    "direction": "時尚模特兒、電視節目主持、寫真書出版、海外娛樂圈活動與戲劇發展。"
  },
  {
    "id": "qunqun",
    "name": "峮峮 (吳函峮)",
    "nameEn": "Qunqun",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 880000,
    "emoji": "🐘",
    "image": "assets/qunqun.png",
    "bio": "憑藉一首「炸裂應援曲」红遍亞洲，擁有鄰家女孩般的甜美笑容與率真性格。多年來深耕球場應援與演藝圈，是橫跨啦啦隊與主持界的老牌女神。",
    "direction": "電視綜藝主持（如《飢餓遊戲》）、影視戲劇演出、品牌聯名代言人。"
  },
  {
    "id": "an",
    "name": "安芝儇 (안지현)",
    "nameEn": "Ji-hyun An",
    "team": "台鋼雄鷹 Wing Stars / 台鋼獵鷹",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "korea",
    "popularity": 750000,
    "emoji": "🦅",
    "image": "assets/an.png",
    "bio": "被譽為韓國「啦啦隊天花板」，身形高挑、舞姿優美儒雅。受邀來台後擔任台鋼啦啦隊總監與核心招招牌，成功將韓式應援的精髓融入本土球隊。",
    "direction": "啦啦隊編舞與培訓總監、跨國體育推廣大使、高階彩妝與時尚代言。"
  },
  {
    "id": "cimei",
    "name": "慈妹 (彭翊慈)",
    "nameEn": "Cimei",
    "team": "富邦悍將 / 台北富邦勇士 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 680000,
    "emoji": "👼",
    "image": "assets/cimei.png",
    "bio": "Fubon Angels 的人氣招招牌，身形嬌小卻有強大的舞台爆發力，畢業於專業舞蹈科系，擅長多元舞風，性格活潑開朗，與現場球迷互動性極強。",
    "direction": "街舞編排與教學、實境節目嘉賓、網路影音主持及運動休閒品牌代言。"
  },
  {
    "id": "se7en",
    "name": "瑟七 (林芮安)",
    "nameEn": "Se7en",
    "team": "統一獅 Uni-Girls / 新竹攻城獅 Muse Girls",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 580000,
    "emoji": "🦁",
    "image": "assets/se7en.png",
    "bio": "橫跨職棒與職籃雙棲，有著甜美深邃的電眼與開朗的陽光氣質，以青春洋溢、毫無架子的活潑表現受到廣大棒籃球迷的喜愛。",
    "direction": "體育球團推廣宣傳、遊戲實況直播、潮流與美妝品牌代言。"
  },
  {
    "id": "faye",
    "name": "斐棋 (許斐棋)",
    "nameEn": "Faye",
    "team": "統一獅 Uni-Girls / 極速超跑女排",
    "leagues": [
      "cpbl",
      "tvl"
    ],
    "nationality": "taiwan",
    "popularity": 450000,
    "emoji": "🥁",
    "image": "assets/faye.png",
    "bio": "充滿音樂才華與爵士鼓實力的啦啦隊女孩，身兼職棒 Uni-Girls 與企業排球聯賽「極速超跑女排」應援，以多元才藝與活力體態為特色。",
    "direction": "爵士鼓與樂器表演、戲劇與廣告演出、運動與體態管理推廣大使。"
  },
  {
    "id": "like",
    "name": "賴可 (賴鈺涵)",
    "nameEn": "Like",
    "team": "味全龍 Dragon Beauties / 台北鯨華女排",
    "leagues": [
      "cpbl",
      "tvl"
    ],
    "nationality": "taiwan",
    "popularity": 400000,
    "emoji": "🏐",
    "image": "assets/like.png",
    "bio": "熱情陽光、笑容大方，同時在職棒場與排球場（台北鯨華女排）賣力應援。親和力十足，擅長帶動球場熱烈氛圍，深受排球與棒球迷支持。",
    "direction": "運動戶外直播、健康生活與健身運動推廣、旅遊外景節目主持。"
  },
  {
    "id": "chihiro",
    "name": "千紘 (山口千紘)",
    "nameEn": "Chihiro",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "japan",
    "popularity": 420000,
    "emoji": "🇯🇵",
    "image": "assets/chihiro.png",
    "bio": "來自日本的啦啦隊美少女，將精緻可愛的日式應援風格帶進中華職棒。舞蹈動作乾淨俐落、元氣滿滿，短時間內累積了極高的跨國人氣。",
    "direction": "台日文化交流推廣、日系商品與旅遊代言、舞蹈培訓交流。"
  },
  {
    "id": "lanlan",
    "name": "籃籃 (籃籃)",
    "nameEn": "Lan Lan",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 450000,
    "emoji": "🍊",
    "image": "assets/lanlan.png",
    "bio": "樂天女孩隊長，以古靈精怪、開朗討喜的形象深受球迷喜愛，也是多檔知名電視綜藝節目的核心主持，人氣居高不下。",
    "direction": "電視節目主持、品牌代言、跨足綜藝影視發展、啦啦隊隊長與編舞管理。"
  },
  {
    "id": "hayul",
    "name": "邊荷律 (변하율)",
    "nameEn": "Ha-yul Byun",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 380000,
    "emoji": "🐻",
    "image": "assets/hayul.png",
    "bio": "來自韓國的超人氣應援女神，擁有極高人氣與超萌的表情包，跳舞時極具渲染力，性格可愛呆萌，深受中職球迷喜愛。",
    "direction": "短影音創作、個人品牌聯名、韓式應援教學、多棲藝人發展。"
  },
  {
    "id": "yayeong",
    "name": "李雅英 (이아整理)",
    "nameEn": "Yayeong Lee",
    "team": "富邦悍將 / 台啤雲豹 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "korea",
    "popularity": 700000,
    "emoji": "🌸",
    "image": "assets/yayeong.png",
    "bio": "被譽為「全民表妹」，高挑迷人的身段與招牌酒窩笑容擄獲無數球迷，雙棲職棒與職籃應援，舞姿優美流暢，舞台魅力驚人。",
    "direction": "模特兒與時尚走秀、跨國體育推廣、美妝與服飾代言、舞蹈藝術編排。"
  },
  {
    "id": "mingo",
    "name": "趙娟週 (조연주)",
    "nameEn": "Mingo",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 320000,
    "emoji": "🍑",
    "image": "assets/mingo.png",
    "bio": "有著「啦啦隊界艾琳」的清純稱號，高超的舞蹈技巧與無害的清純臉龐形成強烈反差，受邀加入統一獅後迅速累積本土人氣。",
    "direction": "台日韓啦啦隊交流、日韓美妝產品代言、個人YouTube頻道、演藝舞蹈發展。"
  },
  {
    "id": "hojung",
    "name": "李晧禎 (이호정)",
    "nameEn": "Hojung Lee",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 410000,
    "emoji": "❄️",
    "image": "assets/hojung.png",
    "bio": "被譽為「釜山女神」，擁有高冷冷艷的精緻外型，但私底下極具親和力且活潑開朗，具有極強的舞台氣場與粉絲互動魅力。",
    "direction": "高階時尚品牌合作、彩妝代言、模特兒、個人日常Vlog創作。"
  },
  {
    "id": "emily",
    "name": "秀秀子 (秀秀子)",
    "nameEn": "Emily",
    "team": "富邦悍將 / 台北富邦勇士 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 280000,
    "emoji": "🦢",
    "image": "assets/emily.png",
    "bio": "Fubon Angels 的核心成員兼隊長，舞台表演張力十足，嗓音甜美，口才與主持能力極佳，畢業於藝術大學，表演才華橫溢。",
    "direction": "商業活動主持、舞台劇與戲劇演出、舞蹈編排、戶外健康品牌推廣。"
  },
  {
    "id": "mimi",
    "name": "冞冞 (Mimi)",
    "nameEn": "Mimi",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 350000,
    "emoji": "💫",
    "image": "assets/se7en.png",
    "bio": "統一獅 Uni-Girls 的超人氣成員，以甜美的笑容與精湛的舞技深受球迷喜愛。在看台上充滿活力的應援表現，具有強大的渲染力與親和力。",
    "direction": "個人自媒體經營、商業活動主持、美妝與穿搭代言、運動休閒推廣。"
  },
  {
    "id": "wenwen",
    "name": "汶汶 (Wenwen)",
    "nameEn": "Wenwen",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 360000,
    "emoji": "🐘",
    "image": "assets/qunqun.png",
    "bio": "中信兄弟 Passion Sisters 的活力成員，以青春亮麗的外型與充滿陽光朝氣的笑容為特色。在球場上展現滿滿的熱情，與球迷的互動親切又自然。",
    "direction": "綜藝節目嘉賓、平面模特兒、品牌大使、自媒體經營與舞蹈表演。"
  },
  {
    "id": "member_18",
    "name": "李雅英 (이아영)",
    "nameEn": "Member_18",
    "team": "富邦悍將 / 台啤雲豹 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "korea",
    "popularity": 334415,
    "emoji": "🌸",
    "image": "assets/qunqun.png",
    "bio": "性格活潑、古靈精怪，在 富邦悍將 / 台啤雲豹 Fubon Angels 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_19",
    "name": "南珉貞 (남민정)",
    "nameEn": "Member_19",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 310735,
    "emoji": "🌻",
    "image": "assets/an.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 富邦悍將 Fubon Angels 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_20",
    "name": "朴旻曙 (박민서)",
    "nameEn": "Member_20",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 596356,
    "emoji": "💎",
    "image": "assets/cimei.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台鋼雄鷹 Wing Stars 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_21",
    "name": "李丹妃 (이단비)",
    "nameEn": "Member_21",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 525411,
    "emoji": "🔥",
    "image": "assets/se7en.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 中信兄弟 Passion Sisters 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_22",
    "name": "金泰雅 (김태아)",
    "nameEn": "Member_22",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "korea",
    "popularity": 468563,
    "emoji": "🍭",
    "image": "assets/faye.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台鋼雄鷹 Wing Stars 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_23",
    "name": "希美 (Nozomi)",
    "nameEn": "Member_23",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "japan",
    "popularity": 129069,
    "emoji": "🌸",
    "image": "assets/like.png",
    "bio": "性格活潑、古靈精怪，在 統一獅 Uni-Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_24",
    "name": "十元 (Towa)",
    "nameEn": "Member_24",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "japan",
    "popularity": 489391,
    "emoji": "🍡",
    "image": "assets/chihiro.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_25",
    "name": "詩雅 (Shia)",
    "nameEn": "Member_25",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "japan",
    "popularity": 597915,
    "emoji": "🍣",
    "image": "assets/lanlan.png",
    "bio": "畢業於專業舞蹈學系，身兼 味全龍 Dragon Beauties 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_26",
    "name": "拉拉",
    "nameEn": "Member_26",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 268557,
    "emoji": "👟",
    "image": "assets/hayul.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 味全龍 Dragon Beauties 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_27",
    "name": "凱蒂",
    "nameEn": "Member_27",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 318571,
    "emoji": "🔥",
    "image": "assets/yayeong.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 中信兄弟 Passion Sisters 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_28",
    "name": "綠綠",
    "nameEn": "Member_28",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 348164,
    "emoji": "🍀",
    "image": "assets/mingo.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 富邦悍將 Fubon Angels 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_29",
    "name": "柔一",
    "nameEn": "Member_29",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 323579,
    "emoji": "🌈",
    "image": "assets/hojung.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 統一獅 Uni-Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_30",
    "name": "沛沛",
    "nameEn": "Member_30",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 259572,
    "emoji": "🍀",
    "image": "assets/emily.png",
    "bio": "畢業於專業舞蹈學系，身兼 味全龍 Dragon Beauties 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_31",
    "name": "軒軒",
    "nameEn": "Member_31",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 327263,
    "emoji": "🎵",
    "image": "assets/dahye.png",
    "bio": "為 味全龍 Dragon Beauties 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_32",
    "name": "侯芳",
    "nameEn": "Member_32",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 653151,
    "emoji": "🌈",
    "image": "assets/mizuki.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 統一獅 Uni-Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_33",
    "name": "小映",
    "nameEn": "Member_33",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 486966,
    "emoji": "💫",
    "image": "assets/qunqun.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_34",
    "name": "寧寧",
    "nameEn": "Member_34",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 663191,
    "emoji": "💗",
    "image": "assets/an.png",
    "bio": "為 味全龍 Dragon Beauties 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "mika",
    "name": "Mika",
    "nameEn": "Mika",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 419870,
    "emoji": "😻",
    "image": "assets/cimei.png",
    "bio": "為 台新戰神 Taishin Wonders 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_36",
    "name": "洗菜",
    "nameEn": "Member_36",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 642966,
    "emoji": "🌈",
    "image": "assets/se7en.png",
    "bio": "性格活潑、古靈精怪，在 台新戰神 Taishin Wonders 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_37",
    "name": "林浠",
    "nameEn": "Member_37",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 269889,
    "emoji": "⭐",
    "image": "assets/faye.png",
    "bio": "畢業於專業舞蹈學系，身兼 台鋼雄鷹 Wing Stars 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_38",
    "name": "心璇",
    "nameEn": "Member_38",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 436665,
    "emoji": "⭐",
    "image": "assets/like.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_39",
    "name": "毛毛",
    "nameEn": "Member_39",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 136476,
    "emoji": "🍀",
    "image": "assets/chihiro.png",
    "bio": "為 台鋼雄鷹 Wing Stars 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_40",
    "name": "柴柴",
    "nameEn": "Member_40",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 521783,
    "emoji": "💫",
    "image": "assets/lanlan.png",
    "bio": "畢業於專業舞蹈學系，身兼 統一獅 Uni-Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_41",
    "name": "小安",
    "nameEn": "Member_41",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 602014,
    "emoji": "💗",
    "image": "assets/hayul.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 中信兄弟 Passion Sisters 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_42",
    "name": "穎樂",
    "nameEn": "Member_42",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 462698,
    "emoji": "🍀",
    "image": "assets/yayeong.png",
    "bio": "性格活潑、古靈精怪，在 樂天桃猿 Rakuten Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_43",
    "name": "奶昔",
    "nameEn": "Member_43",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 203484,
    "emoji": "✨",
    "image": "assets/mingo.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 富邦悍將 Fubon Angels 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_44",
    "name": "口水",
    "nameEn": "Member_44",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 630404,
    "emoji": "📣",
    "image": "assets/hojung.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_45",
    "name": "熊霓",
    "nameEn": "Member_45",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 141041,
    "emoji": "🎀",
    "image": "assets/emily.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_46",
    "name": "溫妮",
    "nameEn": "Member_46",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 314369,
    "emoji": "📣",
    "image": "assets/dahye.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_47",
    "name": "儀諠",
    "nameEn": "Member_47",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 273456,
    "emoji": "🔥",
    "image": "assets/mizuki.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 中信兄弟 Passion Sisters 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "wendy",
    "name": "Wendy",
    "nameEn": "Wendy",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 393802,
    "emoji": "🎉",
    "image": "assets/qunqun.png",
    "bio": "畢業於專業舞蹈學系，身兼 台啤雲豹 電豹女 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_49",
    "name": "珍妮",
    "nameEn": "Member_49",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 594966,
    "emoji": "🍬",
    "image": "assets/an.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台鋼雄鷹 Wing Stars 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_50",
    "name": "吉拿",
    "nameEn": "Member_50",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 195516,
    "emoji": "😻",
    "image": "assets/cimei.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台啤雲豹 電豹女 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_51",
    "name": "琳妲",
    "nameEn": "Member_51",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 135423,
    "emoji": "🍀",
    "image": "assets/se7en.png",
    "bio": "性格活潑、古靈精怪，在 樂天桃猿 Rakuten Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_52",
    "name": "妙妙",
    "nameEn": "Member_52",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 255136,
    "emoji": "💗",
    "image": "assets/faye.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 統一獅 Uni-Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_53",
    "name": "短今",
    "nameEn": "Member_53",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 720705,
    "emoji": "🎉",
    "image": "assets/like.png",
    "bio": "為 中信兄弟 Passion Sisters 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_54",
    "name": "菲菲",
    "nameEn": "Member_54",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 341944,
    "emoji": "🎉",
    "image": "assets/chihiro.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 樂天桃猿 Rakuten Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_55",
    "name": "艾莉",
    "nameEn": "Member_55",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 152122,
    "emoji": "💖",
    "image": "assets/lanlan.png",
    "bio": "畢業於專業舞蹈學系，身兼 台鋼雄鷹 Wing Stars 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "queena",
    "name": "Queena",
    "nameEn": "Queena",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 311738,
    "emoji": "⭐",
    "image": "assets/hayul.png",
    "bio": "為 台新戰神 Taishin Wonders 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_57",
    "name": "咪雅",
    "nameEn": "Member_57",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 497398,
    "emoji": "🎉",
    "image": "assets/yayeong.png",
    "bio": "為 統一獅 Uni-Girls 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_58",
    "name": "琪琪",
    "nameEn": "Member_58",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 457235,
    "emoji": "⭐",
    "image": "assets/mingo.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_59",
    "name": "艾妮",
    "nameEn": "Member_59",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 264479,
    "emoji": "⭐",
    "image": "assets/hojung.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 統一獅 Uni-Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_60",
    "name": "草莓",
    "nameEn": "Member_60",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 286013,
    "emoji": "🎉",
    "image": "assets/emily.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台啤雲豹 電豹女 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_61",
    "name": "岱縈",
    "nameEn": "Member_61",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 233388,
    "emoji": "💫",
    "image": "assets/dahye.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_62",
    "name": "少鹽",
    "nameEn": "Member_62",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 366556,
    "emoji": "💗",
    "image": "assets/mizuki.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 福爾摩沙夢想家 Formosa Sexy 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_63",
    "name": "卉妮",
    "nameEn": "Member_63",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 255701,
    "emoji": "🍬",
    "image": "assets/qunqun.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_64",
    "name": "禹菡",
    "nameEn": "Member_64",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 296730,
    "emoji": "⭐",
    "image": "assets/an.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_65",
    "name": "其其",
    "nameEn": "Member_65",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 648925,
    "emoji": "🎵",
    "image": "assets/cimei.png",
    "bio": "為 福爾摩沙夢想家 Formosa Sexy 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_66",
    "name": "宜婷",
    "nameEn": "Member_66",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 461147,
    "emoji": "📣",
    "image": "assets/se7en.png",
    "bio": "畢業於專業舞蹈學系，身兼 台鋼雄鷹 Wing Stars 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_67",
    "name": "沁沁",
    "nameEn": "Member_67",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 260837,
    "emoji": "🔥",
    "image": "assets/faye.png",
    "bio": "畢業於專業舞蹈學系，身兼 富邦悍將 Fubon Angels 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_68",
    "name": "馬妹",
    "nameEn": "Member_68",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 269580,
    "emoji": "💖",
    "image": "assets/like.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_69",
    "name": "麥麥",
    "nameEn": "Member_69",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 463973,
    "emoji": "👟",
    "image": "assets/chihiro.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 統一獅 Uni-Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_70",
    "name": "潔米",
    "nameEn": "Member_70",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 718703,
    "emoji": "🍬",
    "image": "assets/lanlan.png",
    "bio": "性格活潑、古靈精怪，在 富邦悍將 Fubon Angels 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_71",
    "name": "雅惟",
    "nameEn": "Member_71",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 485461,
    "emoji": "✨",
    "image": "assets/hayul.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 富邦悍將 Fubon Angels 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_72",
    "name": "宣宣",
    "nameEn": "Member_72",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 318797,
    "emoji": "📣",
    "image": "assets/yayeong.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台鋼雄鷹 Wing Stars 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_73",
    "name": "妮妮",
    "nameEn": "Member_73",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 585184,
    "emoji": "💗",
    "image": "assets/mingo.png",
    "bio": "為 統一獅 Uni-Girls 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_74",
    "name": "妡妡",
    "nameEn": "Member_74",
    "team": "台鋼雄鷹 Wing Stars",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 546792,
    "emoji": "👟",
    "image": "assets/hojung.png",
    "bio": "為 台鋼雄鷹 Wing Stars 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_75",
    "name": "怡琪",
    "nameEn": "Member_75",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 401507,
    "emoji": "👟",
    "image": "assets/emily.png",
    "bio": "性格活潑、古靈精怪，在 中信兄弟 Passion Sisters 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_76",
    "name": "柳柳",
    "nameEn": "Member_76",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 718842,
    "emoji": "⭐",
    "image": "assets/dahye.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台新戰神 Taishin Wonders 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_77",
    "name": "檸檬",
    "nameEn": "Member_77",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 556811,
    "emoji": "⭐",
    "image": "assets/mizuki.png",
    "bio": "畢業於專業舞蹈學系，身兼 富邦悍將 Fubon Angels 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_78",
    "name": "艾莉絲",
    "nameEn": "Member_78",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 733956,
    "emoji": "✨",
    "image": "assets/qunqun.png",
    "bio": "畢業於專業舞蹈學系，身兼 富邦悍將 Fubon Angels 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_79",
    "name": "凱伊",
    "nameEn": "Member_79",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 376114,
    "emoji": "🎉",
    "image": "assets/an.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_80",
    "name": "小珍奶",
    "nameEn": "Member_80",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 645331,
    "emoji": "💫",
    "image": "assets/cimei.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 味全龍 Dragon Beauties 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_81",
    "name": "心韻",
    "nameEn": "Member_81",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 288777,
    "emoji": "💗",
    "image": "assets/se7en.png",
    "bio": "畢業於專業舞蹈學系，身兼 樂天桃猿 Rakuten Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_82",
    "name": "陳伊",
    "nameEn": "Member_82",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 648728,
    "emoji": "👟",
    "image": "assets/faye.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 樂天桃猿 Rakuten Girls 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_83",
    "name": "媛媛",
    "nameEn": "Member_83",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 744594,
    "emoji": "🍬",
    "image": "assets/like.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 福爾摩沙夢想家 Formosa Sexy 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_84",
    "name": "曼容",
    "nameEn": "Member_84",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 409373,
    "emoji": "🎵",
    "image": "assets/chihiro.png",
    "bio": "為 中信兄弟 Passion Sisters 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_85",
    "name": "希雅",
    "nameEn": "Member_85",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 380749,
    "emoji": "✨",
    "image": "assets/lanlan.png",
    "bio": "畢業於專業舞蹈學系，身兼 統一獅 Uni-Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_86",
    "name": "張晴",
    "nameEn": "Member_86",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 464692,
    "emoji": "🌈",
    "image": "assets/hayul.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 味全龍 Dragon Beauties 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_87",
    "name": "諺諺",
    "nameEn": "Member_87",
    "team": "台啤雲豹 電豹女",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 691936,
    "emoji": "👟",
    "image": "assets/yayeong.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台啤雲豹 電豹女 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_88",
    "name": "橘兒",
    "nameEn": "Member_88",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 556159,
    "emoji": "⭐",
    "image": "assets/mingo.png",
    "bio": "為 台新戰神 Taishin Wonders 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_89",
    "name": "苡萱",
    "nameEn": "Member_89",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 260120,
    "emoji": "✨",
    "image": "assets/hojung.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_90",
    "name": "晴兒",
    "nameEn": "Member_90",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 189233,
    "emoji": "💫",
    "image": "assets/emily.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 中信兄弟 Passion Sisters 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "yuki",
    "name": "Yuki",
    "nameEn": "Yuki",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 546685,
    "emoji": "💫",
    "image": "assets/dahye.png",
    "bio": "畢業於專業舞蹈學系，身兼 統一獅 Uni-Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_92",
    "name": "詩雅",
    "nameEn": "Member_92",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 669156,
    "emoji": "⭐",
    "image": "assets/mizuki.png",
    "bio": "性格活潑、古靈精怪，在 統一獅 Uni-Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_93",
    "name": "蘿拉",
    "nameEn": "Member_93",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 597481,
    "emoji": "📣",
    "image": "assets/qunqun.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 味全龍 Dragon Beauties 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_94",
    "name": "梓梓",
    "nameEn": "Member_94",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 347551,
    "emoji": "👟",
    "image": "assets/an.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 福爾摩沙夢想家 Formosa Sexy 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_95",
    "name": "迪迪",
    "nameEn": "Member_95",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 223909,
    "emoji": "📣",
    "image": "assets/cimei.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 台新戰神 Taishin Wonders 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_96",
    "name": "愛麗絲",
    "nameEn": "Member_96",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 562128,
    "emoji": "🎵",
    "image": "assets/se7en.png",
    "bio": "為 福爾摩沙夢想家 Formosa Sexy 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_97",
    "name": "小蛙",
    "nameEn": "Member_97",
    "team": "味全龍 Dragon Beauties",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 530724,
    "emoji": "🎉",
    "image": "assets/faye.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 味全龍 Dragon Beauties 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_98",
    "name": "少少",
    "nameEn": "Member_98",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 217608,
    "emoji": "⭐",
    "image": "assets/like.png",
    "bio": "畢業於專業舞蹈學系，身兼 統一獅 Uni-Girls 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_99",
    "name": "卡卡",
    "nameEn": "Member_99",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 166256,
    "emoji": "💫",
    "image": "assets/chihiro.png",
    "bio": "為 富邦悍將 Fubon Angels 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "member_100",
    "name": "丹丹",
    "nameEn": "Member_100",
    "team": "富邦悍將 Fubon Angels",
    "leagues": [
      "cpbl",
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 280474,
    "emoji": "🎉",
    "image": "assets/lanlan.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 富邦悍將 Fubon Angels 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_101",
    "name": "畇二",
    "nameEn": "Member_101",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 242432,
    "emoji": "🍬",
    "image": "assets/hayul.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 中信兄弟 Passion Sisters 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。"
  },
  {
    "id": "member_102",
    "name": "筠熹",
    "nameEn": "Member_102",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 387141,
    "emoji": "🍀",
    "image": "assets/yayeong.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_103",
    "name": "十元",
    "nameEn": "Member_103",
    "team": "樂天桃猿 Rakuten Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 494522,
    "emoji": "🎀",
    "image": "assets/mingo.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 樂天桃猿 Rakuten Girls 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  },
  {
    "id": "member_104",
    "name": "莎莎",
    "nameEn": "Member_104",
    "team": "福爾摩沙夢想家 Formosa Sexy",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 707623,
    "emoji": "✨",
    "image": "assets/hojung.png",
    "bio": "擁有鄰家女孩般的親切氣質，是 福爾摩沙夢想家 Formosa Sexy 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "direction": "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
  },
  {
    "id": "member_105",
    "name": "波波",
    "nameEn": "Member_105",
    "team": "中信兄弟 Passion Sisters",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 271209,
    "emoji": "🍬",
    "image": "assets/emily.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 中信兄弟 Passion Sisters 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。"
  },
  {
    "id": "member_106",
    "name": "蔓妮",
    "nameEn": "Member_106",
    "team": "台新戰神 Taishin Wonders",
    "leagues": [
      "tpbl"
    ],
    "nationality": "taiwan",
    "popularity": 722824,
    "emoji": "✨",
    "image": "assets/dahye.png",
    "bio": "以清純甜美的氣質與治癒人心的笑容風靡看台，是 台新戰神 Taishin Wonders 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。",
    "direction": "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。"
  },
  {
    "id": "joy",
    "name": "Joy",
    "nameEn": "Joy",
    "team": "統一獅 Uni-Girls",
    "leagues": [
      "cpbl"
    ],
    "nationality": "taiwan",
    "popularity": 658401,
    "emoji": "🍀",
    "image": "assets/mizuki.png",
    "bio": "性格活潑、古靈精怪，在 統一獅 Uni-Girls 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "direction": "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。"
  }
];

// Current State
let activeLeague = "all";
let activeNationality = "all";
let selectedCheerleaderId = "dahye"; // default selected cheerleader ID

// Render original stats on load
document.addEventListener("DOMContentLoaded", () => {
    renderAllCards();
    updateCansProbability();
});

// Filter functions
function filterLeague(league) {
    activeLeague = league;
    document.querySelectorAll(".league-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`lbtn-${league}`).classList.add("active");
    syncSelectionWithFilter();
    renderAllCards();
    updateCansProbability();
}

function filterNationality(nat) {
    activeNationality = nat;
    document.querySelectorAll(".nat-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`nbtn-${nat}`).classList.add("active");
    syncSelectionWithFilter();
    renderAllCards();
    updateCansProbability();
}

// Get currently filtered list
function getFilteredList() {
    return cheerleaders.filter(c => {
        const leagueMatch = (activeLeague === "all" || c.leagues.includes(activeLeague));
        const natMatch = (activeNationality === "all" || c.nationality === activeNationality);
        return leagueMatch && natMatch;
    });
}

// Get probability of a cheerleader in the current filtered pool
function getCheerleaderProbabilityText(c) {
    if (!c) return "0.00%";
    const filtered = getFilteredList();
    const isInPool = filtered.some(item => item.id === c.id);
    if (!isInPool) return "0.00% (不在候選池中)";
    const sumSqrt = filtered.reduce((sum, item) => sum + Math.sqrt(item.popularity), 0);
    if (sumSqrt === 0) return "0.00%";
    const prob = (Math.sqrt(c.popularity) / sumSqrt) * 100;
    return prob.toFixed(2) + "%";
}

// Handle cheerleader card click from the pool
function selectCheerleader(c) {
    selectedCheerleaderId = c.id;
    
    // Update selected styling in pool grid
    document.querySelectorAll(".cheer-mini-card").forEach(card => {
        if (card.getAttribute("data-id") === c.id) {
            card.classList.add("selected");
        } else {
            card.classList.remove("selected");
        }
    });
    
    // Render in spotlight
    const probText = getCheerleaderProbabilityText(c);
    renderPreviewCard(c, probText, false);
    triggerCelebration();
}

// Sync currently selected cheerleader when filters change
function syncSelectionWithFilter() {
    const filtered = getFilteredList();
    if (filtered.length === 0) {
        selectedCheerleaderId = null;
        const probEl = document.getElementById("spotlight-prob");
        if (probEl) probEl.textContent = "0.00%";
        return;
    }
    
    const isSelectedInPool = filtered.some(c => c.id === selectedCheerleaderId);
    if (!isSelectedInPool) {
        selectedCheerleaderId = filtered[0].id;
    }
    
    const selectedCheerleader = filtered.find(c => c.id === selectedCheerleaderId);
    const probText = getCheerleaderProbabilityText(selectedCheerleader);
    renderPreviewCard(selectedCheerleader, probText, false);
}

// Render cards in the pool gallery
function renderAllCards() {
    const listContainer = document.getElementById("cheer-grid");
    if (!listContainer) return;
    const filtered = getFilteredList();
    listContainer.innerHTML = "";
    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="no-data">沒有符合篩選條件的隊員</div>`;
        return;
    }
    filtered.forEach(c => {
        // Translate leagues
        const leagueBadges = c.leagues.map(l => {
            if (l === "cpbl") return `<span class="badge badge-cpbl">職棒</span>`;
            if (l === "tpbl") return `<span class="badge badge-tpbl">職籃</span>`;
            return `<span class="badge badge-tvl">職排</span>`;
        }).join(" ");

        // Translate nationality
        let natText = "台灣";
        if (c.nationality === "korea") natText = "韓國";
        if (c.nationality === "japan") natText = "日本";

        const card = document.createElement("div");
        card.className = "cheer-mini-card" + (c.id === selectedCheerleaderId ? " selected" : "");
        card.setAttribute("data-id", c.id);
        card.onclick = () => selectCheerleader(c);
        card.innerHTML = `
            <div class="mini-card-img" style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 199, 44, 0.05) 100%)">
                <img src="${c.image}" alt="${c.name}">
            </div>
            <div class="mini-card-info">
                <h4>${c.emoji} ${c.name}</h4>
                <p class="mini-card-team">${c.team}</p>
                <div class="mini-card-badges">
                    <span class="badge-nat">${natText}</span>
                    ${leagueBadges}
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Update the probability badges on the screen without spinning
function updateCansProbability() {
    const filtered = getFilteredList();
    const poolCountText = document.getElementById("pool-count");
    if (poolCountText) {
        poolCountText.textContent = `當前篩選池：${filtered.length} 人`;
    }
}

// Weighted Random Picker based on SQRT(popularity)
function spinWheel() {
    const filtered = getFilteredList();
    if (filtered.length === 0) {
        alert("當前篩選池內沒有隊員，請調整篩選標籤！");
        return;
    }
    const btn = document.getElementById("btn-spin");
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> 正在應援抽選...`;

    // Visual Spin Effect (rapid swapping name/image)
    let count = 0;
    const maxSpins = 25;
    const interval = setInterval(() => {
        const tempIdx = Math.floor(Math.random() * filtered.length);
        const temp = filtered[tempIdx];
        renderPreviewCard(temp, "?%", true);
        count++;
        
        if (count >= maxSpins) {
            clearInterval(interval);
            
            // Execute the actual math picker
            const weights = filtered.map(c => Math.sqrt(c.popularity));
            const totalWeight = weights.reduce((sum, w) => sum + w, 0);
            const randomNum = Math.random() * totalWeight;
            
            let winner = filtered[filtered.length - 1];
            let winnerProb = 0;
            let weightSum = 0;
            
            for (let i = 0; i < filtered.length; i++) {
                weightSum += weights[i];
                if (randomNum <= weightSum) {
                    winner = filtered[i];
                    winnerProb = (weights[i] / totalWeight) * 100;
                    break;
                }
            }
            
            // Display Winner
            selectedCheerleaderId = winner.id;
            document.querySelectorAll(".cheer-mini-card").forEach(card => {
                if (card.getAttribute("data-id") === winner.id) {
                    card.classList.add("selected");
                } else {
                    card.classList.remove("selected");
                }
            });
            renderPreviewCard(winner, winnerProb.toFixed(2) + "%", false);
            triggerCelebration();
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-ranking-star"></i> 開始隨機應援！`;
        }
    }, 80);
}

// Show the cheerleader in the spotlight card
function renderPreviewCard(c, probText, isSpinning) {
    const imgEl = document.getElementById("spotlight-img");
    const nameEl = document.getElementById("spotlight-name");
    const teamEl = document.getElementById("spotlight-team");
    const popEl = document.getElementById("spotlight-popularity");
    const sqrtEl = document.getElementById("spotlight-sqrt");
    const probEl = document.getElementById("spotlight-prob");
    const bioEl = document.getElementById("spotlight-bio");
    const dirEl = document.getElementById("spotlight-direction");

    // Images
    imgEl.src = c.image;
    imgEl.alt = c.name;

    if (isSpinning) {
        imgEl.classList.add("spinning-effect");
        nameEl.textContent = `${c.emoji} ???`;
        teamEl.textContent = "正在連線球場...";
        popEl.textContent = "計算中...";
        sqrtEl.textContent = "計算中...";
        probEl.textContent = probText;
        bioEl.textContent = "正在下載個人應援簡歷資訊...";
        dirEl.textContent = "正在載入職業生涯方向資訊...";
    } else {
        imgEl.classList.remove("spinning-effect");
        let natText = "台灣籍 (Taiwan)";
        if (c.nationality === "korea") natText = "韓國籍 (Korea)";
        if (c.nationality === "japan") natText = "日本籍 (Japan)";
        
        nameEl.innerHTML = `${c.emoji} ${c.name} <span class="spotlight-nat">${natText}</span>`;
        teamEl.textContent = c.team;
        popEl.textContent = c.popularity.toLocaleString();
        sqrtEl.textContent = Math.sqrt(c.popularity).toFixed(1);
        probEl.textContent = probText;
        bioEl.textContent = c.bio;
        dirEl.textContent = c.direction;
    }
}

// Celebration particle effects (simplified canvas or simple emojis)
function triggerCelebration() {
    const card = document.querySelector(".spotlight-card");
    if (!card) return;
    card.classList.add("bounce-anim");
    setTimeout(() => {
        card.classList.remove("bounce-anim");
    }, 600);
}

// Keyboard arrow navigation
document.addEventListener("keydown", (e) => {
    // Ignore keypresses inside input fields to preserve native typing
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.isContentEditable) {
        return;
    }

    const filtered = getFilteredList();
    if (filtered.length === 0) return;

    const cards = Array.from(document.querySelectorAll(".cheer-mini-card"));
    if (cards.length === 0) return;

    let currentIndex = cards.findIndex(card => card.getAttribute("data-id") === selectedCheerleaderId);
    
    // If no card is selected, highlight the first card upon pressing any arrow key
    if (currentIndex === -1) {
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
            const firstCheerleader = filtered[0];
            selectCheerleader(firstCheerleader);
            e.preventDefault();
        }
        return;
    }

    let nextIndex = currentIndex;

    if (e.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + cards.length) % cards.length;
        const targetId = cards[nextIndex].getAttribute("data-id");
        const cheerleader = filtered.find(c => c.id === targetId);
        if (cheerleader) {
            selectCheerleader(cheerleader);
            scrollToSelectedCard(cards[nextIndex]);
        }
        e.preventDefault();
    } else if (e.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % cards.length;
        const targetId = cards[nextIndex].getAttribute("data-id");
        const cheerleader = filtered.find(c => c.id === targetId);
        if (cheerleader) {
            selectCheerleader(cheerleader);
            scrollToSelectedCard(cards[nextIndex]);
        }
        e.preventDefault();
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        const currentCard = cards[currentIndex];
        const currentRect = currentCard.getBoundingClientRect();
        const currentCenter = currentRect.left + currentRect.width / 2;
        
        let bestCandidate = null;
        let minDistance = Infinity;

        cards.forEach((card, idx) => {
            if (idx === currentIndex) return;
            const rect = card.getBoundingClientRect();
            const center = rect.left + rect.width / 2;
            
            // Determine vertical relationship with offset threshold
            const isAbove = rect.bottom <= currentRect.top + 5;
            const isBelow = rect.top >= currentRect.bottom - 5;
            
            if ((e.key === "ArrowUp" && isAbove) || (e.key === "ArrowDown" && isBelow)) {
                const dy = rect.top - currentRect.top;
                const dx = center - currentCenter;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    bestCandidate = card;
                }
            }
        });

        if (bestCandidate) {
            const targetId = bestCandidate.getAttribute("data-id");
            const cheerleader = filtered.find(c => c.id === targetId);
            if (cheerleader) {
                selectCheerleader(cheerleader);
                scrollToSelectedCard(bestCandidate);
            }
        }
        e.preventDefault();
    }
});

// Helper to scroll the selected card into view smoothly
function scrollToSelectedCard(cardElement) {
    if (!cardElement) return;
    cardElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
