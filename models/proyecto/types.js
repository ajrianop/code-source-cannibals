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
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: Usuario!
    objetivos:[Objetivo] 
    avances: [Avance]
    inscripciones: [Inscripcion]
    estadoInscripcion: Enum_EstadoInscripcion!
  }
  type Inscripcion{
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
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
    ProyectosPorIDEstudiante(nombre:String!): [Proyecto]
    estado(estado: String!): [Proyecto]
    Proyecto(_id: String!): Proyecto
    proyectosLiderado(_id: String!): [Proyecto]
  }


  type Mutation{

    crearProyecto(
      nombre: String!
      presupuesto: Float!
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

      actualizarProyectoActivo(
        idProyecto: String!
        ): Proyecto
      
      crearObjetivo(
        _id: String!
        nombre: String
        presupuesto: Float
        descripcion: String!
        tipo: Enum_TipoObjetivo!
        ):Proyecto

  }
  

`;

export { typesProyecto };