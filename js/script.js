window.onload = setTimeout(loadingTex, 500)

function loadingTex() {
    document.querySelector('.mensagem').style.display = 'block'
}

window.onload = setTimeout(loadingAutor, 500)

function loadingAutor() {
    document.querySelector('.autor').style.display = 'block'
}

var altura = window.availHeight
console.log (altura)