import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "../../firebase";

class VideoBlock extends Component {
  state = {
    videoUrl: "",
    loading: false,
  };

  componentDidMount() {
    let fetchVideoUrl = firebase
      .database()
      .ref("zee5-movies")
      .child(this.props.location.state.id);
    //firebase event
    fetchVideoUrl.on("value", snapShot => {
      let videoUrl = snapShot.val();
      this.setState({ videoUrl });
    });
  }
  render() {
    return (
      <section>
        <article>
          <video controls autoPlay>
            <source src={this.state.videoUrl.videoUrl} />
          </video>
        </article>
      </section>
    );
  }
}

export default withRouter(VideoBlock);
