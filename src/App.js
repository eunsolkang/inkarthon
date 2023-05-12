import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} ></Route>
        <Route component={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
