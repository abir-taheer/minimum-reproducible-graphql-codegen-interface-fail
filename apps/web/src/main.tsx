import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClientProvider } from "./ApolloClientProvider.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloClientProvider>
      <App />
    </ApolloClientProvider>
  </React.StrictMode>,
);
