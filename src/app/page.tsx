import Section from "@/component/Section";
import { content } from "./content";

export default function Home() {
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
          <div className="flex flex-col gap-2">
            <h4 className="text-md">
              Data collection and technology review{" "}
              <span className="text-xs whitespace-nowrap">
                13 Mar — Present
              </span>
            </h4>
            <p className="text-gray-400">
              We are working on the literature review and the proposed
              methodology. We are also experimenting with various machine
              learning techniques to identify those that yield superior
              risk-reward profiles in daily trading scenarios.
            </p>
          </div>
        </section>
        {content.map((section, index) => (
          <section className="flex flex-col" key={index}>
            <h2 className="text-2xl my-4 py-4 border-t border-t-slate-700">{section.title}</h2>
            <p className="text-gray-400 flex flex-col gap-4">
              {section.description}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
