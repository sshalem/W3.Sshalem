import { AboutMe } from "../components";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="mx-auto flex h-[29rem] w-11/12 flex-col items-center justify-evenly text-5xl font-medium text-white">
          <div>
            W<sup>3</sup> Sshalem Software tutorials
          </div>
          <div className="css-developer h-40 w-40 self-center"></div>
          <div className="self-center text-4xl">Shabtay Shalem</div>
          <div className="self-center text-4xl">Full Stack Developer</div>
        </div>
      </div>
      <AboutMe></AboutMe>
    </>
  );
};

export default Home;
