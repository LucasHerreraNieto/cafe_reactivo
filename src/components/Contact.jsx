import Map from "./map/Map.jsx";

const Contact = () => {
    return ( 
        <div className="bg-gray-100 rounded-lg shadow-md flex md:flex-row flex-col justify-around m-5 p-4 items-center">
            <div className="text-center">
                <div className="mb-4">
                    <p className="underline font-semibold text-lg">Horario de apertura</p>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábado y Domingo: 9:00 AM - 8:00 PM</p>
                </div>
                <div className="mb-4">
                    <p className="underline font-semibold text-lg">Dirección</p>
                    <p>Av. Siempre Viva 123</p>
                </div>
                <div className="mb-4">
                    <p className="underline font-semibold text-lg">Teléfono</p>
                    <p>123-456-789</p>
                </div>
            </div>
            <Map />
        </div>
     );
}
 
export default Contact;