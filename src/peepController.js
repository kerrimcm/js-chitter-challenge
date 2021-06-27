const { default: axios } = require('axios');

const peepsUrl = 'https://chitter-backend-api-v2.herokuapp.com/peeps';
// const peepUrl = `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`;

const displayPeeps = async (url) => {
  try {
    const response = await axios.get(url);
    response.data.forEach((post) => {
      console.log({
        post: post.body,
        user: post.user.handle,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

displayPeeps(peepsUrl);

// const displayPeep = async (url) => {
//     try {
//       const response = await axios.get(url);
//       response.data.forEach((post) => {
//         console.log({
//           post: post.body,
//           user: post.user.handle,
//         });
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   displayPeep(peepUrl);