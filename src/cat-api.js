import axios from "axios";
const BASE_URL = `https://api.thecatapi.com/v1/breeds`;
axios.defaults.headers.common["x-api-key"] = "live_JUqfXRxbJx11WFLz3DJ9RDN8vtZYXf9HEyYyGrGGvTA5ewaGZq2ZEyrA1Jv4kjDr";
// const API_KEY = "live_JUqfXRxbJx11WFLz3DJ9RDN8vtZYXf9HEyYyGrGGvTA5ewaGZq2ZEyrA1Jv4kjDr";
let storedBreeds = []
console.dir(axios.defaults.headers.common["x-api-key"] = "live_JUqfXRxbJx11WFLz3DJ9RDN8vtZYXf9HEyYyGrGGvTA5ewaGZq2ZEyrA1Jv4kjDr");

function getBreeds() {
    fetch(BASE_URL, {
        headers: {
        'x-api-key': API_KEY 
    }})
    .then(response => console.log(response));
}

getBreeds();
console.log("hi");