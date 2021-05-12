const empresa = {
    nome: 'Rst',
    endereco: {
        cidade: 'São João do Rio do Peixe',
        estado: 'PB',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'rafel', idade: 19 })