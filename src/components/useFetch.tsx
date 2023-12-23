// Crie um custom hook chamado useFetch.
// 1 - Este hook deve retornar a interface:
// interface FetchState<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// }
// Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.
// 2 - data, loading e error são estados reativos (useState).
// 3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).
// 4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.
// 5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.
// 6 - Teste o Hook com a api: https://data.origamid.dev/produtos

import { useEffect, useRef, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: RequestInfo | URL, options?: RequestInit){
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionRef = useRef(options);

  useEffect(()=>{
    const controller = new AbortController();
    const {signal} = controller;

    const fetchData = async ()=> {
      setLoading(true);
      setData(null);
      try{
        const response = await fetch(url, {
          signal,
          ...optionRef.current
        });
        if(!response.ok) throw new Error(`Error: ${response.status}`)
        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json)
        console.log(response);
      }catch(error){
        if(!signal.aborted && error instanceof Error) setError(error.message);
      }finally{
        if(!signal.aborted ) setLoading(false)
      }
    }
    fetchData();
  
    return () => {
      controller.abort();
    }
  },[url]);

  return {data, loading, error};
}