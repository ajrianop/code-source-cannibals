import { ModeloProyecto } from "./proyecto.js";

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ModeloProyecto.find().populate('lider').populate('avances').populate('inscripciones');
      return proyectos;
    },
    //Query para consultar solo un proyecto a partir de su id
    Proyecto: async (parent, args) => {
      const proyecto = await ModeloProyecto.findOne({_id: args._id}).populate('lider').populate('avances').populate('inscripciones');
      return proyecto;
    }
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
      });
      return ProyectoCreado;
    },
    //mutación cambiar caracteristicas o atributos de un proyecto a partir de su id
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ModeloProyecto.findByIdAndUpdate(args._id,{
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      },
      { new: true });
      return proyectoEditado;
    },
  },
};

export { resolversProyecto };
