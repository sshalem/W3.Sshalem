const LeftColumnLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <article className="sticky top-[96px] max-h-[calc(100vh-6rem)] overflow-auto">
      {/* Start gap divider   */}
      <div className="h-3 bg-gray-100"></div>
      {/* End gap divider   */}
      {children}
    </article>
  );
};

export default LeftColumnLayout;
