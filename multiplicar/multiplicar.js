const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================================'.green);
    console.log(`========= Tabla del ${base} =========`.green);
    console.log('================================'.green);

    for (let i = 0; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${i*base}\n`);;
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base introducida no es correcta');
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += ` ${base} * ${i} = ${i*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limit-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-limit-${limite}.txt`)
                //console.log(`El archivo tabla-${base}.txt se creó correctamente`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}