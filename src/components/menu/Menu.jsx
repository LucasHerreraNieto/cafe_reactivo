import MenuItem from "./MenuItem";
import menu from "../../data/menu.json";
import { useState } from "react";

const Menu = ({ actualizarPedidos }) => {
    const [nombreDeCliente, setNombreCliente] = useState("");
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    const agregarProducto = (producto) => {
        setProductosSeleccionados([...productosSeleccionados, producto]);
    };

    const hacerPedido = () => {
        if (!nombreDeCliente.trim()) {
            alert("Por favor, ingrese el nombre del cliente.");
            return;
        }
        if (productosSeleccionados.length === 0) {
            alert("Seleccione al menos un producto para hacer el pedido.");
            return;
        }

        const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]");

        const pedidoExistente = pedidos.find(pedido => pedido.cliente === nombreDeCliente);

        if (pedidoExistente) {
            pedidoExistente.productos.push(...productosSeleccionados);
        } else {
            pedidos.push({
                cliente: nombreDeCliente,
                estado: "Pendiente",
                productos: [...productosSeleccionados]
            });
        }

        localStorage.setItem("pedidos", JSON.stringify(pedidos));
        document.dispatchEvent(new Event("updatePedidos"));
        actualizarPedidos();
        setNombreCliente("");
        setProductosSeleccionados([]);
    };

    return (
        <div className="flex flex-col items-center">
            <h1>Menú</h1>
            <div className="flex items-center justify-center w-fit h-fit"> 
                <input
                    type="text"
                    placeholder="Nombre del Cliente"
                    className="border rounded-lg p-2 m-2"
                    value={nombreDeCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                />
                <button className="btn btn-secondary" onClick={hacerPedido}>
                    Hacer Pedido
                </button>
            </div>
            <div className="flex flex-wrap">
                {menu.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        agregarProducto={agregarProducto}
                    />
                ))}
            </div>
            
        </div>
    );
};

export default Menu;

