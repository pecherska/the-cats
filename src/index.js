import axios from "axios";
const BASE_URL = `https://api.thecatapi.com/v1`;
// axios.defaults.headers.common["x-api-key"] = "live_JUqfXRxbJx11WFLz3DJ9RDN8vtZYXf9HEyYyGrGGvTA5ewaGZq2ZEyrA1Jv4kjDr";
const API_KEY = "live_JUqfXRxbJx11WFLz3DJ9RDN8vtZYXf9HEyYyGrGGvTA5ewaGZq2ZEyrA1Jv4kjDr";


let storedBreeds = []


function getBreeds() {
    // axios.defaults.headers.common["x-api-key"] = "live_JUqfXRxbJx11WFLz3DJ9RDN8vtZYXf9HEyYyGrGGvTA5ewaGZq2ZEyrA1Jv4kjDr";
   return fetch(`${BASE_URL}/breeds`, {
        headers: {
        'x-api-key': API_KEY 
    }})
        .then(response => {
            // console.log(response.json()) //- повертає проміс response.json() = data
            if (!response.ok) {
            throw new Error(response.statusText);
            }
            return response.json();

    });
}

// getBreeds().then(data => console.log(data)).catch(error => console.log(error));



function fetchCatByBreed(breedId) {
    // axios.defaults.headers.common["x-api-key"] = "live_JUqfXRxbJx11WFLz3DJ9RDN8vtZYXf9HEyYyGrGGvTA5ewaGZq2ZEyrA1Jv4kjDr";
     return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
        headers: {
        'x-api-key': API_KEY 
    }})
        .then(response => {
            // console.log(response.json()) //- повертає проміс response.json() = data
            if (!response.ok) {
            throw new Error(response.statusText);
            }
            return response.json();

    });
}



const breedSelector = document.querySelector(".breed-select");
const loaderDisplay = document.querySelector(".loader");
const errorDisplay = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

breedSelector.addEventListener("change", onChange);
function onChange(event) {
    fetchCatByBreed(event.target.value).then(data => {
        // const { url, breeds } = data[0];
        const { description, temperament, name } = data[0].breeds[0];
       
        console.log(data[0]);
        console.log(data[0].breeds[0]);
        console.log(description);
        // createMarkUp(data[0].breeds[0])
     const markUp = data
         .map(({ url}) => 
             ` <img class="cat_img" src="${url}" alt="#" width ="300" />
                <h2> ${name}</h2>
                <p>${description}</p>
                <p>Temperament: ${temperament} </p>`)
            .join("");
        catInfo.insertAdjacentHTML("beforeend", markUp);
        if (catInfo.classList.contains(cat-info)) {
            console.log(catInfo.classList.contains(cat-info));

        }
    
});
};



loaderDisplay.style.display = "none";
errorDisplay.style.display = "none";


getBreeds()
    .then(data => {
        storedBreeds.push(data);
        console.log(storedBreeds)
       
        const markUp = data
            .map(({name, id }) => `<option value="${id}"> ${name} </option>`)
            .join("");
        breedSelector.insertAdjacentHTML("beforeend", markUp);
    })
    .catch(() => 
        errorDisplay.style.display = "block");
    


