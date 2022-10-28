import commentsCounter from './commentsCounter.js';

const here = async (ar) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH7R1NNqzZ0S67pGVqTQ/comments?item_id=${ar}`);
  const commentsBox = document.getElementById('comments');
  const commentTitle = document.getElementById('commentTitle');
  if (response.status === 400) {
    commentsBox.innerHTML = 'No comments yet';
    commentTitle.innerHTML = 'Comments (0)';
  } else {
    const json = await response.json();
    const commentContainer = document.querySelector('#comments');
    if (json.length === undefined) {
      commentTitle.innerHTML = 'Comments (0)';
    } else {
      commentTitle.innerHTML = `Comments (${json.length})`;
      commentsCounter(commentTitle, json.length);
    }
    commentContainer.innerHTML = '';
    const nameValue = document.getElementById('nameComment');
    const commentValue = document.getElementById('descriptionComment');
    nameValue.value = '';
    commentValue.value = '';
    json.forEach((tv) => {
      const row = document.createElement('tr');
      row.innerHTML = `<h3>${tv.creation_date} ${tv.username}:  ${tv.comment}</h3>`;
      commentContainer.appendChild(row);
    });
  }
};
export default here;