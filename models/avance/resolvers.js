import { ModeloAvance } from "./avance.js"


const resolversAvance = {
    Query: {
        Avances: async (parents, args) => {
            const avances = await ModeloAvance.find().populate('proyecto')
            .populate('creadoPor').populate({path: 'proyecto',populate: {path: 'lider',},});
            return avances;
        },

        Avance: async(parents, args) => {
          const avance= await ModeloAvance.findById({ _id: args._id })
          .populate('proyecto').populate('creadoPor');
          return avance;
        },

        filtrarAvance: async (parents, args) => {
            const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id })
                .populate('proyecto')
                .populate('creadoPor');
            return avanceFiltrado;
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

        editarAvance: async (parent, args) => {
            const avanceEditado = await ModeloAvance.findByIdAndUpdate(args._id,{
              descripcion: args.descripcion,
            },
            { new: true });
            return avanceEditado;
          },

        // Arthur y Andy ******

        //  HISTORIA 18*
        agregarObservacionesAvance: async (parents, args)=>{
            const agregarObservacionesAvance =await ModeloAvance.findByIdAndUpdate(args._id,{
              //$addToSet : {
                observaciones: args.observaciones,
              // },
            },{new: true}
            )
            return agregarObservacionesAvance
          },
        
        // Arthur y Andy ******

    },

};

export { resolversAvance };