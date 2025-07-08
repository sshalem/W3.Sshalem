import { NavLink, useLocation } from "react-router-dom";
import { links } from "../utils/links";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const [enableLeftScrolling, setEnableLeftScrolling] = useState<boolean>(false);
  const [enableRightScrolling, setEnableRightScrolling] = useState<boolean>(false);
  let location = useLocation();

  const navRef = useRef<HTMLDivElement>(null);

  const handleLeftScrollButton = () => {
    console.log(navRef);
    // I must set a condition for `navRef.current !== null`
    // otherwise I will get a type error by TypeScript

    if (navRef.current !== null) {
      if (navRef.current.scrollLeft === 0) {
        setEnableLeftScrolling(false);
      } else {
        setEnableLeftScrolling(true);
      }

      console.log(navRef.current.scrollLeft);
      navRef.current.scrollLeft = navRef.current.scrollLeft - 120;
      console.log(navRef.current.scrollLeft);
    }
  };
  // https://medium.com/@rexosariemen/implementing-horizontal-scroll-buttons-in-react-61e0bb431be

  const handleRightScrollButton = () => {
    console.log(navRef);

    if (navRef.current !== null) {
      if (navRef.current.scrollLeft === 0) {
        setEnableLeftScrolling(true);
      }

      console.log(navRef.current.scrollLeft);
      navRef.current.scrollLeft = navRef.current.scrollLeft + 120;
      console.log(navRef.current.scrollLeft);
    }
  };

  return (
    <div className="fixed top-14 h-[33px] w-full select-none bg-gray-800 uppercase tracking-wider text-white">
      <nav className="fixed left-0 right-0 top-14 z-[3] m-auto h-[33px] w-full max-w-[1750px] align-middle">
        {enableLeftScrolling && (
          <button className="absolute left-0 top-0 h-[37px] w-5 bg-slate-400 px-1" onMouseDown={handleLeftScrollButton}>
            <FaAngleLeft />
          </button>
        )}
        <div className="flex overflow-hidden" ref={navRef}>
          {links.map((subject, index) => {
            // console.log(location);
            return (
              <NavLink to={`${subject}`} key={index}>
                {/* I substring subject from the 1 digit , since I dont want to have the '/' in the navbar for each link */}
                <div className={`${location.pathname === subject ? `bg-blue-600` : `hover:bg-slate-700`} inline-block h-full px-3`}>
                  <div className="inline-block align-sub">{subject.substring(1, 50)}</div>
                </div>
              </NavLink>
            );
          })}
        </div>

        <button className="absolute right-0 top-0 h-[37px] w-5 bg-slate-400 px-1" onMouseDown={handleRightScrollButton}>
          <FaAngleRight />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

// return (
//   <section className="bg-gray-800 text-[14px]  ">
//     <article className="relative mx-auto max-w-[1750px]">
//       {/* <nav className="mx-auto flex h-[36px] max-w-[1750px] flex-row flex-wrap overflow-y-scroll"> */}
//       {/* <nav className="mx-auto flex max-w-[1750px] overflow-x-auto"> */}

//       {enableLeftScrolling && (
//         <button className="absolute left-0 top-0 h-[37px] w-5 bg-slate-400 px-1" onMouseDown={handleLeftScrollButton}>
//           <FaAngleLeft />
//         </button>
//       )}

//       <nav className="flex overflow-hidden" ref={navRef}>
//         {links.map((subject, index) => {
//           // console.log(location);
//           return (
//             <NavLink to={`${subject}`} key={index} className={({ isActive }) => (isActive ? "bg-blue-600" : "")}>
//               {/* I substring subject from the 1 digit , since I dont want to have the '/' in the navbar for each link */}
//               <div className={`${location.pathname === subject ? `` : `hover:bg-slate-700`} px-3 py-2`}>{subject.substring(1, 50)}</div>
//             </NavLink>
//           );
//         })}
//       </nav>
//       <button className="absolute right-0 top-0 h-[37px] w-5 bg-slate-400 px-1" onMouseDown={handleRightScrollButton}>
//         <FaAngleRight />
//       </button>
//     </article>
//   </section>
// );
// };

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

// return (
//   <section className="select-none bg-gray-800 text-[14px] uppercase tracking-wider text-white">
//     <article className="relative mx-auto max-w-[1750px]">
//       {/* <nav className="mx-auto flex h-[36px] max-w-[1750px] flex-row flex-wrap overflow-y-scroll"> */}
//       {/* <nav className="mx-auto flex max-w-[1750px] overflow-x-auto"> */}

//       {enableLeftScrolling && (
//         <button className="absolute left-0 top-0 h-[37px] w-5 bg-slate-400 px-1" onMouseDown={handleLeftScrollButton}>
//           <FaAngleLeft />
//         </button>
//       )}

//       <nav className="flex overflow-hidden" ref={navRef}>
//         {links.map((subject, index) => {
//           // console.log(location);
//           return (
//             <NavLink to={`${subject}`} key={index} className={({ isActive }) => (isActive ? "bg-blue-600" : "")}>
//               {/* I substring subject from the 1 digit , since I dont want to have the '/' in the navbar for each link */}
//               <div className={`${location.pathname === subject ? `` : `hover:bg-slate-700`} px-3 py-2`}>{subject.substring(1, 50)}</div>
//             </NavLink>
//           );
//         })}
//       </nav>
//       <button className="absolute right-0 top-0 h-[37px] w-5 bg-slate-400 px-1" onMouseDown={handleRightScrollButton}>
//         <FaAngleRight />
//       </button>
//     </article>
//   </section>
// );
// };
