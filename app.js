const amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value.trim();
    
    // Verifica se o nome inserido está vazio ou inválido
    if (amigo === '') {
        alert('Por favor, insira um nome válido para o amigo.');
    } else if (!/^[a-zA-Z\s]+$/.test(amigo)) {
        alert('O nome deve conter apenas letras e espaços. Tente novamente.');
    } else {
        amigos.push(amigo); // Adiciona o nome à lista
        document.getElementById('amigo').value = ''; // Limpa o campo de entrada
        atualizarListaAmigos(); // Atualiza a lista exibida
        alert(`O amigo ${amigo} foi adicionado à lista com sucesso!`);
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizá-la

    // Cria um item de lista para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.classList.add('amigo-item');
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se há amigos suficientes para o sorteio
    if (amigos.length < 2) {
        alert(amigos.length === 0 ? 'A lista está vazia! Adicione ao menos dois amigos para realizar o sorteio.' : 'Por favor, insira pelo menos dois amigos para fazer o sorteio.');
        return;
    }
    
    // Realiza o sorteio de um amigo secreto
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `O amigo secreto sorteado é: ${amigoSecreto}`;
}
