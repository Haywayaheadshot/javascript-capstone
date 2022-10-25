import change from './change.js';

export default function btnListener(ar) {
  const commentBtn = document.getElementById(`btn-${ar}`);
  // const body = document.querySelector('body');
  commentBtn.addEventListener('click', () => {
    const popupContainer = document.getElementById('popup-container');
    if (popupContainer.style.display === '') {
      popupContainer.style.display = 'flex';
    }
    change(ar);
  });
}
