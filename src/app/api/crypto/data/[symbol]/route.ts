import { CryptoSymbol, CryptoData } from "@/data/crypto";
import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "papaparse";
import path from "path";

async function getCryptoData(symbol: CryptoSymbol) {
  const csvPath = path.resolve(process.cwd(), `src/data/crypto/${symbol}.csv`);
  const csv = await readFile(csvPath, "utf-8");
  const csvParseResult = parse<CryptoData>(csv, {
    header: true,
    transform(value, field) {
      if (field === "timestamp") {
        return new Date(parseInt(value)).toISOString();
      }
      return value;
    },
  });
  if (csvParseResult.errors.length > 0) {
    console.error(csvParseResult.errors);
    throw new Error("Failed to parse data");
  }

  return csvParseResult.data.map((data) => ({ ...data, symbol }));
}

export async function GET(
  request: NextRequest,
  { params }: { params: { symbol: CryptoSymbol } }
) {
  const symbol = params.symbol;
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") || "10");
  const offset = parseInt(searchParams.get("offset") || "0");
  const data = await getCryptoData(symbol);

  return NextResponse.json(
    data.slice(offset, offset + limit).map((data) => ({ ...data, symbol }))
  );
}
