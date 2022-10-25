import likeMovie from '../images/icons/like-movie.png';
import btnListener from './btnListener.js';

const createCard = async () => {
  await fetch('https://api.tvmaze.com/shows').then((response) => response.json()).then((completeResponse) => {
    for (let i = 0; i < 20; i += 1) {
      // Create card image
      const cardContainer = document.querySelector('.cards-container');
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card';
      cardDiv.innerHTML = `
           <img src="${completeResponse[i].image.medium}" alt="Card Logo" class="card-image" />
           <section class="card-title">
             <h2 class="font card-header-text">${completeResponse[i].name}</h2>
             <img src="${likeMovie}" class="like-movie" alt="Love Card" />
           </section>
           <div class="like-count font">Like count</div>
           <button class="comments-button font" id="btn-${i}">
             Comments
           </button>
           <button class="reservations-button font">
           Reservations
           </button>
           `;
      cardContainer.appendChild(cardDiv);
    }
  });
  for (let i = 0; i < 20; i += 1) {
    btnListener(i);
    console.log(i)
  }
};
export default createCard;
