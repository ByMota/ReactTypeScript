import { useState } from "react"
import { useFetch } from "../components/useFetch"

interface Produto{
  id: string,
  nome: string,
  preco: string,
  quantidade: number,
  descricao: string,
  internacional: boolean
}

function Fetch() {
  const [id, setId] = useState('p001');
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos/");
  const produto = useFetch<Produto>(`https://data.origamid.dev/produtos/${id}`);
  return (
    <>
    <div className="flex">
      <div>
        {produtos.data && produtos.data.map((produto) => <button onClick={() => setId(produto.id)} key={produto.id}>{produto.id}</button>)}
      </div>

      <div>
        {produto.loading && <div>Carregando...</div> }
        {produto.data && (
          <ul>
            <li>ID:  {produto.data.id}</li>
            <li>Nome:  {produto.data.nome}</li>
            <li>Preço:  {produto.data.preco}</li>
            <li>Quantidade:  {produto.data.quantidade}</li>
            <li>Descrição:  {produto.data.descricao}</li>
            <li>Internacional: {produto.data.internacional}</li>
          </ul>
        )}
      </div>
    </div>
    </>
  )
}

export default Fetch
