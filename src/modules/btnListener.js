import addComment from './add-comments.js';
import change from './change.js';
import here from './comments.js';

export default function btnListener(ar) {
  const commentBtn = document.getElementById(`btn-${ar}`);
  // const body = document.querySelector('body');
  commentBtn.addEventListener('click', async () => {
    const popupContainer = document.getElementById('popup-container');
    if (popupContainer.style.display === '') {
      popupContainer.style.display = 'flex';
    }
    const submitBtn = document.querySelector('.btnAdd');

    submitBtn.id = `${ar}`;
    submitBtn.addEventListener('click', addComment);
    change(ar);
    await here(ar);
  });
}
