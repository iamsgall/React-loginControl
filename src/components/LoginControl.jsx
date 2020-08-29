import React, {useState} from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting';

export default function LoginControl() {
  let [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogoutClick = () => {
    setIsLoggedIn((isLoggedIn = false));
  };

  const handleLoginClick = () => {
    setIsLoggedIn((isLoggedIn = true));
  };

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      <p>
        The user <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in
      </p>
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}
