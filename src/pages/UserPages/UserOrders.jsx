import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserAuthContext"; // Asegúrate de que la ruta es correcta
import "./UserOrders.css"; // Archivo CSS

export default function UserOrders() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState(null); // Estado para almacenar los productos de una orden
    const [selectedOrderId, setSelectedOrderId] = useState(null); // Estado para saber qué orden fue seleccionada

    useEffect(() => {
        if (user) {
            const fetchOrders = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/orders/user/${user.id}`);
                    if (!response.ok) {
                        throw new Error("Hubo un error al obtener las órdenes.");
                    }
                    const ordersData = await response.json();
                    setOrders(ordersData);
                    console.log(ordersData);  // Para depuración
                } catch (err) {
                    setError("Hubo un problema al cargar tus órdenes.");
                } finally {
                    setLoading(false);
                }
            };

            fetchOrders();
        }
    }, [user]);

    const handleShowProducts = (orderId) => {
        // Si se hace clic en la misma orden, alternamos la visibilidad
        if (selectedOrderId === orderId) {
            setSelectedOrderId(null); // Desocultamos la información si se hace clic nuevamente
        } else {
            setSelectedOrderId(orderId); // Mostramos la información de la nueva orden
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="user-orders-container">
            <h2>Mis Compras</h2>
            <p>Aquí puedes ver un resumen de tus órdenes realizadas.</p>

            {orders.length === 0 ? (
                <p>No tienes órdenes realizadas.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order._id} className="order-item">
                            <p><strong>Orden ID:</strong> {order._id}</p>
                            <p><strong>Fecha Creación:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                            <p><strong>Fecha Actualización:</strong> {new Date(order.updatedAt).toLocaleDateString()}</p>
                            <p><strong>Total:</strong> ${order.totalPrice}</p>
                            <p><strong>Estado:</strong> {order.status}</p>

                            {/* Botón para mostrar/ocultar los productos */}
                            <button onClick={() => handleShowProducts(order._id)}>
                                {selectedOrderId === order._id ? "Ocultar Productos" : "Ver Productos"}
                            </button>

                            {/* Renderizar los productos si la orden es la seleccionada */}
                            {selectedOrderId === order._id && (
                                <div className="order-products">
                                    <h3>Productos de la Orden</h3>
                                    <ul>
                                        {order.products.map((item, index) => (
                                            <li key={item._id || index}> {/* Usar _id o índice como clave */}
                                                <p><strong>Producto:</strong> {item.product.name}</p>
                                                <p><strong>Cantidad:</strong> {item.quantity}</p> {/* Acceder a quantity de item */}
                                                <p><strong>Precio:</strong> ${item.product.price}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
