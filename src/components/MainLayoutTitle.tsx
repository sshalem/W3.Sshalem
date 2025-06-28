import { SiStudyverse } from "react-icons/si";
import { Link } from "react-router-dom";

const MainLayoutTitle = () => {
  return (
    <section>
      <div className="mx-auto w-11/12">
        <Link to={"/"}>
          <div className="my-2 inline-flex select-none gap-2 rounded-md bg-blue-600 p-2 text-white hover:bg-blue-400">
            <SiStudyverse className="self-center" />
            <div>
              W<sup>3</sup> Sshalem
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MainLayoutTitle;
