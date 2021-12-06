import { gql } from 'apollo-server-express';
import { typesEnums } from '../models/enums/types.js';
import { typesUsuario } from '../models/usuario/types.js';
import { typesProyecto } from '../models/proyecto/types.js';
import { typesAvance } from '../models/avance/types.js';
import { typesInscripcion } from '../models/inscripcion/types.js';
import { typesAutenticacion } from './auth/types.js';

const typesGlobales = gql`
scalar Date

`;

export const types = [typesGlobales, typesEnums, typesUsuario, typesProyecto, typesAvance, typesInscripcion, typesAutenticacion];