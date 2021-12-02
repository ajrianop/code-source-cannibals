import { gql } from 'apollo-server-express';

const typesProyecto = gql`

  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input crearObjetivo{
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos:[Objetivo] 
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  input camposObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input camposProyecto {
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
  }

  type Query {
    Proyectos: [Proyecto]    
  }

  type Mutation{

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
      objetivos: [crearObjetivo]!
      ):Proyecto
   

     editarProyecto(
       _id: String!
       nombre: String
       presupuesto: Float
       fechaInicio: Date
       fechaFin: Date
       estado: Enum_EstadoProyecto
       fase: Enum_FaseProyecto
       lider: String
       objetivos: [crearObjetivo]
      ):Proyecto


      editarFaseProyecto(
        _id: String!
        fase: Enum_FaseProyecto!
      ):Proyecto

      editarEstadoProyecto(
        _id: String!
        estado: Enum_EstadoProyecto!
      ):Proyecto

      eliminarProyecto(_id: String!): Proyecto

      
  }
  

`;

export { typesProyecto };