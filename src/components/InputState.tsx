// 1 - Crie um componente Input ✅
// 2 - Ele deve retornar <label> e <input>, dentro de uma <div>✅
// 3 - Recebe uma propriedade chamada label✅
// 4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>✅
// 5 - Permita o uso de qualquer propriedade de input no componente Input.✅
// 6 - Adicione 1rem de marginBottom na <div>✅

import { ComponentProps, Dispatch, SetStateAction } from "react";

interface InputProps extends ComponentProps<'input'> {
  label: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export function Input({label, setDate, id, ...props}: InputProps) {
  return (
    <>
      <div style={{marginBottom: '1rem'}}>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="text" onChange={({ currentTarget }) => setDate(currentTarget.value)} {...props} />
      </div>
    </>
    );
}

