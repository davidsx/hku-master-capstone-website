export interface CryptoData {
  symbol: string;
  timestamp: Date;
  open: string;
  high: string;
  low: string;
  close: string;
  vol: string;
  volCcy: string;
  volCcyQuote: string;
}

export type CryptoSymbol = "BTC" | "ETH" | "SOL" | "XRP" | "ADA";
export const CRYPTO_DATA_LIST = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "XRP", name: "Ripple" },
  { symbol: "ADA", name: "Cardano" },
];
