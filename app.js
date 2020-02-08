const argv = require('./config/yargs').argv;
const color = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        {
            let res = porHacer.crear(argv.descripcion);
            console.log('Crear tarea', res);
            break;
        }
    case "listar":
        {
            let listado = porHacer.getListado();

            for (let tarea of listado) {
                console.log("-----------------------------".green);
                console.log(tarea.descripcion);
                console.log(`Estado ${tarea.completado}`);

            }
            break;
        }
    case "actualizar":
        {
            let resAct = porHacer.actualizar(argv.descripcion, argv.completado);
            console.log('Actualizar tarea res', resAct);
            break;
        }
    case "borrar":
        {
            porHacer.borrar(argv.descripcion);
            break;

        }
    default:
        {
            console.log('Comando no localizado')
            break;
        }

}