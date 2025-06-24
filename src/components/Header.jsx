import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import logo1 from "../assets/logo1.svg";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-white ms-5 me-5 mt-3 mb-3">
        <div className="container-fluid">
          <Link to={"/"}>
            <div className="mx-3">
              <img src={logo1} alt="logo" id="logo1" />
              <img src={logo} alt="logo" id="logo" />
              <p className="fw-normal text-primary">Logo Here</p>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mx-2" role="search">
              <input
                type="text"
                onChange={(e) => dispatch(setSearch(e.target.value))}
                placeholder="Search Here"
              />
            </div>
            <ul className="navbar-nav mb-2 me-5">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Zoffi
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Zoffie-aciton
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Zoffie-Another action
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Zoffie-Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">
                  Become a Seller
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      More
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      More-action
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="#">
                      More-Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
