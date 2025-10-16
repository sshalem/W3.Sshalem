const DivDoubleBorder = ({ children }: React.PropsWithChildren) => {
  return (
    <section>
      <div className="my-8 inline-block border-spacing-10 rounded-md border-4 border-solid border-zinc-400 p-1 tracking-wider text-black">
        <strong>⭐ {children}</strong>
      </div>
    </section>
  );
};

export default DivDoubleBorder;

// const DivDoubleBorder = ({ children }: React.PropsWithChildren) => {
//   return (
//     <section>
//       <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
//         <strong>{children}</strong>
//       </div>
//     </section>
//   );
// };

// export default DivDoubleBorder;
