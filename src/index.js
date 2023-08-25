// console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", ()=> {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const imageContainer =  document.querySelector("#dog-image-container")
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogBreed = document.querySelector("#dog-breeds") 
    const filterBreed = document.querySelector("#breed-dropdown")
    
    
    
// challenge 1
    fetch(imgUrl)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
        data.message.forEach(imgUrl=> {
            const img = document.createElement("img")
            img.src = imgUrl
            imageContainer.appendChild(img)
        })
    })
    
    
// challenge 2 
    fetch(breedUrl)
    .then((res)=> res.json())
    .then((data)=> {
        const breeds = Object.keys(data.message)    
        breeds.forEach(breed => {
           const li = document.createElement("li")
           li.className = "breed"
           li.textContent = breed;
           dogBreed.appendChild(li)
        })
    })



// Challenge 3
dogBreed.addEventListener("click", (e)=> {
    if(e.target.tagName === 'LI'){
        e.target.style.color = "green"
    }
})


// challenge 4
filterBreed.addEventListener("change", ()=> {
    const letterSelected = filterBreed.value;
    const breedList = dogBreed.querySelectorAll("li")
    for(let i=0; i < breedList.length; i++){
        const breedListElement = breedList[i];
        if(breedListElement.textContent.startsWith(letterSelected)){
            breedListElement.style.display = "block"
        } else {
            breedListElement.style.display = "none"
        }
    }

})



})


