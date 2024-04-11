import { PropsWithChildren } from "react";

interface Props {
  title: string;
}

export default function Section({ title, children }: PropsWithChildren<Props>) {
  return (
    <section className="flex flex-col">
      <h2 className="my-4">{title}</h2>
      <p>{children}</p>
    </section>
  );
}
