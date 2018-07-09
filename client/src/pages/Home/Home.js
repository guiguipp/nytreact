import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
    render () {
        return (
        <div>
            {/* navbar */}
            <br/>
            <div className="container">
                <h1 className="text-center">NYT Articles Scrubber</h1>
                <br/>
                <div className="row">
                    <button className="btn btn-danger btn-lg">Search</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger btn-lg">Results</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger btn-lg">Saved Articles</button>
                </div>

            </div>
        </div>
        )}
}

export default Home;