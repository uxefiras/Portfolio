import styled from "styled-components";
import { Heromain, Description, Img, Hide } from "../style.js";
function HeroSection() {
  return (
    <Heromain>
      <Description>
        <div className="text-on">
          <Hide>
            <h2>
              Welcome to <span>Firas M. Faraj</span>
            </h2>
          </Hide>
          <Hide>
            <h2>Profile in Case U don't know me</h2>
          </Hide>
          <Hide>
            <h2>
              I'm a <span>UX Engineer</span> working on my own StartUp!
            </h2>
          </Hide>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <button className="clicker">Contact</button>
      </Description>
      <Img>
        <img
          src="https://images.unsplash.com/photo-1643858040028-44457eb60163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Guy"
        />
      </Img>
    </Heromain>
  );
}

export default HeroSection;
