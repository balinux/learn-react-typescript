import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogIn = () => {
    setisLoggedIn(true);
  };

  const handleLogOut = () => {
    setisLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div> User is {isLoggedIn ? "Login" : "Logout"}</div>
    </div>
  );
};
