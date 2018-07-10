import axios from "axios";
var currentURL = window.location.origin;

// Export an object containing methods we'll use for accessing the Dog.Ceo API
export default {
    buildQueryURL(searchTerm){
        let queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        queryURL += "&q=" + searchTerm;
        return axios.get(queryURL)
    },
    getArticles: function() {
        currentURL = "localhost:3000/" ? "http://localhost:3001" : window.location.origin;
        return axios.get(currentURL + "/api/articles")
        }
};
