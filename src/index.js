document.addEventListener("DOMContentLoaded", function() {
  dogPictures();
  dogBreeds();
  dropDown();
});

function dogPictures() {
  const imageContainer = document.getElementById("dog-image-container");
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
      const URLs = json.message;
      for (const url of URLs) {
        const img = document.createElement("img");
        img.setAttribute("src", url);
        imageContainer.appendChild(img);
      }
    });
}

function dogBreeds() {
  const allBreeds = document.getElementById("dog-breeds");
  const breeds = [];
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
      const breedsJSON = json.message;

      for (const breed in breedsJSON) {
        const li = document.createElement("li");
        li.innerText = breed;
        li.addEventListener("click", e => {
          e.target.style.color = "red";
        });
        breeds.push(li);
        allBreeds.appendChild(li);
      }
    });
}

function dropDown() {
  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", function() {
    breeds = document.querySelectorAll("li");
    for (const breed of breeds) {
      if (breed.innerText[0] != breedDropdown.value) {
        breed.style = "display:none";
      } else {
        breed.style = "display:visible";
      }
    }
  });
}
