function inserirNome(){
    let nomeUsuario = prompt("Qual é o seu nome?");
    let elemento = document.querySelector("#nome_cursista");
    elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];

const item = document.querySelector("#lista");
item.textContent = linguagens[2];


let aluno = {
    nome: "Fernanda",
    idade: 37,
    anoLetivo: "2ª Série",
    MateriasFavoritas: ["Matemática", "Geografia", "História", "Arte", "Filosofia"]
}
console.log(aluno.nome);
console.log(aluno.MateriasFavoritas[4])

const objeto = document.querySelector("#alunos");
objeto.textContent = aluno.nome
objeto.textContent = aluno.idade