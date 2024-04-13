import { CryptoData } from "@/data/crypto";
import { parse } from "papaparse";

const CRYPTO_SAMPLE_DATA = [
  "timestamp,open,high,low,close,vol,volCcy,volCcyQuote",
  "1713008700000,67512.9,67519.1,67308.5,67355.7,38.48454801,2593104.451070869,2593104.451070869",
  "1713007800000,67447.2,67583.9,67445,67519.2,20.81287614,1405264.000306432,1405264.000306432",
].join("\n");

export function getSampleCryptoData() {
  const btcData = parse<CryptoData>(CRYPTO_SAMPLE_DATA, {
    header: true,
    transform(value, field) {
      if (field === "timestamp") {
        return new Date(parseInt(value)).toISOString();
      }
      return value;
    },
  });
  if (btcData.errors.length > 0) {
    console.error(btcData.errors);
    throw new Error("Failed to parse BTC data");
  }

  return btcData.data.map((data) => ({ ...data, symbol: "BTC" }));
}
