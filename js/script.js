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

const btn = document.querySelectorAll ('.planos button')
const adquirir = document.querySelector('.js-btn1')
const adquirir2 = document.querySelector('.js-btn2')
const adquirir3 = document.querySelector('.js-btn3')
var mobal = document.querySelector('.agendar')

//pegando as classes dos tres botoes
adquirir.addEventListener('click', abrirMobal)
adquirir2.addEventListener('click', abrirMobal)
adquirir3.addEventListener('click', abrirMobal)

//fazendo um foreach para remover a classe adquiri
//caso exista e adicionando a mesma ao clique
//carregando o style do mobal
function abrirMobal(item) {
    btn.forEach ((item) => {
        item.classList.remove ('adquirir')
    })

    item.currentTarget.classList.add ('adquirir')
    mobal.style.marginLeft = '0'
    mobal.style.transition ='0.8s'
}

//pegando a classe do botao enviar e adicionando um clique
//no mesmo
const enviar = document.querySelector('.enviar')
enviar.addEventListener('click', fecharMobal)

//funcao para 'salvar' os dados e fechar o modal ao 
//click
//obs: como o intuito não tras back-end, não foi
//utilizado php para fazer as verificações e validar
//o formulario 
function salvarMobal() {
    mobal.style.marginLeft = '-100%'
    mobal.style.transition ='0.8s'
}

//pegando a classe para cancelar o form e 
//fechar o modal
const cancelar = document.querySelector('.cancelar')
cancelar.addEventListener('click', salvarMobal)

function fecharMobal() {
    mobal.style.marginLeft = '-100%'
    mobal.style.transition ='0.8s'
}
