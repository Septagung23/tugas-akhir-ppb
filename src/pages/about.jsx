import React, { Component } from "react";

export default class About extends Component {
    render () {
        return (
            <div className="container">
                    <div class="card bg-dark my-3">
                        <div class="card-body align-content-center">
                            <img src="Pasfoto.jpg" width="200px" class="rounded-circle mx-auto d-block img-fluid" alt="Gambar" />
                            <h1 className="char-name d-flex justify-content-center text-warning">Septian Agung Permana</h1>
                            <h1 className="char-name d-flex justify-content-center text-warning">21120120140129</h1>
                            <h1 className="char-name d-flex justify-content-center text-warning">2020</h1>
                            <br /><br />
                            <h1 className="char-name text-center d-flex justify-content-center text-warning">Praktikum Pemrograman Perangkat Bergerak</h1>
                            {/* <h1 className="char-name d-flex justify-content-center text-warning">21120120140129</h1> */}
                            <h1 className="char-name d-flex justify-content-center text-warning">2022</h1>
                        </div>
                    </div>
                </div>
        )

    }
}