const { rejects } = require('assert');
const colors = require('colors');
const fs = require('fs');


let listarArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        for (let i = 1; i <= limite; i++) {
            console.log(`${base}*${i}=${base*i} \n`);
        }
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject('No es tipo número!!!!');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                rejects(err);
            else
                console.log('================='.green);
            console.log(`tabla de ${base} multiplicado hasta ${limite}`.green);
            console.log('================='.green);
            return (`tabla-${base}.txt`);
        });
    });
}


module.exports = {
    crearArchivo,
    listarArchivo

}