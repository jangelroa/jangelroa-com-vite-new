// import React from "react";

function Footer() {
  return (
    <footer className="container footer">
      <section className="footersec flex">
        <div className="logofooter">
          <div className="logof">
            <a href="/" className="flex">
              {/* <img src="/img/logo.png" alt="" /> */}
              <h1>Angel Roa</h1>
            </a>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consect adipcing elit. Facere eos ab sit
            btae excei, prident, aetur mnam qui odio bore nis a minus molia
            vitae. Maxta hrum sit illo.
          </p>
          <h4>Address</h4>
          <p>123 lorem street</p>
          <p>San Francisco, California</p>
        </div>
        <div className="categoriesfooter">
          <h3>Categories</h3>
          <div className="flex">
            <div className="catefbx">
              <ul>
                <li>
                  <a href="/">Culture</a>
                </li>
                <li>
                  <a href="/">Travel</a>
                </li>
                <li>
                  <a href="/">Lifestyle</a>
                </li>
                <li>
                  <a href="/">Fashion</a>
                </li>
                <li>
                  <a href="/">Food</a>
                </li>
                <li>
                  <a href="/">Space</a>
                </li>
              </ul>
            </div>
            <div className="catefbx">
              <ul>
                <li>
                  <a href="/">Culture</a>
                </li>
                <li>
                  <a href="/">Travel</a>
                </li>
                <li>
                  <a href="/">Lifestyle</a>
                </li>
                <li>
                  <a href="/">Fashion</a>
                </li>
                <li>
                  <a href="/">Food</a>
                </li>
                <li>
                  <a href="/">Space</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="newsletterfooter" id="subform">
          <h3>Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa
            aspernatur Lorem, ipsum dolor.
          </p>
          <form action="" className="flex">
            <div className="flex">
              <i className="fa-regular fa-user"></i>
              <input type="name" placeholder="Your name" />
            </div>
            <div className="flex">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Email address" />
            </div>
            <button type="submit" className="flex">
              Subcribe<i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </section>
      <div className="themeauthor container flex">
        <div className="createdby">
          <h4>
            &copy; 2023 Created by
            <a
              href="https://www.jangelroa.com/"
              target="_blank"
              title="jangelroa"
              rel="noreferrer"
            >
              jangelroa.com
            </a>
          </h4>
        </div>
        <div className="social flex">
          <a
            href="https://twitter.com/jangelroa2"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialicon">
              <i className="fa-brands fa-twitter"></i>
              <h4>Twitter</h4>
            </div>
          </a>
          <a
            href="https://www.facebook.com/jangelroa2"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialicon">
              <i className="fa-brands fa-facebook"></i>
              <h4>Facebook</h4>
            </div>
          </a>
          {/* <a href="https://www.instagram.com/jangelroa/" target="_blank">
        <div className="socialicon">
          <i className="fa-brands fa-square-instagram"></i>
          <h4>Instagram</h4>
        </div>
      </a> */}
          <a
            href="https://www.linkedin.com/in/jangelroa"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialicon">
              <i className="fa-brands fa-linkedin"></i>
              <h4>LinkedIn</h4>
            </div>
          </a>
          <a
            href="https://github.com/jangelroa"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialicon">
              <i className="fa-brands fa-github"></i>
              <h4>Github</h4>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
