import mongoose from 'mongoose';
//import { Enum_EstadoInscripcion } from '../enums/enums';
import { ModeloProyecto } from '../proyecto/proyecto.js';
import { ModeloUsuario } from '../usuario/usuario.js';

const {Schema, model} = mongoose;
/* interface Inscripcion {
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
} */

const inscripcionSchema = new Schema({
    estado: {
        type: String,
        enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
        default: 'PENDIENTE',
        required: true,
    },
    fechaIngreso: {
        type: Date,
    },
    fechaEgreso: {
        type: Date,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ModeloProyecto,
        required: true,
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        required: true,
    },
});

const ModeloInscripcion = model ('Inscripcion', inscripcionSchema);

export {ModeloInscripcion};