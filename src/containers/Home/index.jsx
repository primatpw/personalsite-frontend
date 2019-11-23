import React from "react";
import styled from "styled-components";
import { Emoji, Link } from "../../components";

const ClassHelperSection = styled.section`
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
    </h1>
    <h2>
      I'm Prima,
      <Emoji emoji="🖥️" />a design geek,
      <Emoji emoji="📚" />
      aspiring student, and on my path to become a <mark>product designer</mark>.
    </h2>
    <p id="additional">
      *If you're an <i>office guy</i>, here's my{" "}
      <Link
        label="LinkedIn page"
        target="https://www.linkedin.com/in/teresaprima/"
        external
      />{" "}
      or my{" "}
      <Link
        label="resume"
        target="https://drive.google.com/file/d/12EG6VqoSIKEPOlH7A_i3CgJ_IeNlrn3D/view?usp=sharing"
        external
      />
      . Without emojis, of course.
    </p>
  </ClassHelperSection>
);

export default Home;
