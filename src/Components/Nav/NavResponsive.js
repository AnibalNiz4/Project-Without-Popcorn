import "./navResponsive.scss";
import Logo from "./LogoNew.svg";
import { Route, Link } from "react-router-dom";
import { useState } from "react";

export default function NavResponsive() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [topBar, setTopBar] = useState(true);

  const showTopbar = () => setTopBar(!topBar);

  return (
    <div className="containerResponsiveNav">
      <div className={topBar ? "navRes_Container" : "navRes_Container active"}>
        <ul className="ulResponsive">
          <li>
            <Link onClick={setTopBar} to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link onClick={setTopBar} to="/tvs">
              TV Shows
            </Link>
          </li>
          <li>My List</li>
          <li>
            <Link onClick={setTopBar} to="/login">
              Login
            </Link>
          </li>
          <li className="registerNav">Register</li>
          <form className="form_inputRes" onSubmit={handleSubmit}>
            <input
              className="inputRes"
              type="text"
              placeholder="Search Movie or Tv Show..."
            />
          </form>
        </ul>
      </div>
      <div className="hamburgerLogoNav">
        <Link onClick={setTopBar} to="/">
          <div className="logoNavRes">
            <img src={Logo} alt="Without Popcorn" />
          </div>
        </Link>
        <div
          onClick={showTopbar}
          className={topBar ? "hamburgerNav" : "hamburgerNav active"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
