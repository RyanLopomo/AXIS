// Importa o modo estrito do React para ajudar a identificar problemas durante o desenvolvimento.
import React from "react";

// Importa o ReactDOM para renderizar a aplicação dentro do HTML.
import ReactDOM from "react-dom/client";

// Importa o componente principal da aplicação.
import App from "./App.jsx";

// Importa os estilos globais do projeto.
import "./index.css";

// Procura no HTML o elemento com id root e cria a raiz da aplicação React.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Ativa verificações extras do React durante o desenvolvimento.
  <React.StrictMode>
    {/* Renderiza o componente principal do site AXIS. */}
    <App />
  </React.StrictMode>
);
