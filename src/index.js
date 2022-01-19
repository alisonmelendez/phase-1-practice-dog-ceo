console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(res => res.json())
        .then(jsonData => addDogImages(jsonData))


    function addDogImages(jsonData) {
        let dogImages = jsonData.message //each image within the message array 
            //console.log(dogImages)

        dogImages.forEach(dogImage => {

            //creates HTML elements 
            let dogImageContainer = document.querySelector('#dog-image-container')
            let actualImage = document.createElement('img')

            //sets each image to have a dog image 
            //this is the image url 
            //console.log(dogImage)

            //sets the src property to our actual dog image 
            actualImage.src = dogImage

            //adds the dog images to the dog image container 
            dogImageContainer.appendChild(actualImage)
                //console.log(dogImageContainer)
        });

    }

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(jsonData => secondFunc(jsonData))

    function secondFunc(jsonData) {
        let list = document.querySelector('#dog-breeds')


        let dogBreeds = jsonData.message

        for (const breed in dogBreeds) {

            //needs to create a new item each time
            let listItems = document.createElement('li')
            listItems.textContent = breed


            //adding a class to all of the dog items with 'dogTypes'
            listItems.classList.add('dogTypes')


            list.appendChild(listItems)

            listItems.addEventListener('click', () => {
                listItems.style.color = 'red'
                listItems.style.fontWeight = 'bold'
            })

        }


    }

})