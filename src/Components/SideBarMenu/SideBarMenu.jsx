import React, { Fragment, Component } from "react";
import "./sidebar.css";
class SideBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleRef = React.createRef();
  }

  //react life cycle for updating into DOM
  componentDidUpdate() {
    if (this.props.toggle === true) {
      this.toggleRef.current.style.display = "block";
      this.toggleRef.current.className = "close";
    } else {
      this.toggleRef.current.style.display = "none";
      this.toggleRef.current.className = "open";
    }
  }

  render() {
    console.log(this.props.toggle);
    return (
      <Fragment>
        <section id="sideBarMenu" ref={this.toggleRef}>
          <nav>
            <ul>
              <li>
                <a href="/" className="active">
                  home
                </a>
              </li>
              <li>
                <a href="/">Explore</a>
              </li>
              <li>
                <a href="/">Plans</a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
              <li>
                <a href="/">Info</a>
              </li>
            </ul>
          </nav>
        </section>
      </Fragment>
    );
  }
}

export default SideBarMenu;
