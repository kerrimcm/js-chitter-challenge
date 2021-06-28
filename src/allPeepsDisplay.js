const fetchData = () => {
  fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
  .then(res => res.json())
  .then(json => json.forEach((post) => {
    let list = document.createElement("ul");
    let body = document.createElement("p");
    body.innerHTML = `${post.user.handle}: ${post.body}`
    list.appendChild(body);
    document.getElementById('main').appendChild(list);
  }))
}

fetchData()