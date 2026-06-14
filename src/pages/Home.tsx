import { Link } from 'react-router-dom'

const posts = [
  {
    href: 'https://note.com/engineer_journey/n/n5e427b7fd12a',
    tags: ['NFT', 'MetaMask', 'Ethereum', 'Blockchain'],
    title: '特定のNFTアカウントのNFT所持数を取得する方法を解説 第一章',
    date: '2023/5/1',
    img: '/images/posts/nft-meta01.png',
  },
  {
    href: 'https://note.com/engineer_journey/n/n998470463921',
    tags: ['NFT', 'MetaMask', 'Ethereum', 'Blockchain'],
    title: '特定のNFTアカウントのNFT所持数を取得する方法を解説 第二章',
    date: '2023/5/1',
    img: '/images/posts/nft-meta02.png',
  },
  {
    href: null,
    tags: ['Solidity', 'Blockchain'],
    title: 'スマートコントラクトを学ぶ Solidity入門 #03',
    date: '2023/5/1',
    img: '/images/posts/solidity.png',
  },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">Software Engineer</p>
        <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 leading-tight">
          HONDA Takayuki
        </h1>
        <p className="text-gray-600 max-w-xl leading-relaxed mb-8">
          私のポートフォリオのメインテーマは「旅好きなエンジニアの旅路」です。
          技術を追いかけるのではなく、技術を楽しむ。まるで世界を旅する冒険家のように、常に新しい知識と技術の探求を続けます。
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            About me →
          </Link>
          <Link
            to="/projects"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Projects
          </Link>
        </div>
      </section>

      {/* Articles */}
      <section>
        <h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-8">Articles</h2>
        <div className="space-y-8">
          {posts.map((post, i) => {
            const inner = (
              <div className="flex gap-5 items-start group cursor-pointer">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded flex-shrink-0 bg-gray-100"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-800 group-hover:text-gray-500 transition-colors leading-snug mb-1">
                    {post.title}
                  </p>
                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
              </div>
            )

            return post.href ? (
              <a key={i} href={post.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={i}>{inner}</div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
