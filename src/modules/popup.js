const popupContainer = document.querySelector('.popup-container');

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
};

export default pop;
