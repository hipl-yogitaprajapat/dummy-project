
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from "react-router-dom";
import Routers from './Routers';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routers/>
   </BrowserRouter>
  </>
)
}


export default App


