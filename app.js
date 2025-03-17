let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value;
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nome);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
}    
    
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}
    
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}   