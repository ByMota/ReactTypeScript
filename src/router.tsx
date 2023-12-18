import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {DateApi} from "./pages/DateApi";

export function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DateApi" element={<DateApi/>}/>
      </Routes>
    </Router>
  )
}