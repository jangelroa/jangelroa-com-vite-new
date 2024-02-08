// import React from "react";

function Header() {
  return (
    <header id="header">
      <nav className="flex container1">
        <div className="logo flex">
          <div className="logoimg">
            {/* <img src="/img/logo.png" alt="" /> */}
          </div>
          <a href="/" title="jangelroa">
            <h1>Angel Roa</h1>
          </a>
        </div>
        <div className="navlist flex">
          <ul className="flex">
            <li>
              <a href="/" className="liactive">
                Home
              </a>
            </li>
            <li>
              About Me<i className="fa-solid fa-sort-down"></i>
            </li>
            <li>
              Category<i className="fa-solid fa-sort-down"></i>
            </li>
            <li>
              Blogs<i className="fa-solid fa-sort-down"></i>
            </li>
            <li>
              Pages<i className="fa-solid fa-sort-down"></i>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="searchdarksub flex">
          <div className="searchbar">
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            <div className="searchclick">
              <form action="#">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </form>
              <div className="tagssec">
                <h3>Popular tags:</h3>
                <div className="tegs flex">
                  <a href="/">
                    #Travel<span>,</span>
                  </a>
                  <a href="/">
                    #Tech<span>,</span>
                  </a>
                  <a href="/">
                    #Movie<span>,</span>
                  </a>
                  <a href="/">
                    #Lifestyle<span>,</span>
                  </a>
                  <a href="/">#Sport</a>
                </div>
              </div>
            </div>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              className="l toggle-checkbox"
              id="dark-mode-toggle"
            />
            <label className="toggle-label" htmlFor="dark-mode-toggle"></label>
          </div>
          <button className="subbtn">
            <a href="#subform">Subcribe</a>
          </button>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
