import  { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  tamanho?: string;
  // Itens abaixo já são padrão de um elemento Button, portanto não preciso declarar
  // children: ReactNode
  // onClick?: ()=> void
}
//...props é a destruturação do componente, eliminado a necessidade de declarar o resto
export function Button({tamanho, children, ...props}: ButtonProps) {
  return (  
    <button {...props} style={{fontSize: tamanho}}>{children}</button>
  );
}
