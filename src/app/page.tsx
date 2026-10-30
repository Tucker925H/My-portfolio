'use client'

import Image from 'next/image'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/locales/translations'

const projectLinks = [
  [
    { label: 'PR Times', href: 'https://prtimes.jp/main/html/rd/p/000000013.000141944.html' },
    { label: 'Plaru News', href: 'https://www.plaru.co.jp/news/post/rsWAfwor' },
    { label: 'Instagram', href: 'https://www.instagram.com/p/DdflFcTE7hm/?img_index=1' },
  ],
  [
    { label: 'Zenn', href: 'https://zenn.dev/aya_taka/articles/519bfb52a7bfab' },
    { label: 'GitHub', href: 'https://github.com/fox-Nh133/interactive-outdoor-cooking-demo' },
  ],
  [
    { label: 'App Store', href: 'https://apps.apple.com/jp/app/%E3%81%B7%E3%82%89%E3%82%8B-%E3%82%B9%E3%83%9D%E3%83%83%E3%83%88%E6%8E%A2%E3%81%97-ai%E6%97%85%E8%A1%8C%E8%A8%88%E7%94%BB/id6470826820' },
    { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.plaru.gamma&hl=ja' },
  ],
  [],
]

const pressHrefs = [
  'https://prtimes.jp/main/html/rd/p/000000013.000141944.html',
  'https://www.plaru.co.jp/news/post/rsWAfwor',
  'https://biwako-otsu.keizai.biz/headline/3366/',
  'https://news.infoseek.co.jp/article/prtimes_000000013_000141944/',
  'https://www.excite.co.jp/news/article/Prtimes_2026-08-19-141944-13/',
  'https://news.nicovideo.jp/watch/nw19679343',
  'https://socialbusiness.aishas.co.jp/socialbusinessnews_aiautomaticallygeneration/30484/',
  'https://www.instagram.com/p/DdflFcTE7hm/?img_index=1',
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

const skills = ['React', 'React Native', 'TypeScript', 'Next.js', 'Node.js', 'Python']

export default function Home() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24">
        <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">{T.hero.role}</p>
        <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 leading-tight">
          HONDA Takayuki
        </h1>
        <p className="text-gray-600 max-w-xl leading-relaxed mb-8">{T.hero.description}</p>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors">
            {T.hero.aboutLink}
          </a>
          <a href="#projects" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            {T.hero.projectsLink}
          </a>
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* About */}
      <section id="about" className="py-20 scroll-mt-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">{T.about.label}</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12">HONDA Takayuki</h2>

        <div className="grid sm:grid-cols-3 gap-12 mb-16">
          <div className="sm:col-span-2 space-y-6">
            <p className="text-gray-600 leading-relaxed">{T.about.bio1}</p>
            <p className="text-gray-600 leading-relaxed">{T.about.bio2}</p>
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">{T.about.skillsLabel}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="text-sm text-gray-600 border border-gray-200 px-3 py-1 rounded">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">{T.about.linksLabel}</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/Tucker925H" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">GitHub ↗</a></li>
                <li><a href="https://zenn.dev/aya_taka" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Zenn ↗</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">{T.about.interestsLabel}</h3>
              <ul className="space-y-1">
                {T.about.interests.map(item => (
                  <li key={item} className="text-sm text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Biography */}
        <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-10">{T.about.biographyLabel}</h3>
        <div className="space-y-0">
          <p className="text-xs tracking-widest uppercase text-gray-300 mb-6">{T.about.educationLabel}</p>
          {T.about.education.map(({ period, desc }) => (
            <div key={period + desc} className="flex gap-8 border-t border-gray-100 py-5">
              <span className="text-sm text-gray-400 w-32 flex-shrink-0 pt-0.5">{period}</span>
              <span className="text-sm text-gray-700 leading-relaxed">{desc}</span>
            </div>
          ))}
          <p className="text-xs tracking-widest uppercase text-gray-300 mt-10 mb-6">{T.about.workLabel}</p>
          {T.about.work.map(({ period, desc }) => (
            <div key={period + desc} className="flex gap-8 border-t border-gray-100 py-5">
              <span className="text-sm text-gray-400 w-32 flex-shrink-0 pt-0.5">{period}</span>
              <span className="text-sm text-gray-700 leading-relaxed">{desc}</span>
            </div>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Projects */}
      <section id="projects" className="py-20 scroll-mt-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">{T.projects.label}</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12">{T.projects.title}</h2>
        <div className="space-y-6">
          {T.projects.items.map((project, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
              <h3 className="text-base font-medium text-gray-900 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                {projectLinks[i]?.length > 0 && (
                  <div className="flex gap-4">
                    {projectLinks[i].map(({ label, href }) => (
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

      {/* Press */}
      <section id="press" className="py-20 scroll-mt-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">{T.press.label}</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12">{T.press.title}</h2>
        <div className="space-y-0">
          {T.press.items.map(({ outlet, title, date }, i) => (
            <a key={i} href={pressHrefs[i]} target="_blank" rel="noopener noreferrer"
              className="flex gap-6 border-t border-gray-100 py-4 group hover:bg-gray-50 -mx-2 px-2 rounded transition-colors">
              <span className="text-xs text-gray-400 w-32 flex-shrink-0 pt-0.5">{outlet}</span>
              <span className="text-sm text-gray-700 group-hover:text-gray-500 transition-colors flex-1 leading-snug">{title}</span>
              <span className="text-xs text-gray-400 flex-shrink-0 pt-0.5 hidden sm:block">{date}</span>
            </a>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </section>

      <hr className="border-gray-100" />

      {/* Articles */}
      <section id="articles" className="py-20 scroll-mt-16">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">{T.articles.label}</p>
        <h2 className="text-3xl font-light text-gray-900 mb-12">{T.articles.title}</h2>
        <div className="space-y-8">
          {articles.map((article, i) => (
            <a key={i} href={article.href} target="_blank" rel="noopener noreferrer">
              <div className="flex gap-5 items-start group">
                <Image src={article.img} alt={article.title} width={80} height={80}
                  className="w-20 h-20 object-cover rounded flex-shrink-0 bg-gray-100" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{tag}</span>
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
