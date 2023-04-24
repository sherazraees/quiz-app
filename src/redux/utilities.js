// const url = 'https://dummyjson.com/';

// const fetchResponse = async param => {
//   let data = await fetch(`${url}${param}`);
//   let request = await data.json();
//   return request;
// };

// let url = 'https://mocki.io/v1/790b7f19-3174-4a45-aa86-d16908b9dbbfp';
// let url = 'http://localhost:4000/users/authenticate';
export const fetchResponse = async (url, param) => {
  try {
    let data = await fetch(`${url}`, param);
    let request = await data.json();
    console.log(request);
    return request;
  } catch (err) {
    console.log(err);
  }
};
