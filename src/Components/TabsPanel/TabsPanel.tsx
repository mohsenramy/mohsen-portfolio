import React, { useEffect, useState } from "react";
import "./TabsPanel.scss";
import data from "../../data/data.json";
import moment from "moment";
import { light } from "@mui/material/styles/createPalette";

type Props = {};

const TabsPanel = (props: Props) => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const [companies, setCompanies] = useState<string[]>([]);

  useEffect(() => {
    setCompanies(data.workExperience.map((job) => job.companyName));
    console.log(companies);
    return () => {};
  }, []);

  const onSelectJobHandler = (jobId: string) => {
    const selected = data.workExperience.findIndex((job) => job.id === jobId);
    setSelectedJobIndex(selected);
  };

  const CompaniesList = () => {
    return (
      <ul>
        {data.workExperience.map((job, index) => {
          let className = "";
          if (index === 0) {
            className = "active";
            // onSelectJobHandler(job.id);
          }

          return (
            <li
              key={job.id}
              className={selectedJobIndex === index ? "active" : ""}
              onClick={(e) => setSelectedJobIndex(index)}
            >
              {job.companyName}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="workTabsPanelContainer">
      <div className="tabsList">
        <CompaniesList />
        {/* <button type="button">JobTitle01</button>
        <button type="button">JobTitle01</button>
        <button type="button">JobTitle01</button>
        <button type="button">JobTitle01</button> */}
      </div>
      <div className="detailsPanel">
        <div className="detailsHeader">
          <h3>{data.workExperience[selectedJobIndex].position}</h3>
          <div className="jobParameters">
            <div className="company">
              {data.workExperience[selectedJobIndex].companyName}
            </div>
            <div className="separator"></div>
            <div className="location">
              {data.workExperience[selectedJobIndex].location}
            </div>
            <div className="separator">{/* <hr /> */}</div>
            {/* <span></span> */}
            <div className="interval">
              {moment(data.workExperience[selectedJobIndex].from).format(
                "MM-YYYY"
              )}{" "}
              ~{" "}
              {moment(data.workExperience[selectedJobIndex].to).format(
                "MM-YYYY"
              )}
            </div>
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
            {data.workExperience[selectedJobIndex].jobDescription.map(
              (item) => (
                <li>{item}</li>
              )
            )}
            {/* <li>
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
            </li> */}
          </ul>
        </div>
        <div className="jobTechStack">
          <ul>
            {data.workExperience[selectedJobIndex].techStack.map((item) => (
              <li>{item}</li>
            ))}
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
