const here = async (ar) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH7R1NNqzZ0S67pGVqTQ/comments?item_id=${ar}`);
  const json = await response.json();
  const commentContainer = document.querySelector('#comments');
  commentContainer.innerHTML = '';
  json.forEach((tv) => {
    const row = document.createElement('tr');
    row.innerHTML = `<h3>${tv.creation_date} ${tv.username}:  ${tv.comment}</h3>`;
    commentContainer.appendChild(row);
  });
};

export default here;