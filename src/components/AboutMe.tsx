import Shabtay_1 from "../assets/Shabtay_1_dramatic_cool.jpg";

const AboutMe = () => {
  return (
    <section className="bg-white px-0 py-8" id="about">
      <div className="about__center">
        <article className="about-img">
          <img src={Shabtay_1} alt="about-img" className="about-img__photo" />
        </article>
        <article className="about-info">
          <div className="about-info__container">
            <h1 className="about-info__title">about me</h1>
            <p className="about-info__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nulla totam reprehenderit similique vel placeat ipsum natus eaque libero
              nam.
            </p>
            <div className="about-info__links">
              <a href="#" className="about-info__single-link dark-btn">
                hire me
              </a>
              <a href="#" className="about-info__single-link light-btn">
                download cv
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
