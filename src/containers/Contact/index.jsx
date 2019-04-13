import React from "react";
import styled from "styled-components";
import { Emoji, Link, Input, TextArea, Button, Loader } from "../../components";
import axios from "axios";
import { API_URL } from "../../api";

const ClassHelperSection = styled.section`
  #title {
    margin-bottom: 0.75em;
  }

  form {
    margin-bottom: 3em;
  }

  .form-control {
    display: flex;
  }

  .comment {
    margin: 1em;
  }

  .comment-info {
    font-size: 1em;
  }

  #comments {
    display: ${props => props.finishedLoadingComments ? 'block' : 'none'};
    transition: all .5s ease-out;
  }
`;

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      comment: "",
      comments: []
    };

    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
  }

  componentDidMount() {
    this.fetchComments();
  }

  async fetchComments() {
    const res = await axios.get(`${API_URL}/comments`);
    this.setState({
      comments: res.data.data
    });
  }

  inputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  async submit(e) {
    e.preventDefault();
    const { name, email, comment } = this.state;
    if (name !== "" && email !== "" && comment !== "") {
      const res = await axios.post(`${API_URL}/comments`, {
        name,
        email,
        comment
      });

      if (res.status) {
        this.setState({
          name: "",
          email: "",
          comment: ""
        });
        this.fetchComments();
      }
      // post comment to backend
      console.log("Successfully posted your comment!");
    }
  }

  render() {
    const { name, email, comment, comments } = this.state;    
    return (
      <ClassHelperSection finishedLoadingComments={comments.length !== 0}>
        <h3 id="title">You can see me on</h3>
        <p>my{' '}
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
          , or {" "}
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
          </div>
          <div className="form-control">
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
              value={comment}
              rows={1}
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
        <h3>What others think of me</h3>
        {comments.length === 0 && <Loader />} 
        <section id="comments">
          {comments.map(c => (
            <div className="comment" key={c._id}>
              <p className="comment-content">"{c.comment}"</p>
              <p className="comment-info">
                By <Link target={`mailto:${c.email}`} label={c.name} external />{" "}
                at {new Date(c.createdAt).toDateString()}
              </p>
            </div>
          ))}
        </section>
      </ClassHelperSection>
    );
  }
}

export default Contact;
