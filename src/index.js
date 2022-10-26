import './style.css';
import pageLogo from './images/icons/page-logo.png';
import createCard from './modules/CreateCard.js';
import pop from './modules/popup.js';

// create new image?
const imageDiv = document.querySelector('.logo-div');
const logo = new Image();
logo.src = pageLogo;
logo.alt = 'Movie Logo';
logo.className = 'Logo';
imageDiv.appendChild(logo);
createCard();
// pop();
window.addEventListener('DOMContentLoaded', pop);

// document.addEventListener('click', (event) => {
//     if (event.target.className.includes('comments-button')) {
//         pop();
//         console.log(commentBtn.length);
//         }
// });
// g56oldW5hMhMsaYERIvY

// ADD Likes
// const add = async () => {
//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g56oldW5hMhMsaYERIvY/likes', {
//     method: 'POST',
//     body: JSON.stringify({ item_id: "item1", }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
// };

// add();