import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfig';  // Asegúrate de que la ruta sea correcta

const DetalleExperimento = () => {
  const { id } = useParams();
  const [experimento, setExperimento] = useState(null);

  useEffect(() => {
    const fetchExperimento = async () => {
      try {
        const actividadRef = doc(db, "actividades", "infantil", "actividades", id);
        const experimentoSnap = await getDoc(actividadRef);

        if (experimentoSnap.exists()) {
          const data = experimentoSnap.data();
          const materiales = Array.isArray(data.materiales)
            ? data.materiales
            : typeof data.materiales === "string"
            ? data.materiales.split(",")
            : [];
          setExperimento({ ...data, materiales });
        } else {
          console.log("No se encontró el experimento.");
        }
      } catch (error) {
        console.log("Error al obtener el experimento:", error);
      }
    };

    fetchExperimento();
  }, [id]);

  // Establecer un valor predeterminado para experimento.materiales
  const materiales = experimento ? experimento.materiales : [];

  return (
    <div>
      {experimento ? (
        <div>
          <h2>{experimento.titulo}</h2>
          <p>Materiales:</p>
          <ul>
            {materiales.length > 0 ? (
              materiales.map((material, index) => (
                <li key={index}>{material.trim()}</li>
              ))
            ) : (
              <li>Error: Los materiales no están disponibles.</li>
            )}
          </ul>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DetalleExperimento;
