console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedDropdown = document.querySelector("#breed-dropdown");

window.addEventListener('DOMContentLoaded', (event) => {
    getDogs();
    getBreeds();
});

function getDogs(){
    return fetch(imgUrl).then(function(response){
        return response.json();
    }).then(function(json) {
        addDogs(json.message);
    });
}

function addDogs(imagesArray) {
    for(const element of imagesArray) {
        let image = document.createElement("img");
        image.src = element;
        document.getElementById("dog-image-container").appendChild(image);
    }
}

function getBreeds(){
    return fetch(breedUrl).then(function(response){
        return response.json();
    }).then(function(json) {
        addBreeds(Object.keys(json.message));
    });
}

function addBreeds(breedsArray) {
    let letter = document.querySelector("#breed-dropdown").value;
    for(const element of breedsArray) {
        if (letter == element[0]) {
            let bullet = document.createElement("li");
            let content = document.createTextNode(element);
            bullet.appendChild(content);
            bullet.addEventListener("click", function(){
                bullet.style.color = "red";
            });
            document.getElementById("dog-breeds").appendChild(bullet);
        }
    }
}

breedDropdown.addEventListener("change", function(){
    for(const element of document.querySelectorAll("li")){
        element.remove();
    }
    getBreeds();
})