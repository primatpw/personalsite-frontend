import React from "react";
import styled from "styled-components";
import { Emoji } from "../../components";

const ClassHelperSection = styled.section`
  #title {
    margin-bottom: 0.75em;
  }
  p {
    text-indent: 2em;
    line-height: 1.75em;
  }
`;

const About = () => (
  <ClassHelperSection>
    <h3 id="title">Things about me.</h3>
    <p className="desc">
      I always like to create <i>fun-to-make</i> things, like{" "}
      <u>applications</u>
      <Emoji emoji="🖥️" />, sites
      <Emoji emoji="🌐" />, or maybe games
      <Emoji emoji="🎮" />. Mostly, I love to code frontend with <u>React</u>,
      but backend interests me too. Beside of computer stuffs, I like music, by
      means of listening
      <Emoji emoji="🎧" /> and playing some <Emoji emoji="🎹" />. It's usually
      jazz or pop tracks, but I'm open to new things, who knows if you'll
      recommend me some cool stuff.
    </p>
    <br />
    <p>
      I do know some React, and some library that usually goes with it (Redux,
      Styled Components, React Router). Also Express, Java, Python, Django.
    </p>
  </ClassHelperSection>
);

export default About;
