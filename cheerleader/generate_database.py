import json
import random

# Core 15 cheerleaders (with custom details to preserve their authentic profiles)
core_cheerleaders = [
  {
    "id": "dahye",
    "name": "李多慧 (이다혜)",
    "nameEn": "Dahye Lee",
    "team": "味全龍 Dragon Beauties / 台啤雲豹",
    "leagues": ["cpbl", "tpbl"],
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
    "leagues": ["cpbl"],
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
    "leagues": ["cpbl"],
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
    "leagues": ["cpbl", "tpbl"],
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
    "leagues": ["cpbl", "tpbl"],
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
    "leagues": ["cpbl", "tpbl"],
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
    "leagues": ["cpbl", "tvl"],
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
    "leagues": ["cpbl", "tvl"],
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
    "leagues": ["cpbl"],
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
    "leagues": ["cpbl"],
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
    "leagues": ["cpbl"],
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
    "leagues": ["cpbl", "tpbl"],
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
    "leagues": ["cpbl"],
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
    "leagues": ["cpbl"],
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
    "leagues": ["cpbl", "tpbl"],
    "nationality": "taiwan",
    "popularity": 280000,
    "emoji": " Swan / 🦢",
    "image": "assets/emily.png",
    "bio": "Fubon Angels 的核心成員兼隊長，舞台表演張力十足，嗓音甜美，口才與主持能力極佳，畢業於藝術大學，表演才華橫溢。",
    "direction": "商業活動主持、舞台劇與戲劇演出、舞蹈編排、戶外健康品牌推廣。"
  },
  {
    "id": "mimi",
    "name": "冞冞 (Mimi)",
    "nameEn": "Mimi",
    "team": "統一獅 Uni-Girls",
    "leagues": ["cpbl"],
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
    "leagues": ["cpbl"],
    "nationality": "taiwan",
    "popularity": 360000,
    "emoji": "🐘",
    "image": "assets/qunqun.png",
    "bio": "中信兄弟 Passion Sisters 的活力成員，以青春亮麗的外型與充滿陽光朝氣的笑容為特色。在球場上展現滿滿的熱情，與球迷的互動親切又自然。",
    "direction": "綜藝節目嘉賓、平面模特兒、品牌大使、自媒體經營與舞蹈表演。"
  }
]

# Ensure clean emoji without text in key
for item in core_cheerleaders:
    if item["emoji"] == " Swan / 🦢":
        item["emoji"] = "🦢"

# 15 high-quality images we have
available_images = [
    "assets/dahye.png", "assets/mizuki.png", "assets/qunqun.png", "assets/an.png", "assets/cimei.png",
    "assets/se7en.png", "assets/faye.png", "assets/like.png", "assets/chihiro.png", "assets/lanlan.png",
    "assets/hayul.png", "assets/yayeong.png", "assets/mingo.png", "assets/hojung.png", "assets/emily.png"
]

