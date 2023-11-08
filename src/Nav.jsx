import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div className="nav-container">
        <NavLink to="/">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/010/975/945/small/blue-cartoon-circle-button-png.png" alt="logo" height={80}/>
        </NavLink>
        <ul className="nav-menu-left">
          <li>
            <NavLink className="nav-link" to="/shop"> Shop </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about"> About </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact"> Contact </NavLink>
          </li>
        </ul>
        <div>
          <ul className="nav-menu-right">
            <li>
              <NavLink className="nav-link" to="/login">Login </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/cart">Cart </NavLink>
            </li>
            <li className="nav-link">Search
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Nav
