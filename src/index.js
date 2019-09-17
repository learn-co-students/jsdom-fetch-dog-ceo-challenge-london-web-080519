console.log('%c HI', 'color: firebrick')

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
            makeImage(json['message'][i]);
           }
        })
});