import React, { Component } from "react";
import Img from "../me.jpg";
import About from "./About"


class Info extends React.Component {

  constructor(props) {
    super(props);
    this.state = {visible: false, buttonLabel: "Show"};
  }

  showContent = () => {
    let tempVisible = this.state.visible;
    tempVisible = !tempVisible;
    let buttonLabel = (tempVisible) ? "Hide" : "Show"
    this.setState({visible: tempVisible, buttonLabel: buttonLabel})
    console.log("12");
  }

  render() {
    const isVisible = this.state.visible;
    let content;
    if (isVisible) {
      content = <About />;
    } else {
      content = null;
    }
  return (
    <div>
      {this.state.visible}
      <img className="info--img" src={Img} alt="" />
      <h1 className="info--name">Fatih Mehmet Gün</h1>
      <h3 className="info--job">Frontend Developer</h3>
      <h4 className="info--website">
        <a href="#">fmg.dev</a>
      </h4>
      <div className="info--buttons">
        <button className="info--email">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:fmgdev0@gmail.com">Email</a>
        </button>
        <button onClick={()=>{this.showContent()}}>
          <i className="fa-solid fa-arrow-down"></i> {this.state.buttonLabel}
        </button>
        <button className="info--linkedin">
          <i className="fa-brands fa-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/fatih-mehmet-g%C3%BCn-81ab761b8/"
            target="_blank"
          >
            LinkedIn
          </a>
        </button>
      </div>
      {content}
    </div>
  );
}
}
export default Info;