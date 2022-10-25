import createCard from './CreateCard.js';

const popupContainer = document.querySelector('.popup-container');
const bodyId = document.querySelector('#body');

const pop = async (arg) => {
  await fetch('https://api.tvmaze.com/shows').then((response) => response.json()).then((completeResponse) => {
    
      const myPop = document.createElement('section');
      myPop.id = 'popUp-section';
      myPop.className = 'popUp-section';
      popupContainer.appendChild(myPop);
      bodyId.insertAdjacentElement('afterbegin', myPop);

      const containerPopUp = document.createElement('div');
      containerPopUp.className = 'containerPopUp';
      myPop.appendChild(containerPopUp);

      const imgSerie = document.createElement('img');
      imgSerie.src = completeResponse[arg].image.medium;
      containerPopUp.appendChild(imgSerie);

      const titleSerie = document.createElement('h2');
      titleSerie.innerHTML = completeResponse[arg].name;

      containerPopUp.appendChild(titleSerie);

      const languageSerie = document.createElement('h2');
      languageSerie.innerHTML = completeResponse[arg].language;
      containerPopUp.appendChild(languageSerie);

      const siteSerie = document.createElement('h2');
      siteSerie.innerHTML = completeResponse[arg].officialSite;
      containerPopUp.appendChild(siteSerie);

      const summarySerie = document.createElement('h3');
      summarySerie.innerHTML = completeResponse[arg].summary;
      containerPopUp.appendChild(summarySerie);
  });
};

export default pop;
