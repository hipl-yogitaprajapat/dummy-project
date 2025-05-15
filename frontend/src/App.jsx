
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from "react-router-dom";
import Routers from './Routers';
import 'react-toastify/ReactToastify.css';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routers/>
   </BrowserRouter>
   </Provider>
  </>
)
}


export default App