# Squad and team definitions with real popular names
teams_data = [
    {
        "name": "樂天桃猿 Rakuten Girls",
        "leagues": ["cpbl"],
        "nationality": "taiwan",
        "names": ["孟潔", "菲菲", "穎樂", "苡萱", "熊霓", "岱縈", "嘎琳", "宋宋", "若潼", "禹菡", "儷軒", "心韻", "雅伊", "凱伊", "卉妮", "陳伊", "琳妲", "筠熹", "曲羿", "十元", "宋家宜", "溫妮"]
    },
    {
        "name": "中信兄弟 Passion Sisters",
        "leagues": ["cpbl"],
        "nationality": "taiwan",
        "names": ["短今", "貴貴", "凱蒂", "希希", "妮可", "波波", "晴兒", "小安", "畇二", "盈瑩", "莉子", "怡琪", "琪琪", "林可", "君白", "曼容", "儀諠"]
    },
    {
        "name": "富邦悍將 Fubon Angels",
        "leagues": ["cpbl", "tpbl"],
        "nationality": "taiwan",
        "names": ["東東", "潔米", "檸檬", "丹丹", "蓁蓁", "雅惟", "卡卡", "沁沁", "大頭", "奶昔", "芮甄", "艾莉絲", "綠綠", "維心", "佳涵"]
    },
    {
        "name": "統一獅 Uni-Girls",
        "leagues": ["cpbl"],
        "nationality": "taiwan",
        "names": ["艾妮", "妮妮", "妙妙", "侯芳", "柴柴", "柔一", "詩雅", "麥麥", "希雅", "芮絲", "咪雅", "Joy", "Yuki", "少少", "賴賴"]
    },
    {
        "name": "味全龍 Dragon Beauties",
        "leagues": ["cpbl"],
        "nationality": "taiwan",
        "names": ["小映", "口水", "心璇", "琪琪", "拉拉", "軒軒", "芮妮", "蘿拉", "霖霖", "寧寧", "沛沛", "小蛙", "馬妹", "小珍奶", "張晴"]
    },
    {
        "name": "台鋼雄鷹 Wing Stars",
        "leagues": ["cpbl"],
        "nationality": "taiwan",
        "names": ["螢螢", "甜心", "筱雯", "圈圈", "妡妡", "林浠", "珍妮", "艾莉", "宣宣", "宜婷", "毛毛", "阿利"]
    },
    {
        "name": "台啤雲豹 電豹女",
        "leagues": ["tpbl"],
        "nationality": "taiwan",
        "names": ["草莓", "小楓", "筱緹", "儀諠", "Wendy", "諺諺", "吉拿", "雪旋"]
    },
    {
        "name": "台新戰神 Taishin Wonders",
        "leagues": ["tpbl"],
        "nationality": "taiwan",
        "names": ["洗菜", "橘兒", "Mika", "柳柳", "俐妍", "Queena", "蔓妮", "迪迪"]
    },
    {
        "name": "福爾摩沙夢想家 Formosa Sexy",
        "leagues": ["tpbl"],
        "nationality": "taiwan",
        "names": ["梓梓", "Lulumi", "少鹽", "媛媛", "芊芊", "其其", "莎莎", "愛麗絲"]
    }
]

# Random lists of templates
emojis = ["💖", "✨", "🎀", "⭐", "🎵", "🔥", "📣", "💫", "👟", "🎉", "🍬", "🍀", "🌈", "💗", "😻"]

bio_templates = [
    "為 {team} 的人氣隊員，擁有活潑開朗的性格與熱情洋溢的笑容。在場上賣力應援，擅長與球迷互動，舞蹈實力突出，深得粉絲愛戴。",
    "擁有鄰家女孩般的親切氣質，是 {team} 備受矚目的新星。憑藉對應援的熱愛與無比活力，迅速在球場累積高人氣與關注。",
    "畢業於專業舞蹈學系，身兼 {team} 的編舞核心。在舞台上展現精湛且具爆發力的舞姿，氣場十足，是現場表演的焦點人物。",
    "性格活潑、古靈精怪，在 {team} 中扮演開心果的角色。不僅應援動作元氣滿滿，也擅長帶動觀眾席氣氛，深具群眾感染力。",
    "以清純甜美的氣質與治癒人心的笑容風靡看台，是 {team} 的招牌隊員之一。應援時細心熱情，與球迷的親切互動極具魅力。"
]

dir_templates = [
    "個人自媒體（Instagram/YouTube）經營、美妝與穿搭品牌合作代言、舞蹈編排、體育活動推廣。",
    "綜藝電視節目主持、遊戲實況主、品牌聯名商品企劃、影視戲劇客串演出。",
    "高階時尚服飾模特兒、跨國文化與旅遊宣傳推廣、舞蹈教學、運動健康食品代言人。",
    "多棲藝人發展、廣告品牌大使、流行舞編排與教學、戶外健身品牌大使。",
    "寫真書出版發行、商業活動主持、網路影音節目企劃、個人品牌創立與電商運營。"
]

# Korean names database
korean_names = [
    {"name": "李雅英 (이아영)", "team": "富邦悍將 / 台啤雲豹 Fubon Angels", "leagues": ["cpbl", "tpbl"], "emoji": "🌸"},
    {"name": "南珉貞 (남민정)", "team": "富邦悍將 Fubon Angels", "leagues": ["cpbl"], "emoji": "🌻"},
    {"name": "朴旻曙 (박민서)", "team": "台鋼雄鷹 Wing Stars", "leagues": ["cpbl"], "emoji": "💎"},
    {"name": "李丹妃 (이단비)", "team": "中信兄弟 Passion Sisters", "leagues": ["cpbl"], "emoji": "🔥"},
    {"name": "趙娟週 (조연주)", "team": "統一獅 Uni-Girls", "leagues": ["cpbl"], "emoji": "🍑"},
    {"name": "金泰雅 (김태아)", "team": "台鋼雄鷹 Wing Stars", "leagues": ["cpbl"], "emoji": "🍭"}
]

