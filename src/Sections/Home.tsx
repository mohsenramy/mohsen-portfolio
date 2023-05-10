import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <section id="home">
      <div className="homeContainer">
        <span className="small">Hi, my name is</span>
        <div className="display-small">
          Abdelmohsen AG <span> ...aka</span>
        </div>
        <div className="display-large">
          <strong>MOHSEN!</strong>
        </div>
        <span>Full stack developer Web/Mobile. Software is my Craft</span>
        <ul className="technologyStack">
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>React</li>
          <li>MongoDb</li>
          <li>ReactNative</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
