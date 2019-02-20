import React from "react";
import styled from "styled-components";
import { Emoji, Link, Input, TextArea, Button } from "../../components";

const ClassHelperSection = styled.section`
  #title {
    margin: 1.5em 0 0.75em 0;
  }
  p {
    line-height: 1.75em;
  }

  .form-control {
    display: flex;
  }
`;

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      comment: ""
    };

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, email, value } = this.state;
    return (
      <ClassHelperSection>
        <h3 id="title">You can see me on</h3>
        <p>
          <Link
            target="https://github.com/davenathanael"
            label="GitHub"
            external
          />
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
          <Emoji emoji="✏️" />
        </p>
        <form>
          <div className="form-control">
            <Input
              name="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={this.inputChange}
              required
            />
            <Input
              name="email"
              type="email"
              value={email}
              placeholder="Your email"
              onChange={this.inputChange}
              required
            />
          </div>
          <div className="form-control">
            <TextArea
              name="comment"
              value={value}
              rows={1}
              cols={80}
              placeholder="Write something"
              onChange={this.inputChange}
              required
            />
          </div>
          <div className="form-control">
            <Button type="submit" onClick={this.submit}>
              Send
            </Button>
          </div>
        </form>
      </ClassHelperSection>
    );
  }
}

export default Contact;
