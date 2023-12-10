import { useState } from 'react'
import { Button } from './components/Button';
import { Input } from './components/Input';


function App() {
  const [count, setCount] = useState(0);

  function incrementar(){
    setCount((count)=> count + 1)
  }
  return (
    <>
        <p>Total {count}</p>
        <Button onClick={incrementar} tamanho='1.5rem'>Incrementar (Children)</Button>
        <Input id='email' label={'Email'}/>
        <Input id='nome' label={'Nome'}/>
        <Input id='data' label={'Data'} type='date'/>
    </>
  )
}

export default App
