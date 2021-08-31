function addClassParagrago (){
    let classParagrafo = document.querySelectorAll('p')


        classParagrafo.forEach((index) => {
            index.addEventListener('click', addClass)
        })

        function addClass(index) {
            classParagrafo.forEach((item) => {
                item.classList.remove ('paragrafo')
            })

            index.currentTarget.classList.add ('paragrafo')
        }
    }
    addClassParagrago()


