import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import MainBlock from './components/MainBlock/MainBlock.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [bookings, setBookings] = useState(0)

  return (
    <div className={`app app--${theme}`}>
      <Header 
        theme={theme} 
        onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} 
      />
      <MainBlock 
        bookings={bookings} 
        onBook={() => setBookings(b => b + 1)} 
      />
      <Footer />
    </div>
  )
}

export default App