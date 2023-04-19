import { useState } from 'react';

import { Cypher } from './components/Cypher.component';

import './App.scss';

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div
      data-theme={isDarkTheme ? 'dark' : 'light'}
      className="app"
    >

      <div className='app-container'>
        <Cypher onSetTheme={() => setIsDarkTheme(!isDarkTheme)} />
      </div>
    </div>
  )
};