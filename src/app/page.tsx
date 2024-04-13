import Section from "@/component/Section";
import { content } from "./content";
import { getSampleCryptoData } from "@/service/crypto";
import JsonCodeBlock from "@/component/JsonCodeBlock";
import React from "react";
import { FOREX_DATA_LIST } from "@/data/forex";

const CRYPTO_DATA_LIST = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "XRP", name: "Ripple" },
  { symbol: "ADA", name: "Cardano" },
];

export default function Home() {
  const btcData = getSampleCryptoData();
  return (
    <main className="flex min-h-screen items-start justify-between px-24 relative">
      <div className="min-h-full grow basis-0 py-24 flex flex-col gap-2 sticky top-0">
        <label className="text-lg">
          Capstone project
          <br />
          2024 Master of Computer Science, HKU
        </label>
        <h1 className="max-w-[80%] text-3xl">
          Algorithm trading strategies for options or volatilities in foreign
          exchange and crypto
        </h1>

        <ul className="mt-6 uppercase">
          <li>Hung Lu</li>
          <li>Zhao Yang</li>
          <li>Lau Chun Hong</li>
        </ul>
      </div>
      <div className="grow basis-0 h-full py-24 px-6">
        <section>
          <h2 className="text-2xl my-4">Progress update</h2>
          <section className="flex flex-col gap-2">
            <h4 className="text-lg">Crypto data collection</h4>
            <span className="text-xs whitespace-nowrap">13 Mar — 1 Apr</span>
            <p className="text-gray-400">
              Data of options and volatilities in forex and crypto are collected
              from various exchange. For forex, we start with indices such as:
            </p>
            <div className="flex flex-col gap-4">
              {FOREX_DATA_LIST.map(({ name, fullName, description }) => (
                <div className="-mx-6 px-6 py-4 hover:bg-slate-800" key={name}>
                  <h6 className="text-md mb-2">
                    <b>{name}</b>: <span className="text-gray-400">{fullName}</span>
                  </h6>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400">
              For crypto, we start with&nbsp;
              {CRYPTO_DATA_LIST.map(({ name, symbol }, index) => (
                <React.Fragment key={symbol}>
                  <a
                    href={`/api/crypto/data/${symbol}`}
                    target="_blank"
                    className="text-gray-300 hover:text-gray-50 duration-100"
                  >
                    <b>{name}</b>
                  </a>
                  {index < CRYPTO_DATA_LIST.length - 2
                    ? ", "
                    : index === CRYPTO_DATA_LIST.length - 2
                    ? " and "
                    : ""}
                </React.Fragment>
              ))}
              . We will continue expanding the data sources for both training
              and testing data.
            </p>
            <JsonCodeBlock>{JSON.stringify(btcData, null, 2)}</JsonCodeBlock>
          </section>
          <section className="flex flex-col gap-2">
            <h4 className="text-md mt-4">Technology review </h4>
            <span className="text-xs whitespace-nowrap">1 Apr — Present</span>
            <p className="text-gray-400">
              We are working on the literature review and the proposed
              methodology. We are also experimenting with various machine
              learning techniques to identify those that yield superior
              risk-reward profiles in daily trading scenarios.
            </p>
          </section>
        </section>
        {content.map((section, index) => (
          <section className="flex flex-col" key={index}>
            <h2 className="text-2xl mt-4 py-4 border-t border-t-slate-700">
              {section.title}
            </h2>
            <p className="text-gray-400 flex flex-col gap-4">
              {section.description}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
