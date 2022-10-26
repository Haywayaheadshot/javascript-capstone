const popupContainer = document.querySelector('.popup-container');
const body = document.querySelector('body');

const pop = async () => {
  const myPop = document.createElement('section');
  myPop.id = 'popUp-section';
  myPop.className = 'popUp-section';
  popupContainer.appendChild(myPop);

  const containerPopUp = document.createElement('div');
  containerPopUp.className = 'containerPopUp';
  myPop.appendChild(containerPopUp);

  const imgSerie = document.createElement('img');
  imgSerie.id = 'imgSerie';
  imgSerie.className = 'image-popup';
  // imgSerie.src = completeResponse[i].image.medium;
  containerPopUp.appendChild(imgSerie);

  const x = document.createElement('h2');
  x.innerHTML = 'X';
  x.className = 'close-popup';
  containerPopUp.appendChild(x);
  x.addEventListener('click', () => {
    popupContainer.style.display = '';
    body.style.overflow = 'none';
  });

  const description = document.createElement('div');
  description.className = 'description';
  containerPopUp.appendChild(description);

  const titleSerie = document.createElement('h2');
  titleSerie.id = 'titleSerie';
  // titleSerie.innerHTML = completeResponse[i].name;
  description.appendChild(titleSerie);

  const languageSerie = document.createElement('h2');
  languageSerie.id = 'languageSerie';
  // languageSerie.innerHTML = completeResponse[i].language;
  description.appendChild(languageSerie);

  const siteSerie = document.createElement('h2');
  siteSerie.id = 'siteSerie';
  // siteSerie.innerHTML = completeResponse[i].officialSite;
  containerPopUp.appendChild(siteSerie);

  const summarySerie = document.createElement('h3');
  summarySerie.id = 'summarySerie';
  // summarySerie.innerHTML = completeResponse[i].summary;
  containerPopUp.appendChild(summarySerie);

  const commentContainer = document.createElement('div');
  commentContainer.id = 'commentContainer';
  containerPopUp.appendChild(commentContainer);

  const commentTitle = document.createElement('h2');
  commentTitle.id = 'commentTitle';
  commentTitle.innerHTML = 'Comments (X)';
  commentContainer.appendChild(commentTitle);

  const comments = document.createElement('div');
  comments.id = 'comments';
  commentContainer.appendChild(comments);

  const addCommentDiv = document.createElement('div');
  addCommentDiv.id = 'addCommentDiv';
  containerPopUp.appendChild(addCommentDiv);

  const titleComment = document.createElement('h2');
  titleComment.innerHTML = 'Add a comment';
  addCommentDiv.appendChild(titleComment);

  const divCommentFields = document.createElement('div');
  divCommentFields.className = 'divCommentFields';
  addCommentDiv.appendChild(divCommentFields);

  const nameComment = document.createElement('input');
  nameComment.id = 'nameComment';
  nameComment.type = 'text';
  nameComment.placeholder = 'Your name';
  nameComment.className = 'inputComment';
  divCommentFields.appendChild(nameComment);

  const descriptionComment = document.createElement('textarea');
  descriptionComment.id = 'descriptionComment';
  descriptionComment.className = 'inputComment';
  descriptionComment.placeholder = 'Your insights';
  divCommentFields.appendChild(descriptionComment);

  const btnAddComment = document.createElement('input');
  btnAddComment.id = 'btnAddComment';
  btnAddComment.className = 'btnAdd';
  btnAddComment.type = 'submit';
  btnAddComment.innerHTML = 'Comment';
  divCommentFields.appendChild(btnAddComment);
};
export default pop;
