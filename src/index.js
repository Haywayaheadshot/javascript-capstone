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
const commentBtn = document.querySelectorAll('.comments-button');
commentBtn.forEach((btn) => {
  btn.addEventListener('click', (arg) => {
    pop(arg);
  });
});
// document.addEventListener('click', (event) => {
//     if (event.target.className.includes('comments-button')) {
//         pop();
//         console.log(commentBtn.length);
//         }
// });
// g56oldW5hMhMsaYERIvY
// const data = { id: 'game' };
// const add = async () => {
//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// };

// add();