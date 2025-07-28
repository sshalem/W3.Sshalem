const Header = () => {
  return (
    <div className="header" id="header">
      <div className="mx-auto flex h-[29rem] w-11/12 flex-col items-center justify-evenly text-5xl font-medium text-white">
        <div className="text-6xl font-semibold italic tracking-wider">
          W<sup>3</sup> Sshalem Software tutorials
        </div>
        <div className="developer-image h-40 w-40 self-center"></div>
        <div className="self-center text-3xl font-semibold tracking-wider">Shabtay Shalem</div>
        <div className="self-center text-3xl font-semibold tracking-wider">Full Stack Developer</div>
      </div>
    </div>
  );
};

export default Header;
