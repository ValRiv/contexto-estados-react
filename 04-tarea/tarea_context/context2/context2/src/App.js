import { useState } from 'react';
import MyProviders from './components/MyProviders';
import WelcomePanel from './components/WelcomePanel';
// Importe createContext y cree los siguientes contextos con const:ThemeContext y CurrentUserContext


export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
      <WelcomePanel />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </MyProviders>
  );
}

