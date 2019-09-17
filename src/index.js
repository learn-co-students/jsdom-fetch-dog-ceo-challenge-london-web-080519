console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const dogImageDiv = document.getElementById("dog-image-container")
    const dogBreedsList = document.getElementById('dog-breeds');
    const filterBreedDropdown = document.querySelector('select#breed-dropdown')
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => {
            const URLS = json.message
            for (const url of URLS) {
                const img = document.createElement('img')
                img.setAttribute('src', url)
                dogImageDiv.appendChild(img)
            }
        })
    
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then (json => {
            const breedsJSON = json.message
            const breeds = []
            for (const breed in breedsJSON) {
                const li = document.createElement('li');
                li.innerText = breed;
                
                li.addEventListener('click', e => {
                    e.target.style.color = 'red';
                })
                breeds.push(li)
                dogBreedsList.appendChild(li);
            }
            
            filterBreedDropdown.addEventListener('change', e => {
                if (e.target.value === 'a') {
                    let abreeds = breeds.filter(breed => breed.innerText[0] === 'a')
                    dogBreedsList.innerHTML = ''
                    for (const breed of abreeds) {
                        dogBreedsList.appendChild(breed)
                    }
                } else if (e.target.value === 'b') {
                    let bbreeds = breeds.filter(breed => breed.innerText[0] === 'b')
                    dogBreedsList.innerHTML = ''
                    for (const breed of bbreeds) {
                        dogBreedsList.appendChild(breed)
                    }
                } else if (e.target.value === 'c') {
                    let cbreeds = breeds.filter(breed => breed.innerText[0] === 'c')
                    dogBreedsList.innerHTML = ''
                    for (const breed of cbreeds) {
                        dogBreedsList.appendChild(breed)
                    }
                } else {
                    let dbreeds = breeds.filter(breed => breed.innerText[0] === 'd')
                    dogBreedsList.innerHTML = ''
                    for (const breed of dbreeds) {
                        dogBreedsList.appendChild(breed)
                    }
                }
            })

        })

        



})