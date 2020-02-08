const opciones_crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    }
};
const opciones_actualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opciones_crear)
    .command('actualizar', 'Actualizar el estado completado de una tarea', opciones_actualizar)
    .command('borrar', 'Elimina un elemento por hacer', opciones_crear)
    .help()
    .argv;





module.exports = {
    argv
};