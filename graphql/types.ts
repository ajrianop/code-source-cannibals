import { gql } from 'apollo-server-express';

const typeDefs = gql`

enum Enum_EstadoUsuario {
  PENDIENTE
  AUTORIZADO
  NO_AUTORIZADO
}

enum Enum_rol{
  ESTUDIANTE
  LIDER
  ADMINISTRADOR
}

  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario
    rol: Enum_rol!
  }
  type Query {
    Usuarios: [Usuario]
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
  }

`;

export { typeDefs };