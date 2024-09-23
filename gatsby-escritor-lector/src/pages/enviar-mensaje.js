import React, { useState } from "react";
import axios from "axios";

const EnviarMensaje = () => {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setRespuesta(null);

    try {
      const response = await axios.post(
        "http://localhost:5001/escribir", // URL del microservicio Flask
        `<root><texto>${mensaje}</texto></root>`,
        {
          headers: { "Content-Type": "application/xml" },
        }
      );
      setRespuesta("Mensaje enviado exitosamente.");
      setMensaje("");
    } catch (err) {
      setError("Error al enviar el mensaje. Inténtalo de nuevo.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Enviar Mensaje</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Mensaje:
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows="4"
              cols="50"
              required
              style={{ display: "block", width: "100%", marginTop: "5px" }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Enviar
        </button>
      </form>
      {respuesta && <p style={{ color: "green" }}>{respuesta}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EnviarMensaje;
