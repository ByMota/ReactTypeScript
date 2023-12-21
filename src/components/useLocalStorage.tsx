import { useEffect, useState } from "react"
// Declarando o valor de retorno da função
export const useLocalStorage = (key: string, inicial: string)
: [string,  React.Dispatch<React.SetStateAction<string>>] =>{
  const [state, setState] = useState(()=> {
    const local = localStorage.getItem(key);
    return local ? local : inicial;
  }
  );
  useEffect(()=>{
    localStorage.setItem(key, state)
  }, [state, key])

  return  [state, setState] as const
}

