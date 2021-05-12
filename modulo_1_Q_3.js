// 3.1
const arr = [1, 2, 3, 4, 5];
const newArr = console.log(arr.map(item => item + 10));


// 3.2
const usuario = { nome: 'Rafael' ,idade: '18' };

const mostraIdade = usuario => usuario.idade;
const mostraNome = usuario => usuario.nome;

console.log(mostraIdade(usuario) , mostraNome(usuario) );


// 3.3
const nome = "Rafael";
const idade = "19";

const mostraUsuario = (nome = 'Rafael', idade ='19') => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = function () {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
}

const promise = () => new Promise(resolve,reject => resolve());