const getLikes = () => {
    let result;
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/g56oldW5hMhMsaYERIvY/likes', {
    method: 'GET',
    // body: JSON.stringify({ "item_id": "item1"}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

  }).then((response) => response.json()).then((getLikesResponse) => {
    console.log(getLikesResponse[0].likes);
    // result = ;
    //   return 500;
    createCard(getLikesResponse[1].likes)
  });
//   return result;
};

export default getLikes;