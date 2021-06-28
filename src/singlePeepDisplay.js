const axios = require('axios');

const peepUrl = "https://chitter-backend-api-v2.herokuapp.com/peeps/1";

const displayPeep = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
};

  displayPeep(peepUrl);