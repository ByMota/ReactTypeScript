// Interface da API: https://data.origamid.dev/vendas/
// <!-- Essa API possui dados de hoje até 90 dias atrás -->

// 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
// 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
// 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
// 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
// 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
// 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
// 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

import { useState, useEffect } from "react";
import { Input } from "../components/InputState";

interface Venda{
  id: string
  nome: string
  preco: number
  status: string
}

export function DateApi () {
  const [data, setData] = useState<null | Venda[]> (null)
  const [inicio, setInicio] = useState("")
  const [final, setFinal] = useState("")

  useEffect(() =>{
    if(inicio !== '' && final !== ''){
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`).then(response => response.json()).then(json => setData(json as Venda[])).catch(error => console.log(error))
    }
  }, [inicio, final])
  
  return (
    <>
    <div>
      <Input label={"Data início"} setDate={setInicio}  type="date" value={inicio}/>
      <Input label={"Data fim"} setDate={setFinal} type="date" value={final}/>
    </div>
    <div>
      <p>Início: {inicio}</p>
      <p>Final: {final}</p>
    </div>
    <div>
      <ul>{data !== null && data.map(venda => <li key={venda.id}>{venda.nome}: {venda.status} - R${venda.preco}</li>)}</ul>
    </div>
    </>
    );
}

