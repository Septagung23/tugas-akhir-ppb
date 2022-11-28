import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Apprentice() {
  const { id } = useParams();
  const [faffiliation, setFaffiliation] = useState([]);
  const a = faffiliation.map((ap) => {
    return <li class="text-warning fs-2">{ap}</li>;
  });

  useEffect(() => {
    axios
      .get("https://akabab.github.io/starwars-api/api/id/" + id + ".json")
      .then((response) => {
        // console.log(response.data.apprentices);
        setFaffiliation(response.data.formerAffiliations);
      });
  });

  return (
    <div className="container">
      <div class="card bg-dark my-3 min-vh-100">
        <div class="card-body align-content-center">
          <ul>{a}</ul>
        </div>
      </div>
    </div>
  );
}

// <div className="container">
//   <div class="card bg-dark my-3">
//     <div class="card-body  align-content-center">
//       <h1 className="char-name text-align-center text-warning d-flex justify-content-center">
//         {apprentice}
//       </h1>
//     </div>
//   </div>
// </div>
