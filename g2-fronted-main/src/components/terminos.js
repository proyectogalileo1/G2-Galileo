import React from "react";
import { Link } from "react-router-dom"; // Agrega esta línea para importar Link
import "../assets/css/flechas.css";
import Paginaprincipal from "./Paginaprincipal";

function Terminos() {
    return (
        <nav>
            <div className="barra">
                <link className="flecha" to="/Paginaprincipal"></link>
                <h1 className="elemento">Términos y condiciones</h1>
            </div>
            <br></br>
        </nav>
    )
}

export default Terminos;
