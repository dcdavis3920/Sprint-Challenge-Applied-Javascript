// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // console.log("topics", response.data.topics);

    response.data.topics.forEach(item => {
      // console.log(item);
    });
  })

  .catch(error => {
    console.log("data not returned", error.message);
  });
//   function DogCard(imgUrl) {
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
