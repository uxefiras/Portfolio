import styled from "styled-components";
function NavBar() {
  return (
    <Nav>
      <div className="logo">
        <h4>
          Firas <span>Faraj</span>
        </h4>
      </div>
      <ul>
        <li>
          <a href="">1. About Us</a>
        </li>
        <li>
          <a href="">2. Srvices</a>
        </li>
        <li>
          <a href="">3. Contact</a>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 5rem;
  padding: 2rem 10rem;
  background: #282828;
  .logo {
    h4 {
      color: #fff;
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
