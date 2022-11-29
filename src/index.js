import React from "react";
import { createRoot } from "react-dom/client";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Web3sdkioProvider } from "@web3sdkio/react/solana";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./styles/globals.css";

// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint
const network = "mainnet-beta";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Web3sdkioProvider network={network}>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </Web3sdkioProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
