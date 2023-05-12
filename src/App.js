import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import { fire } from "./lib/firebase";
import Vote from "./components/Vote";
import Question from "./components/Question";
import Thalamus from "./components/Thalamus";
import Result from "./components/Result";

function App() {
  fire();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/vote/:team" element={<Vote />}></Route>
        <Route exact path="/question/:team" element={<Question />}></Route>
        <Route exact path="/Thalamus/:team" element={<Thalamus />}></Route>
        <Route exact path="/Result/:team" element={<Result />}></Route>
        <Route component={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
