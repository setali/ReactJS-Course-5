import React from 'react'

export const themes = {
  dark: {
    color: '#fff',
    backgroundColor: '#222'
  },
  light: {
    color: '#000',
    backgroundColor: '#eee'
  }
}

const themeContext = React.createContext(themes.light)

export default themeContext
