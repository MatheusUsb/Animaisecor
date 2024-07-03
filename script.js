function listarAnimaisPorCor(cor) {
    const animais = {
        azul: ['pavão', 'arara', 'peixe-palhaço'],
        branco: ['cisne', 'coelho', 'urso polar'],
        amarelo: ['leão', 'tigre', 'girafa']
    };

    return animais[cor] || [];
}

function exibirAnimais() {
    const corEscolhida = document.getElementById('corSelect').value;
    const animaisDaCor = listarAnimaisPorCor(corEscolhida);
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    if (animaisDaCor.length > 0) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };

        const animalList = document.createElement('ul');
        animaisDaCor.forEach(animal => {
            const listItem = document.createElement('li');
            listItem.textContent = animal;
            animalList.appendChild(listItem);
        });

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(animalList);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);
        modal.style.display = 'block';
    } else {
        alert(`Desculpe, não há animais associados à cor ${corEscolhida}`);
    }
}

function adicionarBotaoDeBusca() {
    const select = document.createElement('select');
    select.id = 'corSelect';

    const cores = ['azul', 'branco', 'amarelo'];
    cores.forEach(cor => {
        const option = document.createElement('option');
        option.value = cor;
        option.text = cor;
        select.appendChild(option);
    });

    const botao = document.createElement('button');
    botao.textContent = 'Escolher cor e listar animais';
    botao.onclick = exibirAnimais;

    document.body.appendChild(select);
    document.body.appendChild(botao);
}

window.onload = adicionarBotaoDeBusca;