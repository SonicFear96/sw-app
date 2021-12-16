import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="page-header">
      <div className="container header-container">
        <div className="header-logo">
          <Link to="/">
            <img
              className="header-logo__img"
              src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
              alt="logo"
            />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="list__nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list__nav-item">
              <Link to="gallery">Gallery</Link>
            </li>
            <li className="list__nav-item">
              <Link to="/todo">To-do list</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
