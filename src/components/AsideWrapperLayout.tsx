const AsideWrapperLayout = ({ children }: React.PropsWithChildren) => {
  return (
    // <article className="fixed bottom-0 top-[89px] z-50 w-64 overflow-auto bg-[#E7E9EB]">
    <aside className="fixed bottom-0 top-[89px] z-50 w-64 overflow-auto bg-[#dfefff]">
      <div className="relative h-full w-full">
        <div className="h-3"></div>
        {children}
      </div>
    </aside>
  );
};

export default AsideWrapperLayout;

// bg-[#eff7ff]
// bg-[#deeeff]
