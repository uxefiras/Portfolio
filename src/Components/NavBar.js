import styled from "styled-components";
import { Link } from "react-router-dom";
function NavBar() {
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
        </li>
        <li>
          <Link to="/services">2. Srvices</Link>
        </li>
        <li>
          <Link to="/contact-us">3. Contact</Link>
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
  .logo {
    a {
        text-decoration: none;
        color: white;
        padding: 0rem 1rem;
      }
    }
  }
  ul {
    display: flex;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: white;
        padding: 0rem 1rem;
      }
    }
  }
`;

export default NavBar;
