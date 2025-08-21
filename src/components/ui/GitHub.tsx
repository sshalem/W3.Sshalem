import type { PropsWithChildren } from "react";

const GitHub = ({ children }: PropsWithChildren) => {
  return (
    <section className="my-10">
      <p className="mb-4 inline-block select-none rounded-md bg-blue-500 px-2 py-1 tracking-widest text-white">GitHub</p>
      <ul className="mx-8 list-disc tracking-wider text-blue-500 hover:text-blue-700">{children}</ul>
    </section>
  );
};

export default GitHub;
