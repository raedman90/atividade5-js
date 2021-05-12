const usuarios = [
    { name: 'Diego', idade: 23, cpf:'111.111.111-11', empresa: 'Rocketseat' },
    { name: 'Gabriel', idade: 15, cpf:'111.111.111-12', empresa: 'Rocketseat' },
    { name: 'Lucas', idade: 30, cpf:'111.111.111-13', empresa: 'Facebook' },
]; 

const idade = usuarios.map(users => users.idade);

const filter = usuarios.filter(users => users.empresa === 'Rocketseat' && users.idade > 18);

const find = usuarios.find(users => users.empresa === 'Google');

const calculo = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
console.log(calculo);