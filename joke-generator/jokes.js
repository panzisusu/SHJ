const jokes = [
    {
        category: "programmer",
        setup: "Why do programmers wear glasses?",
        punchline: "Because they can't C#.",
        setupZh: "為什麼工程師特別容易近視需要戴眼鏡？",
        punchlineZh: "因為他們不會 C# (See sharp / 看得清楚)。",
        emoji: "🤓"
    },
    {
        category: "programmer",
        setup: "What is the widest line in the world?",
        punchline: "Line 80 in a programmer's code.",
        setupZh: "世界上最寬的線是什麼線？",
        punchlineZh: "程式碼的 Line 80 (限制行寬的警戒線)。",
        emoji: "📏"
    },
    {
        category: "special",
        setup: "Why is the McDonald's Big Mac so popular among IT folks?",
        punchline: "Because it's a Big Mac (Macs are cooler than Windows!).",
        setupZh: "為什麼大麥克 (Big Mac) 在 IT 工程師之間特別受歡迎？",
        punchlineZh: "因為它是 Big Mac (用 Mac 寫程式就是比較潮)！",
        emoji: "🍔"
    },
    {
        category: "cold",
        setup: "Two bananas were going for a walk. One felt hot, peeled off its skin, and...",
        punchline: "The other banana slipped on it!",
        setupZh: "兩隻香蕉在街上散步，其中一隻覺得很熱，就把皮脫掉，結果呢？",
        punchlineZh: "另一隻香蕉就踩到皮滑倒了！",
        emoji: "🍌"
    },
    {
        category: "cold",
        setup: "Which fruit dresses up the most?",
        punchline: "Starfruit, because it's a Star fruit!",
        setupZh: "什麼水果最注重穿搭、最會打扮？",
        punchlineZh: "楊桃！因為它是 Star fruit (星級水果)！",
        emoji: "⭐️"
    },
    {
        category: "programmer",
        setup: "Why does Xiaoming drink hot water in front of his computer?",
        punchline: "Because he's studying Java, and wants to 'Java' (make it warm).",
        setupZh: "為什麼小明坐在電腦前看程式碼時，一定要喝熱水？",
        punchlineZh: "因為他在學習 Java，所以想幫自己「加溫」(Java)！",
        emoji: "☕️"
    },
    {
        category: "programmer",
        setup: "There are 10 types of people in the world...",
        punchline: "Those who understand binary, and those who don't.",
        setupZh: "世界上只有 10 種人...",
        punchlineZh: "一種是懂得二進位的人，另一種是不懂二進位的人。",
        emoji: "🔢"
    },
    {
        category: "programmer",
        setup: "Why do programmers hate going into nature?",
        punchline: "Because there are way too many bugs out there.",
        setupZh: "為什麼程式設計師特別不喜歡去大自然露營？",
        punchlineZh: "因為那裡面的 Bug (昆蟲) 實在是太多了！",
        emoji: "🐛"
    },
    {
        category: "programmer",
        setup: "Why do programmers dislike going to the beach?",
        punchline: "Because they're tired of sandboxes.",
        setupZh: "為什麼工程師放假不喜歡去沙灘玩耍？",
        punchlineZh: "因為他們平常在測試環境裡就已經看膩 Sandbox (沙盒) 了！",
        emoji: "🏖️"
    },
    {
        category: "programmer",
        setup: "An SQL query walks into a bar, walks up to two tables and asks...",
        punchline: "'Can I join you?'",
        setupZh: "一個 SQL 查詢語句走進酒吧，走到兩張桌子旁問...",
        punchlineZh: "「請問我可以 JOIN (加入) 你們嗎？」",
        emoji: "🗄️"
    },
    {
        category: "programmer",
        setup: "Why couldn't Isaac Newton be a programmer?",
        punchline: "Because he got hit by an Apple and spent all his time trying to explain it.",
        setupZh: "為什麼物理學家牛頓如果活在現代，不適合當程式設計師？",
        punchlineZh: "因為他被 Apple 砸中之後，沒去修 Bug，反而花了一輩子去解釋它。",
        emoji: "🍎"
    },
    {
        category: "programmer",
        setup: "Programming is like writing poetry...",
        punchline: "Except most people write limericks, and the compiler is a picky editor.",
        setupZh: "寫程式就像是在寫詩歌...",
        punchlineZh: "只不過大多數人寫的都是打油詩，而編譯器則是一個吹毛求疵的編輯。",
        emoji: "✍️"
    },
    {
        category: "programmer",
        setup: "'Mom, why does the sun rise in the east and set in the west?'",
        punchline: "'Don't touch it, dear. It's legacy code, but it works perfectly.'",
        setupZh: "「媽媽，為什麼每天太陽都會從東邊升起、西邊落下呢？」",
        punchlineZh: "「孩子，別去動它！那是 Legacy code (舊系統遺留程式碼)，雖然沒人懂原理但它動得好好的。」",
        emoji: "☀️"
    },
    {
        category: "programmer",
        setup: "A programmer's wife says: 'Go buy 3 loaves of bread, and if you see watermelons, buy 1.'",
        punchline: "The programmer returns with 1 loaf. Wife: 'Why only 1?' - 'Because I saw watermelons.'",
        setupZh: "老婆吩咐工程師老公：「去店裡買 3 個麵包，如果看到賣西瓜的，買 1 個回來。」",
        punchlineZh: "工程師最後只抱了 1 個麵包回家。老婆問：「為什麼只買 1 個？」工程師說：「因為我看到賣西瓜的了。」",
        emoji: "🍉"
    },
    {
        category: "programmer",
        setup: "Why do programmers confuse Halloween and Christmas?",
        punchline: "Because Oct 31 equals Dec 25!",
        setupZh: "為什麼程式工程師常常把萬聖節和聖誕節搞混？",
        punchlineZh: "因為八進位的 31 (Oct 31) 等於十進位的 25 (Dec 25)！",
        emoji: "🎃"
    },
    {
        category: "programmer",
        setup: "What is a programmer's favorite hangout spot?",
        punchline: "Foo Bar.",
        setupZh: "工程師下班最喜歡去哪家小酒吧聚會？",
        punchlineZh: "那家叫 Foo Bar 的酒吧。",
        emoji: "🍻"
    },
    {
        category: "programmer",
        setup: "Why don't programmers eat breakfast?",
        punchline: "Because they usually wake up at 4:04 AM, and breakfast is not found.",
        setupZh: "為什麼大部分的軟體工程師都不習慣吃早餐？",
        punchlineZh: "因為他們起床時往往都已經是 404 (Not Found) 的時間了。",
        emoji: "🥪"
    },
    {
        category: "cold",
        setup: "Why is the moon so romantic?",
        punchline: "Because it's constantly running its orbit loop around the Earth.",
        setupZh: "為什麼天上的月亮是個暖男？",
        punchlineZh: "因為他無時無刻都在為地球「運行」(Run) 著軌道迴圈。",
        emoji: "🌙"
    },
    {
        category: "cold",
        setup: "What fruit is the smartest of them all?",
        punchline: "Pears. Because they are always 'peer' reviewed.",
        setupZh: "什麼水果最聰明、IQ 最高？",
        punchlineZh: "梨子！因為它們經常通過「同儕審查」(Peer / 梨 review)！",
        emoji: "🍐"
    },
    {
        category: "programmer",
        setup: "How do you tell if HTML is a programming language?",
        punchline: "Say it is in front of real programmers, and measure the velocity of their eye rolls.",
        setupZh: "如何分辨 HTML 究竟是不是程式語言？",
        punchlineZh: "直接在工程師面前說「HTML 是程式語言」，然後測量他們翻白眼的速度即可。",
        emoji: "🙄"
    },
    {
        category: "cold-war",
        setup: "An American dog, a Polish dog, and a Soviet dog meet. The American dog says: 'In my country, if you bark long enough, someone will give you meat.'",
        punchline: "The Polish dog asks: 'What is meat?' The Soviet dog asks: 'What is bark?'",
        setupZh: "一隻美國狗、一隻波蘭狗和一隻蘇聯狗相遇。美國狗得意地說：「在我們國家，只要你叫得夠久，就會有人給你肉吃。」",
        punchlineZh: "波蘭狗疑惑地問：「什麼是『肉』？」蘇聯狗則害怕地問：「什麼是『叫』？」",
        emoji: "🐕"
    },
    {
        category: "cold-war",
        setup: "Reagan and Gorbachev run a head-to-head two-car race. Reagan wins.",
        punchline: "The next day, Soviet newspaper Pravda reports: 'In the international car race, General Secretary Gorbachev won a glorious second place, while US President Reagan came in next-to-last.'",
        setupZh: "美國總統雷根和蘇聯總書記戈巴契夫進行了一場兩人的私人賽車對決，最後雷根贏了。",
        punchlineZh: "隔天蘇聯《真理報》頭條報導：「在國際賽車大賽中，我們偉大的戈巴契夫總書記榮獲第二名佳績！而美國總統雷根則是不幸落入倒數第二名。」",
        emoji: "🏎️"
    },
    {
        category: "cold-war",
        setup: "A citizen is waiting in a massive line to buy bread in Moscow. Furious, he shouts: 'I\'ve had enough! I\'m going to the Kremlin to shoot the General Secretary!'",
        punchline: "Two hours later, he returns to the line. People ask: 'Did you shoot him?' - 'No, the line over there was even longer!'",
        setupZh: "莫斯科街頭，一名男子排了數個小時的長隊買麵包，終於氣瘋了，大喊：「我不排了！我要去克里姆林宮把總書記崩了！」說完憤而離去。",
        punchlineZh: "兩個小時後，他垂頭喪氣地回到隊伍中。大家悄悄問他：「你動手了嗎？」他嘆氣道：「沒有，克里姆林宮那邊想開槍的人排得比這還長！」",
        emoji: "🥖"
    },
    {
        category: "cold-war",
        setup: "Three men are sitting in a Gulag cell and ask each other why they were arrested. The first says: 'I was 5 minutes late, so they accused me of spying.' The second says: 'I was 5 minutes early, so they accused me of infiltrating.'",
        punchline: "The third man sighs: 'I arrived exactly on time, so they accused me of buying a Western watch.'",
        setupZh: "西伯利亞古拉格集中營裡有三個囚犯。第一個說：「我上班遲到了五分鍾，他們控告我企圖怠工破壞社會主義經濟。」第二個說：「我上班早到了五分鍾，他們控告我是西方派來的滲透特務。」",
        punchlineZh: "第三個搖搖頭嘆道：「我每天都分秒不差準時上班，結果他們控告我非法購買並使用西方的走私手錶。」",
        emoji: "⛓️"
    },
    {
        category: "cold-war",
        setup: "Gorbachev, running late for a meeting, tells his chauffeur to sit in the back so he can drive. He speeds and gets pulled over by a cop.",
        punchline: "The cop looks in the window, runs back to his chief and says: 'I can't ticket him! He's too important!' - 'Who is it? Reagan?' - 'I don\'t know, but his driver is Gorbachev!'",
        setupZh: "戈巴契夫開會快要遲到了，他命令司機坐到後座，自己親自踩油門飆車。因為超速被一名年輕警員攔了下來。",
        punchlineZh: "警員看了一眼車內，驚慌失措地跑回警長身長說：「我不敢開單！車裡那個人太大咖了！」警長問：「是誰？雷根嗎？」警員顫抖地說：「我不知道他是誰，但他的司機是戈巴契夫！」",
        emoji: "👮"
    },
    {
        category: "life",
        setup: "How do you know an introvert likes you?",
        punchline: "They look at your shoes instead of their own when talking to you.",
        setupZh: "如何知道一個性格內向的人真的非常喜歡你？",
        punchlineZh: "當他鼓起勇氣跟你聊天時，他會一直盯著「你的鞋子」而不是他自己的鞋子。",
        emoji: "👟"
    },
    {
        category: "life",
        setup: "A PM, a QA engineer, and a Developer get into a car. The brakes fail and the car starts rolling down a hill.",
        punchline: "PM: 'Let\'s form a committee!' QA: 'Let\'s push it back up and repeat!' Developer: 'Let\'s keep riding, maybe it\'s a feature!'",
        setupZh: "一位專案經理（PM）、測試工程師（QA）和開發工程師（RD）坐在一輛車裡，下山時煞車突然失靈！",
        punchlineZh: "PM慌喊：「快成立跨部門委員會分析風險！」QA提議：「我們推回山頂再滑一次看能不能重現 Bug！」RD冷靜道：「大家坐好，煞車失靈也許是這款車的隱藏功能 (Feature)。」",
        emoji: "🚗"
    },
    {
        category: "life",
        setup: "Why did the student tell the professor that cold weather is like bad statistics?",
        punchline: "Because it makes you shiver with biased variables!",
        setupZh: "為什麼學生跟統計學教授抱怨寒冷的天氣很像「糟糕的數據分析」？",
        punchlineZh: "因為兩者都會讓你因為「偏差的變數」（Biased variables，諧音冷到發抖）而直打冷顫！",
        emoji: "🥶"
    },
    {
        category: "cold",
        setup: "Why does a gun get depressed if you paint a knife blue?",
        punchline: "Because blue knives are impenetrable (in Chinese 'Dao Qiang Bu Ru / Blue')!",
        setupZh: "為什麼把「刀」塗成藍色 (Blue) 的，旁邊的「槍」就會很憂鬱？",
        punchlineZh: "因為「刀槍不入 (Blue)」！",
        emoji: "⚔️"
    },
    {
        category: "cold",
        setup: "Why do foxes trip and fall all the time?",
        punchline: "Because they are foxes (in Chinese 'Jiao Hua / slippery feet')!",
        setupZh: "為什麼狐狸在路上散步的時候，常常會跌倒？",
        punchlineZh: "因為牠們「腳滑」(狡猾)！",
        emoji: "🦊"
    },
    {
        category: "cold",
        setup: "A sheep calls an eagle, and the eagle answers 'Wei?' What idiom is this?",
        punchline: "阳奉阴违 (Sheep Phone Eagle 'Wei')!",
        setupZh: "小羊打電話給老鷹，老鷹接起來說：「喂？」這代表哪一個成語？",
        punchlineZh: "「陽奉陰違」(羊 Phone 鷹 \"wei\")！",
        emoji: "🦅"
    },
    {
        category: "cold",
        setup: "What is a very polite mouse called?",
        punchline: "Polite mouse (in Chinese 'Bu Hao Yi Shu / Excuse me')!",
        setupZh: "請問什麼樣的老鼠最懂禮貌、家教最好？",
        punchlineZh: "「不好意鼠」(不好意思)！",
        emoji: "🐭"
    },
    {
        category: "cold",
        setup: "When does 2 + 1 not equal 3?",
        punchline: "When you calculate it wrong!",
        setupZh: "請問在什麼時候，2 加 1 會不等於 3？",
        punchlineZh: "算錯的時候！",
        emoji: "➕"
    },
    {
        category: "breakfast",
        setup: "Which chicken in the world runs the slowest?",
        punchline: "Nicole Kidman (sounds like 'Ni-ke Ji-man' / This chicken is slow)!",
        setupZh: "世界上跑得最慢的雞是哪一隻？",
        punchlineZh: "妮可基嫚 (妮可雞慢)！",
        emoji: "🐔"
    },
    {
        category: "breakfast",
        setup: "What does a mung bean become when it commits suicide?",
        punchline: "Mung bean paste (sounds like 'mung bean kills itself' in Chinese)!",
        setupZh: "綠豆自殺會變成什麼？",
        punchlineZh: "綠豆沙 (綠豆殺)！",
        emoji: "🫘"
    },
    {
        category: "breakfast",
        setup: "Which flower is the most tired and has no energy?",
        punchline: "Jasmine (Mo-li-hua, sounds like 'Mei-li-hua' / No-energy flower)!",
        setupZh: "哪一種花最沒力氣？",
        punchlineZh: "茉莉花 (沒力花)！",
        emoji: "🌸"
    },
    {
        category: "breakfast",
        setup: "Among erasers, pencils, and ballpoint pens, who is the most despicable?",
        punchline: "Pencil, because 'Bi-Jiao-Jian' (sounds like 'comparing pens is cheaper/meaner')!",
        setupZh: "橡皮擦、鉛筆、原子筆，哪一個最卑鄙？",
        punchlineZh: "鉛筆，因為「筆較賤」(比較賤)！",
        emoji: "✏️"
    },
    {
        category: "breakfast",
        setup: "Who is the grandmother of McDonald's?",
        punchline: "Madonna (sounds like 'Mai-dang-na' / McDonald's grandma)!",
        setupZh: "麥當勞的阿嬤是誰？",
        punchlineZh: "麥當娜 (麥當na / 麥當勞的阿嬤)！",
        emoji: "👵"
    },
    {
        category: "breakfast",
        setup: "What mouse walks on two legs? Mickey Mouse. What duck walks on two legs?",
        punchline: "All ducks do!",
        setupZh: "什麼老鼠用兩隻腳走路？米老鼠。那什麼鴨子用兩隻腳走路？",
        punchlineZh: "所有的鴨子！(都被騙了吧～)",
        emoji: "🦆"
    },
    {
        category: "breakfast",
        setup: "Which pen is most likely to fall asleep during an exam?",
        punchline: "The ballpoint pen, because it always keeps its eyes closed (sounds like 'pen' in Chinese)!",
        setupZh: "哪一種筆在考試時最容易睡著？",
        punchlineZh: "原子筆，因為它總是「筆」(閉)著眼！",
        emoji: "🖊️"
    },
    {
        category: "breakfast",
        setup: "What fruit is most likely to trigger a war?",
        punchline: "Blueberry (sounds like 'Lan-mei' / Inevitably there will be a battle)!",
        setupZh: "什麼水果最容易引發戰爭？",
        punchlineZh: "藍莓，因為「藍莓」(難免)會有一戰！",
        emoji: "🫐"
    },
    {
        category: "breakfast",
        setup: "Who is the most helpful cartoon character but always extends a 'round hand'?",
        punchline: "Doraemon, because his hands are literally spheres (sounds like 'extending a helping hand')!",
        setupZh: "誰最熱心助人，但每次都只會伸出「圓手」？",
        punchlineZh: "哆啦A夢，因為他的手是圓的 (伸出圓手/援手)！",
        emoji: "🐱"
    },
    {
        category: "breakfast",
        setup: "What plant is the shortest?",
        punchline: "Dandelion (sounds like 'Pu-gong-ying' / Spread on the ground)!",
        setupZh: "什麼植物長得最矮？",
        punchlineZh: "蒲公英，因為「鋪地(蒲公)英」！",
        emoji: "🌾"
    },
    {
        category: "breakfast",
        setup: "A black cat and a white cat go for a walk. The black cat falls into the water and the white cat saves it. What does the black cat say?",
        punchline: "Meow! (Cats can only meow!)",
        setupZh: "黑貓跟白貓出去散步，黑貓掉進水裡被白貓救起來，黑貓跟白貓說了什麼？",
        punchlineZh: "喵！(貓咪本來就只會喵喵叫啊～)",
        emoji: "🐱"
    },
    {
        category: "breakfast",
        setup: "What is the longest car in the world?",
        punchline: "Traffic jam (sounds like 'plugged car' in Chinese)!",
        setupZh: "世界上最長的車是什麼車？",
        punchlineZh: "塞車！",
        emoji: "🚗"
    },
    {
        category: "ancient",
        setup: "A short-sighted man went to a temple and saw a blank hanging scroll. He asked: 'What is written on it?' Someone said: 'It's blank.' The man replied: 'Ah! I was just wondering why the handwriting is so clean and spacious!'",
        punchline: "Writing space appreciation!",
        setupZh: "一個近視眼的人去寺廟，看到牆上掛著一張空白的紙。他問旁邊的人：「這上面寫了什麼字呀？」旁人說：「上面什麼字都還沒寫呢。」近視眼大嘆：",
        punchlineZh: "「哎呀！我剛剛就在想，怎麼這字寫得這麼乾淨、這麼有空間感！」",
        emoji: "📜"
    },
    {
        category: "ancient",
        setup: "A thief broke into a house at night, but found it completely empty. The sleeping owner woke up and said to the thief...",
        punchline: "'Friend, you came at night to look. I spend my whole day looking and still can't find anything!'",
        setupZh: "有個小偷半夜溜進一戶窮人家裡，翻箱倒櫃什麼也沒找到。躺在床上的屋主突然翻身坐起，嘆氣對小偷說：",
        punchlineZh: "「朋友，你大半夜摸黑來找，我都白天睜大眼睛找了一整天，也沒找到半毛錢啊！」",
        emoji: "🥷"
    },
    {
        category: "ancient",
        setup: "A painter drew a picture of a tiger, but everyone said it looked like a dog. To avoid embarrassment, he hung up a sign next to it...",
        punchline: "'Caution: Fierce tiger. If you don't believe it and get bitten, there is no compensation.'",
        setupZh: "有個畫家畫了一隻老虎，但大家都說畫得像隻狗。畫家為了面子，便在畫作旁邊寫了一行字：",
        punchlineZh: "「畫中乃是猛虎，若有不信者，咬死不賠。」",
        emoji: "🐅"
    },
    {
        category: "ancient",
        setup: "A disciple told his master: 'I have prepared 100 tall hats (flattery) to give to people, so I won't get into trouble.' The master said: 'A gentleman should be honest, why flatter?' The disciple sighed: 'Alas, there are very few people who are as noble as you, Master!' The master smiled: 'True.' The disciple left and said to a friend...",
        punchline: "'Now I have ninety-nine hats left!'",
        setupZh: "弟子要去當官，對老師說：「我準備了一百頂高帽子，見人就送一頂，官場就好混了。」老師氣說：「君子行事應正直，怎能迎合諂媚？」弟子嘆道：「唉！如今天下像老師這樣清高、不愛戴高帽的人，實在太少了！」老師高興笑說：「你說得確實有道理。」弟子出門對朋友說：",
        punchlineZh: "「我這就送出去一頂了，還剩九十九頂！」",
        emoji: "🎩"
    },
    {
        category: "ancient",
        setup: "A forgetful man forgot his own name. He leaned over a deep well and shouted: 'Who is down there?' The echo replied: 'Who is down there?' The man said...",
        punchline: "'Ah, he has the same name as me!'",
        setupZh: "一個健忘的人忘記了自己的名字。他走到一口深井旁，朝井裡大喊：「下面的人叫什麼名字？」井底傳來回音：「下面的人叫什麼名字？」健忘的人大驚：",
        punchlineZh: "「天啊！下面那個人居然跟我同名同姓！」",
        emoji: "🕳️"
    },
    {
        category: "ancient",
        setup: "A villager bought a mirror for the first time. He looked into it and cried: 'Why did you bring another man home?' His wife looked in and cried...",
        punchline: "'And you even brought an old woman too!'",
        setupZh: "鄉下人第一次買鏡子，拿回家看了一眼，驚呼：「老婆！你怎麼又帶了個男人回家？」老婆拿過鏡子一看，大哭道：",
        punchlineZh: "「你還好意思說！你連他老娘也一起帶回來了！」",
        emoji: "🪞"
    }
];

// Export for usage
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = jokes;
}
