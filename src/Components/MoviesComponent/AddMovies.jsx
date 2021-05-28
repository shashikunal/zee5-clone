import React, { Component, Fragment } from "react";
import "./Movie.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
class AddMovies extends Component {
  state = {
    movie_name: "",
    movie_image: "",
    duration: 0,
    year: "",
    description: "",
    genre: "",
    language: "",
    progress: 0,
    video: "",
    certificate: "",
    rating: "",
    loading: "",
    movie_type: "",
    imageUrl: "",
    videoUrl: "",
    barStatus: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImage = e => {
    this.setState({ movie_image: e.target.files[0] });
  };
  handleVideo = e => {
    this.setState({ video: e.target.files[0] });
  };

  handleSubmit = async e => {
    let {
      movie_name,
      movie_image,
      duration,
      year,
      description,
      genre,
      language,
      progress,
      video,
      certificate,
      rating,
      loading,
      movie_type,
    } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    try {
      //?uploadImagePart
      let uploadImage = firebase
        .storage()
        .ref(`/upload-movie-image/${movie_image.name}`)
        .put(movie_image);

      //?UPLOAD VIDEO PART
      let uploadVideo = firebase
        .storage()
        .ref(`/upload-movie-video/${video.name}`)
        .put(video);

      //?==============================upload image events=======================/
      uploadImage.on(
        "state_changed",
        snapShot => {
          //progress
        },
        err => {
          //error handling
          console.log(err);
        },
        () => {
          //event completion
          firebase
            .storage()
            .ref("upload-movie-image")
            .child(movie_image.name)
            .getDownloadURL()
            .then(imageUrl => {
              this.setState({ imageUrl });
            })
            .catch(err => console.log(err));
        }
      );
      //?==============================ends upload image events=======================/

      //!==============================upload VIDEO events=======================/
      uploadVideo.on(
        "state_changed",
        snapShot => {
          //progress
          let progressBar = Math.round(
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100
          ); //current bar status
          this.setState({ progress: progressBar, barStatus: true });
        },
        err => {
          //error handling
          console.log(err);
        },
        () => {
          //event completion
          firebase
            .storage()
            .ref("upload-movie-video")
            .child(video.name)
            .getDownloadURL()
            .then(videoUrl => {
              this.setState({ videoUrl }, () => {
                //save into realtime database
                let movieData = this.state;
                firebase
                  .database()
                  .ref("zee5-movies")
                  .push({
                    ...movieData,
                  });
                toast.success("successfully movie upload....");
                this.props.history.push("/");
              });
            })
            .catch(err => console.log(err));
        }
      );
      //!==============================ends upload VIDEO events=======================/
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let {
      movie_name,
      movie_image,
      duration,
      year,
      description,
      genre,
      language,
      progress,
      video,
      certificate,
      rating,
      loading,
      movie_type,
    } = this.state;

    let progressBar = (
      <Fragment>
        <div id="progressBlock">
          <article>
            <progress
              max="100"
              min="0"
              value={progress}
              id="videoProgress"
            ></progress>
            <span>{progress} %</span>
          </article>
        </div>
      </Fragment>
    );

    return (
      <Fragment>
        {this.state.barStatus ? progressBar : null}
        <section id="Movie_block">
          <article>
            <h2>Add Movie</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="movie_name">Movie name</label>
                <input
                  type="text"
                  name="movie_name"
                  value={movie_name}
                  id="movie_name"
                  onChange={this.handleChange}
                  placeholder="add movie name"
                  required
                />
              </div>
              <div>
                <label htmlFor="movie_image">Add movie Image</label>
                <input
                  type="file"
                  name="movie_image"
                  id="movie_image"
                  required
                  onChange={this.handleImage}
                />
              </div>
              <div>
                <label htmlFor="year">Movie year</label>
                <input
                  type="date"
                  name="year"
                  value={year}
                  onChange={this.handleChange}
                  placeholder="enter movie year"
                  required
                />
              </div>
              <div>
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  value={genre}
                  onChange={this.handleChange}
                  placeholder="enter genre"
                  required
                />
              </div>
              <div>
                <label htmlFor="language">Language</label>
                <input
                  type="text"
                  name="language"
                  id="language"
                  value={language}
                  onChange={this.handleChange}
                  placeholder="enter movie language"
                  required
                />
              </div>
              <div>
                <label htmlFor="video">upload video</label>
                <input
                  type="file"
                  name="video"
                  id="video"
                  required
                  onChange={this.handleVideo}
                />
              </div>
              <div>
                <label htmlFor="certificate">Movie Certificate</label>
                <input
                  type="text"
                  name="certificate"
                  id="certificate"
                  value={certificate}
                  onChange={this.handleChange}
                  placeholder="enter movie certificate"
                  required
                />
              </div>
              <div>
                <label htmlFor="rating">give movie rating</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  name="rating"
                  id="rating"
                  value={rating}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div id="movie_select">
                <label htmlFor="movie_type">Movie Type</label>
                <select
                  name="movie_type"
                  id="movie_type"
                  value={movie_type}
                  onChange={this.handleChange}
                >
                  <option value="horror">horror</option>
                  <option value="drama">drama</option>
                  <option value="action">action</option>
                  <option value="romance">romance</option>
                  <option value="thriller">thriller</option>
                  <option value="comedy">comedy</option>
                </select>
              </div>
              <div id="description_block">
                <label htmlFor="description">add movie short description</label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  value={description}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div id="movie_btn_block">
                <button class="movie_button">add Movie</button>
              </div>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(AddMovies);
