export const t = {
  ja: {
    nav: {
      about: 'About',
      projects: 'Projects',
      press: 'Press',
      articles: 'Articles',
    },
    hero: {
      role: 'ソフトウェアエンジニア',
      description:
        '私のポートフォリオのメインテーマは「旅好きなエンジニアの旅路」です。技術を追いかけるのではなく、技術を楽しむ。まるで世界を旅する冒険家のように、常に新しい知識と技術の探求を続けます。',
      aboutLink: '私について →',
      projectsLink: 'プロジェクト',
    },
    about: {
      label: 'について',
      bio1: '京都府出身のソフトウェアエンジニア。立命館大学でソフトウェアを専門にプログラミング技術全般を学ぶ。スタートアップを共同創業し、自動運転OSSにも貢献。',
      bio2: 'エンジニアとしての活動に加え、テニスコーチとして幅広い年齢層の指導を行っています。「旅をするように技術を楽しむ」——それが私のエンジニアとしての信条です。',
      skillsLabel: 'スキル',
      linksLabel: 'リンク',
      interestsLabel: '関心領域',
      interests: ['フルスタック開発', 'UI / UX デザイン', 'プロダクトマネジメント', 'テニスコーチング'],
      biographyLabel: '経歴',
      educationLabel: '学歴',
      workLabel: '職歴',
      education: [
        { period: '2021年3月', desc: '立命館守山高等学校 卒業' },
        { period: '2021年4月–', desc: '立命館大学 情報理工学部 情報理工学科 入学' },
        { period: '2023年', desc: 'スタートアップ事業立ち上げ・運営に専念するため3年次休学（2023年4月〜2024年3月）' },
        { period: '2026年3月', desc: '立命館大学 情報理工学部 情報理工学科 システムアーキテクトコース 卒業' },
        { period: '2026年4月–', desc: '立命館大学大学院 情報理工学研究科 情報理工学専攻 博士前期課程 計算機科学コース 入学' },
        { period: '2028年3月', desc: '卒業予定' },
      ],
      work: [
        { period: '2021年4月–', desc: '株式会社アローズテニススクール テニスコーチ（アルバイト）' },
        { period: '2023年7月–', desc: '株式会社リーフラス 立命館守山中学高等学校テニス部 外部指導員（アルバイト）' },
        { period: '2023年11月–', desc: '株式会社Plaru ファウンダー兼ソフトウェアエンジニア（登記 2025年4月）— UI/UX設計、フルスタック開発、PdM業務' },
        { period: '2025年3月–2026年5月', desc: '株式会社Tier IV ソフトウェアエンジニア（アルバイト）— OSSへの機能追加、ソフトウェアメンテナンス' },
      ],
    },
    projects: {
      label: '制作物',
      title: 'プロジェクト',
      items: [
        {
          title: '琵琶湖・守山スタンプラリー — 守山市 × Plaru 観光DX実証',
          description:
            '守山市の官民連携プロジェクトサポート事業に採択。AI旅行計画アプリ「ぷらる」を活用し、滋賀県内30か所を巡るデジタルスタンプラリーを2026年8月〜2027年2月に実施。観光客の周遊データを可視化し、データドリブンな観光施策の立案を支援する観光DX実証。',
          tags: ['観光DX', 'React Native', 'AI', 'Open Data', '官民連携'],
        },
        {
          title: '野外料理体験マシーン — 大阪万博スカウトデイ',
          description:
            '大阪万博スカウトデイで展示した野外料理体験マシーン。RFIDカードをかざすと食材が選択され、Raspberry Pi とモーターで調理演出を制御。Web UIからリアルタイムに操作可能。',
          tags: ['React', 'Raspberry Pi', 'Express', 'MicroPython', 'RFID'],
        },
        {
          title: 'ぷらる — AIスポット探し・旅行計画アプリ',
          description:
            'AIが旅行プランを自動生成するスポット探し・旅行計画アプリ。株式会社 Plaru にてファウンダー兼エンジニアとして UI/UX 設計・フルスタック開発を担当。',
          tags: ['React Native', 'TypeScript', 'Node.js', 'AI'],
        },
        {
          title: 'ポートフォリオサイト',
          description: 'Next.js + TypeScript + Tailwind CSS で構築した個人ポートフォリオサイト。',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        },
      ],
    },
    press: {
      label: 'メディア',
      title: 'プレスリリース・掲載記事',
      items: [
        { outlet: 'PR TIMES', title: '守山で始まった高校生の挑戦が、5年後、観光DXによる地域課題解決へ', date: '2026/08/19' },
        { outlet: 'Plaru News', title: '守山市の官民連携プロジェクトサポート事業に採択されました', date: '2026/08/19' },
        { outlet: 'びわ湖大津経済新聞', title: '守山市×Plaruのデジタルスタンプラリーでびわこ周遊促進', date: '2026/08/19' },
        { outlet: 'infoseek ニュース', title: '守山で始まった高校生の挑戦が、5年後、観光DXによる地域課題解決へ', date: '2026/08/19' },
        { outlet: 'Excite ニュース', title: '守山で始まった高校生の挑戦が、5年後、観光DXによる地域課題解決へ', date: '2026/08/19' },
        { outlet: 'ニコニコニュース', title: '守山で始まった高校生の挑戦が、5年後、観光DXによる地域課題解決へ', date: '2026/08/19' },
        { outlet: 'Social Business', title: 'AIが自動生成：守山市×Plaru 観光DX実証プロジェクト', date: '2026/08/19' },
        { outlet: 'Instagram', title: '琵琶湖・守山スタンプラリー 公式投稿', date: '2026/08' },
      ],
    },
    articles: {
      label: '記事',
      title: '執筆記事',
    },
    footer: {
      copy: '© 2024 HONDA Takayuki',
    },
  },

  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      press: 'Press',
      articles: 'Articles',
    },
    hero: {
      role: 'Software Engineer',
      description:
        'The theme of my portfolio is "A Travel-Loving Engineer\'s Journey." Rather than chasing technology, I enjoy it — like an adventurer exploring the world. I keep seeking new knowledge and technology with curiosity and no fixed destination.',
      aboutLink: 'About me →',
      projectsLink: 'Projects',
    },
    about: {
      label: 'About',
      bio1: 'Software engineer based in Kyoto. Studying information engineering at Ritsumeikan University, with a focus on full-stack web development, UI/UX design, and open-source software. Co-founded a startup and contributed to autonomous driving OSS.',
      bio2: 'Outside of engineering, I work as a tennis coach — teaching players of all ages and levels. I believe in enjoying technology the same way a traveler enjoys exploring the world: with curiosity and no fixed destination.',
      skillsLabel: 'Skills',
      linksLabel: 'Links',
      interestsLabel: 'Interests',
      interests: ['Full-Stack Development', 'UI / UX Design', 'Product Management', 'Tennis Coaching'],
      biographyLabel: 'Biography',
      educationLabel: 'Education',
      workLabel: 'Work',
      education: [
        { period: 'Mar 2021', desc: 'Graduated from Ritsumeikan Moriyama High School' },
        { period: 'Apr 2021–', desc: 'Enrolled in Ritsumeikan University, College of Information Science and Engineering' },
        { period: '2023', desc: 'Leave of absence (Apr 2023 – Mar 2024) to focus on self-development and startup operations' },
        { period: 'Mar 2026', desc: 'Graduated from Ritsumeikan University, Systems Architecture Course' },
        { period: 'Apr 2026–', desc: 'Enrolled in Ritsumeikan University Graduate School, Master\'s Program in Computer Science (Doctoral Program, First Term)' },
        { period: 'Mar 2028', desc: 'Expected graduation' },
      ],
      work: [
        { period: 'Apr 2021–', desc: 'Tennis Coach, Arrows Tennis School (part-time)' },
        { period: 'Jul 2023–', desc: 'External Tennis Coach, Ritsumeikan Moriyama Middle & High School Tennis Club (part-time)' },
        { period: 'Nov 2023–', desc: 'Founder & Software Engineer, Plaru Inc. (registered Apr 2025) — UI/UX design, full-stack development, product management' },
        { period: 'Mar 2025–May 2026', desc: 'Software Engineer, Tier IV Inc. (part-time) — OSS feature development and software maintenance' },
      ],
    },
    projects: {
      label: 'Work',
      title: 'Projects',
      items: [
        {
          title: 'Biwako Moriyama Stamp Rally — Tourism DX with Moriyama City × Plaru',
          description:
            'Selected for Moriyama City\'s public-private collaboration program. Launched a digital stamp rally across 30 spots in Shiga Prefecture (Aug 2026 – Feb 2027) using the Plaru AI travel app to visualize tourist behavior and support data-driven tourism planning.',
          tags: ['Tourism DX', 'React Native', 'AI', 'Open Data', 'Public-Private'],
        },
        {
          title: 'Interactive Outdoor Cooking Machine — Osaka Expo Scout Day',
          description:
            'A hands-on cooking experience exhibit at Osaka Expo Scout Day. Tapping an RFID card selects ingredients; a Raspberry Pi and motors control the cooking performance. Controllable in real time via a web UI.',
          tags: ['React', 'Raspberry Pi', 'Express', 'MicroPython', 'RFID'],
        },
        {
          title: 'Plaru — AI Travel Planning App',
          description:
            'An AI-powered spot-discovery and travel-planning app. As founder and engineer at Plaru Inc., I led UI/UX design and full-stack development.',
          tags: ['React Native', 'TypeScript', 'Node.js', 'AI'],
        },
        {
          title: 'Portfolio Site',
          description: 'Personal portfolio built with Next.js, TypeScript, and Tailwind CSS.',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        },
      ],
    },
    press: {
      label: 'Media',
      title: 'Press Coverage',
      items: [
        { outlet: 'PR TIMES', title: 'A High School Student\'s Challenge in Moriyama Becomes Tourism DX Five Years Later', date: '2026/08/19' },
        { outlet: 'Plaru News', title: 'Selected for Moriyama City\'s Public-Private Collaboration Program', date: '2026/08/19' },
        { outlet: 'Biwako Otsu Keizai Shimbun', title: 'Moriyama City × Plaru Digital Stamp Rally to Boost Lake Biwa Tourism', date: '2026/08/19' },
        { outlet: 'infoseek News', title: 'A High School Student\'s Challenge in Moriyama Becomes Tourism DX Five Years Later', date: '2026/08/19' },
        { outlet: 'Excite News', title: 'A High School Student\'s Challenge in Moriyama Becomes Tourism DX Five Years Later', date: '2026/08/19' },
        { outlet: 'NicoNico News', title: 'A High School Student\'s Challenge in Moriyama Becomes Tourism DX Five Years Later', date: '2026/08/19' },
        { outlet: 'Social Business', title: 'AI-Powered: Moriyama City × Plaru Tourism DX Proof of Concept', date: '2026/08/19' },
        { outlet: 'Instagram', title: 'Biwako Moriyama Stamp Rally — Official Post', date: '2026/08' },
      ],
    },
    articles: {
      label: 'Writing',
      title: 'Articles',
    },
    footer: {
      copy: '© 2024 HONDA Takayuki',
    },
  },
} as const

export type Translations = typeof t.ja
