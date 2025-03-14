import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Nosotros from './Nosotros';
import Contact from './Contact';
import Menu from './menu/Menu';
import Header from './Header';
import Home from './Home';

const MainContent = () => {
    return ( 
        <div className='min-h-screen flex flex-col justify-between'>
            <Header/>
                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Menu" element={<Menu actualizarPedidos={() => document.dispatchEvent(new Event('updatePedidos'))}/>}/>
                    <Route path="/nosotros" element={<Nosotros/>}/>
                    <Route path="/contacto" element={<Contact/>}/>
                </Routes>


            <Footer/>
        </div>
       
     );
}
 
export default MainContent;