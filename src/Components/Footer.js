import { Nav } from "./NavBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
function FooterFor() {
  return (
    <Footer>
      <div className="all-rights">
        <Link to="/">
          <a href="">
            Firas <span>Faraj</span>{" "}
          </a>
        </Link>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/Firas.M.Faraj">Facebook</a>
        <a href="https://www.instagram.com/uxfiras/">Linkedin</a>
        <a href="https://github.com/uxfiras">Github</a>
      </div>
    </Footer>
  );
}

const Footer = styled(Nav)`
  .all-rights {
    a {
      color: white;
      text-decoration: none;
    }
  }
  .social-links {
    a {
      text-decoration: none;
      color: white;
      padding: 0 1rem;
      &:hover {
        color: #23d997;
      }
    }
  }
`;

export default FooterFor;
