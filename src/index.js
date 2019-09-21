console.log('%c HI', 'color: firebrick')

// CHALLENGE 1 //

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function makeImage(url) {
    const imgContainer = document.getElementById("dog-image-container");
    let img = document.createElement('img');
    img.setAttribute("src", url)
    imgContainer.appendChild(img);
}

document.addEventListener("DOMContentLoaded", function() {
    fetch(imgUrl)
        .then(function(response) {
            return response.json();
          // return response.blob();
        })
        .then(json => {
           for (let i=0; i<json['message'].length; i++ ) {
            //return json['message']
            //console.log(json['message'][i])
            makeImage(json['message'][i])
           }
        })
});

// CHALLENGE 2 //
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function makeList(url) {
    const dogBreeds = document.getElementById("dog-breeds");
    let liList = document.createElement('li');
    liList.innerText = url;
    dogBreeds.appendChild(liList);
}

document.addEventListener("DOMContentLoaded", function() {
    fetch(breedUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(obj) {
            for (let prop in obj['message']) {
                makeList(prop);
                selectLis();
              } 
        })

    // CHALLENGE 4 //

        const choose = document.querySelector("select#breed-dropdown")
        choose.addEventListener("change", filterDropdown)

        function filterDropdown() {
            const lis = document.querySelectorAll('li');
            const dogs = document.querySelector('ul#dog-breeds')
            // console.log(event.target.value)
            let startLetter = `${event.target.value}`
            
            for (let i=0; i<dogs.children.length; i++) {
                if (!dogs.children[i].innerText.match("^" + startLetter)) {
                    dogs.children[i].style.visibility = "hidden"
                    //console.log(dogs.children[i].innerText)
                }
            }
        }

});

 
// CHALLENGE 3 //
    function liClicked(event) {
        
        if (event.target.style.color == "red") {
            event.target.style.color = "black"
        } else { 
            event.target.style.color = "red"; 
        }
    }


    function selectLis() {
        const lis = document.querySelectorAll('li');

        for (let i=0; i<lis.length; i++) { 
            lis[i].addEventListener('click', liClicked)
        }
    }   