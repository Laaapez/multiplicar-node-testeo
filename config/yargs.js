const { argv } = require('yargs');

const opt = {
    base: {
        demand: true,
        alias: 'b'

    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const arg = require('yargs')
    .command(
        'listar',
        'Imprime en consola tabla de multiplicar',
        opt
    )
    .command(
        'crear',
        'Crea archivo con tabla de multiplicar',
        opt)
    .help()
    .argv;

module.exports = {
    arg
}