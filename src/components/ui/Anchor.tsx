const Anchor = ({ href, description }: { href: string; description: string }) => {
  return (
    <a href={href} target="_blank" className="rounded-md bg-sky-200 p-[0.15rem] tracking-wide text-blue-700 hover:text-blue-700 hover:underline">
      {description}
    </a>
  );
};
export default Anchor;

// const Anchor = ({ href, description }: { href: string; description: string }) => {
//   return (
//     <a href={href} target="_blank" className="tracking-wide text-blue-500 hover:text-blue-700 hover:underline">
//       {description}
//     </a>
//   );
// };
// export default Anchor;
