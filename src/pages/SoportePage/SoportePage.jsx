import React, { useState } from "react";
import Carrito from "../../components/carrito";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./SoportePage.css";
import user from "../../assets/user.svg";

const faqData = [
  {
    question: "¿Cómo realizo un pedido?",
    answer: `Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras se irán sumando los productos seleccionados, y al finalizar la compra se te redirigirá a la pantalla de pago. Los productos que se encuentren en oferta tendrán un precio especial, de lo contrario, se te redirigirá a la pantalla de pago con el precio de lista.`,
  },
  {
    question: "¿El precio que figura en la web es el precio final?",
    answer: "Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.",
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer: `Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de tarjetas de crédito (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista.`,
  },
  {
    question: "¿Cómo puedo abonar a través de MercadoPago?",
    answer: `Podés hacerlo de tres formas: Con tarjetas online en cuotas (no se puede acceder a cuotas sin interés); A través de RapiPago/ PagoFácil (se abona al precio de lista, pero no se pueden hacer cuotas, sólo se puede abonar en un pago); y realizando una transferencia desde tu cuenta de MercadoPago.`,
  },
];

function Soporte() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <Nav />
      <main>
        <div className="soporte-header">
          <h2>Preguntas Frecuentes</h2>
        </div>

        {/* Preguntas Frecuentes Acordeón */}
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Servicio Postventa y Garantías */}
        <div className="info-section">
          <h2>Servicio postventa y garantías</h2>
          <p>
            Para realizar consultas/reclamos relacionadas con la garantía o devolución de alguna de tus compras, debajo de esta sección contamos con el apartado "StorePC te ayuda. ¿Cuál es tu consulta?" donde debes exponer tu caso, seleccionando el motivo de "Postventa" que se adapte a tu requerimiento y uno de nuestros representantes te ofrecerá la información correspondiente sobre cómo proceder.
          </p>
          <p>
            Para saber si tu producto califica, te aconsejamos revisar los <a href="#"><b>términos y condiciones</b></a> de garantía. Podes sacar un turno para venir en forma presencial a gestionar tu garantía en StorePC.
          </p>
          <div className="info-buttons">
            <button>Sacar Turno en StorePC</button>
          </div>
        </div>

        {/* Compra Gamer te ayuda */}
        <div className="info-section">
          <h2>StorePC te ayuda. ¿Cuál es tu consulta?</h2>
          <p>Para realizar una consulta es necesario que inicies sesión en tu cuenta.</p>

          <div className="info-buttons">
            <button>
              <img src={user} alt="User Icon" className="button-icon" />
              Iniciar Sesión
            </button>
          </div>

        </div>
      </main>
      <footer>
        <Footer />
        <Carrito />
      </footer>
    </div>
  );
}

export default Soporte;
