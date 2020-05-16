import React from "react";

const MoviesForm = ({ match, history }) => {
  return (
    <div>
      <h2>Movies Form {match.params.id} </h2>

      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MoviesForm;
