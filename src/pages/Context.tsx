import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { UiContextProvider } from "../components/UiContext";
import { UserContextProvider } from "../components/UserContext";

function Context() {
  return (
  // <UiContextProvider> 
  //     <Header/>
  //     <Content/>
  // </UiContextProvider>
    <UserContextProvider>
    <Header/>
    <Content/>
    </UserContextProvider>

  )
}

export default Context;