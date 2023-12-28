import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Read from './Components/Read';
import Update from './Components/Update';
import Create from './Components/create';


function App() {
  return (
    <div>
     
      <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Create/>} />
            <Route path='/Read' element={ <Read/>} />
            <Route path='/Update' element={<Update/>} />
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
