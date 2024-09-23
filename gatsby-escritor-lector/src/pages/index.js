// src/pages/index.js
import React, { useEffect } from "react";
import { navigate } from "gatsby";

const IndexPage = () => {
  useEffect(() => {
    // Redirigir automáticamente a /enviar-mensaje
    navigate("/enviar-mensaje");
  }, []);

  return null; // No se muestra nada en la página raíz
};

export default IndexPage;
