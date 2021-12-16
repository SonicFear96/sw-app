import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="page-header">
      <div className="container header-container">
        <div className="header-logo">
          {/* <Link to="/">
            <img
              className="header-logo__img"
              src={`${process.env.PUBLIC_URL}/img/logoMain.svg`}
              alt="logo"
            />
          </Link> */}
        </div>
        <div className="header-navigation">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/todo">To-do list</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
