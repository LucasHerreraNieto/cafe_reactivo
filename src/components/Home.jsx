import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="flex flex-col w-full h-full items-center text-center">
            <div className="flex items-center justify-center">
                <p className="text-2xl">Bienvenido a <p className="text-7xl">Café Reactivo</p></p>
                
            </div>
            <Link to="/menu" className="btn btn-secondary w-48">Comenzar</Link>
        </div>
     );
}
 
export default Home;