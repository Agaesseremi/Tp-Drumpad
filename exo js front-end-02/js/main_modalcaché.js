  //modal caché

  let square = document.querySelector("carre")
  let button = document.querySelector("button");
  let body = document.getElementById("body")

  button.addEventListener("focus", () => {
    carre.style.display = "block",
    body.style.backgroundColor = "grey"
  })

  button.addEventListener('blur', () => {
    carre.style.display = 'none'
    body.style.backgroundColor = "white"
  })