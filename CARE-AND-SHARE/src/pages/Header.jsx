import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/s6.png";


const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg" style={{backgroundColor: "#25493f"}}>
        <div class="container-fluid text-color">
          <Link to="/" class="navbar-brand">
          <img
            src={logo}
            width="270"
            height="80"
            class="d-inline-block align-top"
            alt=""
          />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
          to="/"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-colors">Home</b>
        </Link>
              <li class="nav-item">
                <Link to="/about" class="nav-link" aria-current="page">
                  <b className="text-color"style={{color: "#fff"}}>About Us</b>
                </Link>
              </li>
            </ul>
              {/* <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  <b className="text-color">Contact Us</b>
                </Link>
              </li>
            </ul> */}

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
