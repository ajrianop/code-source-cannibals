import { ModeloAvance } from "./avance.js"


const resolversAvance = {
    Query: {
        Avances: async (parents, args) => {
            const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
            return avances;
        },

        filtrarAvance: async (parents, args) => {
            const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id })
                .populate('proyecto')
                .populate('creadoPor');
            return avanceFiltrado;
        },

        filtrarAvanceId: async (parents, args) => {
          const avanceFiltradoId = await ModeloAvance.findOne({ _id: args._id }).populate('proyecto').populate('creadoPor');
          return avanceFiltradoId;
      },
    },

    Mutation: {
        crearAvance: async (parents, args) => {
            const avanceCreado = await ModeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            })
            return avanceCreado;
        },
    },
};

export { resolversAvance };