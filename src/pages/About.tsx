const skills = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'Solidity']

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">About</p>
      <h1 className="text-3xl font-light text-gray-900 mb-12">HONDA Takayuki</h1>

      <div className="grid sm:grid-cols-3 gap-12">
        <div className="sm:col-span-2 space-y-6">
          <p className="text-gray-600 leading-relaxed">
            京都府出身のソフトウェアエンジニア。立命館大学でソフトウェアを専門にプログラミング技術全般を学ぶ。
            データサイエンス、Web3、システム開発などを中心に幅広く取り組んでいます。
          </p>
          <p className="text-gray-600 leading-relaxed">
            「技術を楽しむ」をモットーに日々学んだ技術を探求し続けています。CSを学ぶ傍ら、テニスコーチとして指導も行っています。
          </p>

          <div>
            <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">Skills</h2>
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
            <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://note.com/engineer_journey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Note ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">Education</h2>
            <p className="text-sm text-gray-600">立命館大学<br />情報理工学部</p>
          </div>
        </div>
      </div>
    </div>
  )
}
