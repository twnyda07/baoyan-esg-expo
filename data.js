/* 2026 亞太永續博覽會・寶嚴禪寺展區看板文案
   資料來源：《看板文案_中英定稿_2》＋《永續展看板文案_中英定稿_印刷版 v2》
   全部文字逐字取自定稿，未改寫。解說要點（docent）為依看板文字整理之導覽提示。 */

const DATA = {
  meta: {
    expoZh: '2026 亞太永續博覽會',
    expoEn: 'Asia-Pacific Sustainability Expo 2026',
    titleZh: '展場看板文案',
    titleEn: 'Exhibition Panel Copy',
    orgZh: '財團法人圓道文教基金會・寶嚴禪寺',
    orgEn: 'Yuandao Culture and Education Foundation · Bao Yan Chan Monastery'
  },

  zones: [
    /* ══════════════════════════ 主視覺區 ══════════════════════════ */
    {
      id: 'main', key: 'M', num: '一', numEn: 'I',
      shortZh: '主視覺', shortEn: 'Main Visual',
      zh: '主視覺區', en: 'Main Visual Zone',
      tagline: { zh: '心的永續力', en: 'The Sustaining Power of the Mind' },
      panels: [
        {
          id: 'm1', kindZh: '主視覺大看板', kindEn: 'Main Visual Panel',
          titleZh: '心的永續力', titleEn: 'The Sustaining Power of the Mind',
          blocks: [
            { t: 'couplet', zh: '嚴淨國土　成熟有情', en: 'Purifying the Land, Maturing All Beings' },
            {
              t: 'sutra',
              zh: '「無量眾生發菩提心故，世界海純清淨劫轉變。」',
              srcZh: '——《大方廣佛華嚴經・世界成就品》',
              en: '“Because immeasurable beings give rise to bodhicitta, the ocean of worlds turns into an eon of perfect purity.”',
              srcEn: '— Avatamsaka Sutra, “The Formation of the Worlds”'
            },
            {
              t: 'body',
              zh: '當全球以 ESG 尋找永續解方，早在三千年前，佛陀已揭示「嚴淨國土，成熟有情」的智慧——以心的永續力，喚醒每一個人的責任與承擔，共同守護世界。',
              en: 'The world today turns to ESG in search of sustainable solutions. Three thousand years ago, the Buddha had already offered one: purify the land, mature all beings. It is the sustaining power of the mind that awakens in each of us the responsibility to safeguard the world we share.'
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image1', zh: '心的永續力架構圖', en: 'The Sustaining Power of the Mind — conceptual framework' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「全世界都在談 ESG。三千年前，佛陀已經講過同一件事——只是他用四個字：嚴淨國土，成熟有情。」',
              en: '“The whole world is talking about ESG. Three thousand years ago the Buddha said the same thing in eight words: purify the land, mature all beings.”'
            },
            points: [
              { zh: '整個展區的主軸就是這句對句：「嚴淨國土」＝環境，「成熟有情」＝人。兩件事本來就是一件事。', en: 'The whole exhibition turns on one couplet: “purify the land” is the environment; “mature all beings” is people. They were never two things.' },
              { zh: '經文出自《華嚴經・世界成就品》：世界會不會變清淨，關鍵在「有多少人發起菩提心」——也就是心的力量。', en: 'The sutra line says the world becomes pure when enough beings give rise to bodhicitta — the change starts in the mind.' },
              { zh: '「心的永續力」是我們對 ESG 的回答：制度與技術之外，還需要一個願意承擔的心。', en: '“The sustaining power of the mind” is our answer to ESG: beyond systems and technology, someone has to be willing to care.' },
              { zh: '請觀眾看架構心智圖：寶嚴禪寺為中心，向外分成 Environmental、Social、Governance 三大主軸，等一下的參觀動線就照這三區走。', en: 'Point to the mind map: Bao Yan Chan Monastery at the centre, branching into Environmental, Social, and Governance — which is exactly the route we will walk.' }
            ],
            ask: { zh: '「您覺得，永續最難的是技術，還是願意去做的那個心？」', en: '“Which is harder for sustainability — the technology, or the willingness to act?”' }
          }
        }
      ]
    },

    /* ══════════════════════════ E 區 ══════════════════════════ */
    {
      id: 'env', key: 'E', num: '二', numEn: 'II',
      shortZh: '環境保護', shortEn: 'E · Environmental',
      zh: 'E 區・環境保護', en: 'Environmental Zone',
      tagline: { zh: '隨其心淨　則國土淨', en: 'When the Mind Is Pure, the Land Is Pure' },
      panels: [
        {
          id: 'e1', kindZh: '大看板', kindEn: 'Main Panel',
          titleZh: 'E｜環境保護', titleEn: 'E | Environmental Protection',
          blocks: [
            { t: 'couplet', zh: '隨其心淨　則國土淨', srcZh: '——《維摩經》', en: 'When the Mind Is Pure, the Land Is Pure', srcEn: '— The Vimalakīrti Sūtra' },
            {
              t: 'sutra',
              zh: '「自皈依佛，當願眾生，體解大道，發無上心。」',
              en: '“I take refuge in the Buddha. May all beings fathom the Great Way and give rise to the unsurpassed aspiration.”'
            },
            {
              t: 'poem', titleZh: '台東', titleEn: 'TAITUNG',
              zh: ['藍天、湛海、乾淨的空氣、清洌的水質，', '曾經是台灣的偏鄉，世界的邊境。', '如今，', '全球環保意識及靈性復興思潮再興，', '台東純淨無染的天與地，', '成為追求族與禪修者的首選地。', '2021 年因緣成熟，', '台東蘊藏藍寶石的都蘭山腳下平原，', '規劃為寶嚴禪寺神聖空間與心靈聚落，', '這片淨土是集眾人之大願，', '共同發心打造的一方讓遊子歸鄉、', '讓心安住的 ESG 創生園區。'],
              en: ['Blue sky. Clear sea. Clean air. Pure water.', 'Once the far edge of Taiwan — and of the world.', 'Today, as environmental conscience and a spiritual', 'awakening rise together, this untouched land', 'has become the first choice of those who chase the blue —', 'and of those who come to sit still.', 'In 2021, the conditions ripened.', 'On the plain below Mount Dulan, where sapphire', 'sleeps in the earth, a sacred space and spiritual', 'settlement began to take form.', 'Raised by the great vow of many hands,', 'this pure land is an ESG regeneration park —', 'where the wanderer comes home,', 'and the heart comes to rest.']
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image2', zh: '寶嚴禪寺基地空拍圖', en: 'Aerial view of the Bao Yan Chan Monastery site' }
              ]
            },
            {
              t: 'overlay',
              zh: '背倚都蘭山脈，面向太平洋。一座實踐百丈家風的禪宗叢林道場，一座兼具現代感與古樸氣韻的藝術聖殿，即將啟建。',
              en: 'Backed by the Dulan Mountain Range, facing the Pacific — a Chan monastery in the communal forest tradition of Master Baizhang, and a sanctuary of art at once contemporary and timeless. Construction is about to begin.'
            },
            {
              t: 'heading',
              zh: '寶嚴禪寺以 LEED 與 WELL 打造宗教建築的永續新典範',
              en: 'Bao Yan Chan Monastery — A New Model for Sustainable Sacred Architecture',
              subEn: 'Built to LEED and WELL Standards'
            },
            {
              t: 'body',
              zh: '寶嚴禪寺攜手專業 ESG 顧問團隊，導入美國 LEED 綠建築認證與 WELL 健康建築標準，從節能減碳、資源運用到身心健康，建構人、建築與自然的和諧關係。',
              en: 'Working with a professional ESG consulting team, Bao Yan Chan Monastery is adopting LEED green building certification and the WELL Building Standard. From energy efficiency and carbon reduction to resource use and human well-being, the design builds a harmonious relationship among people, buildings, and nature.'
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image3', zh: 'WELL 十大概念', en: 'The Ten WELL Concepts' },
                { f: 'image4', zh: 'WELL 對人體健康的增益──世界第一部根據人體健康制定的環境設計標準', en: 'How WELL benefits human health — the world’s first design standard built around human health' }
              ]
            },
            {
              t: 'chips', labelZh: 'WELL 十大概念', labelEn: 'The Ten WELL Concepts',
              items: [['空氣', 'Air'], ['水', 'Water'], ['營養', 'Nourishment'], ['光', 'Light'], ['運動', 'Movement'], ['熱舒適', 'Thermal Comfort'], ['聲環境', 'Sound'], ['材料', 'Materials'], ['精神', 'Mind'], ['社區', 'Community']]
            },
            {
              t: 'chips', labelZh: 'WELL 對應的十一大人體系統', labelEn: 'The Eleven Body Systems WELL Addresses',
              items: [['心血管', 'Cardiovascular'], ['內分泌', 'Endocrine'], ['消化', 'Digestive'], ['免疫', 'Immune'], ['表皮', 'Integumentary'], ['肌肉', 'Muscular'], ['神經', 'Nervous'], ['生殖', 'Reproductive'], ['呼吸', 'Respiratory'], ['骨骼', 'Skeletal'], ['泌尿', 'Urinary']]
            }
          ],
          docent: {
            hook: {
              zh: '「《維摩經》講：隨其心淨，則國土淨。這不是比喻——我們真的照這句話蓋了一座寺院。」',
              en: '“The Vimalakīrti Sūtra says: when the mind is pure, the land is pure. That is not a metaphor — we are actually building a monastery on that line.”'
            },
            points: [
              { zh: '地點：台東東河，背倚都蘭山脈，面向太平洋。曾經是「台灣的偏鄉、世界的邊境」，如今因為乾淨，反而成了首選地。', en: 'Site: Donghe, Taitung — backed by the Dulan Range, facing the Pacific. Once “the far edge of Taiwan”; today its cleanliness makes it the first choice.' },
              { zh: '2021 年因緣成熟，在蘊藏藍寶石的都蘭山腳下平原啟動規劃。', en: 'In 2021 the conditions ripened, on the plain below Mount Dulan where sapphire sleeps in the earth.' },
              { zh: '建築同時導入兩套國際標準：LEED（綠建築，看的是地球）與 WELL（健康建築，看的是人）。宗教建築很少同時做這兩套。', en: 'Two international standards at once: LEED (green building — for the planet) and WELL (healthy building — for people). Rarely done together in sacred architecture.' },
              { zh: 'WELL 的定位可以一句話帶過：世界第一部「根據人體健康」制定的環境設計標準，十大概念對應十一大人體系統。', en: 'One line on WELL: the world’s first design standard built around human health — ten concepts mapped to eleven body systems.' },
              { zh: '呼應主視覺：LEED 是「嚴淨國土」，WELL 是「成熟有情」。', en: 'Tie back to the main visual: LEED is “purifying the land,” WELL is “maturing all beings.”' }
            ],
            ask: { zh: '「一般綠建築只算碳。您覺得，一棟建築該不該也負責住在裡面的人健不健康？」', en: '“Green buildings usually count carbon. Should a building also be responsible for the health of the people inside it?”' }
          }
        },

        {
          id: 'e2', kindZh: '小看板（1）', kindEn: 'Sub-Panel 1',
          titleZh: '倡議蔬食文化', titleEn: 'Change the World, One Meal at a Time',
          subtitleZh: '改變世界，從改變每一餐開始',
          blocks: [
            {
              t: 'body',
              zh: '研究指出，以全穀物、豆類、蔬果與堅果為主的全食物蔬食，有助於降低多種慢性疾病與早逝風險；對地球而言，則意味著更少的土地消耗與碳排放。',
              en: 'Research shows that a whole-food, plant-based diet built on whole grains, legumes, vegetables, fruits, and nuts helps lower the risk of many chronic diseases and of premature death. For the planet, it means less land use and lower carbon emissions.'
            },
            {
              t: 'body',
              zh: '全球超過四分之一的土地用於畜牧及飼料生產，糧食系統則佔全球溫室氣體排放約四分之一。植物性飲食，是每個人都能立即採取的氣候行動。',
              en: 'More than a quarter of the world’s land is used for livestock and feed production, and food systems account for roughly a quarter of global greenhouse gas emissions. A plant-based diet is climate action anyone can take today.'
            },
            {
              t: 'body',
              zh: '寶嚴禪寺倡議「一日一素、一週一素、無肉日、純素月」，邀請大眾從一餐開始，將對生命的慈悲，轉化為守護健康、守護環境的行動。世界的改變，就從這一餐開始。',
              en: 'Bao Yan Chan Monastery promotes “one vegetarian meal a day, one vegetarian day a week, meat-free days, and vegan months,” inviting everyone to begin with a single meal and to turn compassion for life into care for our health and our environment. Changing the world begins with the very next meal.'
            },
            { t: 'heading', zh: '蔬食推廣計畫', en: 'Plant-Based Initiatives' },
            {
              t: 'subheading',
              zh: '設立每日免費蔬食據點，讓健康永續走進日常',
              en: 'Free Vegetarian Meals, Every Day — Bringing Sustainable Health into Daily Life'
            },
            {
              t: 'body',
              zh: '以下四個據點每日提供免費蔬食，選用優質好油，人人都能吃得健康。',
              en: 'The four locations below serve free vegetarian meals every day, prepared with high-quality oils, so that everyone can eat their way to better health.'
            },
            {
              t: 'places', items: [
                { zh: '台北寶嚴善首講堂', en: 'Taipei Bao Yan Shanshou Lecture Hall', addrZh: '台北市松山區光復北路 112 號 11 樓', addrEn: '11F, No. 112, Guangfu N. Rd., Songshan Dist., Taipei', tel: '02-2577-2978' },
                { zh: '新北寶嚴善覺講堂', en: 'New Taipei Bao Yan Shanjue Lecture Hall', addrZh: '新北市板橋區四川路一段 180 號', addrEn: 'No. 180, Sec. 1, Sichuan Rd., Banqiao Dist., New Taipei', tel: '02-2964-6617' },
                { zh: '台中 EPIC 禪藝實相人文空間', en: 'Taichung EPIC Chan Arts & True Reality Cultural Space', addrZh: '台中市西區台灣大道二段 307 號 15 樓', addrEn: '15F, No. 307, Sec. 2, Taiwan Blvd., West Dist., Taichung', tel: '04-2328-9566' },
                { zh: '高雄圓道禪院', en: 'Kaohsiung Yuandao Chan Monastery', addrZh: '高雄市鼓山區美術東八街 8 號', addrEn: 'No. 8, Meishu E. 8th St., Gushan Dist., Kaohsiung', tel: '07-522-4676' }
              ]
            },
            {
              t: 'subheading',
              zh: '開辦蔬食烹飪班，學會簡單做美味蔬食',
              en: 'Plant-Based Cooking Classes — Delicious Vegetarian Food, Made Simple'
            },
            {
              t: 'body',
              zh: '「純素小小烘焙師班」帶領孩子從烘焙中認識美味健康的蔬食。',
              en: 'The “Little Vegan Baker” class introduces children to delicious, healthy plant-based food through baking.'
            },
            {
              t: 'gallery', images: [
                { f: 'image5', zh: '「純素小小烘焙師班」上課花絮', en: '“Little Vegan Baker” class in session' },
                { f: 'image6', zh: '「純素小小烘焙師班」上課花絮', en: '“Little Vegan Baker” class in session' },
                { f: 'image7', zh: '「純素小小烘焙師班」學員作品', en: '“Little Vegan Baker” — the children’s creations' },
                { f: 'image8', zh: '「純素小小烘焙師班」學員作品', en: '“Little Vegan Baker” — the children’s creations' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「這一區只講一件事：您今天中午吃什麼，就是一次氣候行動。」',
              en: '“This panel says one thing: what you eat for lunch today is a climate action.”'
            },
            points: [
              { zh: '兩個數字要記住：全球超過四分之一的土地用在畜牧與飼料；糧食系統佔全球溫室氣體排放約四分之一。', en: 'Two numbers to remember: over a quarter of the world’s land goes to livestock and feed; food systems are roughly a quarter of global greenhouse gas emissions.' },
              { zh: '蔬食同時對「人」和「地球」有益：降低多種慢性病與早逝風險，也降低土地消耗與碳排。', en: 'Plant-based eating helps people and planet at once — lower risk of chronic disease and premature death, less land use and lower emissions.' },
              { zh: '寶嚴的具體倡議有四個層次，任何人都能選一個開始：一日一素 → 一週一素 → 無肉日 → 純素月。', en: 'Four levels anyone can start from: one vegetarian meal a day, one vegetarian day a week, meat-free days, vegan months.' },
              { zh: '不只是倡議——四個分院每天提供免費蔬食，而且選用優質好油。台北、新北、台中、高雄都有。', en: 'Not just advocacy — four branches serve free vegetarian meals daily, with high-quality oils: Taipei, New Taipei, Taichung, Kaohsiung.' },
              { zh: '也做兒童教育：「純素小小烘焙師班」讓孩子從烘焙開始認識蔬食，不說教。', en: 'And it reaches children: the “Little Vegan Baker” class teaches through baking, not lecturing.' }
            ],
            ask: { zh: '「如果只從一餐開始，您願意先試哪一個——一日一素，還是一週一素？」', en: '“If you started with just one meal — would it be one meal a day, or one day a week?”' }
          }
        },

        {
          id: 'e3', kindZh: '小看板（2）', kindEn: 'Sub-Panel 2',
          titleZh: '寶嚴 ESG 創生園區', titleEn: 'Bao Yan ESG Regeneration Park',
          blocks: [
            {
              t: 'body',
              zh: '寶嚴 ESG 創生園區位於台東知本樂山，佔地 6 甲（約 5.8 公頃），種植 1,000 棵苦茶樹、300 棵桃樹與 500 棵黑松；金崙法雨寺佔地 2 甲（約 1.9 公頃），種植 200 棵五葉松；東河鄉 2 甲（約 1.9 公頃）土地種植 300 棵各類果樹。',
              en: 'The Bao Yan ESG Regeneration Park is located at Leshan, Zhiben, in Taitung County. Covering 6 jia (approx. 5.8 hectares), it is planted with 1,000 tea-oil camellias, 300 peach trees, and 500 Japanese black pines. A 2-jia site (approx. 1.9 hectares) at Fayu Temple in Jinlun is planted with 200 Japanese white pines, and a further 2-jia site in Donghe Township with 300 fruit trees of various kinds.'
            },
            {
              t: 'body',
              zh: '園區邀請國立中興大學土壤碳匯研究暨推動中心研究團隊參與，改善土壤、恢復地力，形成完整的永續飲食循環。',
              en: 'The research team from the Soil Carbon Sink Research and Promotion Center at National Chung Hsing University has been invited to improve the soil and restore its fertility, completing a full cycle of sustainable food.'
            },
            {
              t: 'stats', items: [
                { n: '6 甲', nEn: '6 jia', zh: '知本樂山（約 5.8 公頃）', en: 'Leshan, Zhiben (approx. 5.8 ha)' },
                { n: '1,000', zh: '棵苦茶樹', en: 'tea-oil camellias' },
                { n: '300', zh: '棵桃樹', en: 'peach trees' },
                { n: '500', zh: '棵黑松', en: 'Japanese black pines' },
                { n: '200', zh: '棵五葉松（金崙法雨寺）', en: 'Japanese white pines (Fayu Temple, Jinlun)' },
                { n: '300', zh: '棵果樹（東河鄉）', en: 'fruit trees (Donghe Township)' }
              ]
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image9', zh: '寶嚴 ESG 創生園區位置圖', en: 'Location map of the Bao Yan ESG Regeneration Park' }
              ]
            },
            {
              t: 'gallery', images: [
                { f: 'image10', zh: '台東樂山國際禪修中心', en: 'Leshan International Meditation Center, Taitung' },
                { f: 'image11', zh: '台東樂山國際禪修中心', en: 'Leshan International Meditation Center, Taitung' },
                { f: 'image12', zh: '寶嚴山寶嚴禪寺', en: 'Bao Yan Chan Monastery, Mount Bao Yan' },
                { f: 'image13', zh: '寶嚴山寶嚴禪寺', en: 'Bao Yan Chan Monastery, Mount Bao Yan' },
                { f: 'image14', zh: '寶嚴山寶嚴禪寺', en: 'Bao Yan Chan Monastery, Mount Bao Yan' },
                { f: 'image15', zh: '寶嚴山寶嚴禪寺', en: 'Bao Yan Chan Monastery, Mount Bao Yan' },
                { f: 'image16', zh: '金崙法雨寺', en: 'Fayu Temple, Jinlun' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「創生園區不是綠美化。我們種的每一棵樹，最後都會回到餐桌上。」',
              en: '“The regeneration park is not landscaping. Every tree we plant ends up back on the table.”'
            },
            points: [
              { zh: '三塊地：知本樂山 6 甲（約 5.8 公頃）、金崙法雨寺 2 甲、東河鄉 2 甲。', en: 'Three sites: Leshan in Zhiben, 6 jia (approx. 5.8 ha); Fayu Temple in Jinlun, 2 jia; Donghe Township, 2 jia.' },
              { zh: '樹種各有用意：苦茶樹 1,000 棵（產苦茶油，接回前一區「選用優質好油」）、桃樹 300 棵、黑松 500 棵、五葉松 200 棵、果樹 300 棵。', en: 'Each species has a purpose: 1,000 tea-oil camellias (the oil links back to the free vegetarian meals), 300 peach trees, 500 black pines, 200 white pines, 300 fruit trees.' },
              { zh: '關鍵合作：國立中興大學「土壤碳匯研究暨推動中心」研究團隊——重點是土壤碳匯，不只是種樹。', en: 'Key partner: the Soil Carbon Sink Research and Promotion Center at National Chung Hsing University — the point is soil carbon, not just planting.' },
              { zh: '完整邏輯：改善土壤 → 恢復地力 → 自產好油與果實 → 供應分院免費蔬食，形成「完整的永續飲食循環」。', en: 'The full loop: improve the soil, restore fertility, grow the oil and fruit, supply the free vegetarian meals — a complete cycle of sustainable food.' }
            ],
            ask: { zh: '「您猜，這 1,000 棵苦茶樹跟剛剛那四個免費蔬食據點有什麼關係？」', en: '“Can you guess how these 1,000 tea-oil camellias connect to the four free-meal locations we just saw?”' }
          }
        }
      ]
    },

    /* ══════════════════════════ S 區 ══════════════════════════ */
    {
      id: 'soc', key: 'S', num: '三', numEn: 'III',
      shortZh: '社會共好', shortEn: 'S · Social',
      zh: 'S 區・社會共好', en: 'Social Zone',
      tagline: { zh: '0 到 100 歲的覺性教育', en: 'Awakening Education, from Age Zero to One Hundred' },
      panels: [
        {
          id: 's1', kindZh: '大看板', kindEn: 'Main Panel',
          titleZh: 'S｜社會共好', titleEn: 'S | Social Well-Being for All',
          blocks: [
            { t: 'couplet', zh: '0 到 100 歲的覺性教育', en: 'Awakening Education, from Age Zero to One Hundred' },
            {
              t: 'sutra',
              zh: '「自皈依法，當願眾生，深入經藏，智慧如海。」',
              en: '“I take refuge in the Dharma. May all beings enter deeply into the treasury of sutras, their wisdom as vast as the ocean.”'
            },
            {
              t: 'subheading',
              zh: '財團法人圓道文教基金會榮獲「2025 第七屆 ASSET 永續典範獎——社會創新｜社會共好獎」',
              en: 'The Yuandao Culture and Education Foundation Wins the Social Innovation | Social Well-Being Award at the 7th ASSET Sustainability Model Awards, 2025'
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image17', zh: 'ASSET 永續典範獎頒獎現場', en: 'At the ASSET Sustainability Model Awards ceremony' },
                { f: 'image18', zh: '寶嚴 0 到 100 歲全齡全人經典教育架構圖', en: 'Bao Yan Whole-Person Classical Education Framework, Ages 0 to 100' }
              ]
            },
            { t: 'heading', zh: '寶嚴六藝兒童發展中心', en: 'Bao Yan Six Arts Children’s Development Center' },
            {
              t: 'subheading',
              zh: '「FLY 小星星探索營」與「EPIC 兒童哲學與心力量」',
              en: '“FLY Little Stars Exploration Camp” and “EPIC Children’s Philosophy & Inner Strength”'
            },
            {
              t: 'body',
              zh: '「EPIC 兒童哲學與心力量」為週日兒童六藝學習營，課程以視覺／藝術、聽覺／鼓藝與表演、味覺／衛教、嗅覺／芳香、觸覺／健康、邏輯與科學等感官探索為範疇，培養兒童的智慧力與哲學思辨力。',
              en: '“EPIC Children’s Philosophy & Inner Strength” is a Sunday Six Arts camp for children. The curriculum is built around sensory exploration — sight/art, hearing/drumming and performance, taste/health education, smell/aromatics, touch/health, and logic and science — cultivating children’s wisdom and their capacity for philosophical thinking.'
            },
            {
              t: 'body',
              zh: '「FLY 小星星探索營」於暑假期間在四個縣市同時開辦，連續六週，共 24 個主題。',
              en: '“FLY Little Stars Exploration Camp” runs for six consecutive weeks over the summer, held simultaneously in four cities and counties, with 24 themes in all.'
            },
            {
              t: 'table',
              titleZh: '2026 年 FLY 小星星探索營各地營隊主題一覽',
              titleEn: '2026 FLY Little Stars Exploration Camp — Camp Themes by Location',
              head: [['日期', 'Dates'], ['台東', 'Taitung'], ['台北', 'Taipei'], ['台中', 'Taichung'], ['高雄', 'Kaohsiung']],
              rows: [
                [['7/12–7/18', ''], ['心理覺察探索營（佛光大學心理學系）', 'Mind Awareness Camp (Dept. of Psychology, Fo Guang University)'], ['藝術探索週', 'Art Exploration Week'], ['積木與科學營', 'Building Blocks & Science Camp'], ['大設計師養成計畫', 'Young Designers Program']],
                [['7/19–7/25', ''], ['六藝潛能探索營', 'Six Arts Potential Camp'], ['鼓藝與表演週', 'Drumming & Performance Week'], ['程式尋寶大冒險', 'Coding Treasure Hunt'], ['探險家手札', 'The Explorer’s Notebook']],
                [['7/26–8/01', ''], ['地景藝術探索營（中興大學土壤環境科學系）', 'Land Art Camp (Dept. of Soil and Environmental Sciences, National Chung Hsing University)'], ['味覺與衛教週', 'Taste & Health Education Week'], ['烘焙廚師', 'Little Bakers'], ['小小棋師營', 'Little Chess Masters']],
                [['8/02–8/08', ''], ['星空探索營', 'Starry Sky Camp'], ['嗅覺與芳香週', 'Smell & Aromatics Week'], ['積木與科學營', 'Building Blocks & Science Camp'], ['勇氣任務營', 'Mission: Courage']],
                [['8/09–8/15', ''], ['星空探索營', 'Starry Sky Camp'], ['觸覺與健康週', 'Touch & Health Week'], ['街舞動感地帶', 'Street Dance Zone'], ['串出我的小世界', 'Beading My Little World']],
                [['8/16–8/22', ''], ['華嚴六藝探索營', 'Avatamsaka Six Arts Camp'], ['邏輯與科學週', 'Logic & Science Week'], ['功夫英雄特訓班', 'Kung Fu Heroes Training Camp'], ['科學魔法書', 'The Book of Science Magic']]
              ],
              noteZh: '※ 台東欄 8/02–8/08 與 8/09–8/15 均為「星空探索營」，為連續兩週開辦。',
              noteEn: '※ Taitung runs the Starry Sky Camp for two consecutive weeks (8/02–8/08 and 8/09–8/15).'
            },
            {
              t: 'gallery', images: [
                { f: 'image19', zh: 'FLY 小星星探索營活動剪影', en: 'Scenes from the FLY Little Stars Exploration Camp' },
                { f: 'image20', zh: 'FLY 小星星探索營活動剪影', en: 'Scenes from the FLY Little Stars Exploration Camp' },
                { f: 'image21', zh: 'FLY 小星星探索營活動剪影', en: 'Scenes from the FLY Little Stars Exploration Camp' },
                { f: 'image22', zh: 'FLY 小星星探索營活動剪影', en: 'Scenes from the FLY Little Stars Exploration Camp' },
                { f: 'image23', zh: 'FLY 小星星探索營活動剪影', en: 'Scenes from the FLY Little Stars Exploration Camp' },
                { f: 'image24', zh: 'FLY 小星星探索營活動剪影', en: 'Scenes from the FLY Little Stars Exploration Camp' },
                { f: 'image25', zh: 'FLY 小星星探索營活動剪影', en: 'Scenes from the FLY Little Stars Exploration Camp' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「教育通常分年齡層。我們不分——0 歲到 100 歲，同一套覺性教育。」',
              en: '“Education is usually split by age. Ours isn’t — one awakening education, from age zero to one hundred.”'
            },
            points: [
              { zh: '先講獎：圓道文教基金會獲「2025 第七屆 ASSET 永續典範獎」的「社會創新｜社會共好獎」——這一區是被外部肯定過的。', en: 'Start with the award: the Foundation won the Social Innovation | Social Well-Being Award at the 7th ASSET Sustainability Model Awards, 2025 — externally validated.' },
              { zh: '請觀眾看架構圖：從兒童教育、普羅大眾、企業人士到樂齡長者，中間貫串的是 EPIC 四個字。', en: 'Point at the framework: children, the general public, business people, and elders — all threaded by the four letters EPIC.' },
              { zh: '兒童這一塊有兩個系統：週日的「EPIC 兒童哲學與心力量」走六藝＋六感（視覺／聽覺／味覺／嗅覺／觸覺／邏輯），暑假的「FLY 小星星探索營」六週、四縣市同時開、共 24 個主題。', en: 'Two children’s systems: the Sunday “EPIC Children’s Philosophy & Inner Strength” built on six arts and six senses; and the summer “FLY Little Stars Exploration Camp” — six weeks, four counties simultaneously, 24 themes.' },
              { zh: '營隊不是自己關起門來辦：台東場找了佛光大學心理學系、中興大學土壤環境科學系合作。', en: 'The camps are not run in isolation — Taitung partners with Fo Guang University’s Psychology Department and NCHU’s Soil and Environmental Sciences.' }
            ],
            ask: { zh: '「表上這 24 個主題，如果您是小朋友，最想報哪一個？」', en: '“If you were eight years old, which of these 24 camps would you sign up for?”' }
          }
        },

        {
          id: 's2', kindZh: '小看板（1）｜兒童教育', kindEn: 'Sub-Panel 1 | Children’s Education',
          titleZh: '兒童教育', titleEn: 'Children’s Education',
          blocks: [
            {
              t: 'subheading',
              zh: '善財童子五十三參善知識牌卡',
              en: 'Sudhana’s Fifty-Three Visits: The Spiritual Friends Card Game'
            },
            {
              t: 'body',
              zh: '以《華嚴經》善財童子五十三參的參學歷程為文本，開發融合聯合國永續發展目標（SDGs）的教育遊戲牌卡。透過遊戲中尋訪善知識的故事情境，打造創新的兒童教育工具。',
              en: 'Drawing on Sudhana’s pilgrimage to fifty-three spiritual friends in the Avatamsaka Sutra, this educational card game weaves in the UN Sustainable Development Goals (SDGs). Through story-driven play in which children set out to find their own spiritual friends, it becomes an innovative tool for children’s education.'
            },
            {
              t: 'gallery', images: [
                { f: 'image27', zh: '善財童子五十三參善知識牌卡', en: 'The Spiritual Friends card set' },
                { f: 'image28', zh: '兒童教室上課實況', en: 'The children’s classroom' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「《華嚴經》裡，善財童子拜訪了五十三位老師。我們把它做成了一副牌，而且每一位都對到一個 SDG。」',
              en: '“In the Avatamsaka Sutra, the boy Sudhana visits fifty-three teachers. We turned that into a card game — and mapped each one to a UN SDG.”'
            },
            points: [
              { zh: '文本來源明確：《華嚴經》善財童子五十三參的參學歷程。', en: 'The source text is specific: Sudhana’s pilgrimage to fifty-three spiritual friends in the Avatamsaka Sutra.' },
              { zh: '設計上把聯合國永續發展目標（SDGs）融進去——古經典直接接上國際永續語言。', en: 'The design weaves in the UN Sustainable Development Goals — an ancient text speaking the international language of sustainability.' },
              { zh: '五十三位善知識身分各不相同（不同職業、性別、生命經驗），本身就是「多元共融」的現成教材。', en: 'The fifty-three friends come from every walk of life and every gender — a ready-made lesson in diversity and inclusion.' },
              { zh: '玩法核心是「尋訪」：孩子在故事情境中主動去找善知識，而不是被動聽課。', en: 'The core mechanic is seeking: children actively go and find their teachers inside the story, rather than sitting and listening.' }
            ],
            ask: { zh: '「如果讓您挑一位人生中的『善知識』，您會想到誰？」', en: '“If you had to name one spiritual friend in your own life, who comes to mind?”' }
          }
        },

        {
          id: 's3', kindZh: '小立牌 + iPad', kindEn: 'Standee + iPad',
          titleZh: '善財童子五十三參　善知識性格測驗',
          titleEn: 'Sudhana’s Fifty-Three Visits — Which Spiritual Friend Are You?',
          interactive: true,
          blocks: [
            {
              t: 'body',
              zh: '五十三位善知識，擁有不同的身分、性別與生命智慧。你最像其中的哪一位？立即測試，探索專屬於你的性格特質與智慧力量。也許，你正是某個人生命中等待相遇的善知識！',
              en: 'The fifty-three spiritual friends come from every walk of life and every gender, each embodying a wisdom of their own. Which one are you most like? Take the quiz and discover the character traits and strengths that are uniquely yours. Perhaps you are the spiritual friend someone else is waiting to meet.'
            },
            {
              /* 註：印刷稿中兩張 QR 與標題對調（image29 實際指向抽籤頁、image30 指向面相頁）。
                 此處已依 QR 實際連結配對正確標題。 */
              t: 'qr', items: [
                { f: 'image30', zh: '面相觀照', en: 'Read Your Face, See Your Heart', url: 'https://twnyda07.github.io/baoyan-53can/face.html' },
                { f: 'image29', zh: '善知識抽籤', en: 'Which Spiritual Friend Will You Meet?', url: 'https://twnyda07.github.io/baoyan-53can/' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「這裡可以動手玩。掃一下，看看您最像五十三位善知識中的哪一位。」',
              en: '“This one you can try yourself — scan, and find out which of the fifty-three spiritual friends you are most like.”'
            },
            points: [
              { zh: '現場有兩個互動：「面相觀照」與「善知識抽籤」，各有一個 QR Code，也可以直接用桌上的 iPad。', en: 'Two interactive pieces on site — “Read Your Face, See Your Heart” and “Which Spiritual Friend Will You Meet?” — each with its own QR code, or use the iPad on the table.' },
              { zh: '引導語可以用看板最後那句：「也許，你正是某個人生命中等待相遇的善知識。」這句最容易讓觀眾停下來。', en: 'Use the panel’s closing line: “Perhaps you are the spiritual friend someone else is waiting to meet.” It is the line that makes people pause.' },
              { zh: '這是把前一塊「牌卡」從兒童延伸到成人的入口——同一套五十三參，大人也玩得到。', en: 'This extends the card game from children to adults — the same fifty-three visits, now for grown-ups.' },
              { zh: '操作提示：讓觀眾自己掃、自己讀結果，解說員不必逐字念，站旁邊接話就好。', en: 'Practical tip: let visitors scan and read the result themselves; stand alongside and pick up the conversation afterwards.' }
            ],
            ask: { zh: '「測出來像哪一位？跟您平常對自己的印象一樣嗎？」', en: '“Which one did you get? Is that how you see yourself?”' }
          }
        },

        {
          id: 's4', kindZh: '小看板（2）｜企業教育', kindEn: 'Sub-Panel 2 | Corporate Education',
          titleZh: '企業教育', titleEn: 'Corporate Education',
          blocks: [
            {
              t: 'subheading',
              zh: '菩薩商主 EPIC 系列課程｜EPIC 企業領袖營',
              en: 'The Merchant-Bodhisattva EPIC Course Series | EPIC Business Leaders Camp'
            },
            {
              t: 'body',
              zh: '為企業主及高階經理人量身訂製的心性修煉課程，融合禪式管理智慧與《楞嚴經》破妄顯真的心性轉化機制，引導學習者汲取佛法智慧，轉化運用於組織發展、團隊協作與經營管理。透過內在覺察凝聚團隊共識、提升管理效能，為企業永續發展注入安定而長遠的力量。',
              en: 'A program of inner cultivation tailored to business owners and senior executives. It combines Chan management wisdom with the Surangama Sutra’s mechanism of mental transformation — dispelling delusion to reveal what is true — guiding participants to draw on Buddhist wisdom and apply it to organizational development, teamwork, and management. Through inner awareness, teams build consensus and management effectiveness rises, giving corporate sustainability a steady and lasting strength.'
            },
            {
              t: 'body',
              zh: '課程設計以四階進程，層層深入，緊密結合當代職場實務議題：',
              en: 'The curriculum unfolds in four progressive stages, each closely tied to real issues in today’s workplace:'
            },
            {
              t: 'epic', items: [
                { L: 'E', wordEn: 'Exploration', zh: '慧見探索', en: 'Discovering Insight', descZh: '以《楞嚴經》「狂心頓歇，歇即菩提」為機轉', descEn: 'turning on the Surangama’s “when the frantic mind ceases, that very ceasing is awakening”' },
                { L: 'P', wordEn: 'Potential', zh: '潛能發展', en: 'Developing Potential', descZh: '以唯識心理學「轉識成智」為機轉', descEn: 'turning on Yogacara psychology’s “transforming consciousness into wisdom”' },
                { L: 'I', wordEn: 'Integration', zh: '團隊統理', en: 'Leading the Team', descZh: '以《華嚴經》菩提心之七處九會為機轉', descEn: 'turning on the Avatamsaka’s bodhicitta, taught across seven locations and nine assemblies' },
                { L: 'C', wordEn: 'Creativity', zh: '千手千眼', en: 'A Thousand Hands, a Thousand Eyes', descZh: '以觀音「入流亡所」對破五十陰魔之五十三參為機轉', descEn: 'turning on Guanyin’s “entering the stream” and Sudhana’s fifty-three visits, the antidote to the fifty demonic states' }
              ]
            },
            {
              t: 'heading',
              zh: '跨越三個國家、六個城市，共十二場：佛法智慧引領企業永續成長',
              en: 'Twelve Camps, Six Cities, Three Countries — Buddhist Wisdom for Sustainable Corporate Growth'
            },
            {
              t: 'body',
              zh: '寶嚴禪寺已舉辦 12 場企業領袖營，足跡遍及台北、台中、雲林、高雄、新加坡及加拿大溫哥華。透過佛法智慧與企業管理的跨域交流，引導企業領袖深化心性修養、凝聚團隊共識，並將學習轉化為推動企業成長與永續發展的實踐力量。',
              en: 'Bao Yan Chan Monastery has held 12 Business Leaders Camps, reaching Taipei, Taichung, Yunlin, and Kaohsiung in Taiwan, as well as Singapore and Vancouver, Canada. Through cross-disciplinary exchange between Buddhist wisdom and business management, corporate leaders deepen their inner cultivation, build team consensus, and turn what they learn into practical momentum for corporate growth and sustainability.'
            },
            {
              t: 'gallery', captionZh: '歷屆 EPIC 企業領袖營', captionEn: 'EPIC Business Leaders Camps to date', images: [
                { f: 'image31', zh: '2024/10/11–10/12　集思台大會議中心', en: 'GIS NTU Convention Center, October 11–12, 2024' },
                { f: 'image32', zh: '2025/12/27–12/28　集思台大會議中心', en: 'GIS NTU Convention Center, December 27–28, 2025' },
                { f: 'image33', zh: '2026/02/28–03/01　EPIC 禪藝實相人文空間', en: 'EPIC Chan Arts & True Reality Cultural Space, February 28 – March 1, 2026' },
                { f: 'image34', zh: '2025/02/22–02/23　集思台大會議中心', en: 'GIS NTU Convention Center, February 22–23, 2025' },
                { f: 'image35', zh: '2025/05/17–05/18　新加坡國立大學校友俱樂部', en: 'NUS Alumni Club, Singapore, May 17–18, 2025' },
                { f: 'image36', zh: '2025/02/15–02/16　逢甲大學', en: 'Feng Chia University, February 15–16, 2025' },
                { f: 'image37', zh: '2025/04/19–04/20　集思台大會議中心', en: 'GIS NTU Convention Center, April 19–20, 2025' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「『菩薩商主』——經典裡本來就有做生意的菩薩。這門課是為企業主開的。」',
              en: '“The merchant-bodhisattva is not our invention — the sutras already have bodhisattvas who do business. This course is built for company owners.”'
            },
            points: [
              { zh: '對象很清楚：企業主與高階經理人，量身訂製的心性修煉課程。', en: 'The audience is explicit: business owners and senior executives, in a tailored program of inner cultivation.' },
              { zh: 'EPIC 四階可以用一句話帶：E 先看清（狂心頓歇）、P 轉化（轉識成智）、I 統理團隊（七處九會）、C 創造（千手千眼）。', en: 'The four stages in one breath: E — see clearly; P — transform; I — lead the team; C — create.' },
              { zh: '每一階都掛在一部經上：《楞嚴經》、唯識、《華嚴經》、觀音法門。不是管理學包裝，是經典本身。', en: 'Each stage rests on a specific text — the Surangama, Yogacara, the Avatamsaka, the Guanyin practice. It is not management theory with Buddhist decoration.' },
              { zh: '規模數字：12 場、6 城市、3 國家（台灣、新加坡、加拿大）。台灣走過台北、台中、雲林、高雄。', en: 'Scale: 12 camps, 6 cities, 3 countries (Taiwan, Singapore, Canada) — Taipei, Taichung, Yunlin, Kaohsiung at home.' },
              { zh: '照片牆上每張都有時間地點，可以請觀眾找找看有沒有自己去過的場次。', en: 'Every photo is dated and located — invite visitors to look for a session they attended.' }
            ],
            ask: { zh: '「在您的公司，最難的是策略，還是把團隊的心凝聚起來？」', en: '“In your company, which is harder — the strategy, or getting the team’s hearts aligned?”' }
          }
        },

        {
          id: 's5', kindZh: '小看板（3）｜經典學養教育', kindEn: 'Sub-Panel 3 | Classical Sutra Education',
          titleZh: '經典學養教育——書寫、受持、讀誦、解說',
          titleEn: 'Classical Sutra Education — Writing Out, Upholding, Reciting, Expounding',
          blocks: [
            {
              t: 'gallery', wide: true, images: [
                { f: 'image38', zh: '經典學養教育主視覺：幼有所長・壯有所用・老有所養', en: 'Classical Sutra Education — “The young grow, the able serve, the old are cared for”' }
              ]
            },
            {
              t: 'subheading',
              zh: '每日雲端共修｜讓修行融入生活日常',
              en: 'Daily Online Group Practice | Bringing Practice into Everyday Life'
            },
            {
              t: 'table',
              head: [['時段', 'Time'], ['常態課程', 'Regular Courses'], ['騰雲課程', 'Tengyun Fast-Track Courses']],
              rows: [
                [['05:00–06:30', ''], ['華嚴經一卷／楞嚴經一卷', 'One fascicle of the Avatamsaka Sutra / one fascicle of the Surangama Sutra'], ['華嚴經三卷', 'Three fascicles of the Avatamsaka Sutra']],
                [['06:30–07:00', ''], ['楞嚴咒', 'Surangama Mantra'], ['騰雲華嚴經六卷組', 'Tengyun Avatamsaka Sutra, six-fascicle set']],
                [['07:00–08:30', ''], ['華嚴經一卷／楞嚴經一卷', 'One fascicle of the Avatamsaka Sutra / one fascicle of the Surangama Sutra'], ['華嚴經三卷', 'Three fascicles of the Avatamsaka Sutra']],
                [['07:40–08:20', ''], ['觀心一支香、晨讀教觀綱宗', 'One incense-stick of mind contemplation; morning reading of the Essentials of the Teachings and Contemplations'], ['', '']],
                [['09:30–11:30', ''], ['大智度論／大乘起信論／菩薩戒研戒', 'Mahaprajnaparamita Sastra / Awakening of Faith in the Mahayana / Bodhisattva Precepts study'], ['', '']],
                [['12:00–12:40', ''], ['大般若經', 'Mahaprajnaparamita Sutra'], ['', '']],
                [['12:40–14:00', ''], ['楞嚴咒', 'Surangama Mantra'], ['', '']],
                [['14:00–15:00', ''], ['楞嚴百問——在生活修練首楞嚴三昧', 'One Hundred Questions on the Surangama — cultivating the Surangama samadhi in daily life'], ['', '']],
                [['15:00–16:30', ''], ['下午茶樂活誦經班', 'Afternoon-tea sutra recitation class'], ['週一、週五', 'Mon & Fri']],
                [['16:30–18:00', ''], ['華嚴經一卷／楞嚴經一卷', 'One fascicle of the Avatamsaka Sutra / one fascicle of the Surangama Sutra'], ['華嚴經三卷', 'Three fascicles of the Avatamsaka Sutra']],
                [['18:00–19:00', ''], ['大般若經＋金剛經', 'Mahaprajnaparamita Sutra + Diamond Sutra'], ['', '']],
                [['19:00–20:00', ''], ['觀音法門／秒懂楞嚴東西軍／大乘禪修', 'Guanyin Dharma-gate / Surangama in a Minute: East vs. West / Mahayana meditation'], ['瑜伽師地論', 'Yogacarabhumi Sastra']],
                [['20:00–21:30', ''], ['華嚴經一卷／楞嚴經一卷', 'One fascicle of the Avatamsaka Sutra / one fascicle of the Surangama Sutra'], ['華嚴經三卷', 'Three fascicles of the Avatamsaka Sutra']],
                [['20:00–21:30', ''], ['（英文）戒律／大乘禪修／楞嚴心法／佛陀十大弟子', '(In English) Vinaya / Mahayana meditation / the Surangama mind-method / the Buddha’s Ten Great Disciples'], ['', '']],
                [['21:30–22:30', ''], ['金剛經寫禪開示', 'Diamond Sutra “Writing Chan” teaching'], ['', '']]
              ],
              noteZh: '「騰雲」取「騰雲駕霧、快速前進」之意。',
              noteEn: '“Tengyun” means riding the clouds — moving fast.'
            },
            {
              t: 'case',
              titleZh: '案例一｜八十三歲的精進日課：以經藏豐盛生命之桑榆',
              titleEn: 'Case One | A Daily Practice at Eighty-Three: Enriching Life’s Evening with the Treasury of the Sutras',
              zh: '八十三歲的老菩薩，自 2019 年雲端課程開播以來，每日清晨 5:00 到晚上 10:30 持續不斷隨堂上課及共修，並一字一句勤做筆記，累積數十本工整筆記。美好的晚年，讓佛法智慧滋養身心。',
              en: 'Since the online program began in 2019, an eighty-three-year-old practitioner has attended class and joined group practice every day, from 5:00 a.m. to 10:30 p.m., taking notes word by word and filling dozens of neatly written notebooks — a beautiful later life, body and mind nourished by the wisdom of the Dharma.',
              images: [
                { f: 'image39', zh: '八十三歲老菩薩每日隨堂上課', en: 'An eighty-three-year-old practitioner at her daily online class' },
                { f: 'image40', zh: '數十本工整的隨堂筆記', en: 'Dozens of neatly written class notebooks' }
              ]
            },
            {
              t: 'case',
              titleZh: '案例二｜十年聞思修，一筆一畫寫下經典的生命力量',
              titleEn: 'Case Two | Ten Years of Hearing, Reflecting, and Practicing: Writing Out the Living Power of the Sutras, Stroke by Stroke',
              zh: '美鈴居士（60 歲）從《楞嚴經通說》、《大乘起信論》、《教觀綱宗》，到「唯識專題」與《瑜伽師地論》，都留下滿滿的筆記，印證了經典教育如何透過長期薰習，成為安定生命的力量。',
              en: 'Meiling, a lay practitioner of sixty, has filled notebook after notebook — from the Commentary on the Surangama Sutra, the Awakening of Faith in the Mahayana, and the Essentials of the Teachings and Contemplations, through to the Yogacara seminars and the Yogacarabhumi Sastra — proof of how classical education, absorbed over many years, becomes a steadying force in life.',
              images: [
                { f: 'image41', zh: '美鈴居士十年間累積的經典筆記', en: 'A decade of sutra notes kept by Meiling, a lay practitioner' },
                { f: 'image42', zh: '美鈴居士十年間累積的經典筆記', en: 'A decade of sutra notes kept by Meiling, a lay practitioner' },
                { f: 'image43', zh: '美鈴居士十年間累積的經典筆記', en: 'A decade of sutra notes kept by Meiling, a lay practitioner' }
              ]
            },
            {
              t: 'case',
              titleZh: '案例三｜換心人黃健予：願得此心，不負此生',
              titleEn: 'Case Three | Huang Chien-yu, Heart Transplant Recipient: May This Heart Be Worthy of This Life',
              zh: '黃健予十年前接受心臟移植，成為振興醫院第 461 號換心人，發願演講 108 場分享生命故事。出版第一本書《失去心跳的勇氣》，由本書改編的電視劇獲 2023 年金鐘獎最佳女配角及最佳男主角入圍。\n遇見寶嚴禪寺後，與中國的企業教育機構合作，主持一年期寶嚴雲端學院「善財童子五十三參」課程，隨即出版新書《靈魂重組》，記錄將《華嚴經》要義內化並展現於生命的深刻經歷。',
              en: 'Huang Chien-yu received a heart transplant ten years ago, becoming the 461st transplant recipient at Cheng Hsin General Hospital, and vowed to give 108 talks sharing his life story. He published his first book, The Courage to Lose a Heartbeat; the television series adapted from it earned nominations for Best Supporting Actress and Best Leading Actor at the 2023 Golden Bell Awards.\nAfter encountering Bao Yan Chan Monastery, he partnered with a corporate education organization in China to host a year-long course on “Sudhana’s Fifty-Three Visits” at the Bao Yan Cloud Academy, and went on to publish a new book, Soul Reassembled, recording the profound experience of internalizing the essential meaning of the Avatamsaka Sutra and living it out in his own life.',
              images: [
                { f: 'image44', zh: '換心人黃健予', en: 'Huang Chien-yu, heart transplant recipient' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「這張課表從清晨五點排到晚上十點半，每天。而且是免費上網就能參加的。」',
              en: '“This timetable runs from five in the morning to half past ten at night — every day, online.”'
            },
            points: [
              { zh: '四個動詞就是這一區的標題：書寫、受持、讀誦、解說——經典教育不是聽講，是四件要動手做的事。', en: 'Four verbs are the title: writing out, upholding, reciting, expounding. Classical education is something you do, not something you listen to.' },
              { zh: '課表分兩軌：「常態課程」照自己的步調，「騰雲課程」是快軌（騰雲＝騰雲駕霧、快速前進），例如華嚴經一次三卷。', en: 'Two tracks: “regular” at your own pace, and “Tengyun” — riding the clouds, the fast track (three fascicles of the Avatamsaka at a time).' },
              { zh: '有英文班：每晚 20:00–21:30，戒律／大乘禪修／楞嚴心法／佛陀十大弟子。國際觀眾可以直接接。', en: 'There is an English track nightly at 20:00–21:30 — Vinaya, Mahayana meditation, the Surangama mind-method, the Buddha’s Ten Great Disciples. International visitors can join directly.' },
              { zh: '三個真實案例，剛好對到三個年齡與處境：83 歲長者（2019 年開播至今每日不斷、數十本筆記）、60 歲美鈴居士（十年筆記）、換心人黃健予（振興醫院第 461 號，發願演講 108 場）。', en: 'Three real cases across three ages: an 83-year-old (daily since 2019, dozens of notebooks); Meiling at 60 (ten years of notes); and Huang Chien-yu, the 461st heart transplant recipient at Cheng Hsin Hospital, who vowed to give 108 talks.' },
              { zh: '黃健予的線索可以接回 S 區前面：他主持的是一年期「善財童子五十三參」課程——跟兒童牌卡同一部經。', en: 'Huang’s thread loops back: the year-long course he hosts is “Sudhana’s Fifty-Three Visits” — the same sutra as the children’s card game.' }
            ],
            ask: { zh: '「八十三歲，每天從五點上到十點半。您覺得撐住她的是毅力，還是別的什麼？」', en: '“Eighty-three, and in class from five a.m. to ten-thirty p.m. every day. Is that willpower — or something else?”' }
          }
        },

        {
          id: 's6', kindZh: '小看板（4）｜藝術教育', kindEn: 'Sub-Panel 4 | Arts Education',
          titleZh: '禪・藝・實相　藝術教育', titleEn: 'Chan · Art · True Reality — Arts Education',
          blocks: [
            { t: 'subheading', zh: 'EPIC 禪藝實相人文空間', en: 'EPIC Chan Arts & True Reality Cultural Space' },
            {
              t: 'body',
              zh: '「EPIC 禪藝實相人文空間」是一處融合禪意美學、人文交流與心靈探索的特色場域，讓參與者得以暫時放下日常紛擾，在舒適且富有質感的環境中專注學習、深入思考、彼此交流。',
              en: 'The EPIC Chan Arts & True Reality Cultural Space brings together Chan aesthetics, cultural exchange, and inner exploration. Here visitors can set aside the distractions of daily life and, in a comfortable and finely crafted setting, focus on learning, think deeply, and exchange ideas with one another.'
            },
            {
              t: 'body',
              zh: '此域空間多元且深富涵納性：藝術空間邀請創作者開設個人藝術展，新銳、素人或成熟的藝術家均可在此開展；人文空間以「活成一道光」系列講座，特邀各界獨特的人間菩薩分享生命洞見，並以「名人講堂」系列課程，涵蓋科學、人文、教育、音樂、天文與自然，成為一個由微觀到巨觀的全人生命成長場域。',
              en: 'The space is broad in scope and generous in spirit. The gallery invites artists to mount solo exhibitions, and emerging, self-taught, and established artists alike are welcome to show their work. The cultural program offers the “Live as a Ray of Light” lecture series, in which remarkable people from every field — bodhisattvas in the world — share their insights into life, together with the “Distinguished Speakers Forum,” spanning science, the humanities, education, music, astronomy, and the natural world. The result is a place for whole-person growth that reaches from the microcosmic to the macrocosmic.'
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image45', zh: 'EPIC 禪藝實相人文空間展場一隅', en: 'Inside the EPIC Chan Arts & True Reality Cultural Space' }
              ]
            },
            { t: 'heading', zh: '2026 年迄今展出主題', en: 'Exhibition Themes to Date in 2026' },
            {
              t: 'gallery', captionZh: '・「活成一道光」專家演講', captionEn: '“Live as a Ray of Light” Expert Talks',
              images: ['image46', 'image47', 'image48', 'image49', 'image50', 'image51'].map(f => ({ f, zh: '「活成一道光」系列講座海報', en: 'Poster from the “Live as a Ray of Light” lecture series' }))
            },
            {
              t: 'gallery', captionZh: '・「名人講堂」專家演講', captionEn: '“Distinguished Speakers Forum” Expert Talks',
              images: ['image52', 'image53', 'image54', 'image55', 'image56', 'image57'].map(f => ({ f, zh: '「名人講堂」系列講座海報', en: 'Poster from the “Distinguished Speakers Forum” lecture series' }))
            },
            {
              t: 'gallery', captionZh: '・藝術展覽', captionEn: 'Art Exhibitions',
              images: ['image58', 'image59', 'image60', 'image61', 'image62', 'image63', 'image64', 'image65'].map(f => ({ f, zh: '2026 年 EPIC 禪藝實相人文空間藝術展覽海報', en: 'Art exhibition poster, EPIC Chan Arts & True Reality Cultural Space, 2026' }))
            },
            { t: 'subheading', zh: '寫禪　手抄金剛經塔', en: 'Writing Chan — The Hand-Copied Diamond Sutra Pagoda' },
            {
              t: 'body',
              zh: '以《金剛經》為導體，將其字句堆砌成一座七層寶塔於蟬翼宣紙上；以筆墨一字一字地收攝身心臨摹，建造獨一無二的定慧雙修金剛經塔。',
              en: 'Taking the Diamond Sutra as its medium, the text is stacked verse by verse into a seven-tiered pagoda on cicada-wing xuan paper. Copied character by character with brush and ink, body and mind gathered in, it becomes a one-of-a-kind Diamond Sutra pagoda in which concentration and wisdom are cultivated together.'
            },
            {
              t: 'gallery',
              images: ['image66', 'image67', 'image68', 'image69', 'image70', 'image71'].map(f => ({ f, zh: '寫禪：以筆墨一字一字臨摹金剛經塔', en: 'Writing Chan: copying the Diamond Sutra pagoda character by character' }))
            },
            { t: 'subheading', zh: '千人寫經造塔行動', en: 'The Thousand-Person Sutra-Copying Pagoda Initiative' },
            {
              t: 'body',
              zh: '在台灣、美國、新加坡、加拿大及中國各省舉辦數十場大型寫經造塔課程，並長期於各分院每月固定舉辦。疫情期間以 Zoom 為雲端教室，線上同步廣開四十班，並將金剛經塔禮盒送予抗疫第一線相關工作人員及隔離人士。',
              en: 'Dozens of large-scale sutra-copying pagoda workshops have been held in Taiwan, the United States, Singapore, Canada, and provinces across China, alongside regular monthly sessions at every branch. During the pandemic, Zoom became a cloud classroom with forty classes running online at the same time, and Diamond Sutra pagoda gift sets were sent to frontline pandemic-response workers and to people in quarantine.'
            },
            {
              t: 'gallery', captionZh: '千人寫經造塔行動現場', captionEn: 'A Thousand-Person Sutra-Copying Pagoda session',
              images: [
                { f: 'image72', zh: '千人寫經造塔行動現場', en: 'A Thousand-Person Sutra-Copying Pagoda session' },
                { f: 'image73', zh: '泉州金剛般若寫禪', en: 'Diamond Prajna Writing Chan, Quanzhou' },
                { f: 'image74', zh: '蘇州金剛般若寫禪', en: 'Diamond Prajna Writing Chan, Suzhou' },
                { f: 'image75', zh: '瀋陽金剛般若寫禪', en: 'Diamond Prajna Writing Chan, Shenyang' },
                { f: 'image76', zh: '廈門金剛般若寫禪', en: 'Diamond Prajna Writing Chan, Xiamen' }
              ]
            },
            { t: 'subheading', zh: '因陀羅網工藝教室', en: 'Indra’s Net Craft Studio' },
            {
              t: 'body',
              zh: '寶嚴禪寺與輔仁大學織品服裝學系合作推動「寶嚴・因陀羅網：佛法美學工藝重整與資產化」計畫。以施華洛世奇水晶珠為素材，在持咒、祈福與編織中，將善念與祝福融入作品。歡迎各界團體與企業洽談合作開班，共同傳遞佛法美學與祈福善念。',
              en: 'Bao Yan Chan Monastery is working with the Department of Textiles and Clothing at Fu Jen Catholic University on “Bao Yan · Indra’s Net: Revitalizing Buddhist Aesthetic Craft as Cultural Assets.” Using Swarovski crystal beads, participants weave while reciting mantras and offering blessings, so that goodwill and good wishes are worked into every piece. Groups and companies of all kinds are welcome to inquire about running classes together, sharing Buddhist aesthetics and the goodwill of blessing.'
            },
            {
              t: 'gallery', images: [
                { f: 'image77', zh: '從工到藝到藝術：高階珠寶因陀羅網人才培育全佈局', en: 'From Craft to Art: A Talent-Development Blueprint for Indra’s Net Fine Jewelry' },
                { f: 'image78', zh: '串珠藝術版圖：整合未來教育與價值的跨界指南', en: 'The Beadwork Landscape: A Cross-Disciplinary Guide to Future Education and Value' },
                { f: 'image79', zh: '因陀羅網工藝教室上課實況', en: 'The Indra’s Net Craft Studio in session' },
                { f: 'image80', zh: '因陀羅網工藝教室成果分享', en: 'A presentation of the studio’s work' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「禪、藝、實相三個字。藝術在這裡不是裝飾，是修行的方法。」',
              en: '“Chan, art, true reality. Here art is not decoration — it is a method of practice.”'
            },
            points: [
              { zh: 'EPIC 人文空間走兩條線：藝術展覽（新銳、素人、成熟藝術家都收）＋講座（「活成一道光」談生命洞見、「名人講堂」跨科學／人文／教育／音樂／天文／自然）。', en: 'The EPIC space runs two lines: exhibitions open to emerging, self-taught, and established artists; and talks — “Live as a Ray of Light” on life insight, and the “Distinguished Speakers Forum” across science, humanities, education, music, astronomy, and nature.' },
              { zh: '寫禪金剛經塔：把《金剛經》的字句堆成七層寶塔，寫在蟬翼宣紙上。重點在「定慧雙修」——一字一字寫，身心就收攝了。', en: 'Writing Chan: the Diamond Sutra stacked into a seven-tiered pagoda on cicada-wing xuan paper. The point is concentration and wisdom together — the mind gathers as the hand writes.' },
              { zh: '千人寫經造塔的規模：台灣、美國、新加坡、加拿大及中國各省數十場；疫情期間 Zoom 同步開四十班，並把金剛經塔禮盒送給第一線防疫人員與隔離者。', en: 'Scale: dozens of sessions across Taiwan, the US, Singapore, Canada, and provinces of China; during the pandemic, forty Zoom classes at once, with pagoda gift sets sent to frontline workers and people in quarantine.' },
              { zh: '因陀羅網：與輔仁大學織品服裝學系合作，用施華洛世奇水晶珠，在持咒與編織中把祝福織進作品。這一項開放企業與團體洽談開班。', en: 'Indra’s Net: with Fu Jen Catholic University’s Department of Textiles and Clothing, Swarovski crystal beads are woven while mantras are recited. Companies and groups can arrange their own classes.' },
              { zh: '「因陀羅網」本身就是華嚴的宇宙觀——珠珠相映、重重無盡，很適合接回主視覺的「一個人的心影響整個世界」。', en: 'Indra’s Net is the Avatamsaka’s image of the cosmos — every jewel reflecting every other — which loops neatly back to the main visual.' }
            ],
            ask: { zh: '「一部經抄成一座塔，抄完大概要幾個小時？您願意坐下來試試看嗎？」', en: '“A whole sutra copied into a pagoda — how many hours would you guess? Would you sit down and try?”' }
          }
        }
      ]
    },

    /* ══════════════════════════ G 區 ══════════════════════════ */
    {
      id: 'gov', key: 'G', num: '四', numEn: 'IV',
      shortZh: '治理策略', shortEn: 'G · Governance',
      zh: 'G 區・治理策略', en: 'Governance Zone',
      tagline: { zh: '菩薩為眾生不請之友', en: 'The Bodhisattva Is the Uninvited Friend of All Beings' },
      panels: [
        {
          id: 'g1', kindZh: '大看板', kindEn: 'Main Panel',
          titleZh: 'G｜治理策略', titleEn: 'G | Governance Strategy',
          blocks: [
            { t: 'couplet', zh: '菩薩為眾生不請之友', srcZh: '——《大方廣佛華嚴經》', en: 'The Bodhisattva Is the Uninvited Friend of All Beings', srcEn: '— Avatamsaka Sutra' },
            {
              t: 'sutra',
              zh: '「自皈依僧，當願眾生，統理大眾，一切無礙。」',
              en: '“I take refuge in the Sangha. May all beings lead the assembly in harmony, free of every obstruction.”'
            },
            {
              t: 'heading',
              zh: '百萬華嚴計劃，免費結緣華嚴經',
              en: 'The Million Huayan Project',
              subEn: 'Sharing the Avatamsaka Sutra freely, to form good affinity with all'
            },
            {
              t: 'subheading',
              zh: '《跟著華嚴經去旅行》｜一念感動，十三座國際大獎',
              en: 'Traveling with the Avatamsaka Sutra | One Moment of Awe, Thirteen International Awards'
            },
            {
              t: 'body',
              zh: '紀錄片《跟著華嚴經去旅行》，記錄了百萬華嚴的供養歷程。導演陳鴻振因親眼目睹禪寺供養《華嚴經》的場面而深受觸動，發願以影像留下這段歷程；影片完成後，榮獲紐約國際電影獎、洛杉磯電影獎等十三項國際大獎。',
              en: 'The documentary Traveling with the Avatamsaka Sutra records the course of the Million Avatamsaka Offering. Moved by what he witnessed when the monastery made its offering of the Avatamsaka Sutra, director Chen Hung-chen vowed to set the whole undertaking down on film. The finished work has since won thirteen international awards, among them the New York International Film Awards and the Los Angeles Film Awards.'
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image81', zh: '《跟著華嚴經去旅行》得獎殊榮', en: 'Traveling with the Avatamsaka Sutra — awards and honors' },
                { f: 'image82', zh: '寶嚴禪寺弘法行腳圖（華嚴經供養行跡圖）', en: 'Bao Yan Chan Monastery — map of Dharma outreach' }
              ]
            },
            { t: 'heading', zh: '好好用心　心好好用', en: 'Mind Well Tended, Mind Well Used' },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image83', zh: '寶嚴禪寺大型法會現場', en: 'A large Dharma assembly at Bao Yan Chan Monastery' }
              ]
            },
            {
              t: 'subheading',
              zh: '以「六和敬」為組織發展的核心信念',
              en: 'The Six Points of Harmony and Respect as the Core of Organizational Development'
            },
            {
              t: 'six', items: [
                { zh: '身和同住', en: 'Harmony in body — dwelling together' },
                { zh: '口和無諍', en: 'Harmony in speech — without dispute' },
                { zh: '意和同悅', en: 'Harmony in mind — sharing joy' },
                { zh: '戒和同修', en: 'Harmony in precepts — practicing together' },
                { zh: '見和同解', en: 'Harmony in view — sharing understanding' },
                { zh: '利和同均', en: 'Harmony in benefit — sharing equally' }
              ]
            },
            { t: 'subheading', zh: '建構 AI 智慧管理系統', en: 'Building an AI-Powered Management System' },
            {
              t: 'body',
              zh: '整合組織資訊與作業流程，推動組織智慧化與永續發展；並聘請南臺科技大學多媒體與電腦娛樂科學系楊智傑教授，培育幹部及成員的 AI 知能，於微管理與鉅觀層面均逐步架構系統運用中。',
              en: 'Organizational information and workflows are being integrated to advance a smarter, more sustainable organization. Professor Yang Chih-chieh of the Department of Multimedia and Computer Entertainment Science at Southern Taiwan University of Science and Technology has been engaged to build AI literacy among leaders and members alike, and the systems are being put into practice step by step, at both the day-to-day and the organization-wide level.'
            }
          ],
          docent: {
            hook: {
              zh: '「治理聽起來很硬。但《華嚴經》給的定義很軟：菩薩，是眾生『不請之友』——不必人家開口，你就先到了。」',
              en: '“Governance sounds hard-edged. The Avatamsaka defines it softly: the bodhisattva is the uninvited friend — there before anyone has to ask.”'
            },
            points: [
              { zh: '百萬華嚴計劃：免費結緣《華嚴經》。紀錄片《跟著華嚴經去旅行》記錄整個供養歷程，導演陳鴻振是親眼看到現場才發願拍的。', en: 'The Million Huayan Project gives the Avatamsaka Sutra away freely. The documentary Traveling with the Avatamsaka Sutra records it — director Chen Hung-chen vowed to film it after witnessing the offering himself.' },
              { zh: '影片拿下 13 項國際大獎，包括紐約國際電影獎、洛杉磯電影獎。', en: 'The film has won thirteen international awards, including the New York International Film Awards and the Los Angeles Film Awards.' },
              { zh: '「好好用心　心好好用」是迴文對句——把心照顧好，心自然好用。這是治理的內在面。', en: '“Mind well tended, mind well used” — a palindromic couplet. Tend the mind and it serves you well. That is the inner side of governance.' },
              { zh: '組織治理明講六和敬六條：身和同住、口和無諍、意和同悅、戒和同修、見和同解、利和同均。特別點「利和同均」——分配也是治理。', en: 'Six Points of Harmony run the organization: body, speech, mind, precepts, view, and benefit. Note the last — sharing benefit equally is also governance.' },
              { zh: '外在面：建構 AI 智慧管理系統，聘請南臺科技大學多媒體與電腦娛樂科學系楊智傑教授，培育幹部及成員的 AI 知能。', en: 'The outer side: an AI-powered management system, with Professor Yang Chih-chieh of Southern Taiwan University of Science and Technology building AI literacy among staff.' },
              { zh: '一句話收尾：兩千多年的六和敬，配上今天的 AI——這就是我們的治理策略。', en: 'One line to close: a 2,000-year-old code of harmony, running on today’s AI. That is the governance strategy.' }
            ],
            ask: { zh: '「六和敬裡有一條是『利和同均』。您覺得哪一種組織最容易在這一條上出問題？」', en: '“One of the six is sharing benefit equally. Which kind of organization do you think struggles most with that one?”' }
          }
        },

        {
          id: 'g2', kindZh: '小看板（1）｜實踐場域', kindEn: 'Sub-Panel 1 | Fields of Practice',
          titleZh: '實踐場域', titleEn: 'Fields of Practice',
          blocks: [
            {
              t: 'body',
              zh: '「財團法人圓道文教基金會」以「寶嚴禪寺」暨全球分院為實踐場域，推動 ESG 創生行動方案。',
              en: 'The Yuandao Culture and Education Foundation carries out its ESG regeneration action plan through Bao Yan Chan Monastery and its branches worldwide.'
            },
            {
              t: 'body',
              zh: '寶嚴禪寺坐落於台東縣東河鄉南佳里段，背倚都蘭山脈，面向太平洋 200 度無遮障海岸線。地號 761、762、787-1、787-5 土地，共計面積 9,700.59 平方公尺（約 0.97 公頃），未來將成為社會大眾全家宜遊宜居的生態社區。',
              en: 'Bao Yan Chan Monastery stands in the Nanjiali Section of Donghe Township, Taitung County, backed by the Dulan Mountain Range and facing 200 degrees of unobstructed Pacific coastline. Occupying land parcels 761, 762, 787-1, and 787-5 — 9,700.59 m² in all (approx. 0.97 hectares) — it will become an ecological community where families are as welcome to visit as they are to settle.'
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image84', zh: '寶嚴禪寺新建工程建築模擬圖', en: 'Architectural rendering of the new Bao Yan Chan Monastery' },
                { f: 'image85', zh: '空中土地──基地地形設計概念', en: '“Land in the Air” — the site’s topographic design concept' },
                { f: 'image86', zh: '寶嚴 ESG 創生園區配置圖', en: 'Site plan of the Bao Yan ESG Regeneration Park' }
              ]
            },
            {
              t: 'numlist', items: [
                { zh: '寶嚴禪寺新建工程', en: 'Bao Yan Chan Monastery Construction Project' },
                { zh: '香草花園及停車場', en: 'Herb Garden and Parking Area' },
                { zh: '藝術教育中心', en: 'Arts Education Center' },
                { zh: '普莊嚴園', en: 'Garden of Universal Adornment' },
                { zh: '閉關中心', en: 'Solitary Retreat Center' }
              ]
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image87', zh: '寶嚴禪寺量體分區說明', en: 'Bao Yan Chan Monastery — massing and zoning diagram' }
              ]
            },
            {
              t: 'poem',
              titleZh: '國際學習資源中心', titleEn: 'International Learning Resource Center',
              leadZh: ['結合跨國學習資源', '創造大師共享經濟', '打造合適全年齡移居的國際學習中心'],
              leadEn: ['Uniting Learning Resources Across Borders', 'Creating a Sharing Economy of Masters', 'Building an International Learning Center Where Every Age Can Settle'],
              zh: ['寶嚴創設國際學習資源中心，以佛陀教義的六根，開設六種學習型態。', '邀請願意前來體驗短、中、長期教育學程的專家與大師進駐，貢獻所長；', '如《華嚴經》善財童子五十三參，共同在此教、研、修、學，', '盡情體驗台東的自然之美與寶嚴的佛學之美。', '', '《禮運大同篇》有言：「老有所終，壯有所用，幼有所長，', '鰥、寡、孤、獨、廢、疾者皆有所養。」', '寶嚴教育以全齡為對象——每個人都需要佛法，每個人都可以學習佛法。', '國際學習資源中心以全人教育為理念，', '在寶嚴實現人人皆有所學、皆有所用的大同世界。', '', '道場以佛法滋育十方。', '佛法 ESG，正是將佛法的體、相、用真實落地，', '成就一方「莊嚴淨土、普被有情」的清淨園區。'],
              en: ['Bao Yan is founding an International Learning Resource Center,', 'with six modes of learning drawn from the Buddha’s teaching on the six senses.', 'Specialists and masters are invited to take up residence for short, medium, or long', 'programs and to give what they know best — much as Sudhana sought out his', 'fifty-three spiritual friends in the Avatamsaka Sutra — so that teaching, research,', 'practice, and study go forward together here, in the natural beauty of Taitung', 'and the beauty of Bao Yan’s Buddhist learning.', '', 'The Book of Rites describes the Great Commonwealth: “The aged are cared for', 'to the end of their days, the able-bodied have their use, the young are brought', 'to maturity, and widowers and widows, orphans and the childless, the disabled', 'and the sick are all provided for.”', '', 'Bao Yan’s education is for every age. Everyone needs the Dharma; everyone', 'can learn the Dharma. Guided by the ideal of whole-person education, the', 'International Learning Resource Center makes that commonwealth real at', 'Bao Yan — a place where all may learn, and all may serve.', '', 'This monastery nourishes the ten directions with the Dharma.', 'Buddhist ESG is that teaching brought down to earth — its essence, its form,', 'and its function made real — in a pure land that adorns the earth', 'and embraces every being.']
            }
          ],
          docent: {
            hook: {
              zh: '「這一塊是把前面所有講的東西，放到一塊真實的土地上。」',
              en: '“This panel puts everything we have just talked about onto one piece of real ground.”'
            },
            points: [
              { zh: '基地資料是可查證的：台東縣東河鄉南佳里段，地號 761、762、787-1、787-5，共 9,700.59 平方公尺（約 0.97 公頃）。', en: 'The site data is verifiable: Nanjiali Section, Donghe Township, Taitung; parcels 761, 762, 787-1, 787-5; 9,700.59 m² (approx. 0.97 ha).' },
              { zh: '面向太平洋 200 度無遮障海岸線——這句可以請觀眾對照旁邊的空拍圖。', en: '200 degrees of unobstructed Pacific coastline — invite visitors to compare with the aerial photo.' },
              { zh: '配置圖五個編號依序是：1 禪寺新建工程、2 香草花園及停車場、3 藝術教育中心、4 普莊嚴園、5 閉關中心。', en: 'The five numbers on the site plan: 1 the monastery itself, 2 herb garden and parking, 3 arts education center, 4 Garden of Universal Adornment, 5 solitary retreat center.' },
              { zh: '「空中土地」是建築師的地形設計概念，量體分區圖從 B1F 到 5F 分成神聖空間、接引空間、遊客中心三類。', en: '“Land in the Air” is the architects’ topographic concept; the massing diagram divides B1F–5F into sacred space, welcoming space, and visitor center.' },
              { zh: '國際學習資源中心的邏輯：以佛陀教義的「六根」開六種學習型態，邀專家大師短中長期進駐——就像善財童子五十三參，只是這次善知識來到同一個園區。', en: 'The Learning Resource Center opens six modes of learning from the Buddha’s six senses, with masters in residence — Sudhana’s fifty-three visits, except the teachers all come to one campus.' },
              { zh: '收尾金句：「佛法 ESG，正是將佛法的體、相、用真實落地。」這句可以作為整個展區的結語。', en: 'The closing line works for the whole exhibition: “Buddhist ESG is that teaching brought down to earth — its essence, its form, and its function made real.”' }
            ],
            ask: { zh: '「《禮運大同篇》講『老有所終，壯有所用，幼有所長』。您覺得今天的社會，最缺的是哪一項？」', en: '“The Book of Rites asks that the old be cared for, the able be used, the young be raised. Which of the three does today’s society lack most?”' }
          }
        },

        {
          id: 'g3', kindZh: '分院一覽', kindEn: 'Branches',
          titleZh: '寶嚴各分院', titleEn: 'Bao Yan Branches',
          blocks: [
            {
              t: 'branches', items: [
                { zh: '台北寶嚴善首講堂', en: 'Taipei Bao Yan Shanshou Lecture Hall', addrZh: '台北市松山區光復北路 112 號 11 樓', addrEn: '11F, No. 112, Guangfu N. Rd., Songshan Dist., Taipei', tel: '02-2577-2978' },
                { zh: '新北寶嚴善覺講堂', en: 'New Taipei Bao Yan Shanjue Lecture Hall', addrZh: '新北市板橋區四川路一段 180 號', addrEn: 'No. 180, Sec. 1, Sichuan Rd., Banqiao Dist., New Taipei', tel: '02-2964-6617' },
                { zh: '台中 EPIC 禪藝實相人文空間', en: 'Taichung EPIC Chan Arts & True Reality Cultural Space', addrZh: '台中市西區台灣大道二段 307 號 15 樓', addrEn: '15F, No. 307, Sec. 2, Taiwan Blvd., West Dist., Taichung', tel: '04-2328-9566' },
                { zh: '高雄圓道禪院', en: 'Kaohsiung Yuandao Chan Monastery', addrZh: '高雄市鼓山區美術東八街 8 號', addrEn: 'No. 8, Meishu E. 8th St., Gushan Dist., Kaohsiung', tel: '07-522-4676' },
                { zh: '寶嚴 ESG 創生園區・台東知本樂山國際禪修中心', en: 'Bao Yan ESG Regeneration Park · Leshan International Meditation Center', addrZh: '台東縣卑南鄉溫泉村 36 鄰樂山 139 號', addrEn: 'No. 139, Leshan, Neighborhood 36, Wenquan Vil., Beinan Township, Taitung County', tel: '' },
                { zh: '新加坡寶嚴善慧地', en: 'Bao Yan Shanhuidi, Singapore', addrZh: 'Blk 163 Ang Mo Kio Ave. 4, #01-424, Singapore 560163', addrEn: '', tel: '' },
                { zh: '夏威夷檀華寺', en: 'Tanhua Temple, Hawaii', addrZh: '1614 Nuuanu Ave., Honolulu, HI 96817, USA', addrEn: '', tel: '+1 (808) 533-6758' }
              ]
            },
            {
              t: 'gallery', wide: true, images: [
                { f: 'image89', zh: '寶嚴各分院地圖：台灣・新加坡・夏威夷', en: 'Map of Bao Yan branches: Taiwan · Singapore · Hawaii' }
              ]
            }
          ],
          docent: {
            hook: {
              zh: '「離開展場之後，台北、新北、台中、高雄、台東都可以走進來。新加坡跟夏威夷也有。」',
              en: '“After the expo, you can walk into any of these — Taipei, New Taipei, Taichung, Kaohsiung, Taitung. Singapore and Hawaii too.”'
            },
            points: [
              { zh: '台灣五個據點＋新加坡＋夏威夷檀華寺，共七處。', en: 'Five locations in Taiwan, plus Singapore and Tanhua Temple in Hawaii — seven in all.' },
              { zh: '台北、新北、台中、高雄四個講堂就是 E 區講的「每日免費蔬食據點」——可以直接接回去。', en: 'The four lecture halls in Taipei, New Taipei, Taichung, and Kaohsiung are exactly the free-vegetarian-meal locations from the E zone.' },
              { zh: '台東知本樂山國際禪修中心＝寶嚴 ESG 創生園區，就是種 1,000 棵苦茶樹的那塊地。', en: 'The Leshan International Meditation Center in Taitung is the ESG Regeneration Park — the land with the thousand tea-oil camellias.' },
              { zh: '這張地圖很適合作為導覽結尾：邀請觀眾就近走一家。', en: 'This map is a good closing beat — invite visitors to drop in at whichever is nearest.' }
            ],
            ask: { zh: '「您住哪一區？我幫您看看最近的是哪一間。」', en: '“Where are you based? Let me point you to the nearest one.”' }
          }
        }
      ]
    }
  ],

  /* 物料清單（工作人員用） */
  materials: {
    titleZh: '亞太永續博覽會物料準備清單',
    titleEn: 'Asia-Pacific Sustainability Expo — Materials Preparation Checklist',
    rows: [
      [1, '兒童教育區', 'Children’s Education Zone', '兒童班下學期課程海報', 'Children’s Class Poster — Next Semester'],
      [2, '兒童教育區', 'Children’s Education Zone', '善財童子五十三參善知識牌卡', 'Sudhana’s Fifty-Three Visits Spiritual Friends Card Game'],
      [3, '兒童教育區', 'Children’s Education Zone', 'iPad', 'iPad'],
      [4, '企業教育區', 'Corporate Education Zone', '企業營課程教材', 'Business Leaders Camp Course Materials'],
      [5, '企業教育區', 'Corporate Education Zone', '經典教育學院 DM', 'Classical Education Academy Brochure'],
      [6, '經典學養教育區', 'Classical Sutra Education Zone', '華嚴經', 'Avatamsaka Sutra'],
      [7, '藝術教育區', 'Arts Education Zone', '金剛經塔', 'Diamond Sutra Pagoda'],
      [8, '藝術教育區', 'Arts Education Zone', '因陀羅網工藝教室海報', 'Indra’s Net Craft Studio Poster'],
      [9, '主視覺區', 'Main Visual Zone', '寶嚴手冊', 'Bao Yan Handbook']
    ]
  }
};
