// Network Requests
// Everytime a pagewould be updated it would be a request to the server which would load the whole page
// In a case where the whole page stays the same, but a display changes its visualization filter, it would have to load the entire page another http all again
// To solve this, js is used to update only the data requests and update the page (AJAX technique)

// THE FETCH API

// My first fetch
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data=> console.log(data))

// Now get the image to display by DOM
fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data=>{
        console.log(data)
        document.getElementById("image-container").innerHTML = `<img src="${data.message}" />`
    })

// Fetch Bored API
fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data=>{
        console.log(data)
        document.getElementById("text-activity").textContent = data.activity
    })

//first fetch from https://scrimba.com/frontend-path-c0j/~0m2

// so fetch function returns a promise from the request endpoint. 
// you get it and turn on the format youll work with 
// .json() .text() .blob()-(blob for binary large objects (img vid etc)))


