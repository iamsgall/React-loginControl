import React, {useState} from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting';

export default function LoginControl() {
  let [isLoggedIn, setIsLoggedIn] = useState(true);
  let btn;

  const handleLogoutClick = () => {
    setIsLoggedIn((isLoggedIn = false));
  };

  const handleLoginClick = () => {
    setIsLoggedIn((isLoggedIn = true));
  };

  if (isLoggedIn) {
    btn = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    btn = <LoginButton onClick={handleLoginClick} />;
  }
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {btn}
    </div>
  );
}
