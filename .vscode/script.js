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
  const ftr = document.querySelector("#z a")
  if (html.classList.contains("light")) {
    ftr = document.getElementById("#z a").style.color = "blue"
  } else {
  }
}
