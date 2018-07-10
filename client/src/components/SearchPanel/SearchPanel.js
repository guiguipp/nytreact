import React from "react";
import "./SearchPanel.css";
import API from "../../utils/API"

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // buildQueryURL(searchTerm){
    //     let queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //     queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    //     queryURL += "&q=" + searchTerm;
    //     console.log(queryURL)
    // }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        // console.log("Data was submitted: " + this.state.value);
        event.preventDefault();
        API.buildQueryURL(this.state.value)
            .then(res => {
                console.log(res)
                if (res.status !== 200) {
                    throw new Error(res.statusText)
                    }
                this.setState(res.data.response.docs)
                console.log(this.state)
                })
        console.log("This.state: ", this.state)
        
    }

    render(){
    return(
    <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
        <br />
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <strong>
                        <i className="fa  fa-list-alt"></i> Search Parameters</strong>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="search">Search Term:</label>
                            <input type="text" className="form-control" id="search-term" value={this.state.value} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pwd">Number of Records to Retrieve:</label>
                            <select className="form-control" id="article-count">
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="start-year">Start Year (Optional):</label>
                            <input type="text" className="form-control" id="start-year" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="end-year">End Year (Optional):</label>
                            <input type="text" className="form-control" id="end-year" />
                        </div>

                        <button type="submit" className="btn btn-default" id="run-search">
                            <i className="fa fa-search"></i> Search</button>
                        <button type="button" className="btn btn-default" id="clear-all">
                            <i className="fa fa-trash"></i> Clear Results</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
    }
};

export default SearchPanel;