import { ModeloInscripcion } from './inscripcion.js';

const resolverInscripciones = {
    Query: {
        Inscripciones: async (parents, args) => {
            const inscripciones = await ModeloInscripcion.find()
            .populate('estudiante')
            .populate('proyecto')
            .populate({path: 'proyecto',populate: {path: 'lider',},});
            return inscripciones;
        },
      
        
        FiltrarInscripcion: async (parents, args) => {
            const inscripcionFiltrada = await ModeloInscripcion.find({ estudiante: args._id })
                .populate({path: 'proyecto',populate: {path: 'avances',},})
                .populate('estudiante');
            return inscripcionFiltrada;
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
                /* estado: args.estado, */
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },

        // Arthur y Andy ******
        aprobarInscripcion: async (parents, args) => {
            const inscripcionAprobada = await ModeloInscripcion.findByIdAndUpdate(args.id,{
                estado:'ACEPTADO',
                fechaIngreso: Date.now(),   
            },
            { new: true });
            return inscripcionAprobada;
        },

        rechazarInscripcion: async (parents, args) => {
            const inscripcionRechaza = await ModeloInscripcion.findByIdAndUpdate(args.id,{
                estado:'RECHAZADO',
                fechaEgreso: Date.now(),
            },
            { new: true });
            return inscripcionRechaza;
        },
        // Arthur y Andy ******
        
    },
};

export { resolverInscripciones };
