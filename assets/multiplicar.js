const fs = require('fs');

const multiplicacion = async (num, l = false) => {
    if (l) { console.log(`Imprimiendo tabla del ${num}`) }

    if (typeof (num) !== 'number') {
        return `debe ser un numero`
    } else {
        let n = parseInt(num)

        try {
            let multiplicar = ""
            for (let i = 1; i <= 10; i++) {
                multiplicar += `${n} * ${i} = ${n * i}\n`
            }

            fs.writeFileSync(`./salida/Tabla-${n}.txt`, multiplicar)
            return `Tabla del ${n}`
        } catch (error) {
            throw error
        }
    }
}

// manera de exportar de NODE
module.exports = {
    multiplicacion
}