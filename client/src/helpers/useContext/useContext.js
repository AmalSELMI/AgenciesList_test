import React, { useContext } from "react";

const Context = React.createContext();

export const { Provider, Consumer } = Context;

export const getContext = () => useContext(Context);

export default Context;
