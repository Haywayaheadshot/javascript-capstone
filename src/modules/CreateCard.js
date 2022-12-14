import likeMovie from '../images/icons/like-movie.png';
import btnListener from './btnListener.js';
import getLike from './likeGet.js';
import countingCards from './TotalMovieCounter.js';
// import n from './TotalMovieCounter.js';

const totalShowsNumber = document.querySelector('.shows-total-number');
const createCard = async () => {
  await fetch('https://api.tvmaze.com/shows').then((response) => response.json()).then((completeResponse) => {
    const n = completeResponse.slice(0, 20);
    for (let i = 0; i < n.length; i += 1) {
      // Create card container
      const cardContainer = document.querySelector('.cards-container');
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card';
      cardDiv.innerHTML = `
           <img src="${completeResponse[i].image.medium}" alt="Card Logo" class="card-image" />
           `;
      cardContainer.appendChild(cardDiv);

      // Create card title and append to container
      const cardTitle = document.createElement('section');
      cardTitle.className = 'card-title';
      cardTitle.innerHTML = `
      <h2 class="font card-header-text">${completeResponse[i].name}</h2>
      `;
      cardDiv.appendChild(cardTitle);

      // Create like show image and append to card container
      const likeMovieImage = new Image();
      likeMovieImage.src = likeMovie;
      likeMovieImage.alt = 'Love Card';
      likeMovieImage.className = 'like-movie';
      cardTitle.appendChild(likeMovieImage);

      // Create like count div and append to card container
      const countLikes = document.createElement('section');
      countLikes.className = 'like-count';
      countLikes.classList.add = 'font';
      cardTitle.appendChild(countLikes);
      const getLikeFromAPI = async () => {
        const data = await getLike();
        await data.forEach((like) => {
          if (like.item_id === completeResponse[i].name) {
            if (like.likes <= 1) {
              countLikes.innerHTML = `${like.likes} Like`;
            } else {
              countLikes.innerHTML = `${like.likes} Likes`;
            }
          }
        });
      };
      getLikeFromAPI();
      countLikes.innerText = '0 Like';
      likeMovieImage.addEventListener('click', async () => {
        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH7R1NNqzZ0S67pGVqTQ/likes', {
          method: 'POST',
          body: JSON.stringify({ item_id: completeResponse[i].name }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        getLikeFromAPI();
      });

      // Create comment button section and append to card container
      const footerButtons = document.createElement('section');
      footerButtons.className = 'footer-buttons';
      footerButtons.innerHTML = `
          <button class="comments-button font" id="btn-${i}">
            Comments
          </button>
          <button class="reservations-button font">
          Reservations
          </button>
     `;
      cardTitle.appendChild(footerButtons);
    }
    const cards = document.querySelectorAll('.card');
    countingCards(totalShowsNumber, cards.length);
  });
  for (let i = 0; i < parseInt(totalShowsNumber.innerText, 10); i += 1) {
    btnListener(i);
  }
};
export default createCard;
