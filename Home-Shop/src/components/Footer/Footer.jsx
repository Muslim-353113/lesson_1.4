import { useState } from 'react'
import './Footer.css'

function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <footer id="contacts" className="footer">
      <div className="footer__content">
        <div>
          <h3>🚀 КосмоТур</h3>
          <p>г. Байконур, ул. Звёздная, 1</p>
          <p>+7 (999) 123-45-67</p>
        </div>
        <form onSubmit={handleSubscribe} className="footer__form">
          <label>Подпишись на новости космоса</label>
          <div>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Подписаться</button>
          </div>
          {sent && <p className="footer__sent">✅ Спасибо, вы подписаны!</p>}
        </form>
      </div>
      <p className="footer__copy">© 2026 КосмоТур. Все права защищены.</p>
    </footer>
  )
}

export default Footer