import { FaGithubSquare } from "react-icons/fa";
import { VscLinkExternal, VscGithub } from "react-icons/vsc";
import FeaturedProject from "../Components/Projects/FeaturedProject";
import OtherProject from "../Components/Projects/OtherProject";
type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projectsListContainer">
        <div className="featuredProjectsList">
          <FeaturedProject />
          <hr />
          <FeaturedProject />
        </div>
        <div className="otherProjectsList">
          <OtherProject />
          <OtherProject />
          <OtherProject />
          {/* <div className="otherProjectsItem">col1</div>
          <div className="otherProjectsItem">col1</div>
          <div className="otherProjectsItem">col1</div>
          <div className="otherProjectsItem">col1</div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
