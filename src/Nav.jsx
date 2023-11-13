import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/010/975/945/small/blue-cartoon-circle-button-png.png" alt="logo" height={80}/>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-menu-left">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Charms
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="chainsaw_man">
                  Chainsaw Man
                </NavLink>
                <NavLink className="dropdown-item" to="fire_emblem">
                  Fire Emblem
                </NavLink>
                <NavLink className="dropdown-item" to="project_sekai">
                  Project Sekai
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/prints">
                Prints
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pins">
                Pins
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/stickers">
                Stickers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/standee">
                Standee
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <ul className="navbar-nav nav-menu-right">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login"><i className="fa-solid fa-user"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart"><i className="fa-solid fa-bag-shopping"></i> </NavLink>
            </li>
            <li className="nav-item">
              <span className="nav-link"><i className="fa-solid fa-magnifying-glass"></i></span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
