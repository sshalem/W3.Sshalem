const Header = () => {
  return (
    <div>
      {/* <!-- header --> */}
      <header className="header">
        {/* <!-- first child --> */}
        <nav className="nav">
          {/* <!-- navbar header --> */}
          <div className="nav__header">
            <img src="./img/logo.svg" alt="" className="nav__logo" />
            <span className="nav__btn">
              <i className="far fa-hand-point-down"></i>
            </span>
          </div>
          <ul className="nav__links">
            <li>
              <a href="#" className="nav__single-link">
                home
              </a>
            </li>
            <li>
              <a href="#" className="nav__single-link">
                about
              </a>
            </li>
            <li>
              <a href="#" className="nav__single-link">
                services
              </a>
            </li>
            <li>
              <a href="#" className="nav__single-link">
                numbers
              </a>
            </li>
            <li>
              <a href="#" className="nav__single-link">
                projects
              </a>
            </li>
            <li>
              <a href="#" className="nav__single-link">
                contact
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- second child --> */}
        <section className="banner">
          {/* <!-- banner container --> */}
          <div className="banner__container">
            <h1 className="banner__title">i'm senior</h1>
            <h1 className="banner__jobs">
              developer
              <span>
                <i className="fas fa-angle-double-right"></i>
              </span>
              designer
              <span>
                <i className="fas fa-angle-double-right"></i>
              </span>
              architecture
              <span>
                <i className="fas fa-angle-double-right"></i>
              </span>
            </h1>
          </div>
        </section>
      </header>
      {/* <!-- end of header --> */}
    </div>
  );
};

export default Header;
