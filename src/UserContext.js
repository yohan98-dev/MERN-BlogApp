import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ childern }) {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {childern}
    </UserContext.Provider>
  );
}
