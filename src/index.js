document.addEventListener("DOMContentLoaded", function() {
  breedDropDown = document.getElementById("breed-dropdown");

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(res => res.json())
      .then(json => renderImages(json.message));
  }

  fetchImages();

  function renderImages(json) {
    json.forEach(element => {
      img = document.createElement("img");
      img.src = element;
      imageDiv = document.querySelector("#dog-image-container");
      imageDiv.appendChild(img);
    });
  }

  fetchBreeds();

  function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(json => renderBreeds(json.message));
  }

  function renderBreeds(json) {
    let breedsArray = [];
    for (const breed in json) {
      li = document.createElement("li");
      li.innerText = breed;
      breedsArray.push(breed);
      li.addEventListener("click", event => {
        event.target.style.color = "blue";
      });
      let ul = document.querySelector("#dog-breeds");
      ul.appendChild(li);
    }

    findBreed(breedsArray);
  }

  function findBreed(array) {
    breedDropDown.addEventListener("change", function(e) {
      let letter = breedDropDown.value;
      //clear all breeds
      let ul = document.querySelector("#dog-breeds");
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      filteredArray = array.filter(function(x) {
        return x[0] == letter;
      });
      for (const filterBreed of filteredArray) {
        li = document.createElement("li");
        li.innerText = filterBreed;
        li.addEventListener("click", event => {
          event.target.style.color = "blue";
        });
        let ul = document.querySelector("#dog-breeds");
        ul.appendChild(li);
      }
    });
  }
});
