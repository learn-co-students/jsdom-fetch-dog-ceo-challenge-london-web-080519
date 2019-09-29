console.log('%c HI', 'color: firebrick')


let dogsUrl = "https://dog.ceo/api/breeds/image/random/4"
let breedsURL = "https://dog.ceo/api/breeds/list/all"

// ------ challenge 1 ----- //


document.addEventListener("DOMContentLoaded", function() {
    return fetch(dogsUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        let dogs = json['message'];
        dogs.forEach(dog => {
            renderDogs(dog)
        })
      })
  })
  
function renderDogs(dogs) {
   let newDog = document.createElement('img')
   let dogsContainer = document.querySelector('#dog-image-container')
   newDog.src = dogs
   newDog.width='400'
   dogsContainer.appendChild(newDog)
}


// ------ challenge 2 ----- //
// n page load, fetch all the dog breeds using the url above
// add the breeds to the page in an <ul>
document.addEventListener("DOMContentLoaded", function() {
    return fetch(breedsURL)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            let breeds = json['message'];
            for (let keys in breeds) {
                renderBreeds(keys);
                changeColour(keys)
              } 
        })
  })

function renderBreeds(breeds, letters='all'){
    firstChar = breeds.charAt(1)

    if (letters='all'){
        let dogBreedsContainer = document.querySelector('#dog-breeds')
        let newDogLi = document.createElement('li')
        newDogLi.innerText = breeds
        dogBreedsContainer.appendChild(newDogLi)
    }
    else if (letters='b'){
        console.log('you chose b')
    }
}

//------ challenge 3 ---------- //
// the font color of a particular <li> changes on click

function changeColour(breeds){
    let breedsName = document.querySelectorAll('li')
    for (let i=0; i<breedsName.length; i++) {
        breedsName[i].addEventListener('click', toggleColour)
    }
}

function toggleColour(event){
    // let currentColor = event.target.style.color 
    // currentColor == "black" ? currentColor = "purple" : currentColor = "black"
    if (event.target.style.color === "black") {
        event.target.style.color = "purple"
    }
    else {
        event.target.style.color = "black"
    }
}


// --------- challenge 4 ----------- //
// the user can filter breeds that start 
// with a particular letter using a dropdown.
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.breeds-form')

    dropdown.addEventListener('submit', function() {
        console.log(event.target.value)
        let chosenLetter = event.target.value
        return fetch(breedsURL)
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                let breeds = json['message'];
                for (let keys in breeds) {
                    renderBreeds(keys, chosenLetter)
                  } 
            })
      })
})