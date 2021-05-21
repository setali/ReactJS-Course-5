import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Sidebar from './Sidebar'
import ThemeContext, { themes } from './ThemeContext'

function App () {
  const [theme, setTheme] = useState(themes.light)

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        {themes.light === theme ? (
          <button onClick={() => setTheme(themes.dark)}>Dark</button>
        ) : (
          <button onClick={() => setTheme(themes.light)}>Light</button>
        )}
        <Header />
        <section style={{ display: 'flex' }}>
          <Sidebar />
          <Home />
        </section>

        <Footer />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
