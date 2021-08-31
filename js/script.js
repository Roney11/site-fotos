//funçao para abrir o menu mobile usando o 
//addEventListener para criar um click no objeto
function abrirMenuMobile() {
    const menuMobile = document.querySelector('.menu-mobile')
    const abrirMenu = document.querySelector('.menu ul')

    menuMobile.addEventListener('click', mostrarMenu)

    function mostrarMenu(){

        abrirMenu.classList.toggle ('menu-ativo')
    
    }
    mostrarMenu()
}
abrirMenuMobile()

    



//função para setr time para aparecer o texto
//da capa
function slidetextHeader() {
    window.onload = setTimeout(loadingTex, 500)

    function loadingTex() {
        document.querySelector('.mensagem').style.display = 'block'
    }

    window.onload = setTimeout(loadingAutor, 500)

    function loadingAutor() {
        document.querySelector('.autor').style.display = 'block'
    }
}
slidetextHeader()

//função que faz um forEach dentro das imgs e adicionar
//uma classe a elas e as divs que foram criadas como
//bolinhas.
//ao clicar nas bolinhas é acionado o forEach que remove 
//as classes nas imgs e depois de remover, add a classe
//na img que foi clicada, fazendo assim, a troca da imagem
//ao clicar na bolinha correspondente...
function slideImgBody() {
    var imgDetalhes = document.querySelectorAll('.img-detalhes img')
    var bolinhaDetalhes = document.querySelectorAll('.bolinha')

    function activeTab(index) {
        imgDetalhes.forEach((img) =>{
            img.classList.remove('ativo')
        })
        imgDetalhes[index].classList.add ('ativo')
    }

    bolinhaDetalhes.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
        })
    })


    bolinhaDetalhes.forEach((index) => {
        index.addEventListener('click', mudaCor)
    })

    function mudaCor(index){
        bolinhaDetalhes.forEach((index) => {
            index.classList.remove ('troca-cor')
        })

        index.currentTarget.classList.add ('troca-cor')
    }
}
slideImgBody()