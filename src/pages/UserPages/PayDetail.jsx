import "./PayDetail.css";
import { useNavigate } from "react-router-dom";

export default function PayDetail() {
    const navigate = useNavigate();

    const handleButton = () => {
        navigate("/"); // Se asegura de llamar la función dentro de un callback
    };

    return (
        <div className="pay-detail-container">
            <h2 className="pay-detail-title">Instructivo de Pago</h2>
            <ul className="pay-detail-list">
                <li>
                    <p>
                        Para completar tu pago, envía un correo a{" "}
                        <strong className="highlight">storepc-ventas@hotmail.com</strong>
                    </p>
                </li>
                <li>
                    <p>
                        o un mensaje a nuestro WhatsApp{" "}
                        <strong className="highlight">+54 9 011 9944 8855</strong> con la siguiente información:
                    </p>
                </li>
                <li><strong>Nombre:</strong> (Tu nombre)</li>
                <li><strong>Email:</strong> (Email registrado en la plataforma)</li>
                <li><strong>ID de orden:</strong> (Número de tu orden)</li>
                <li><strong>Monto total:</strong> (El total de tu compra)</li>
            </ul>
            <p className="pay-detail-paragraph">
                Asegúrate de adjuntar el <strong>comprobante de pago</strong> para agilizar la validación de tu pedido.
            </p>
            <p className="pay-detail-paragraph">
                Una vez que confirmemos tu pago, te enviaremos una notificación con la actualización del estado de tu orden.
            </p>
            <p className="pay-detail-thanks">¡Gracias por elegirnos!</p>
            <button className="pay-detail-button" onClick={handleButton}>
                <span>IR AL INICIO</span>
            </button>
        </div>
    );
}
