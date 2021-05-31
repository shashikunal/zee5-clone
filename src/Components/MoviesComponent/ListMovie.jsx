import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "../../firebase";
import moment from "moment";
import Moment from "react-moment";
class ListMovie extends Component {
  state = {
    movie: "",
    loading: false,
  };

  componentDidMount() {
    let fetchSingleMovie = firebase
      .database()
      .ref("zee5-movies")
      .child(this.props.location.state.id);
    //firebase event
    fetchSingleMovie.on("value", snapShot => {
      let movie = snapShot.val();
      this.setState({ movie });
    });
  }
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
      imageUrl,
      videoUrl,
    } = this.state.movie;
    console.log(this.props.location.state.id);
    return (
      <section className="single_movie">
        <article>
          <header className="poster_block">
            <img src={imageUrl} alt={movie_name} />
          </header>
          <main class="single_movie_content_block">
            <h2>{movie_name}</h2>
            <ul>
              <li>
                <Moment format="yyyy">{year}</Moment>
              </li>
              <li>{movie_type}</li>
              <li>{genre}</li>
              <li>{certificate}</li>
            </ul>
            <div>Audio Languages : {language}</div>
            <div>Subtitles: English</div>
            <div>
              <p>{description}</p>
            </div>
          </main>
          <footer>
            <div className="watch_button">
              <Link
                to={{
                  pathname: `/zee5originals/movie/${movie_name}/${this.props.location.state.id}`,
                  state: {
                    id: this.props.location.state.id,
                    movie_name: movie_name,
                    videoUrl: videoUrl,
                  },
                }}
              >
                <span>
                  <i class="fas fa-play"></i>
                </span>
                Watch Movie
              </Link>
            </div>
          </footer>
        </article>
      </section>
    );
  }
}

export default withRouter(ListMovie);
