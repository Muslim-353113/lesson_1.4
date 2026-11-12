import { useState } from 'react'
import './MainBlock.css'

const TOURS = [
  { id: 1, title: 'Луна', category: 'orbital', price: '2 500 000', days: 7, icon: '🌕' },
  { id: 2, title: 'Марс', category: 'deep', price: '15 000 000', days: 180, icon: '🔴' },
  { id: 3, title: 'МКС', category: 'orbital', price: '450 000', days: 3, icon: '🛰️' },
]

const CATEGORIES = [
  { id: 'all', label: 'Все' },
  { id: 'orbital', label: 'Орбита' },
  { id: 'deep', label: 'Дальний космос' },
  { id: 'sub', label: 'Суборбитальные' },
]

function MainBlock({ bookings, onBook }) {
  const [filter, setFilter] = useState('all')
  const [lastBooked, setLastBooked] = useState(null)

  const filtered = filter === 'all' ? TOURS : TOURS.filter(t => t.category === filter)

  const handleBook = (tour) => {
    onBook()
    setLastBooked(tour.title)
  }

  return (
    <main className="main">
      <section className="hero">
        <h1>Твой следующий отпуск — <span>за пределами Земли</span></h1>
        <p>Забронировано туров сегодня: <b>{bookings}</b></p>
        {lastBooked && <p className="hero__notice">✅ Вы забронировали тур: {lastBooked}</p>}
      </section>

      <section id="tours" className="tours">
        <h2>Наши направления</h2>
        <div className="tours__filters">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={filter === c.id ? 'active' : ''}
              onClick={() => setFilter(c.id)}
            >{c.label}</button>
          ))}
        </div>
        <div className="tours__grid">
          {filtered.map(tour => (
            <div key={tour.id} className="tour-card">
              <div className="tour-card__icon">{tour.icon}</div>
              <h3>{tour.title}</h3>
              <p>Длительность: {tour.days} дн.</p>
              <p className="tour-card__price">{tour.price} ₽</p>
              <button onClick={() => handleBook(tour)}>Забронировать</button>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <h2>О нас</h2>
        <p>Мы — первое частное турагентство по космическим путешествиям...</p>
      </section>
    </main>
  )
}

export default MainBlock