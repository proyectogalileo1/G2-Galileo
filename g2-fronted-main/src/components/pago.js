import React from "react";
import { Link } from "react-router-dom";
import { FaCreditCard } from 'react-icons/fa'; // Importando icono de tarjeta
import "../assets/css/Registro.css";
import "../assets/css/pago.css";

const MesAnoTarjeta = () => {
  return (
    <div className="mes-ano-tarjeta">
      <input className="mes-ano-tarjeta__mes" type="text" maxLength="2" placeholder="MM" />
      <span className="mes-ano-tarjeta__separador">/</span>
      <input className="mes-ano-tarjeta__ano" type="text" maxLength="2" placeholder="YY" />
    </div>
  );
};

const Datosbancarios = () => {
  return (
    <div className="datos-bancarios-container">
      <h1>Pago con Tarjeta <FaCreditCard /></h1> {/* Icono de tarjeta de crédito */}
      <section className="form-register">
        <label htmlFor="numero-tarjeta">Número de tarjeta</label>
        <input className="controls" type="text" name="numero-tarjeta" id="numero-tarjeta" placeholder="1234 5678 9101 1121" />
        <label htmlFor="cvv">CVV</label>
        <input className="controls" type="text" name="cvv" id="cvv" placeholder="123" />
        <MesAnoTarjeta />
        <Link to="/confirmacion" className="boton validar">Validar</Link>
        <Link to="/suscripcion" className="boton atras">Atrás</Link>
      </section>
    </div>
  );
};

const IconoTarjeta = () => (
  <div>
    <FaCreditCard />
    <p>Usa tu tarjeta de crédito para pagar</p>
  </div>
);


export default Datosbancarios;
