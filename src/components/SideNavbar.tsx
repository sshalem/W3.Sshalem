const SideNavbar = ({ children }: React.PropsWithChildren) => {
  return (
    // <article className="sticky bottom-0 top-[96px] max-h-[calc(100vh-6rem)] overflow-hidden bg-[#E7E9EB]">
    <article className="sticky bottom-0 top-[96px] max-h-[calc(100vh-6rem)] overflow-hidden bg-[#E7E9EB]">
      {/* Start gap divider   */}
      <div className="h-3"></div>
      {/* End gap divider   */}
      {children}
    </article>
  );
};

export default SideNavbar;
