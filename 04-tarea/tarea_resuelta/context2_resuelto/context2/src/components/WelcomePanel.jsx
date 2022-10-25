import { useContext } from "react";
import Panel from "./Panel";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import { CurrentUserContext } from "./MyProviders";

export default function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Bienvenido/a">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}
