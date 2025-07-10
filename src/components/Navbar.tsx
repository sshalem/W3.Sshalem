import { NavLink, useLocation } from "react-router-dom";
import { links } from "../utils/links";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// https://medium.com/@rexosariemen/implementing-horizontal-scroll-buttons-in-react-61e0bb431be

const Navbar = () => {
  const [enableLeftScrolling, setEnableLeftScrolling] = useState<boolean>(false);
  const [enableRightScrolling, setEnableRightScrolling] = useState<boolean>(true);

  const intervalRef = useRef<number | null>(null);
  let location = useLocation();

  const navRef = useRef<HTMLDivElement | null>(null);

  const startRightScroll = () => {
    console.log(navRef);

    intervalRef.current = setInterval(function () {
      if (navRef.current !== null) {
        // The maximum scrollLeft value is calculated by subtracting
        // the (scrollWidth - clientWidth) = maxScrollLeft of the element.
        if (navRef.current.scrollLeft !== navRef.current.scrollWidth - navRef.current.clientWidth) {
          setEnableRightScrolling(true);
          setEnableLeftScrolling(true);
        } else {
          setEnableRightScrolling(false);
          stopRightScroll();
        }
        navRef.current.scrollLeft = navRef.current.scrollLeft + 25;
      }
    }, 50);
  };

  const stopRightScroll = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startLeftScroll = () => {
    intervalRef.current = setInterval(function () {
      if (navRef.current !== null) {
        if (navRef.current.scrollLeft !== 0) {
          setEnableLeftScrolling(true);
          setEnableRightScrolling(true);
        } else {
          setEnableLeftScrolling(false);
          stopLeftScroll();
        }
        navRef.current.scrollLeft = navRef.current.scrollLeft - 25;
      }
    }, 50);
  };

  const stopLeftScroll = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const determineScrollbar = () => {
    console.log(window.innerWidth);
    console.log(navRef);
  };

  useEffect(() => {
    window.addEventListener("resize", determineScrollbar);
    return () => window.removeEventListener("resize", determineScrollbar);
  }, []);

  return (
    <div className="top-nav-font fixed top-14 h-[33px] w-full select-none bg-gray-800 text-[13px] uppercase tracking-wider text-white">
      <nav className="fixed left-0 right-0 top-14 z-[3] m-auto h-[33px] w-full max-w-[1750px] align-middle">
        {/* left Scroll button */}
        {enableLeftScrolling && (
          <button
            className="css-blur-bg-left absolute left-14 top-0 h-[33px] w-10 bg-slate-400 px-3 hover:bg-slate-500 sm:left-12 md:left-0"
            onMouseDown={startLeftScroll}
            onMouseUp={stopLeftScroll}
            onMouseLeave={stopLeftScroll}
          >
            <FaAngleLeft />
          </button>
        )}
        <div className="ml-14 flex h-[33px] overflow-hidden sm:ml-14 md:ml-0 lg:ml-0" ref={navRef}>
          {links.map((subject, index) => {
            // console.log(location);
            return (
              <NavLink to={`${subject}`} key={index}>
                {/* I substring subject from the 1 digit , since I dont want to have the '/' in the navbar for each link */}
                <div className={`${location.pathname === subject ? `bg-blue-600` : `hover:bg-slate-700`} px-3 py-2`}>{subject.substring(1, 50)}</div>
              </NavLink>
            );
          })}
        </div>
        {/* Right Scroll button */}
        {enableRightScrolling && (
          <button
            className="css-blur-bg-right absolute right-0 top-0 h-[33px] w-10 bg-slate-400 px-3 hover:bg-slate-500"
            onMouseDown={startRightScroll}
            onMouseUp={stopRightScroll}
            onMouseLeave={stopRightScroll}
          >
            <FaAngleRight />
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
