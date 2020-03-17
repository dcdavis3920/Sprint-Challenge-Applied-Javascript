// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function lambda(headline) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const span = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  headline.appendchild("card");
  imageContainer.appendChild("author");
  image.appenchild("img-container");
}

//console.log("entries", entries);

// let keys = Object.keys();
// let vals = Object.values();
// let entries = Object.entries();

// function Card(imgUrl) {
//     const
//       newCard = document.createElement("div"),
//       newImage = document.createElement("img"),
//       breed = document.createElement("h3");

//     breed.textContent = "Breed: Mastiff";
//     newImage.src = imgUrl;
//     newImage.classList.add("dog-image");
//     newCard.classList.add("dog-card");
//     newCard.appendChild(newImage);
//     newCard.appendChild(breed);

//     // add this functionality later
//     newCard.addEventListener("click", () => {
//       newCard.classList.toggle("selected");
//     });

//     return newCard;
//   }

//const entryPoint = document.querySelector(".entry");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let keys = Object.keys(response.data.articles);
    let vals = Object.values(response.data.articles);
    let entries = Object.entries(response.data.articles);

    console.log("articles", response.data.articles);
    //console.log("articles, object.keys", keys);
    console.log("articles, object.values", vals);
    vals.forEach(arrays => {
      arrays.forEach(object => {
        console.log("nested forEach, object", object);
      });
      console.log("forEach, arrays", arrays);
    });
    //console.log("articles, object.entries", entries);
  })
  .catch(error => {
    console.log("data not returned");
  });
