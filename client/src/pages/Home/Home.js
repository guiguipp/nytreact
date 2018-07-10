import React, { Component } from "react";
import API from "../../utils/API";
// import routes from "../../routes/api";
import SearchPanel from "../../components/SearchPanel"
import ResultsPanel from "../../components/ResultsPanel"
import SavedPanel from "../../components/SavedPanel"
import "./Home.css"


class Home extends Component {
    state = {
        savedArticle: []
    }
    
    
    componentWillMount(){
        // console.log("Doing something")
        // const newState = {...this.state};
        API.getArticles()
            .then(res => {
                console.log(res.data)
                this.setState({savedArticle: res.data})})
            .catch(err => console.log(err))
        // this.setState({...newState, savedArticle: API.getArticles()})
    }
    render () {
        return (
        <div>
            <h1>The NYT Search App</h1>
            <SearchPanel>
            
            </SearchPanel>
            
            
            <ResultsPanel>
            
            </ResultsPanel>

            <SavedPanel>
            {this.state.savedArticle.map(article => (
                <div>
                    <h3>{article.title}</h3>
                    <p>{article.url}</p>
                </div>
            ))}
            </SavedPanel>
        </div>
        )}
}

export default Home;