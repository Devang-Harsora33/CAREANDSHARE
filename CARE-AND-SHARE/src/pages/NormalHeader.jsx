import { Link } from "react-router-dom";
import "./NormalHeader.css"
const NormalHeader = () => {
  return (
    <ul class="navbar-nav">
      
      <li class="nav-item">
        <Link to="/user/register" class="nav-link active" aria-current="page">
          <b className="text-colors">Register User</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="/user/login" class="nav-link active" aria-current="page">
          <b className="text-colors">Login User</b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
