function inserirNome(){
    let nomeUsuario = prompt("Qual é o seu nome?");
    let elemento = document.querySelector("#nome_cursista");
    elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];

const item = document.querySelector("#lista");
item.textContent = linguagens[2];