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

function lambda(headline, image, name) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const span = document.createElement('span');

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imageContainer.classList.add("img-container");

    headline.appendchild('card');
    imageContainer.appendChild('author')
    image.appenchild('img-container')

    let keys = object.keys(lambda);
    let vals = object.values(lambda);
    let entries = object.entries(lambda);


    axios
        .get(https: lambda - times - backend.herokuapp.com / articles)
        .then(response => {
                console.log(response)
                response.articles.message.forEach(item =>

                });
            return newCard;
        })
.catch(error => {
    console.log("data not returned")
});