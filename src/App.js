import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import NotFound from './components/NotFound';
import {fire} from './lib/firebase'

function App() {
  fire();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} ></Route>
        <Route exact path="/login" element={<Login />} ></Route>
        <Route component={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
