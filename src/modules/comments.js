const here = async (ar) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g56oldW5hMhMsaYERIvY/comments?item_id=${ar}`);
  const json = await response.json();
  console.log(json);
  const commentContainer = document.querySelector('#comments');
  commentContainer.innerHTML = '';
  json.forEach((tv) => {
    const row = document.createElement('tr');
  });
};

export default here;