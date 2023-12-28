import React, { Dispatch, createContext, useContext, useState } from "react";

interface IUiContext {
  dark: boolean;
  setDark: Dispatch<React.SetStateAction<boolean>>;
}

const UiContext = createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (!context) throw new Error('useContext deve estar dentro do Provider');
  return context;
};

export const UiContextProvider = ({children}: React.PropsWithChildren) =>{
  const [dark, setDark] = React.useState(false);
  return (
    <UiContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}