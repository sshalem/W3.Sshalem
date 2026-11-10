const Subject = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <section>
      <div className="relative flex min-h-20 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.3),transparent_70%)]"></div>
        <h1 className="relative z-10 text-center text-2xl font-bold tracking-widest text-white md:text-3xl">{title}</h1>
      </div>
      <article className="mx-2 my-8 md:mx-10">{children}</article>
    </section>
  );
};

export default Subject;

// const Subject = ({ children, title }: { children: React.ReactNode; title: string }) => {
//   return (
//     <section>
//       <div className="relative flex min-h-24 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900">
//         {/* Background decoration */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.3),transparent_70%)]"></div>
//         <h1 className="relative z-10 text-center text-2xl font-bold tracking-widest text-white md:text-3xl">{title}</h1>
//       </div>
//       <article className="mx-2 my-8 md:mx-10">{children}</article>
//     </section>
//   );
// };

// export default Subject;

// const Subject = ({ children, title }: { children: React.ReactNode; title: string }) => {
//   return (
//     <section>
//       <div className="relative flex min-h-24 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100">
//         {/* Background decoration */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),transparent_70%)]"></div>
//         <h1 className="relative z-10 text-center text-2xl font-bold tracking-widest text-slate-800 md:text-3xl">{title}</h1>
//       </div>
//       <article className="mx-2 my-8 md:mx-10">{children}</article>
//     </section>
//   );
// };

// export default Subject;
