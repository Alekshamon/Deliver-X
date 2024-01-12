import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const userContext = createContext({});
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
userContext.propTypes = { children: PropTypes.node.isRequired };
