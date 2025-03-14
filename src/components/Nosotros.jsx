import { Link } from "react-router-dom";
const Nosotros = () => {
    return ( 
        <section className=" p-5 flex flex-col gap-20 items-center">
            <div className="md:h-96 m-2 flex flex-col justify-center items-center gap-10 w-fit">
                <h2 className="md:text-5xl font-bold text-center">Sobre Nosotros</h2>
                <p className="text-center md:text-xl w-2/3">
                    Nuestra trayectoria comenzó con una humilde pasión por el café, que surgió cuando nuestro fundador, Lucas Herrera, tenía tan solo 16 años. 
                    Fue en el negocio familiar de tostado de café donde se sembraron las semillas de nuestra pasión por el café.
                    Aquí, entre las fragantes nubes de granos tostados, 
                    Lucas aprendió el arte del tueste: el delicado equilibrio entre calor y tiempo necesario para liberar todo el potencial de cada grano.
                </p>
            </div>

            <div className="md:h-96 flex md:flex-row flex-col items-center bg-gray-100 max-w-5xl rounded-3xl p-6 shadow-lg"> 
                <div className="md:w-1/2 flex flex-col items-center">
                    <h4 className="md:text-3xl text-center mb-4">Nuestro Compromiso</h4>
                    <p className="text-center md:text-xl md:w-2/3">
                        En Cafe Reactivo, no solo ofrecemos café, sino una experiencia que celebra la rica historia del café.
                        Nos esforzamos por ser más que una simple cafetería.
                    </p>
                </div>
                <iframe 
                    width="300" 
                    height="100" 
                    src="https://www.youtube.com/embed/VJy4L5iAQNU?si=6CBZtnOeI_eFwUvW" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-lg shadow-md md:w-xl h-80"
                ></iframe>
            </div>

            <div className="md:h-96 flex md:flex-row flex-col items-center max-w-5xl rounded-3xl p-6 shadow-lg "> 
                <div className="md:w-1/2 flex flex-col items-center">
                    <h4 className="md:text-3xl font-bold text-center mb-4">Nuestro Producto</h4>
                    <p className="text-center md:text-xl md:w-2/3">
                        En Cafe Reactivo, no solo ofrecemos café, sino una experiencia que celebra la rica historia del café.
                        Nos esforzamos por ser más que una simple cafetería.
                    </p>
                </div>
                <a href="https://youtu.be/6QgJk1qFIps?si=ylm2UmPMNei6dga_" target="_blank">
                    <img 
                        src="/assets/grano-cafe.jpg" 
                        alt="Granos de café" 
                        className="md:h-80 rounded-2xl shadow-md hover:opacity-90 transition duration-300"
                    />
                </a>
            </div>
            <div className="md:h-96 flex md:flex-row flex-col items-center max-w-5xl rounded-3xl p-6 shadow-lg "> 
                <div className="md:w-1/2 flex flex-col items-center">
                    <h4 className="md:text-3xl font-bold text-center mb-4">Nuestro Negocio</h4>
                    <p className="text-center md:text-xl md:w-2/3">
                        En Cafe Reactivo, no solo ofrecemos café, sino una experiencia que celebra la rica historia del café.
                        Nos esforzamos por ser más que una simple cafetería.
                    </p>
                </div>
                <Link to="/" target="_blank" >
                    <img src="/assets/cafeteria.jpg" alt="cafeteria" 
                        className="md:h-80 md:w-11/12 rounded-2xl shadow-md hover:opacity-90 transition duration-300"
                    />
                </Link>
            </div>
        </section>
    );
}
 
export default Nosotros;
