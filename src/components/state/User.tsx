import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // dengan set inisial state dengan object seperti authUser type maka data tidak perlu di set null
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogIn = () => {
    setUser({
        name:"rio",
        email:"rio@rio.com"
    });
  };

  const handleLogOut = () => {
    setUser({} as AuthUser);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login user</button>
      <button onClick={handleLogOut}>Logout user</button>
      <div> User is {user.name}</div>
      <div> Email is {user.email}</div>
    </div>
  );
};
