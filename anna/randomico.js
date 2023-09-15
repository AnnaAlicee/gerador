const numero = document.getElementById('numero')
const numeroaleatorio = document.getElementById('numeroaleatorio')

const gerarNumero  = () => {
    const constrandom = Math.floor(Math.random() * 500);

    numero.textContent = constrandom;
}

numeroaleatorio.addEventListener('click', gerarNumero);

gerarNumero();