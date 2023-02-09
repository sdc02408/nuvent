import './App.css';
import LandingPage from './component/LandingPage/LandingComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateComponent from './component/CreatePage/CreateComponent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/create' element={<CreateComponent/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
