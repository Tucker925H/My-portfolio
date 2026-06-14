export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-400">&copy; 2024 HONDA Takayuki</span>
        <div className="flex items-center gap-5">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://note.com/engineer_journey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            Note
          </a>
        </div>
      </div>
    </footer>
  )
}
