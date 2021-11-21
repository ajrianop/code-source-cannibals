import { gql } from 'apollo-server-express';
import { typesEnums } from '../models/enums/types';
import { typesUsuario } from '../models/usuario/types';
import { typesProyecto } from '../models/proyecto/types';
import { typesAvance } from '../models/avance/types';

const typesGlobales = gql`
scalar Date

`;

export const types = [typesGlobales, typesEnums, typesUsuario, typesProyecto, typesAvance ];