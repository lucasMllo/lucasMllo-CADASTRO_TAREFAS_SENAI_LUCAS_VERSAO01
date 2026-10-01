class ListaDeTarefas {
    constructor() {
        this.campo = document.getElementById("campo-tarefa");
        this.botaoAdicionar = document.getElementById("botao-adicionar");
        this.lista = document.getElementById("lista-tarefas");
        this.contador = document.getElementById("contador-tarefas");
        this.botaoTema = document.getElementById("botao-tema");

        this.iniciar();
    }

    iniciar() {
        this.botaoAdicionar.addEventListener("click", () => {
            this.adicionar();
        });

        this.campo.addEventListener("keydown", (evento) => {
            if (evento.key === "Enter") {
                this.adicionar();
            }
        });

        this.botaoTema.addEventListener("click", () => {
            document.body.classList.toggle("modo-escuro");
        });
    }

    adicionar() {
        const texto = this.campo.value;

        if (texto === "") {
            return;
        }

        const tarefa = document.createElement("li");
        tarefa.classList.add("item-tarefa");

        const textoTarefa = document.createElement("span");
        textoTarefa.textContent = texto;

        const acoes = document.createElement("div");
        acoes.classList.add("acoes-tarefa");

        const concluir = document.createElement("button");
        concluir.classList.add("botao-acao");
        concluir.innerHTML = '<i class="fa-solid fa-check"></i>';

        concluir.addEventListener("click", () => {
            tarefa.classList.toggle("concluida");
        });

        const excluir = document.createElement("button");
        excluir.classList.add("botao-acao", "excluir");
        excluir.innerHTML = '<i class="fa-solid fa-trash"></i>';

        excluir.addEventListener("click", () => {
            tarefa.remove();
            this.atualizarContador();
        });

        acoes.appendChild(concluir);
        acoes.appendChild(excluir);

        tarefa.appendChild(textoTarefa);
        tarefa.appendChild(acoes);

        this.lista.appendChild(tarefa);

        this.campo.value = "";

        this.atualizarContador();
    }

    atualizarContador() {
        const quantidade = this.lista.children.length;

        this.contador.textContent = quantidade + " tarefas na lista";
    }
}

const app = new ListaDeTarefas();
