import likeMovie from '../images/icons/like-movie.png';
import btnListener from './btnListener.js';
import n from './TotalMovieCounter.js';
import getLikes from './GetLikes.js';
// import likesCounter from './LikesCounter.js'

const totalShowsNumber = document.querySelector('.shows-total-number');

const createCard = async (arg) => {
  totalShowsNumber.innerText = parseInt((n - 1), 10);

  await fetch('https://api.tvmaze.com/shows').then((response) => response.json()).then((completeResponse) => {
    for (let i = 1; i < n; i += 1) {
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

      // add event listener to like movie image
      likeMovieImage.addEventListener(('click'), async () => {
        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g56oldW5hMhMsaYERIvY/likes', {
          method: 'POST',
          body: JSON.stringify({ item_id: completeResponse[i].name }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((postLikeResponse) => console.log(postLikeResponse.status));

        if (parseInt((countLikes.innerText), 10) >= 1) {
          countLikes.innerText = `${(parseInt((countLikes.innerText), 10) + 1)} Likes`;
        } else {
          countLikes.innerText = `${(parseInt((countLikes.innerText), 10) + 1)} Like`;
        }
        getLikes();
        // likesCounter();
      });

      // Create like count div and append to card container
      const countLikes = document.createElement('section');
      countLikes.className = 'like-count';
      countLikes.classList.add = 'font';
      countLikes.innerText = arg;
      cardTitle.appendChild(countLikes);

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
  });
  for (let i = 1; i < n; i += 1) {
    btnListener(i);
  }
};
export default createCard;
