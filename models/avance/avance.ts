import { Schema, model } from 'mongoose';
import { ModeloProyecto } from '../proyecto/proyecto';
import { ModeloUsuario } from '../usuario/usuario';

interface Avance {
    fecha: Date;
    descripcion: string;
    observaciones: [string];
    proyecto: Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}

const AvanceSchema = new Schema<Avance>({
    fecha: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    observaciones: [
        {
            type: String,
        }
    ],
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ModeloProyecto,
        required: true,
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        required: true,
    },
});

const ModeloAvance = model('Avance', AvanceSchema);

export {ModeloAvance};