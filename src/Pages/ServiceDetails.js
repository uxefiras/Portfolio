import styled from "styled-components";
import DataApi from "./Projects";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ServicesDetails() {
  const history = useHistory();
  const url = history.location.pathname;
  const [data, setData] = useState(DataApi);
  const [project, setProject] = useState();
  useEffect(() => {
    const projectfilter = data.filter((proj) => proj.Url === url);
    setProject(projectfilter[0]);
  }, [project, url]);
  return (
    <>
      {project && (
        <div>
          <ProjectHeader>
            <h1>{project.Projectname}</h1>
            <img src={project.ImgUrl} alt="ppicture" />
          </ProjectHeader>
          <AwardDiv>
            {project.Padges.map((award) => (
              <Awardss
                AwardName={award.Name}
                AwardGivver={award.Givver}
                AwardYear={award.Year}
              />
            ))}
          </AwardDiv>
        </div>
      )}
    </>
  );
}

const ProjectHeader = styled.div`
  min-height: 100vh;
  position: relative;
  h1 {
    color: #fff;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
  }
`;

const AwardDiv = styled.div`
  display: flex;
  padding: 5rem 10rem;
  justify-content: space-around;
  .line {
    background-color: white;
    width: 40%;
    height: 0.2rem;
    margin: 1rem 0;
  }
  h1 {
    color: #23d997;
  }
  h2 {
    padding: 0.5rem 0;
    color: #fff;
  }
`;

function Awardss({ AwardName, AwardGivver, AwardYear }) {
  return (
    <div className="awards">
      <div className="award-itself">
        <h1 className="tittle">{AwardName}</h1>
        <div className="line"></div>
        <h2 className="from">{AwardGivver}</h2>
        <h3 className="year">{AwardYear}</h3>
      </div>
    </div>
  );
}

export default ServicesDetails;
