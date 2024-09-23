import React from "react";
import { Link } from "gatsby";

export const wrapPageElement = ({ element }) => (
  <>
    <nav style={{ padding: "20px", background: "#f0f0f0" }}>
      <Link to="/enviar-mensaje" style={{ marginRight: "20px" }}>Enviar Mensaje</Link>
      <Link to="/mensajes">Ver Mensajes</Link>
    </nav>
    {element}
  </>
);
