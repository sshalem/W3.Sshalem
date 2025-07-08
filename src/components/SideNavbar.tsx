// import { FaBars } from "react-icons/fa";

const SideNavbar = ({ children }: React.PropsWithChildren) => {
  return (
    // <article className="sticky bottom-0 top-[96px] max-h-[calc(100vh-6rem)] overflow-hidden bg-[#E7E9EB]">
    <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
      <div className="relative h-full w-full">
        {/* <FaBars className="fixed top-20 z-[70] bg-emerald-500 text-yellow-500" /> */}
        {/* Start gap divider   */}

        <div className="h-3"></div>
        {children}
      </div>
    </article>
  );
};

export default SideNavbar;
