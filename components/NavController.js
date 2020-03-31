import React from "react";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  // const isLoggedIn = true;
  // console.log(isLoggedIn);
  // const logIn = useLogIn();
  // const logOut = useLogOut();
  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};
