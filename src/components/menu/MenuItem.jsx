function MenuItem({ item, agregarProducto }) {
    return (
        <div className="border rounded-lg p-2 m-2 gap-5 md:w-2xs text-sm md:text-lg flex md:flex-col items-start justify-between">
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text hidden md:block">{item.description}</p>
                <p className="card-text">${item.price}</p>
                <button
                    className="btn btn-secondary"
                    onClick={() => agregarProducto(item)}
                >
                    Agregar al pedido
                </button>
            </div>
        </div>
    );
}

export default MenuItem;
