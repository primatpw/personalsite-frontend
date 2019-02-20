import React from "react";
import styled from "styled-components";
import { Emoji, Link } from "../../components";

const ClassHelperSection = styled.section`
  #title {
    margin-top: 1.5em;
  }

  #additional {
    margin-top: 1.5em;
  }

  & u {
    text-decoration-color: #95b27b;
  }
`;

const Home = () => (
  <ClassHelperSection>
    <h1 id="title">
      Greetings!
      <Emoji emoji="👋" />
    </h1>
    <h2>
      I'm <u>Dave</u>,
      <Emoji emoji="🖥️" />a code geek,
      <Emoji emoji="📚" />
      aspiring student, and on my path to become a <u>full-stack developer</u>.
    </h2>
    <p id="additional">
      *If you're an <i>office guy</i>, here's my{" "}
      <Link
        label="LinkedIn page"
        target="https://www.linkedin.com/in/dave-nathanael-a5b83a158/"
        external
      />{" "}
      or my{" "}
      <Link
        label="resume"
        target="https://docs.google.com/document/d/1zNSh1WA_lJVBaaWhkwr8OUh7RkmQy7gwdH6rxMfXE20/edit?usp=sharing"
        external
      />
      . Without emojis, of course.
    </p>
  </ClassHelperSection>
);

export default Home;
