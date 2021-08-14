const { multiplicacion } = require('./assets/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')


multiplicacion(argv.b, argv.l).then(archivo => console.log(`${archivo} creado`.brightGreen)).catch(err => console.log(err))