import React, { createContext, useState } from "react";

export const UserDataContext = createContext(null);

const UserDataProvider = ({ children }) => {
  const [themeColorInProvider, setThemeColorInProvider] = useState("#0f172a");
  console.log(themeColorInProvider);
  const [socialLinksInProvider, setSocialLinksInProvider] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    pinterest: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    reddit: "",
    snapchat: "",
    tumblr: "",
  });
  const [userDataInProvider, setUserDataInProvider] = useState({
    name: "",
    works: "",
    bio: "",
    phoneNumber: "",
  });

  const userData = {
    socialLinksInProvider,
    setSocialLinksInProvider,
    userDataInProvider,
    setUserDataInProvider,
    themeColorInProvider,
    setThemeColorInProvider,
  };
  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
