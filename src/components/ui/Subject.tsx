const Subject = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <section>
      <div className="bg-blue-500 p-4 text-center font-mono text-4xl font-semibold tracking-wider text-white">{title}</div>
      <article className="mx-2 my-8 md:mx-10">{children}</article>
    </section>
  );
};

export default Subject;
