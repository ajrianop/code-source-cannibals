import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from './enums';
import { ObjectiveModel } from './objective';
import { UserModel } from './user';

interface Proyecto {
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
   // lider: string,
   lider: Schema.Types.ObjectId;
   //objetivos: [Schema.Types.ObjectId]; 
   objetivos: [{descripcion: string, tipo: Enum_TipoObjetivo}]
}

const projectSchema = new Schema<Proyecto>({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    estado: {
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.INACTIVO,
    },
    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULO,
    },
    lider: {
        // type: String,
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    /*  objetivos : [
        {
            type: Schema.Types.ObjectId,
            ref: ObjectiveModel,
        },
    ],  */
    objetivos : [
        {
            descripcion: {
                type: String,
                required: true,
            },
            tipo: {
                type: String,
                enum: Enum_TipoObjetivo,
                required: true,
            },
        }
    ]

});

const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };