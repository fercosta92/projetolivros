const livros = require('./database')

//pegar input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//Se for sim, mostrar as categorias disponíveis e pergunta qual categoria ela escolhe
if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log ('Romance', '/Infanto-juvenil', '/Ficcao')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis')
    console.table(livrosOrdenados)
}


//Se for não, mostra todos os livros em ordem crescente pelo número de páginas
