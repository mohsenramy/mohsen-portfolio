import React from "react";
import "./TabsPanel.scss";

type Props = {};

const TabsPanel = (props: Props) => {
  return (
    <div className="workTabsPanelContainer">
      <div className="tabsList">
        <ul>
          <li>Comp1</li>
          <li>Comp2</li>
          <li>Comp3</li>
          <li>Comp4</li>
          <li>Comp5</li>
        </ul>
        {/* <button type="button">JobTitle01</button>
        <button type="button">JobTitle01</button>
        <button type="button">JobTitle01</button>
        <button type="button">JobTitle01</button> */}
      </div>
      <div className="detailsPanel">
        <div className="detailsHeader">
          <h3>JobTitle</h3>
          <div className="jobParameters">
            <div className="location">Location</div>
            <div className="separator">
              <hr />
            </div>
            {/* <span></span> */}
            <div className="interval">from ~ to</div>
          </div>
        </div>
        <div className="jobDescription">
          <p className="jobDescriptionBrief">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            labore consequatur placeat harum aliquid officia temporibus vitae ad
            cum consequuntur beatae, tempora eligendi quod architecto ea, fugit
            cumque tempore dolorum.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              ipsum.
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              eligendi magnam doloremque quia obcaecati earum praesentium!
              Dolores corrupti autem porro consequuntur perspiciatis reiciendis.
            </li>
            <li>Lorem, ipsum.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, incidunt provident?
            </li>
          </ul>
        </div>
        <div className="jobTechStack">
          <ul>
            <li>Tech01</li>
            <li>Tech02</li>
            <li>Tech03</li>
            <li>Tech04: Lorem, ipsum.</li>
            <li>Tech05</li>
            <li>Tech06</li>
            <li>Tech07</li>
            <li>Tech08</li>
            <li>Tech09</li>
            <li>Tech10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabsPanel;

{
  /* <div className="tabPanel">
  <div className="tabPanelHeader">
    <h3>Job Title</h3>
    <h3>@ company name</h3>
    <h6>JAN.2010 ~ present</h6>
  </div>
  <div className="tabPanelDetails">
    <ul>
      <li>1st point</li>
      <li>1st point</li>
      <li>1st point</li>
      <li>1st point</li>
    </ul>
  </div>
  <hr />
  <div className="tabPanelStack">
    <ul>
      <li>1st TECH</li>
      <li>1st TECH</li>
      <li>1st TECH</li>
      <li>1st TECH</li>
    </ul>
  </div>
</div>; */
}
