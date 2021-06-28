const { default: axios } = require('axios');

const container = document.querySelector('#main');

const displayPeeps = async (url) => {
  try {
    const response = await axios.get(url);
    response.data.forEach((post) => {
      let text = [`<ul>`]
        `<li id="${post.id}"><a href="file:///Users/kerrimcmahon/Documents/full-time/js-chitter-challenge/index.html#${post.id}">${post.body}</a></li>`
      text.push(`</ul>`)
      container.innerHTML = text.join('')
    });
  } catch (error) {
    console.log(error);
  }
};
