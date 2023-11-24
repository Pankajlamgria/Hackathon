import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import letztalk from "../../assets/letztalk-white.png";
import {
  faHome,
  faSearch,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={letztalk} width="100px" alt="Logo" />
      </Link>

      <nav>
        <NavLink
          className="home-link wrap"
          activeclassname="active"
          exact="true"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          <h4> Home </h4>
        </NavLink>

        <NavLink
          activeclassname="active"
          exact="true"
          className="search-link wrap"
          to="/search"
        >
          <FontAwesomeIcon icon={faSearch} color="#4d4d4e" />
          <h4> Search </h4>
        </NavLink>

        <NavLink
          activeclassname="active"
          exact="true"
          className="profile-link wrap"
          to="/profile"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          <h4> Profile </h4>
        </NavLink>

        <NavLink
          activeclassname="active"
          exact="true"
          className="profile-link wrap"
          to="/profile"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          <h4> Activity </h4>
        </NavLink>

        <NavLink
          activeclassname="active"
          exact="true"
          className="profile-link wrap"
          to="/profile"
          >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          <h4> Settings </h4>
        </NavLink>
      </nav>

      <div className="more-btn wrap">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        <h4> More </h4> 
      </div>
    </div>
  );
};

export default Sidebar;
