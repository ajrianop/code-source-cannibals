import { ModeloInscripcion } from './inscripcion.js';

const resolverInscripciones = {
    Query: {
        Inscripciones: async (parents, args) => {
            const inscripciones = await ModeloInscripcion.find();
            return inscripciones;
        },


        // Arthur y Andy ******
        listaSolicitudesPendientes: async (parents, args) => {
            const listaSolicitudesPendientes = await ModeloInscripcion.find({estado: "PENDIENTE"});
            return listaSolicitudesPendientes;
        },
        // Arthur y Andy ******
    },

    Mutation: {
        crearInscripcion: async (parents, args) => {
            const inscripcionCreada = await ModeloInscripcion.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },

        aprobarInscripcion: async (parents, args) => {
            const inscripcionAprobada = await ModeloInscripcion.findByIdAndUpdate(args.id,{
                estado:'ACEPTADO',
                fechaIngreso: Date.now(),
            },
            { new: true });
            return inscripcionAprobada;
        },
    },
};

export { resolverInscripciones };
