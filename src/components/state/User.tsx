import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser| null>(null);

  const handleLogIn = () => {
    setUser({
        name:"rio",
        email:"rio@rio.com"
    });
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div> User is {user?.name}</div>
      <div> Email is {user?.email}</div>
    </div>
  );
};
