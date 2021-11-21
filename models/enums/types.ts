import { gql } from 'apollo-server-express';

const typesEnums = gql`

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

enum Enum_EstadoProyecto {
    ACTIVO 
    INACTIVO 
}

enum Enum_FaseProyecto {
    INICIADO 
    DESARROLLO 
    TERMINADO 
    NULO 
}

enum Enum_TipoObjetivo {
    GENERAL 
    ESPECIFICO 
}

`;

export { typesEnums };