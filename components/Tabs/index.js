// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let keys = object.keys(lambda);
let vals = object.values(lambda);
let entries = object.entries(lambda);


axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
            console.log(response)
            response.articles.message.forEach(item =>


            });
        return;
    }
    .catch(error => {
        console.log("data not returned")
    });