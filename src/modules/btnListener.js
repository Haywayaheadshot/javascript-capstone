import change from './change.js';

export default function btnListener(ar) {
  const commentBtn = document.getElementById(`btn-${ar}`);
  commentBtn.addEventListener('click', () => {
    change(ar);
    console.log('asd');
  });
}