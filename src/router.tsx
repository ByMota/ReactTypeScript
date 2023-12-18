import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {DateApi} from "./pages/DateApi";
import {UseEffect} from "./pages/useEffect";

export function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/date-api" element={<DateApi/>}/>
        <Route path="/use-effect" element={<UseEffect/>}/>
      </Routes>
    </Router>
  )
}