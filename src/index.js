import './style.css';

import pageLogo from './images/icons/page-logo.png';
import likeMovie from './images/icons/like-movie.png';

// create new image?
const imageDiv = document.querySelector('.logo-div');
const logo = new Image();
logo.src = pageLogo;
logo.alt = 'Movie Logo';
logo.className = 'Logo';
imageDiv.appendChild(logo);

// Create card image
const cardContainer = document.querySelector('.cards-container');
const cardDiv = document.createElement('div');
cardDiv.className = "card";
cardDiv.innerHTML = 
`
<img src="${pageLogo}" alt="Card Logo" class="card-image" />
<section class="card-title">
  <h2 class="font card-header-text">Card One</h2>
  <img src="${likeMovie}" class="like-movie" alt="Love Card" />
</section>
<div class="like-count font">Like count</div>
<button class="comments-button font">
  Comments
</button>
<button class="reservations-button font">
Reservations
</button>
`

cardContainer.appendChild(cardDiv);