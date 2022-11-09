import {useContext} from 'react';
import Button from './Button'
import {CurrentUserContext} from '../App'

export default function LoginButton() {
    const {
      currentUser,
      setCurrentUser
    } = useContext(CurrentUserContext);

    if (currentUser !== null) {
      return <p>Hola {currentUser.name}, te esperabamos.</p>;
    }
  
    return (
      <Button onClick={() => {
        setCurrentUser( {name:"Diego Simonelli"} )
      }}>Log in</Button>
    );
  }