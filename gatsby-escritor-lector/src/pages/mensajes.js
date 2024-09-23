import React, { useState, useEffect } from "react";
import axios from "axios";

const Mensajes = () => {
  const [mensajes, setMensajes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerMensajes = async () => {
      try {
        const response = await axios.get("http://localhost:5002/obtener_mensajes", {
          headers: { "Content-Type": "application/xml" },
        });
        // Parsear la respuesta XML
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, "application/xml");
        const mensajesNodes = xml.getElementsByTagName("mensaje");
        const mensajesArray = Array.from(mensajesNodes).map((node) => ({
          id: node.getElementsByTagName("id")[0].textContent,
          texto: node.getElementsByTagName("texto")[0].textContent,
          fecha_hora: node.getElementsByTagName("fecha_hora")[0].textContent,
        }));
        setMensajes(mensajesArray);
      } catch (err) {
        setError("Error al obtener los mensajes. Inténtalo de nuevo.");
      }
    };

    obtenerMensajes();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Mensajes</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {mensajes.length === 0 ? (
        <p>No hay mensajes disponibles.</p>
      ) : (
        <ul>
          {mensajes.map((mensaje) => (
            <li key={mensaje.id}>
              <strong>{mensaje.fecha_hora}</strong>: {mensaje.texto}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Mensajes;
