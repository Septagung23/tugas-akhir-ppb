import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { FaUserAstronaut, FaUserCircle } from "react-icons/fa";
import Character from "./pages/Character";
import DetailCh from "./pages/DetailCh";
import About from "./pages/about";
import Apprentice from "./pages/Apprentice";
import Affiliation from "./pages/Affiliation";

export default function App() {
  return (
    <BrowserRouter>
      <nav class="navbar bg-dark">
        <div class="container d-flex justify-content-center">
          <img src="SWlogo.png" alt="StarWars" width="80" height="80" />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/Character" element={<Character />} />
        <Route path="/DetailCh/:id" element={<DetailCh />} />
        <Route path="/Apprentice/:id" element={<Apprentice />} />
        <Route path="/Affiliation/:id" element={<Affiliation />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <footer class="bg-dark">
        <NavLink to="/Character" className="iconWrapper">
          <FaUserAstronaut className="icon" />
          Character
        </NavLink>
        <NavLink to="/About" className="iconWrapper">
          <FaUserCircle className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

// import StarShip from "./pages/Starship";
// import Species from "./pages/Species";
// import PlanetInfo from "./pages/Planetinfo";
// import { GiExplodingPlanet, GiSpaceship, GiAlienBug } from "react-icons/gi";
// import Planet from "./pages/Planet";

{
  /* <Route path="/StarShip" element={<StarShip />} />
  <Route path="/Species" element={<Species />} /> */
  /* <Route path="/Planet" element={<Planet />} /> */
  /* <Route path="/Planetinfo/:id" element={<PlanetInfo />} /> */
}

{
  /* <NavLink to="/StarShip" className="iconWrapper">
<GiSpaceship className="icon" />
Space Ship
</NavLink>
<NavLink to="/Species" className="iconWrapper">
<GiAlienBug className="icon" />
Species
</NavLink> */
  /* <NavLink to="/Planet" className="iconWrapper">
  <GiExplodingPlanet className="icon" />
  Planet
</NavLink> */
}
