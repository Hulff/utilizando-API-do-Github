

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

atualizarLinks(usuario)

console.log("usuario preenchido")
 
divLogin.style.display = 'none'
divCracha.style.display = 'initial'

}


function atualizarLinks (usuario) {

  link_twitter.href = `https://twitter.com/${usuario}`
  link_youtube.href = `https://www.youtube.com/c/${usuario}`
  link_facebook.href = `https://www.facebook.com/${usuario}`
  link_instagram.href = `https://www.instagram.com/${usuario}/`

}
