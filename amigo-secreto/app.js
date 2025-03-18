let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);

    inputAmigo.value = '';

    atualizarListaAmigos();

    inputAmigo.focus();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    document.getElementById('listaAmigos').style.display = 'block';
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');

        li.textContent = amigos[i];

        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    document.getElementById('listaAmigos').style.display = 'none';
}

document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});