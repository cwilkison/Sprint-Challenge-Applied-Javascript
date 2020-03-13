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

axios.get('https://lambda-times-backend.herokuapp.com/articles');

function createCard(info){
    const cardMain = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardContainer = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardSpan = document.createElement('span');

    cardMain.appendChild(cardHeadline);
    cardMain.appendChild(cardAuthor);
    cardAuthor.appendChild(cardContainer);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardSpan);

    cardMain.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardContainer.classList.add('img-container');

    cardHeadline.textContent =`${info.headline}`;
    cardImage.src = `${info.authorPhoto}`;
    cardSpan.textContent = `By ${info.authorName}`;

    return cardMain

}


const cards = document.querySelector('cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
response.data.articles.forEach(javascript => {
    javascript.forEach(items => {
        cards.append(createCard(items));
    })
    })
  })
    .catch(error => {
      console.log("error", error);
    });

/*
const newTab = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    response.data.topics.forEach(item => {
        newTab.appendChild(Tab(item));
});
})
    .catch(error => {
        console.log("error", error)
    })

    */