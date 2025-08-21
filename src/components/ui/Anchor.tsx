const Anchor = ({ href, description }: { href: string; description: string }) => {
  return (
    <a href={href} target="_blank" className="tracking-wide text-blue-500 hover:text-blue-700 hover:underline">
      {description}
    </a>
  );
};
export default Anchor;
