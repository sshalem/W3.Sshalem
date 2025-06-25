const SideNavbar = ({ children }: React.PropsWithChildren) => {
  return (
    <article className="sticky top-[96px] max-h-[calc(100vh-6rem)] overflow-auto bg-[#E7E9EB]">
      {/* Start gap divider   */}
      <div className="h-3"></div>
      {/* End gap divider   */}
      {children}
    </article>
  );
};

export default SideNavbar;
