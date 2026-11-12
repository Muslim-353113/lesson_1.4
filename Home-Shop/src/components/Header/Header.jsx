import './Header.css'

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-icon">🚀</span>
        <span>КосмоТур</span>
      </div>
      <nav className="header__nav">
        <a href="#tours">Туры</a>
        <a href="#about">О нас</a>
        <a href="#contacts">Контакты</a>
      </nav>
      <button className="header__theme-btn" onClick={onToggleTheme}>
        {theme === 'dark' ? '☀️ Светлая тема' : '🌙 Тёмная тема'}
      </button>
    </header>
  )
}

export default Header