const main = document.getElementById('main')
const single = document.getElementById('single')

const fetchData = () => {
  fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
  .then(res => res.json())
  .then(json => json.forEach((post) => {
    let list = document.createElement("ul");
    let peepBody = document.createElement("p");
    let peepInfo = document.createElement("p");
    let button = document.createElement("button");
    let creation = createdAt(post.created_at)
    peepBody.innerHTML = post.body
    peepInfo.innerHTML = `by ${post.user.handle} at ${creation}`
    button.innerHTML = "View peep"
    button.addEventListener('click', () => {displayPeep(post.id)});
    peepBody.appendChild(peepInfo)
    peepBody.appendChild(button);
    list.appendChild(peepBody);
    main.appendChild(list);
  }))
}

fetchData()

function createdAt(timestamp) {
  let dateTime = timestamp.split('T')
  let date = dateTime[0].split('-')
  let time = dateTime[1].split(':')
  return `${time[0]}:${time[1]} on ${date[2]}/${date[1]}/${date[0]}`
}

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

document.getElementById('signup').addEventListener('submit', (event) => {
  event.preventDefault()
  let handle = document.getElementById('handle')
  let password = document.getElementById('password')
  createNewUser(handle.value, password.value)
  handle.value = null
  password.value = null
})

async function createNewUser(handle, password) {
  await fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: {"handle": handle, "password": password}})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

document.getElementById('signin').addEventListener('submit', (event) => {
  event.preventDefault()
  let signinHandle = document.getElementById('signinHandle')
  let signinPassword = document.getElementById('signinPassword')
  createSession(signinHandle.value, signinPassword.value)
  signinHandle.value = null
  signinPassword.value = null
})

async function createSession(handle, password) {
  await fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"session": {"handle":handle, "password":password}})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
