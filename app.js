const { argv } = require('process');
const colors = require('colors');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

const arg = require('./config/yargs').arg;

let comando = arg._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarArchivo(arg.base, arg.limite)
        break

    case 'crear':
        console.log('Crear');
        crearArchivo(arg.base, arg.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => (console.log(err)));
        break

    default:
        console.log('El comando no esta definido')


}
//console.log(process.argv);
//let arg2 = process.argv;
//console.log(arg.limite);
//console.log(arg2);
//let parametro = arg[2];
//let base = parametro.split('=')[1];