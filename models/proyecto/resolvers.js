import { ModeloProyecto } from "./proyecto.js";

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ModeloProyecto.find().populate('lider').populate('avances').populate('inscripciones');
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const ProyectoCreado = await ModeloProyecto.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      })
      return ProyectoCreado;
    },

    editarProyecto: async (parent, args) => {
      const ProyectoEditado = await ModeloProyecto.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        {new: true}
      );
      return ProyectoEditado;
    },
  },
};

export { resolversProyecto };
