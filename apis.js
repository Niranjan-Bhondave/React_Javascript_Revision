// // const img = document.querySelector('img')
// // fetch('https://api.giphy.com/v1/gifs/translate?api_key=&s=cats')
// // .then((response)=>{return response.json()}).then((response)=>{img.src = response.data.images.original.url });

// var clicks = 0;

    // const imageArea = document.querySelector('img');
    // const imageContainer = document.querySelector("#imageContainer");

    // const searchArea = document.createElement("div");
    // imageContainer.prepend(searchArea);

    // const searchBox = document.createElement("input");
    // searchArea.append(searchBox);

    // const searchButton = document.createElement("button");
    // searchArea.append(searchButton);
    // searchButton.innerText = "Search";
    // searchButton.style.marginLeft = "10px";

    // function render(){
    //     searchBox.value = '';
    // }

    // function initiateRequestAndRenderImage(requestText){
    //     const requestUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=&s=' + requestText;
    //     fetch(requestUrl).then((response) => {return response.json()}).then((response)=>{imageArea.src = response.data.images.original.url});
    // }

    // searchButton.addEventListener("click",()=>{
    //     clicks++;
    //     console.log(`Click number ${clicks} registered`);
        
    //     const requestText = searchBox.value;
    //     initiateRequestAndRenderImage(requestText);
    //     render();
    // })

//fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then((response)=>{return response.json()}).then((response)=>{console.log(response)});
// const city =
//   user &&
//   user.address &&
//   user.address.city;

// const newCity = user ?.address?.city;

// var users = [
//   { name: "John" },
//   { name: "Mike" }
// ];

//users = undefined

//console.log(users?.[0]?.name);
// var user = {
//   greet() {
//     return "Hello!";
//   }
// };

// user = {};

// console.log(user?.greet?.());
// const response = {
//   data: {
//     user: {
//       address: {
//         country: "India"
//       }
//     }
//   }
// };

// console.log(response ?.data ?.user ?.address ?.country );

// var user = {name : "Niru"};
// console.log(user ?. name ?? "Guest");

const user = {
  profile: {}
};

console.log(user ?.profile ?.city ?? "Not available");
