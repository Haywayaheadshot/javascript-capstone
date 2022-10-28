const getLike = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH7R1NNqzZ0S67pGVqTQ/likes');
  const jsonF = await response.json();
  return jsonF;
};

export default getLike;