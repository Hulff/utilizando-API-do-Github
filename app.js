

const divLogin = document.querySelector('.div_login')
const divCracha = document.querySelector('.div_cracha')


// usando a API

function identificarUser () {
  
const usuario = user_login.value

const url = `https://api.github.com/users/${usuario}`

  fetch(url)
.then(resposta => resposta.json())
.then(data => {
  if (data.message == "Not Found") {
    console.error("Usuario Invalido ou Usuario em Branco")
  } else {configurarUsuario()}
})
}

function configurarUsuario() {

const usuario = user_login.value

const url = `https://api.github.com/users/${usuario}`
const urlGithub = `https://github.com/${usuario}`

linkGithub.href = urlGithub

fetch(url)
.then(resposta => resposta.json())
.then(data => {
  gitUser.textContent = data.login 
  imgUser.src = data.avatar_url
  bioGithub.textContent = data.bio
})

console.log("usuario preenchido")

divLogin.style.display = 'none'
divCracha.style.display = 'initial'

}