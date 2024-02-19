function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.src = "./sets/eu-dri.png"
  } else {
    img.src = "./sets/eu-light.png"
  }
}
