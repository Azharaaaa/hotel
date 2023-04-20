import {Routes,Route} from "react-router-dom"
import Layout from "./Layout/Layout";


import "./styles/style.scss"
import Home from "./pages/Home/Home";
import TheHut from "./pages/The hut/The hut";
import TheArea from "./pages/The area/The area";
import Booking from "./pages/Booking/Booking";
import AboutUs from "./pages/About us/About us";
import Faq from "./pages/Faq/Faq";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>

          <Route path={'/'} element={<Home/>}/>
          <Route path={'/the hut'} element={<TheHut/>}/>
          <Route path={'/the area'} element={<TheArea/>}/>
          <Route path={'/booking'} element={<Booking/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/about us'} element={<AboutUs/>}/>
          <Route path={'/faq'} element={<Faq/>}/>

        </Route>

      </Routes>

    </div>
  );
}

export default App;
