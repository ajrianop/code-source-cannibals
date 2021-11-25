import { gql } from 'apollo-server-express';

const typesUsuario = gql`

  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_rol!
    estado: Enum_EstadoUsuario
  }

  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input crearObjetivo{
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id:String!): Usuario
  }

  type Mutation{
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_rol!
    ):Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_rol!
    ):Usuario

    eliminarUsuario(_id: String!): Usuario
  }

`;

export { typesUsuario };