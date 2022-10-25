import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

export default function MyProviders({ children, theme, setTheme }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}
