import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { UiContextProvider } from "../components/UiContext";

function Context() {
  return (
  <UiContextProvider> 
      <Header/>
      <Content/>
  </UiContextProvider>
  )
}

export default Context;