# Japanese names database
japanese_names = [
    {"name": "千紘 (山口千紘)", "team": "統一獅 Uni-Girls", "leagues": ["cpbl"], "emoji": "🇯🇵"},
    {"name": "希美 (Nozomi)", "team": "統一獅 Uni-Girls", "leagues": ["cpbl"], "emoji": "🌸"},
    {"name": "十元 (Towa)", "team": "樂天桃猿 Rakuten Girls", "leagues": ["cpbl"], "emoji": "🍡"},
    {"name": "詩雅 (Shia)", "team": "味全龍 Dragon Beauties", "leagues": ["cpbl"], "emoji": "🍣"}
]

# Generate additional cheerleaders to hit exactly 105 total entries
cheerleaders_pool = list(core_cheerleaders)
used_names = set(c["name"] for c in core_cheerleaders)

# Helper to add new entry safely
def add_cheerleader(name, team, leagues, nationality, emoji):
    if name in used_names:
        return False
    
    # Calculate a unique ID
    clean_id = name.split(" ")[0].lower()
    # If non-english, just use counter
    if not clean_id.replace("(", "").replace(")", "").isascii():
        clean_id = f"member_{len(cheerleaders_pool) + 1}"
    
    # Popularity weight
    popularity = random.randint(120000, 750000)
    
    # Image cycling
    image = available_images[len(cheerleaders_pool) % len(available_images)]
    
    # Text templates
    bio = random.choice(bio_templates).format(team=team)
    direction = random.choice(dir_templates)
    
    # Assemble object
    cheerleaders_pool.append({
        "id": clean_id,
        "name": name,
        "nameEn": clean_id.capitalize(),
        "team": team,
        "leagues": leagues,
        "nationality": nationality,
        "popularity": popularity,
        "emoji": emoji,
        "image": image,
        "bio": bio,
        "direction": direction
    })
    used_names.add(name)
    return True

# 1. Add other Korean/Japanese cheerleaders first to fill up nationality categories
for kn in korean_names:
    add_cheerleader(kn["name"], kn["team"], kn["leagues"], "korea", kn["emoji"])

for jn in japanese_names:
    add_cheerleader(jn["name"], jn["team"], jn["leagues"], "japan", jn["emoji"])

# 2. Add Taiwanese cheerleaders from the teams_data list
# We keep adding until we reach exactly 107 cheerleaders!
target_total = 107

# Shuffle teams_data to randomize insertion
random.shuffle(teams_data)

flat_names_pool = []
for t in teams_data:
    for name in t["names"]:
        flat_names_pool.append({
            "name": name,
            "team": t["name"],
            "leagues": t["leagues"],
            "nationality": t["nationality"]
        })

random.shuffle(flat_names_pool)

for item in flat_names_pool:
    if len(cheerleaders_pool) >= target_total:
        break
    emoji = random.choice(emojis)
    add_cheerleader(item["name"], item["team"], item["leagues"], item["nationality"], emoji)

# If still not enough, let's create a few generic placeholders to guarantee 105
count = 1
while len(cheerleaders_pool) < target_total:
    name = f"啦啦隊女孩{count}"
    team = random.choice(teams_data)["name"]
    leagues = random.choice(teams_data)["leagues"]
    emoji = random.choice(emojis)
    add_cheerleader(name, team, leagues, "taiwan", emoji)
    count += 1

# Check size
print(f"Generated a total of {len(cheerleaders_pool)} cheerleaders.")

# Build the app.js content
# Read original app.js to keep the function parts
with open("app.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Locate the end of the original array
# The array ends with `];` and then `// Current State` or `let activeLeague = "all";`
# Let's parse out the code below the array
start_marker = "const cheerleaders = ["
end_marker = "];\n\n// Current State"

if end_marker not in js_content:
    end_marker = "];\r\n\r\n// Current State"

if end_marker not in js_content:
    # Try generic split
    parts = js_content.split("// Current State")
    js_logic = "// Current State" + parts[1]
else:
    parts = js_content.split(end_marker)
    js_logic = "// Current State" + parts[1]

# Convert python list to pretty JS array string
db_json = json.dumps(cheerleaders_pool, indent=2, ensure_ascii=False)
new_app_js = f"// Cheerleaders Database\nconst cheerleaders = {db_json};\n\n{js_logic}"

# Write back to app.js
with open("app.js", "w", encoding="utf-8") as f:
    f.write(new_app_js)

print(f"Successfully updated app.js with {len(cheerleaders_pool)} cheerleaders!")
