import styled from "styled-components";
import { Heromain, Description, Img, Hide } from "../style.js";
function FaqSection() {
  return (
    <FaqStylation>
      {/*1st question*/}
      <div className="question">
        <h1>Question</h1>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam
          animi hic sequi corporis aliquid quisquam esse placeat adipisci,
          corrupti ab perspiciatis. Inventore libero distinctio sunt, obcaecati
          blanditiis eos tenetur.
        </p>
        <hr />
      </div>
      {/*2nd question*/}
      <div className="question">
        <h1>Question</h1>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam
          animi hic sequi corporis aliquid quisquam esse placeat adipisci,
          corrupti ab perspiciatis. Inventore libero distinctio sunt, obcaecati
          blanditiis eos tenetur.
        </p>
        <hr />
      </div>
      {/*3rd question*/}
      <div className="question">
        <h1>Question</h1>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam
          animi hic sequi corporis aliquid quisquam esse placeat adipisci,
          corrupti ab perspiciatis. Inventore libero distinctio sunt, obcaecati
          blanditiis eos tenetur.
        </p>
        <hr />
      </div>
      {/*4th question*/}
      <div className="question">
        <h1>Question</h1>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam
          animi hic sequi corporis aliquid quisquam esse placeat adipisci,
          corrupti ab perspiciatis. Inventore libero distinctio sunt, obcaecati
          blanditiis eos tenetur.
        </p>
      </div>
    </FaqStylation>
  );
}

const FaqStylation = styled(Heromain)`
  flex-direction: column;
  flex-basis: 100%;
  align-items: flex-start;
  .question {
    margin-top: 2rem;
    .faq-line {
      width: 100%;
      high: 0.2rem;
      margin: 2rem 0;
      background-color: #f2f2f2;
    }
  }
`;

export default FaqSection;
