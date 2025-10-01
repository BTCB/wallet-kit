import { createContext } from "react";
import { UnknownChain } from "@clayon/wallet-sdk";
import { SuiClient } from "@mysten/sui/client";

export const SuiClientContext = createContext<SuiClient>(
  new SuiClient({
    url: UnknownChain.rpcUrl,
  })
);
