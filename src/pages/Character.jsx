import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    return axios
      .get("https://akabab.github.io/starwars-api/api/all.json")
      .then((response) => {
        this.setState({ people: response.data });
      });
  }

  render() {
    const { people } = this.state;
    return (
      <div className="">
        {people.map((p) => {
          console.log(p);
          return (
            <div className="container">
              <div class="card bg-dark my-3">
                <div class="card-body  align-content-center">
                  <h1 className="char-name text-align-center text-warning">
                    {p.name}
                  </h1>
                  <div>
                    <Link
                      to={"/DetailCh/" + p.id}
                      className="btn btn-outline-info"
                    >
                      Profile
                    </Link>
                    <Link
                      to={"/Affiliation/" + p.id}
                      className="btn btn-outline-info  mx-3"
                    >
                      Affiliation
                    </Link>
                    <Link
                      to={"/Apprentice/" + p.id}
                      className="btn btn-outline-info"
                    >
                      Former Affiliation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Character;

{
  /* <CharInfo charInfo={p}/> */
}
// this.getPeople = this.getPeople.bind(this);
// getPeople() {
//   return axios.get("https://swapi.dev/api/people").then((response) => {
//     console.log(response.data.results);
//     this.setState({ people: response.data.results });
//   });
// }
