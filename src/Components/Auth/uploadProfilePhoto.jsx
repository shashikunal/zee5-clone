import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
import "./Auth.css";
class UploadProfilePhoto extends Component {
  state = {
    url: "",
    upload_avatar: "",
    loading: false,
    userData: this.props.userData,
    progress: 0,
    userRef: firebase.auth().currentUser,
    usersRef: firebase.database().ref("users"),
    barStatus: false,
  };

  handleChange = e => {
    this.setState({ upload_avatar: e.target.files[0] }); //?if upload files should use files not value
  };

  handleSubmit = async e => {
    let { upload_avatar, url, loading, userRef, usersRef, progress } =
      this.state;
    e.preventDefault();
    this.setState({ loading: true });
    try {
      //?Firebase storage => store profile photo images
      let upload_task = firebase
        .storage()
        .ref(`profile-photo/${upload_avatar.name}`)
        .put(upload_avatar);

      //firebase on event
      upload_task.on(
        "state_changed",
        snapShot => {
          //for Progress purpose
          let progress = Math.round(
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100
          );
          this.setState({ progress, barStatus: true });
        },
        err => {
          //for error handling
          console.log(err);
        },
        () => {
          //task completion purpose
          //download storage image url from firebase
          firebase
            .storage()
            .ref("profile-photo")
            .child(upload_avatar.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url, barStatus: false }, () => {
                userRef.updateProfile({
                  photoURL: this.state.url,
                });
                //update usersRef
                usersRef
                  .child(this.state.userData.uid)
                  .update({
                    avatar: this.state.url,
                  })
                  .then(_ => {
                    toast.success("successfully photo updated");
                    this.props.history.push("/admin");
                  })
                  .catch(err => console.log(err));
              });
            })
            .catch(err => console.log(err));
        }
      );
    } catch (err) {
      toast.error(err.message);
    }
    this.setState({ loading: false });
  };

  render() {
    let { upload_avatar, loading, progress } = this.state;
    let progressBar = (
      <progress value={progress} max={100} style={{ width: "100 %" }}>
        {progress * 100} %
      </progress>
    );

    return (
      <section id="AuthBlock">
        <article>
          <h2>Upload Profile Photo to ZEE5</h2>
          <p>
            upload your own avatar to continue enjoying uninterrupted video and
            personalized experience.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                placeholder="upload photo"
                name="upload_avatar"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              {this.state.barStatus === true ? progressBar : ""}
              {this.state.barStatus === true ? progress + "%" : ""}
            </div>
            <div className="form-group">
              <button>
                {loading === true ? `loading...` : "Upload Photo"}
              </button>
            </div>
            <div className="form-group">
              <Link to="/admin">Go back to Dashboard</Link>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default withRouter(UploadProfilePhoto);
