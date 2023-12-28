import { useUi } from "./UiContext";

export const Content = ()=> {
  const {dark} = useUi();
  return (   
      <h1>{dark ? 'dark' : 'light'}</h1> 
    );
}

