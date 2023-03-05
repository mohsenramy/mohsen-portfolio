import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <section id="home">
      <span>Hi, my name is</span>
      <h2>
        Abdelmohsen AG <span>aka</span> <strong>MOHSEN!</strong>
      </h2>
      <h2>I'm a full stack developer</h2>
      <div className="technologyStack">
        <span>NodeJS</span>|<span>ExpressJS</span>|<span>React</span>|
        <span>MongoDb</span>|<span>ReactNative</span>
      </div>
    </section>
  );
};

export default Home;
