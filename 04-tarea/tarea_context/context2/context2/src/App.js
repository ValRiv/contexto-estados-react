import { useContext, useState } from 'react';
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

function MyProviders({ children, theme, setTheme }) {
  // Importe  useState aqui y cree un estado con la variable currentUser y setCurrentUser
  // Luego haga que CurrentUserContext pueda proveerlos. 
  
  
  return (

    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
       
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel({ children }) {

// Importe aqui un useContext y consuma el contexto CurrentUserContext
// Desectructure el contexto para obtener currentUser


  return (
    <Panel title="Bievenido/a!!">
      {currentUser !== null ?
        <Greeting /> :
        <LoginForm />
      }
    </Panel>
  );
}

function Greeting() {
 // Importe aqui un useContext y consuma el contexto CurrentUserContext
// Desectructure el contexto para obtener currentUser
  return (
    <p>Ud se ha logeado como {currentUser.name}.</p>
  )
}

function LoginForm() {
   // Importe aqui un useContext y consuma el contexto CurrentUserContext
// Desectructure el contexto para obtener setCurrentUser

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';
  return (
    <>
      <label>
        Nombre{': '}
        <input
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Apellido{': '}
        <input
        required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + ' ' + lastName
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Rellene ambos campos.</i>}
    </>
  );
}

function Panel({ title, children }) {
   // Importe aqui un useContext y consuma el contexto ThemeContext
// Cree una const para obtener theme del contexto 
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, disabled, onClick }) {
   // Importe aqui un useContext y consuma el contexto ThemeContext
// Cree una const para obtener theme del contexto 

  const className = 'button-' + theme;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
