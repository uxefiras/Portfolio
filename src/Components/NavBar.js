import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
function NavBar() {
  const { pathname } = useLocation();
  return (
    <Nav>
      <div className="logo">
        <Link to="/">
          <a>
            Firas <span>Faraj</span>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <LineDiv
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/services">2. Srvices</Link>
          <LineDiv
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/services" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact-us">3. Contact</Link>
          <LineDiv
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact-us" ? "100%" : "0%" }}
          />
        </li>
      </ul>
    </Nav>
  );
}

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 5rem;
  padding: 2rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 100;
  .logo {
    a {
      text-decoration: none;
      color: white;
      padding: 0rem 1rem;
    }
  }

  ul {
    display: flex;
    li {
      position: relative;
      height: 4vh;
      list-style: none;
    }
    a {
      text-decoration: none;
      color: white;
      padding: 0rem 1rem;
    }
  }
`;

const LineDiv = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background-color: #23d997;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default NavBar;
