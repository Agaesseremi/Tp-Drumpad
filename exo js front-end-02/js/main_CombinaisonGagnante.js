let p2 = document.querySelector("#p2")
let body = document.querySelector(".body")

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey === true && e.key === 'm' ) {
        p2.style.display = 'block'
    }
})


document.addEventListener('keydown', (e) => {
if (e.ctrlKey === true && e.key === 'm' && e.altKey === true){
    p2.style.display = 'block'
    body.style.color = 'red'
}
})