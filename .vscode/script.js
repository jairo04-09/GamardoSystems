function toggleMode() {
  const html = document.documentElement
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //subtituir a imagen
  if (html.classList.contains("light")) {
    //se tiver light mode: adicionar a imagen light
    img.setAttribute("src", "./assets/2jg.jpg")
  } else {
    // se tiver sem light mode: manter a imagen normal
    img.setAttribute("src", "./assets/1jg.jpg")
  }
  }

let imagem = document.querySelector("#foto2")
setInterval(function () {
  if (profile.style.opacity == 1) {
    profile.style.opacity = 0
  } else {
    profile.style.opacity = 1
  }
}, 3000)