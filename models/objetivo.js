import mongoose from 'mongoose';
//import { Enum_TipoObjetivo } from './enums/enums.js';
//import { ProjectModel } from './proyecto/proyecto.js';

const {Schema, model} = mongoose;

/* interface Objective {
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    //proyecto: Schema.Types.ObjectId;
} */

const objetivesSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: ['GENERAL', 'ESPECIFICO'],
        required: true,
    },
    /*  proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
    },  */
});

const ObjectiveModel = model('Objetivo', objetivesSchema);

export {ObjectiveModel};