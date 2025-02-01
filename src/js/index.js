const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo')

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos()
    botaoClicado()
})

function botaoClicado() {
    botaoMostrarProjetos.classList.toggle('ativo')
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.toggle('ativo')
    })
}
