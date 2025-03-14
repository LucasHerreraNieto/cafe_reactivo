import { Nav, Navbar, Dropdown, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
        setPedidos(pedidosGuardados);

        const actualizarPedidos = () => {
            const pedidosActualizados = JSON.parse(localStorage.getItem('pedidos')) || [];
            setPedidos(pedidosActualizados);
        };

        document.addEventListener('updatePedidos', actualizarPedidos);
        return () => {
            document.removeEventListener('updatePedidos', actualizarPedidos);
        };
    }, []);

    const removerPedido = (index) => {
        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidosGuardados.splice(index, 1);
        localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));
        document.dispatchEvent(new Event('updatePedidos'));
    };

    const marcarComoEntregado = (index) => {
        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidosGuardados[index].estado = "Entregado";
        localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));
        document.dispatchEvent(new Event('updatePedidos'));
    };

    return (
        <Navbar expand="lg" className="bg-gray-300 p-3" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/"><h1 className='text-3xl'>Cafe Reactivo</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Dropdown className="me-3">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Pedidos
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="p-2">
                                {pedidos.length > 0 ? (
                                    pedidos.map((pedido, index) => (
                                        <Dropdown.Item key={index} className="p-2">
                                            <div className="fw-bold">{pedido.cliente} - Estado: {pedido.estado}</div>
                                            <ul className="list-unstyled">
                                                {pedido.productos.map((producto, i) => (
                                                    <li key={i}>
                                                        {producto.name} - ${producto.price}
                                                    </li>
                                                ))}
                                            </ul>
                                            <button className="btn btn-success btn-sm me-2" onClick={() => marcarComoEntregado(index)}>
                                                Entregar
                                            </button>
                                            <button className="btn btn-danger btn-sm" onClick={() => removerPedido(index)}>
                                                Eliminar
                                            </button>
                                        </Dropdown.Item>
                                    ))
                                ) : (
                                    <Dropdown.Item disabled>No hay pedidos</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link to="/nosotros" className='nav-link'>Nosotros</Link>
                        <Link to="/menu" className='nav-link'>Menú</Link>
                        <Link to="/contacto" className='nav-link'>Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
