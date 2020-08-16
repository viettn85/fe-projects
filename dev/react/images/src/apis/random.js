var axios = require('axios');
const CAT_URL = 'https://api.thecatapi.com/v1/images/search';
const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
export const getImageLinks = (animal) => {
  var pro = animal === 'cat' ? requestCatLink() : requestDogLink();
  pro.then((data) => {
    console.log('Data', data);
    return new Promise(function (resolve, reject) {
      resolve(data);
    });
  });
};

const requestCatLink = async () => {
  var links = [];
  for (let index = 0; index < 10; index++) {
    const res = await axios.get(CAT_URL);
    links[index] = res.data[0].url;
  }
  return links;
};

const requestDogLink = async () => {
  var links = [];
  for (let index = 0; index < 10; index++) {
    const res = await axios.get(DOG_URL);
    links[index] = res.data[0].message;
  }
  return links;
};
