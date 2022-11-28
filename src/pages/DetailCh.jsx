import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailCh() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [species, setSpecies] = useState("");
  const [image, setImage] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    axios
      .get("https://akabab.github.io/starwars-api/api/id/" + id + ".json")
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setHeight(response.data.height);
        setMass(response.data.mass);
        setSpecies(response.data.species);
        setImage(response.data.image);
        setHome(response.data.homeworld);
      });
  });
  return (
    <div class="card bg-dark m-3 text-bg-dark">
      <div class="card-body align-content-center">
        <img
          src={image}
          width="200px"
          class="rounded-2 mx-auto d-block img-fluid"
          alt="Gambar"
        />

        <h1 class="d-flex justify-content-center text-warning">{name}</h1>
        <h1>Profile</h1>
        <div class="mb-3 row">
          <label for="species" class="col-sm-2 col-form-label fs-2 ">
            Species
          </label>
          <div class="col-sm-10">
            <input
              type="text-disable"
              disabled
              readOnly
              class="form-control-plaintext text-warning text-capitalize fs-2"
              id="species"
              value={species}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="home" class="col-sm-2 col-form-label fs-2">
            Homeworld
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              disabled
              readOnly
              class="form-control-plaintext text-warning text-capitalize fs-2"
              id="home"
              value={home}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="height" class="col-sm-2 col-form-label fs-2">
            Height
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              disabled
              readOnly
              class="form-control-plaintext text-warning text-capitalize fs-2"
              id="height"
              value={height}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="mass" class="col-sm-2 col-form-label fs-2">
            Weight
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              disabled
              readOnly
              class="form-control-plaintext text-warning text-capitalize fs-2"
              id="mass"
              value={mass}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
