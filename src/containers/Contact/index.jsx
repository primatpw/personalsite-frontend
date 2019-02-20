import React from "react";
import styled from "styled-components";
import { Emoji, Link } from "../../components";

const ClassHelperSection = styled.section`
  #title {
    margin: 1.5em 0 0.75em 0;
  }
  p {
    text-indent: 2em;
    line-height: 1.75em;
  }
`;

const Contact = () => (
  <ClassHelperSection>
    <h3 id="title">You can see me on</h3>
    <p>
      <Link target="https://github.com/davenathanael" label="GitHub" external />
      ,{" "}
      <Link
        target="https://www.linkedin.com/in/dave-nathanael-a5b83a158/"
        label="LinkedIn"
        external
      />
      , or my{" "}
      <Link
        target="https://docs.google.com/document/d/1zNSh1WA_lJVBaaWhkwr8OUh7RkmQy7gwdH6rxMfXE20/edit?usp=sharing"
        label="resume"
        external
      />
      . Moreover, you can write something about me below
      <Emoji emoji="👇🏻" />
    </p>
  </ClassHelperSection>
);

export default Contact;
