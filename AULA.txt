# Explicação do Código JavaScript para Listar Animais por Cor

Este documento explica o funcionamento do script JavaScript que permite ao usuário selecionar uma cor e, em seguida, exibe uma lista de animais associados a essa cor.

## Funções

O script é composto por três funções principais:

### `listarAnimaisPorCor(cor)`

- **Objetivo:** Retorna uma lista de animais com base na cor selecionada.
- **Parâmetros:** `cor` - Uma string que representa a cor escolhida pelo usuário.
- **Funcionamento:** A função utiliza um objeto `animais` como um dicionário para mapear cores a listas de animais. Se a cor fornecida estiver presente no objeto, a função retorna a lista de animais associada; caso contrário, retorna uma lista vazia.

### `exibirAnimais()`

- **Objetivo:** Cria e exibe um modal contendo uma lista de animais da cor selecionada.
- **Funcionamento:** 
  - Obtém a cor selecionada pelo usuário a partir de um elemento `select` com o ID `corSelect`.
  - Chama `listarAnimaisPorCor(corEscolhida)` para obter a lista de animais.
  - Verifica se já existe um modal na página e o remove, se necessário.
  - Se a lista de animais não estiver vazia, cria um novo modal com a lista de animais e um botão para fechar o modal.
  - Se a lista estiver vazia, exibe um alerta informando que não há animais associados à cor selecionada.

### `adicionarBotaoDeBusca()`

- **Objetivo:** Adiciona dinamicamente ao corpo do documento HTML um seletor de cores e um botão para iniciar a busca de animais.
- **Funcionamento:** 
  - Cria um elemento `select` com opções para as cores disponíveis.
  - Cria um botão que, quando clicado, chama a função `exibirAnimais()`.

## Inicialização

- **Objetivo:** Garantir que o botão de busca e o seletor de cores sejam adicionados à página assim que ela for carregada.
- **Funcionamento:** Utiliza `window.onload` para chamar a função `adicionarBotaoDeBusca()` assim que a página terminar de carregar.
