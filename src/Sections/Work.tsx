import React from "react";
import TabsPanel from "../components/TabsPanel/TabsPanel";

type Props = {};

const Work = (props: Props) => {
  return (
    <section id="work">
      <h1>Experience</h1>
      {/* <div className="experienceContainer">
        
      </div> */}
      <TabsPanel />
    </section>
  );
};

export default Work;
