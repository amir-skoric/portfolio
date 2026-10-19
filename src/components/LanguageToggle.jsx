export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language / Sprog">
      {['da', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          className={lang === l ? 'active' : ''}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
