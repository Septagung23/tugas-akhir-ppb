import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Affiliation() {
  const { id } = useParams();
  const [affiliation, setAffiliation] = useState([]);
  const af = affiliation.map((x) => {
    return <li class="text-warning fs-2">{x}</li>;
  });

  useEffect(() => {
    axios
      .get("https://akabab.github.io/starwars-api/api/id/" + id + ".json")
      .then((response) => {
        console.log(response.data.affiliations);
        setAffiliation(response.data.affiliations);
      });
  });

  return (
    <div className="container">
      <div class="card bg-dark my-3 min-vh-100">
        <div class="card-body align-content-center">
          <ul>{af}</ul>
        </div>
      </div>
    </div>
  );
}

// const names = [];
// affiliation.forEach((data) => {
//   names.push(<h2 className="text-warning fs-2">{data}</h2>);
// });
// keys.forEach((key) => {
//   return; //console.log(affiliation[key]); //<li class="text-warning fs-2">{key}</li>;
// });
