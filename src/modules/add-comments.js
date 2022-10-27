import here from './comments.js';

const addComment = async () => {
  const nameValue = document.getElementById('nameComment').value;
  const commentValue = document.getElementById('descriptionComment').value;
  const idBtn = parseInt(document.querySelector('.btnAdd').id, 10);
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH7R1NNqzZ0S67pGVqTQ/comments?item_id=${idBtn}`, {
    method: 'POST',
    body: JSON.stringify({ item_id: idBtn, username: nameValue, comment: commentValue }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  here(idBtn);
};

export default addComment;