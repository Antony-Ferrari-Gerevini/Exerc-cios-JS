/*let nome = "Antony Ferrari Gerevini";
let idade = 19;
let frase = "Olá, me chamo " + nome + " minha idade é " + idade + " anos"

let preco = 19.99;
let quantidade = 5;
let valorTotal = preco * quantidade;

console.log("Nome:", nome);
console.log("Preço:", preco);
console.log("Quantidade:", quantidade);
console.log("Valor total:", valorTotal.toFixed(2));

console.log(frase)
*/


/*
function resumoCompra(nomeProduto, valor, quantidade) {
    let frase = nomeProduto + ", valor unitário: " + valor + ", total da compra: " + (valor * quantidade);
    console.log(frase);
}

resumoCompra("iPhone", 6000, 3);
resumoCompra("Xbox", 4500, 2);
resumoCompra("Notebook", 8000, 3);

function oddEven(numero) {
    if (numero % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(oddEven(2));
console.log(oddEven(1));
console.log(oddEven(0));
console.log(oddEven(-1));
console.log(oddEven(-2));*/


/*let nome = prompt("Digite o seu nome: ");
let sobrenome = prompt("Digite o seu sobrenome: ");

//alert("O nome completo do usuário é: " + nome + " " + sobrenome);

if (nome.trim() === "" || sobrenome.trim() === "") {
    alert("Erro! Um dos valores não foi preenchido.")
}
else {
    alert(`O nome completo do usuário é: ${nome} ${sobrenome}`);
}*/

let pessoas = [];

function gerarId() {
    return Math.floor(Math.random() * 1000);
}

function cadastrarPessoa(novaPessoa) {
    novaPessoa.id = gerarId();
    pessoas.push(novaPessoa);
}

function deletarPessoa(id) {

}

function atualizarPessoa(id, dados) {
    const idPessoa = pessoas.findIndex(pessoa => pessoa.id === id);
    Object.assign(pessoas[idPessoa], dados);
}

function listarPessoas() {
    return pessoas;
}



cadastrarPessoa({nome: "Beto", idade: 55, cidade: "São José dos Campos"});
cadastrarPessoa({nome: "Metilde", idade: 54, cidade: "Saúde"});
console.log("Lista após criação de duas pessoas:");
console.log(listarPessoas());

atualizarPessoa(pessoas[0].id, {cidade: "Saúde"});
console.log("Lista após atualização de uma pessoa:");
console.log(listarPessoas());

deletarPessoa(pessoas[0].id);
console.log("Lista após remoção de uma pessoa:");
console.log(listarPessoas());
