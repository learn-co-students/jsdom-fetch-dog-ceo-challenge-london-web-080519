// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogImgContainer = document.getElementById("dog-image-container");
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedUlTag = document.getElementById("dog-breeds");
const breedFilter = document.getElementById("breed-dropdown");

document.addEventListener("DOMContentLoaded", event => {
  function showImg(json) {
    for (const element of json.message) {
      const newImg = new Image();
      newImg.src = element;
      dogImgContainer.appendChild(newImg);
    }
  }

  function showBreed(json) {
    for (const key in json.message) {
      const newLi = document.createElement("li");
      newLi.innerHTML = key;
      breedUlTag.appendChild(newLi);
      newLi.addEventListener("click", event => {
        newLi.style.color = "blue";
      });
    }
    filterBreed();
  }

  function fetchDogsImg() {
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => showImg(json));
  }

  function fetchDogsBreed() {
    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => showBreed(json));
  }

  function clearAllBreeds() {
    while (breedUlTag.firstChild) {
      breedUlTag.removeChild(breedUlTag.firstChild);
    }
  }

  function filterBreed() {
    const breedList = document.querySelectorAll("li");
    const breedListArray = Array.from(breedList);
    breedFilter.addEventListener("change", event => {
      clearAllBreeds();
      const filteredBreedArray = breedListArray.filter(
        breed => breed.textContent.charAt(0) === breedFilter.value
      );

      for (const li of filteredBreedArray) {
        breedUlTag.appendChild(li);
      }
    });
  }

  fetchDogsImg();
  fetchDogsBreed();
});
