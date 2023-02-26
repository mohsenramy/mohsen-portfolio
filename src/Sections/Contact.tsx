import React from "react";
import Calendly from "../Components/Calendly";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <h3>Lets meet</h3>
      <Calendly />
    </section>
  );
};

export default Contact;
