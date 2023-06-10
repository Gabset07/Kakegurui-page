const botaoCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botaoCarrossel.forEach( (botao , indice)=> {
    botao.addEventListener('click', ()=>{
        
        console.log(indice)
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        botao.classList.add('selecionado');
        
        const PainelSelecionado = document.querySelector('.ativa');
        PainelSelecionado.classList.remove('ativa')

        console.log(imagens);
        console.log(imagens[indice].classList.add('ativa'));

    })
})