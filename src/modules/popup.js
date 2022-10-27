const popupContainer = document.querySelector('.popup-container');
const body = document.querySelector('body');

const pop = async () => {
  // Create the section to append all the items there
  const myPop = document.createElement('section');
  myPop.id = 'popUp-section';
  myPop.className = 'popUp-section';
  popupContainer.appendChild(myPop);

  // Create div to append the popup items
  const containerPopUp = document.createElement('div');
  containerPopUp.className = 'containerPopUp';
  myPop.appendChild(containerPopUp);

  // Create the image for each show, we set the image in the change.js file
  const imgSerie = document.createElement('img');
  imgSerie.id = 'imgSerie';
  imgSerie.className = 'image-popup';
  containerPopUp.appendChild(imgSerie);

  // Create h2 for the X button in the popup
  const x = document.createElement('h2');
  x.innerHTML = 'X';
  x.className = 'close-popup';
  containerPopUp.appendChild(x);
  x.addEventListener('click', () => {
    popupContainer.style.display = '';
    body.style.overflow = 'none';
  });

  const allTextContainer = document.createElement('section');
  allTextContainer.className = 'main-popupContainer';

  containerPopUp.appendChild(allTextContainer);
  // Create div to save the show description
  const description = document.createElement('div');
  description.className = 'description';
  allTextContainer.appendChild(description);

  // Create h2 to append the title
  const titleSerie = document.createElement('h2');
  titleSerie.id = 'titleSerie';
  // titleSerie.innerHTML = completeResponse[i].name;
  description.appendChild(titleSerie);

  // Create h2 to append the language of the show
  const languageSerie = document.createElement('h2');
  languageSerie.id = 'languageSerie';
  // languageSerie.innerHTML = completeResponse[i].language;
  description.appendChild(languageSerie);

  // Create h2 to show the website of the show
  const siteSerie = document.createElement('h2');
  siteSerie.id = 'siteSerie';
  // siteSerie.innerHTML = completeResponse[i].officialSite;
  allTextContainer.appendChild(siteSerie);

  // Create h3 to append the summary of the show
  const summarySerie = document.createElement('h3');
  summarySerie.id = 'summarySerie';
  // summarySerie.innerHTML = completeResponse[i].summary;
  allTextContainer.appendChild(summarySerie);

  // Create the container to append the comments
  const commentContainer = document.createElement('div');
  commentContainer.id = 'commentContainer';
  allTextContainer.appendChild(commentContainer);

  // Create h2 to append the title

  const commentTitle = document.createElement('h2');
  commentTitle.id = 'commentTitle';
  commentTitle.innerHTML = 'Comments X';
  commentContainer.appendChild(commentTitle);

  // Create div to append the comments
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
