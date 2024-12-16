import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./OrderList.css";
import Header from "../../../components/Header";

function OrderList() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [statuses, setStatuses] = useState([
        { value: "Pendiente", label: "Pendiente" },
        { value: "Pagada", label: "Pagada" },
        { value: "Enviado", label: "Enviado" },
        { value: "Entregada", label: "Entregada" },
        { value: "Cancelada", label: "Cancelada" },
    ]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("http://localhost:3000/orders");
                if (!response.ok) {
                    throw new Error("Error al obtener las órdenes");
                }
                const data = await response.json();
                setOrders(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const orderOptions = orders.map((order) => ({
        value: order._id,
        label: `Orden #${order._id} - ${order.status}`,
        order,
    }));

    const handleSelectOrder = (selectedOption) => {
        setSelectedOrder(selectedOption.order);
    };

    const handleStatusChange = async (selectedStatus) => {
        if (!selectedOrder) return;

        try {
            const response = await fetch(
                `http://localhost:3000/orders/${selectedOrder._id}/status`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status: selectedStatus.value }),
                }
            );

            if (!response.ok) {
                throw new Error("Error al actualizar el estado de la orden");
            }

            const updatedOrder = await response.json();

            setOrders((prev) =>
                prev.map((order) =>
                    order._id === updatedOrder._id ? updatedOrder : order
                )
            );
            setSelectedOrder(updatedOrder);
        } catch (error) {
            console.error(error.message);
        }
    };

    if (loading) {
        return <div>Cargando órdenes...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Header />
            <div className="order-list__container">
                <button
                    className="order-list__back-button"
                    onClick={() => navigate("/AdminDashboard")}
                >
                    Volver al Dashboard
                </button>

                <h1 className="order-list__title">Gestión de Órdenes</h1>

                <Select
                    className="order-list__select"
                    options={orderOptions}
                    onChange={handleSelectOrder}
                    placeholder="Selecciona una orden"
                    isSearchable
                />

                {selectedOrder && (
                    <div className="order-list__details">
                        <h2>Detalles de la Orden</h2>
                        <p><strong>ID:</strong> {selectedOrder._id}</p>
                        <p><strong>Usuario:</strong> {selectedOrder.user}</p>
                        <p><strong>Dirección:</strong> {selectedOrder.adress}</p>
                        <p><strong>Teléfono:</strong> {selectedOrder.telephone}</p>
                        <p><strong>Comentario:</strong> {selectedOrder.comment || "N/A"}</p>
                        <p><strong>Productos:</strong></p>
                        <ul>
                            {selectedOrder.products.map((item) => (
                                <li key={item.product._id}>
                                    {item.product.name} - Cantidad: {item.quantity} - Precio: ${
                                        item.price
                                    }
                                </li>
                            ))}
                        </ul>
                        <p><strong>Precio Total:</strong> ${selectedOrder.totalPrice}</p>

                        <Select
                            className="order-list__select-status"
                            options={statuses}
                            onChange={handleStatusChange}
                            placeholder="Actualizar estado"
                            value={statuses.find((status) => status.value === selectedOrder.status)}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default OrderList;
