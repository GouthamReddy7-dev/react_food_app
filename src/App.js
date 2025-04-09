import Mains from "./mains";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Infos from "./info";
import Register from "./register";
import Login from "./login";
import Cart from "./cart";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Mains/>}></Route>
      <Route path='/info' element={<Infos/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
