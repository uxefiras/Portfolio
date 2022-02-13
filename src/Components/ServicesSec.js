import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "./useScroll.js";
import { fade } from "../PageAnimation";
import { Heromain, Description, Img } from "../style.js";
import styled from "styled-components";
function ServicesSec() {
  const [ref, controls] = useScroll();
  return (
    // Section Holder
    <Services ref={ref} animate={controls} variants={fade} initial="initial">
      {/* Section holder 2 */}
      <ServicesItems>
        {/* Section holder 3 */}
        <div className="Tittle">
          <h2>
            We have <span>High</span> Quality Services
          </h2>
        </div>
        {/* Section holder 4 */}
        <div className="sevices-itself">
          {/* Section holder 5 */}
          <ItemsContainer>
            {/* Item holder 1 */}
            <SreviceItemsHolder>
              <ItemHolder>
                <FontAwesomeIcon icon={faMoneyCheck} style={ColorizeIcons} />
                <p>Lorem, ipsum dolor.</p>
              </ItemHolder>
              <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </SreviceItemsHolder>
            {/* Item holder 2 */}
            <SreviceItemsHolder>
              <ItemHolder>
                <FontAwesomeIcon icon={faMoneyCheck} style={ColorizeIcons} />
                <p>Lorem, ipsum dolor.</p>
              </ItemHolder>
              <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </SreviceItemsHolder>
            {/* Item holder 3 */}
            <SreviceItemsHolder>
              <ItemHolder>
                <FontAwesomeIcon icon={faMoneyCheck} style={ColorizeIcons} />
                <p>Lorem, ipsum dolor.</p>
              </ItemHolder>
              <div className="description">
                <p>lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </SreviceItemsHolder>
            {/* Item holder 4 */}
            <SreviceItemsHolder>
              <ItemHolder>
                <FontAwesomeIcon icon={faMoneyCheck} style={ColorizeIcons} />
                <p>Lorem, ipsum dolor.</p>
              </ItemHolder>
              <div className="description">
                <p>lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </SreviceItemsHolder>
          </ItemsContainer>
        </div>
      </ServicesItems>
      <Img>
        <img
          src="https://images.unsplash.com/photo-1643924023026-c745844a98ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="Girl"
        />
      </Img>
    </Services>
  );
}

// redefined Styles

const ColorizeIcons = { color: "#23d997 " };

const Services = styled(Heromain)`
  flex-direction: row-reverse;
`;
const ServicesItems = styled(Description)`
  display: flex;

  justify-content: space-around;
  flex-direction: column;
  .Tittle {
    margin-bottom: 5rem;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SreviceItemsHolder = styled.div`
  display: flex;
  flex-basis: 15rem;
  flex-direction: column;

  .description {
    p {
      font-size: 1rem;
      padding: 0rem;
      margin: 2.5rem 0 2.5rem 0;
    }
  }
`;
const ItemHolder = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -2rem;
  p {
    padding: 0rem 0rem 0rem 0.5rem;
    font-size: 1.2rem;
  }
`;
export default ServicesSec;
