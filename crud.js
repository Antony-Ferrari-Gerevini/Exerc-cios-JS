let pessoas = [];

function gerarId() {
    return Math.floor(Math.random() * 1000);
}

function cadastrarPessoa(novaPessoa) {
    novaPessoa.id = gerarId();
    pessoas.push(novaPessoa);
}

function deletarPessoa(id) {
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
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


atualizarPessoa(pessoas[0].id, {cidade: "Saúde"});
console.log("Lista após atualização de uma pessoa:");
console.log(listarPessoas());

deletarPessoa(pessoas[0].id);
console.log("Lista após remoção de uma pessoa:");
console.log(listarPessoas());
