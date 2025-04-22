// Inicializa um contador para atribuir IDs únicos às tarefas
let contador = 0;

// Obtém referências aos elementos HTML
let input = document.getElementById('inputTarefa'); // Campo de entrada para digitar a tarefa
let btnAdd = document.getElementById('btn-add'); // Botão para adicionar a tarefa
let main = document.getElementById('areaLista'); // Área onde as tarefas serão exibidas

// Função para adicionar uma nova tarefa
function addTarefa() {
    // Obtém o valor digitado no campo de entrada
    let valorInput = input.value;

    // Verifica se o valor não está vazio, nulo ou indefinido
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        // Incrementa o contador para gerar um ID único
        ++contador;

        // Cria o HTML para a nova tarefa
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i> <!-- Ícone de tarefa não concluída -->
            </div>
            <div "marcarTarefa(${contador})" class="item-nome">
                ${valorInput} <!-- Nome da tarefa -->
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">  
                    <i class="mdi mdi-delete"></i> Apagar <!-- Botão para apagar a tarefa -->
                </button>
            </div>
        </div>`;

        // Adiciona o novo item à área principal
        main.innerHTML += novoItem;

        // Limpa o campo de entrada e coloca o foco nele
        input.value = "";
        input.focus();
    }
}

// Função para deletar uma tarefa
function deletar(id) {
    // Obtém o elemento da tarefa pelo ID
    var tarefa = document.getElementById(id);
    // Remove o elemento da tarefa
    tarefa.remove();
}

// Função para marcar ou desmarcar uma tarefa como concluída
function marcarTarefa(id) {
    // Obtém o elemento da tarefa pelo ID
    var item = document.getElementById(id);
    // Obtém a classe atual do elemento
    var classe = item.getAttribute('class');
    console.log(classe); // Exibe a classe no console para depuração

    // Verifica se a tarefa está marcada como não concluída
    if (classe == "item") {
        // Adiciona a classe 'clicado' para marcar como concluída
        item.classList.add('clicado');

        // Altera o ícone para indicar que a tarefa foi concluída
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        // Move a tarefa para o final da lista
        item.parentNode.appendChild(item);
    } else {
        // Remove a classe 'clicado' para desmarcar como concluída
        item.classList.remove('clicado');

        // Altera o ícone para indicar que a tarefa não está concluída
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

// Adiciona um evento ao campo de entrada para detectar quando a tecla Enter é pressionada
input.addEventListener("keyup", function(event) {
    // Verifica se a tecla pressionada foi Enter (código 13)
    if (event.keyCode === 13) {
        event.preventDefault(); // Evita o comportamento padrão do Enter
        btnAdd.click(); // Simula o clique no botão de adicionar
    }
});
