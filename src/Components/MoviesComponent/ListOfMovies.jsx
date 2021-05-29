import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "../../firebase";

class ListOfMovies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    try {
      let FetchMovies = firebase.database().ref("zee5-movies");
      //firebase event for fetching data
      FetchMovies.on("value", zee5_movies => {
        let movie_info = [];
        zee5_movies.forEach(movie => {
          //extract dataSnapShot from firebase realtime database use val()
          movie_info.push({
            id: movie.key,
            movie_name: movie.val().movie_name,
            imageUrl: movie.val().imageUrl,
            videoUrl: movie.val().videoUrl,
            language: movie.val().language,
            genre: movie.val().genre,
            certificate: movie.val().certificate,
            rating: movie.val().rating,
            movie_type: movie.val().movie_type,
            year: movie.val().year,
            description: movie.val().description,
          });
        });
        this.setState({ movies: movie_info });
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let Movies = this.state.movies.map(movie => {
      return (
        <Fragment key={movie.id}>
          <Link
            to={{
              pathname: `/zee5originals/details/${movie.movie_name.slice(
                0,
                10
              )}/${movie.id}`,
              id: movie.id,
              movie_name: movie.movie_name,
              videoUrl: movie.videoUrl,
            }}
          >
            <div className="thumbnail_block">
              <img src={movie.imageUrl} alt={movie.movie_name} />
            </div>
          </Link>
        </Fragment>
      );
    });
    return (
      <section id="movies_Block">
        <article>
          <h2>Top movie Shows | First Episode Free</h2>
          <main>
            <div className="thumbnail_home_block">
              {this.state.movies.length > 0 ? Movies : "loading...."}
            </div>
          </main>
        </article>
      </section>
    );
  }
}

export default ListOfMovies;
