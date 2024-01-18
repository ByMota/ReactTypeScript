// import { useUi } from "./UiContext";

import { useUser } from "./UserContext";

export const Content = ()=> {
  // const {dark} = useUi();
  const {data, loading} = useUser();
  if(loading) return <div>Carregando...</div>
  if (!data) return null
  return (   
      // <h1>{dark ? 'dark' : 'light'}</h1> 
      <div>
        <h3>Preferências</h3>
        <p>Qualidade: {data?.preferencias.qualidade}</p>
        <p>PlayBack: {data?.preferencias.playback}</p>
        <p>Volume: {data?.preferencias.volume}</p>
      </div>
      
    );
}

