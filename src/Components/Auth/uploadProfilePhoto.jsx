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
  };

  handleChange = e => {
    this.setState({ upload_avatar: e.target.files[0] }); //?if upload files should use files not value
  };

  handleSubmit = async e => {
    let { upload_avatar } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    console.log(this.state);
    try {
      let uploadTask = firebase
        .storage()
        .ref(`profile-photo/${upload_avatar.name}`)
        .put(upload_avatar);

      uploadTask.on(
        "state_changed",
        snapShot => {
          let progress = Math.round();
        },
        //error handling
        err => console.log(err),
        //completion of upload task
        () => {
          //downloading image url and next will save it on database
          firebase
            .storage()
            .ref("profile-photo")
            .child(upload_avatar.name)
            .getDownloadURL()
            .then(url => {
              //should save it on database
              this.setState({ url }, () => {
                console.log(url);
                this.state.userRef
                  .updateProfile({
                    photoURL: this.state.url,
                  })
                  .then(_ => {
                    // this.props.history.push("/admin");
                    // toast.success("successfully photo updated...");
                  })
                  .catch(err => toast.error(err.message));
              });

              this.state.usersRef
                .child(this.state.userData.uid)
                .update({ avatar: this.state.url })
                .then(_ => {
                  this.props.history.push("/admin");
                  toast.success("successfully photo updated...");
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        }
      );
    } catch (err) {
      toast.error(err.message);
    }
    // this.setState({ loading: false });
  };

  render() {
    let { upload_avatar, loading } = this.state;
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
