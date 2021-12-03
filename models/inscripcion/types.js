import { gql } from "apollo-server-express";

const typesInscripcion = gql`
    type Inscripcion{
        _id: ID!
        estado: Enum_EstadoInscripcion
        fechaIngreso: Date
        fechaEgreso: Date
        proyecto: Proyecto!
        estudiante: Usuario!
    }

    type Query{
        Inscripciones: [Inscripcion]
        FiltrarInscripcion(_id: String!): [Inscripcion] 
        listaSolicitudesPendientes(estado: Enum_EstadoInscripcion!):[Inscripcion]
    }

    type Mutation{
        crearInscripcion(
            """ estado: Enum_EstadoInscripcion! """
            fechaIngreso: Date
            fechaEgreso: Date
            proyecto: String!
            estudiante: String!
        ): Inscripcion

        aprobarInscripcion(id: String!): Inscripcion
        rechazarInscripcion(id: String!): Inscripcion
    }
`;

export { typesInscripcion }