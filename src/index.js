console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.getElementById("dog-image-container");

document.addEventListener("DOMContentLoaded", function() {
    fetch(imgUrl)
        .then(function(response) {
            return response.json();
          // return response.blob();
        })
        .then(json => {
           // for (let i=0; i<json['message'].length; i++ ) {}
            console.log(json['message'])
        })
});