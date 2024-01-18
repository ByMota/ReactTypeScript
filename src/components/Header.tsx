// import { useUi } from "./UiContext";

import { useUser } from "./UserContext";

export function Header() {
  // const {setDark} = useUi();
  const {data} = useUser();
  if (!data) return null
  return ( 
    // <button onClick={() => setDark((b) => !b)}>Modo</button>
  <h1>{data.nome}</h1>
  );
}
