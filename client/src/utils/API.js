import axios from "axios";
var currentURL = window.location.origin;

// Export an object containing methods we'll use for accessing the Dog.Ceo API
export default {
    getRandomDog: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getArticles: function() {
        currentURL = "localhost:3000/" ? "http://localhost:3001" : window.location.origin;
        return axios.get(currentURL + "/api/articles")
        }
};
