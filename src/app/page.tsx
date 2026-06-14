import Image from 'next/image'

const skills = ['React', 'React Native', 'TypeScript', 'Next.js', 'Node.js', 'Python']

const projects: {
  title: string
  description: string
  tags: string[]
  links?: { label: string; href: string }[]
}[] = [
  {
    title: 'Interactive Outdoor Cooking Machine — Osaka Expo Scout Day',
    description: '大阪万博スカウトデイで展示した野外料理体験マシーン。RFIDカードをかざすと食材が選択され、Raspberry Pi とモーターで調理演出を制御。Web UIからリアルタイムに操作可能。',
    tags: ['React', 'Raspberry Pi', 'Express', 'MicroPython', 'RFID'],
    links: [
      { label: 'Zenn', href: 'https://zenn.dev/aya_taka/articles/519bfb52a7bfab' },
      { label: 'GitHub', href: 'https://github.com/fox-Nh133/interactive-outdoor-cooking-demo' },
    ],
  },
  {
    title: 'ぷらる — AIスポット探し・旅行計画アプリ',
    description: 'AIが旅行プランを自動生成するスポット探し・旅行計画アプリ。株式会社 Plaru にてファウンダー兼エンジニアとして UI/UX 設計・フルスタック開発を担当。',
    tags: ['React Native', 'TypeScript', 'Node.js', 'AI'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/jp/app/%E3%81%B7%E3%82%89%E3%82%8B-%E3%82%B9%E3%83%9D%E3%83%83%E3%83%88%E6%8E%A2%E3%81%97-ai%E6%97%85%E8%A1%8C%E8%A8%88%E7%94%BB/id6470826820' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.plaru.gamma&hl=ja' },
    ],
  },
  {
    title: 'Portfolio Site',
    description: 'Next.js + TypeScript + Tailwind CSS で構築した個人ポートフォリオサイト。',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
]

const articles = [
  {
    href: 'https://zenn.dev/aya_taka/articles/519bfb52a7bfab',
    tags: ['React', 'Raspberry Pi', 'Express', 'MicroPython', 'RFID'],
    title: '【大阪万博スカウトデイ】野外料理体験マシーンの制作',
    date: '2026/02/08',
    img: 'https://static.zenn.studio/user-upload/f998d5950191-20260208.jpeg',
  },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24">
        <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">Software Engineer</p>
        <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 leading-tight">
          HONDA Takayuki
        </h1>
        <p className="text-gray-600 max-w-xl leading-relaxed mb-8">
          私のポートフォリオのメインテーマは「旅好きなエンジニアの旅路」です。
          技術を追いかけるのではなく、技術を楽しむ。まるで世界を旅する冒険家のように、常に新しい知識と技術の探求を続けます。
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            About me →
          </a>
          <a
            href="#projects"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Projects
          </a>
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* About */}
      <section id="about" className="py-20 scroll-mt-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">About</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12">HONDA Takayuki</h2>

        <div className="grid sm:grid-cols-3 gap-12 mb-16">
          <div className="sm:col-span-2 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Software engineer based in Kyoto. Studying information engineering at Ritsumeikan University,
              with a focus on full-stack web development, UI/UX design, and open-source software.
              Co-founded a startup and contributed to autonomous driving OSS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Outside of engineering, I work as a tennis coach — teaching players of all ages and levels.
              I believe in enjoying technology the same way a traveler enjoys exploring the world: with curiosity and no fixed destination.
            </p>
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="text-sm text-gray-600 border border-gray-200 px-3 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href="https://zenn.dev/aya_taka" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Zenn ↗
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Interests</h3>
              <ul className="space-y-1">
                {['Full-Stack Development', 'UI / UX Design', 'Product Management', 'Tennis Coaching'].map(item => (
                  <li key={item} className="text-sm text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Biography */}
        <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-10">Biography</h3>
        <div className="space-y-0">
          {/* Education */}
          <p className="text-xs tracking-widest uppercase text-gray-300 mb-6">Education</p>
          {[
            { period: '2021', desc: 'Graduated from Ritsumeikan Moriyama High School' },
            { period: '2021–', desc: 'Enrolled in Ritsumeikan University, College of Information Science and Engineering, Dept. of Information Science and Engineering' },
            { period: '2023', desc: 'Leave of absence (Apr 2023 – Mar 2024) to focus on self-development and startup operations' },
            { period: '2026', desc: 'Graduated from Ritsumeikan University, Systems Architecture Course' },
            { period: '2026–', desc: 'Enrolled in Ritsumeikan University Graduate School, Master\'s Program in Computer Science (Doctoral Program, First Term)' },
            { period: '2028', desc: 'Expected graduation' },
          ].map(({ period, desc }) => (
            <div key={period + desc} className="flex gap-8 border-t border-gray-100 py-5">
              <span className="text-sm text-gray-400 w-16 flex-shrink-0 pt-0.5">{period}</span>
              <span className="text-sm text-gray-700 leading-relaxed">{desc}</span>
            </div>
          ))}

          {/* Work */}
          <p className="text-xs tracking-widest uppercase text-gray-300 mt-10 mb-6">Work</p>
          {[
            { period: '2021–', desc: 'Tennis Coach, Arrows Tennis School (part-time)' },
            { period: '2023–', desc: 'External Tennis Coach, Ritsumeikan Moriyama Middle & High School Tennis Club (part-time)' },
            { period: '2023–', desc: 'Founder & Software Engineer, Plaru Inc. (registered Apr 2025) — UI/UX design, full-stack development, product management' },
            { period: '2025–2026', desc: 'Software Engineer, Tier IV Inc. (part-time) — OSS feature development and software maintenance' },
          ].map(({ period, desc }) => (
            <div key={period + desc} className="flex gap-8 border-t border-gray-100 py-5">
              <span className="text-sm text-gray-400 w-16 flex-shrink-0 pt-0.5">{period}</span>
              <span className="text-sm text-gray-700 leading-relaxed">{desc}</span>
            </div>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Projects */}
      <section id="projects" className="py-20 scroll-mt-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Work</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12">Projects</h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
              <h3 className="text-base font-medium text-gray-900 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div className="flex gap-4">
                    {project.links.map(({ label, href }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                        {label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Articles */}
      <section id="articles" className="py-20 scroll-mt-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Writing</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12">Articles</h2>

        <div className="space-y-8">
          {articles.map((article, i) => (
            <a key={i} href={article.href} target="_blank" rel="noopener noreferrer">
              <div className="flex gap-5 items-start group">
                <Image
                  src={article.img}
                  alt={article.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded flex-shrink-0 bg-gray-100"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-800 group-hover:text-gray-500 transition-colors leading-snug mb-1">
                    {article.title}
                  </p>
                  <p className="text-xs text-gray-400">{article.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
