import { useEffect } from "react";

export function UseEffect() {
  useEffect(() => {
    console.log("MONTOU")
    return () => {
      console.log("desmontou")
    }
  }, [])
  return ( <>
  <p>teste</p>
  </> );
}

