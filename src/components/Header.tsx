import { useContext } from "react";
import { useUi } from "./UiContext";

export function Header() {
  const {setDark} = useUi();
  
  return ( 
    <button onClick={() => setDark((b) => !b)}>Modo</button>
  
  );
}
