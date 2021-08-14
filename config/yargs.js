const colors = require('colors')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Numero base para la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        description: "Encabezado en consola de la tabla a imprimir"
    })
    .check((argv) => isNaN(argv.b) ? ("Debe ser numero - yargs says".bgRed.black) : true)
    .argv

module.exports = argv