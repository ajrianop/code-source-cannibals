import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo } from './enums/enums';
import { ProjectModel } from './project';

interface Objective {
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    //proyecto: Schema.Types.ObjectId;
}

const objetivesSchema = new Schema<Objective>({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
    },
    /*  proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
    },  */
});

const ObjectiveModel = model('Objetivo', objetivesSchema);

export {ObjectiveModel};