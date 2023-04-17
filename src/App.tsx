import { useState } from 'react'

import './App.scss'

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div
      data-theme={isDarkTheme ? 'dark' : 'light'}
      className="App"
    >
      <button 
        className='button-change-theme' 
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >Change theme</button>
    </div>
  )
};