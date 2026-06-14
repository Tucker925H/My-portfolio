const projects: {
  title: string
  description: string
  tags: string[]
  href?: string
}[] = [
  {
    title: 'Portfolio Site',
    description: 'Vite + React + TypeScript + Tailwind CSS で構築した個人ポートフォリオサイト。',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Work</p>
      <h1 className="text-3xl font-light text-gray-900 mb-12">Projects</h1>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-base font-medium text-gray-900">{project.title}</h2>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0"
                >
                  ↗
                </a>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
