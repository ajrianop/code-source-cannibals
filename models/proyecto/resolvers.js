import { typesInscripcion } from "../inscripcion/types.js";
import { ModeloProyecto } from "./proyecto.js";

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ModeloProyecto.find().populate('lider')
      .populate('avances').populate({path: 'inscripciones',populate: {path: 'estudiante',},});
      console.log(proyectos)
      return proyectos;
    },
    ProyectosPorIDEstudiante: async (parent, args) => {
      const proyectosPorIDEstudiante = await ModeloProyecto
      .find().populate('lider').populate('avances').populate('inscripciones')
      .populate({path: 'inscripciones',populate: {path: 'estudiante',},});
      return proyectosPorIDEstudiante;
    },
    estado: async (parent, args)=>{
      const proyectosPorEstado = await ModeloProyecto.find().populate('lider')
      .populate('avances').populate('inscripciones')
      
      return proyectosPorEstado.filter((proyecto)=> proyecto.inscripciones.estado === args.estado)
      
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
      })
      return ProyectoCreado;
    },

    // editarProyecto: async (parent, args) => {
    //   const ProyectoEditado = await ModeloProyecto.findByIdAndUpdate(
    //     args._id,
    //     { ...args.campos },
    //     {new: true}
    //   );
    //   return ProyectoEditado;
    // },

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

    editarFaseProyecto: async (parent, args) => {
      const proyectoFaseEditado = await ModeloProyecto.findByIdAndUpdate(args._id,{
        fase: args.fase,        
      },
      { new: true });
      return proyectoFaseEditado;
    },

    editarEstadoProyecto: async (parent, args) => {
      const proyectoEstadoEditado = await ModeloProyecto.findByIdAndUpdate(args._id,{             
        estado: args.estado,        
      },
      { new: true });
      return proyectoEstadoEditado;
    },

    eliminarProyecto: async (parent, args) => {
      const proyectoEliminado = await ModeloProyecto.findOneAndDelete({id:args._id},);
      return proyectoEliminado
    }

  },
  
};

export { resolversProyecto };
