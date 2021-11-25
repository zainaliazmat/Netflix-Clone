import React, { useState } from "react";

export const RootContext = React.createContext();

export default ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [user, setUser] = useState("null");
  const [signup, setSignup] = useState([]);
  const defaultValues = {
    movie,
    setMovie,
    user,
    setUser,
    signup,
    setSignup,
  };
  console.log(signup);
  return (
    <RootContext.Provider value={defaultValues}>
      {children}
    </RootContext.Provider>
  );
};
