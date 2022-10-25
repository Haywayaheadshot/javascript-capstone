export default async function change(ar) {
  await fetch('https://api.tvmaze.com/shows').then((response) => response.json()).then((completeResponse) => {
    const imgSrc = document.getElementById('imgSerie');
    imgSrc.src = completeResponse[ar].image.medium;

    const titleSerie = document.getElementById('titleSerie');
    titleSerie.innerHTML = `Title: ${completeResponse[ar].name}`;

    const languageSerie = document.getElementById('languageSerie');
    languageSerie.innerHTML = `Language: ${completeResponse[ar].language}`;

    const siteSerie = document.getElementById('siteSerie');
    siteSerie.innerHTML = `WebSite: ${completeResponse[ar].officialSite}`;

    const summarySerie = document.getElementById('summarySerie');
    summarySerie.innerHTML = completeResponse[ar].summary;
  });
}