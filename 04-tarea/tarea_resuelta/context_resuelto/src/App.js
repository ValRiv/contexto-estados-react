import { createContext, useState } from 'react';
import Form from './components/Form'



export const CurrentUserContext = createContext();

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      <Form />

    </CurrentUserContext.Provider>
  );
}






