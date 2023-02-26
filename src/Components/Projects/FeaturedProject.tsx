import "./FeaturedProjects.scss";
import { FaGithubSquare } from "react-icons/fa";
import { VscLinkExternal, VscGithub } from "react-icons/vsc";
type Props = {};

const FeaturedProject = (props: Props) => {
  return (
    // <section id="projects">
    //   <h2>Projects</h2>
    <div className="projectsContainer">
      <div className="projectHeader">
        <div className="projectTitle ">
          <h3>ProjectTitle</h3>
          <div className="projectBusiness leftBorder">
            <span className="projectCompany">ProjectCompany</span>
            <span className="projectRole">projectRole</span>
          </div>
        </div>
        <div className="projectLinks">
          <VscGithub className="react-icons" />
          <VscLinkExternal className="react-icons" />
        </div>
      </div>
      <div className="projectDetails">
        <p className="projectDescription leftBorder">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          optio nam dolore molestiae maiores voluptatibus a autem, animi,
          quibusdam, ipsum suscipit vitae ullam eos consequatur quisquam
          incidunt voluptate? Molestiae, odit. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Deleniti labore excepturi, ab
          voluptatibus animi dignissimos ipsa quod odit necessitatibus minus nam
          perferendis nemo, quis minima fugiat incidunt, harum tenetur possimus?
        </p>
      </div>
      <div className="projectImage">
        <div>IMAGE</div>
      </div>

      <div className="projectStack">
        <ul>
          <li>NodeJs</li>
          <li>React</li>
          <li>ExpressJs</li>
          <li>MongoDb</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
    // </section>
  );
};

export default FeaturedProject;
