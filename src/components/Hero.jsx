import data from "../data";
import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Hero = ({ open }) => {
  return (
    <>
      <section id="hero">
        <div className="header">
          <div className="hero-img">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="./desktop/image-hero.jpg"
                className="desktop-hero"
              />
              <img src="./mobile/image-hero.jpg" alt="hero" className="hero" />
            </picture>
            <nav className="nav">
              <img src="./logo.svg" alt="logo" className="logo" />
              {open && (
                <img
                  src="./icon-hamburger.svg"
                  alt=""
                  className="hamburger"
                  onClick={open}
                />
              )}
              {!open && (
                <img
                  src="./icon-close.svg"
                  alt=""
                  className="close"
                  onClick={open}
                />
              )}
              <ul className="desktop-menu">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </nav>
            <div className="header-content">
              <h1>Immersive experiences that deliver</h1>
            </div>
          </div>
        </div>
      </section>
      <section id="interactive">
        <div className="lead">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="./desktop/image-interactive.jpg"
              className="desktop-interactive"
            />
            <img
              src="./mobile/image-interactive.jpg"
              alt="img"
              className="interact"
            />
          </picture>
          <div className="content">
            <h1>The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      <section id="creations">
        <div className="create">
          <h1>Our creations</h1>
          <button className="desktop-btn">SEE ALL</button>
        </div>
        <div className="gridbox">
          {data.map((item, index) => (
            <div className="box" key={item.id}>
              <picture>
                <source
                  media="(min-width: 600px)"
                  srcSet={item.desktopImg}
                  className="desktop-img"
                />
                <img src={item.mobileImg} alt="img" className="creation" />
              </picture>
              <div className={`title ${index === 3 ? "small" : ""}`}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <button className="mobile-btn">SEE ALL</button>
      </section>
      <section id="footer">
        <div className="flex-one">
          <div id="logo">
            <img src="./logo.svg" alt="logo" className="logo" />
          </div>
          <div className="menu">
            <ul className="menu_">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-two">
          <div className="socials">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="fb" />
            </a>
            <a href="https://www.twitter.com/jlbspyder" target="_blank">
              <FaTwitter className="twitter" />
            </a>
            <a href="https://www.pinterest.com/" target="_blank">
              {" "}
              <FaPinterest className="pin" />
            </a>
            <a href="https://www.instagram.com/jlb_me/" target="_blank">
              <FaInstagram className="ig" />
            </a>
          </div>
          <div className="rights">© 2023 Loopstudios. All rights reserved.</div>
        </div>
      </section>
    </>
  );
};

export default Hero;
