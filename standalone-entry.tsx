import React, { Component, type ErrorInfo, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./app/page";

const container = document.getElementById("app");

if (!container) {
  throw new Error("Elemento principal do aplicativo não encontrado.");
}

class LocalErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Falha protegida no FinaleScript Studio", error, info);
  }

  render() {
    if (this.state.failed) {
      return (
        <main style={{maxWidth: 680, margin: "80px auto", padding: 32, fontFamily: "Arial, sans-serif"}}>
          <h1>O aplicativo encontrou um problema</h1>
          <p>A tela foi protegida para não ficar em branco. Recarregue a página; se o erro continuar, abra o aplicativo em outro navegador.</p>
          <button onClick={() => window.location.reload()} style={{padding: "12px 18px", cursor: "pointer"}}>Recarregar aplicativo</button>
        </main>
      );
    }
    return this.props.children;
  }
}

createRoot(container).render(<LocalErrorBoundary><Home /></LocalErrorBoundary>);
