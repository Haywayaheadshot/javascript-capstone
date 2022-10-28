import './style.css';
import pageLogo from './images/icons/page-logo.png';
import createCard from './modules/CreateCard.js';
import pop from './modules/popup.js';
import getLike from './modules/likeGet.js';

// create new image?
const imageDiv = document.querySelector('.logo-div');
const logo = new Image();
logo.src = pageLogo;
logo.alt = 'Movie Logo';
logo.className = 'Logo';
imageDiv.appendChild(logo);

createCard();

window.addEventListener('DOMContentLoaded', pop);

getLike();