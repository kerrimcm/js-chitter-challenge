const main = document.getElementById('main')
const single = document.getElementById('single')

const fetchData = () => {
  fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
  .then(res => res.json())
  .then(json => json.forEach((post) => {
    let list = document.createElement("ul");
    let body = document.createElement("p");
    let button = document.createElement("button");
    body.innerHTML = `${post.user.handle}: ${post.body}`
    button.innerHTML = "View peep"
    button.addEventListener('click', () => {displayPeep(post.id)});
    body.appendChild(button);
    list.appendChild(body);
    main.appendChild(list);
  }))
}

fetchData()

const displayPeep = (id) => {
  fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`)
  .then(res => res.json())
  .then(post => {
    main.style.display = "none"
    single.style.display = "block"
    single.innerHTML = ""
    let body = document.createElement("p")
    let button = document.createElement("button");
    body.innerHTML = `${post.body}`
    button.innerHTML = "Back to Peeps"
    button.addEventListener('click', () => {main.style.display = "block", single.style.display = "none"});
    body.appendChild(button);
    single.appendChild(body)
  })
}

const handleInput = document.getElementById('handle').value;
const passwordInput = document.getElementById('password').value;

let form = document.getElementById("signup")
let button = document.getElementById("button")
button.addEventListener('click', () => {createUser()})

form.addEventListener('submit', () => {async () => {
  const formData = new FormData(form).entries()
  const response = await fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"user": {"handle": "peepeepeepee", "password": "poopoopoopoo"}})
})
const result = await response.json()
console.log(result);
}
})



