import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {DateApi} from "./pages/DateApi";
import {UseEffect} from "./pages/useEffect";
import {UseRef} from "./pages/useRef";
import {CustomHook} from "./pages/customHook";
import Fetch from "./pages/Fetch";
import Context from "./pages/Context";
import Form from "./pages/Form";

export function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/date-api" element={<DateApi/>}/>
        <Route path="/use-effect" element={<UseEffect/>}/>
        <Route path="/use-ref" element={<UseRef/>}/>
        <Route path="/custom-hook" element={<CustomHook/>}/>
        <Route path="/fetch" element={<Fetch/>}/>
        <Route path="/context" element={<Context/>}/>
        <Route path="/form" element={<Form/>} />
      </Routes>
    </Router>
  )
}