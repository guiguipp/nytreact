import React, { Component } from "react";
import API from "../../utils/NYT_API";
import SearchPanel from "../../components/SearchPanel"
import "./Home.css"

class Home extends Component {
    render () {
        return (
        <div>
            <SearchPanel>
            </SearchPanel>
        </div>
        )}
}

export default Home;