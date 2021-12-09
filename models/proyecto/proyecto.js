import mongoose from 'mongoose';
//import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from '../enums/enums.js';
//import { ObjectiveModel } from '../objetivo.js';
import { ModeloUsuario } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

/* interface Proyecto {
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
} */

const proyectoSchema = new Schema({
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
        required: false,
    },
    fechaFin: {
        type: Date,
        required: false,
    },
    estado: {
        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        default: 'INACTIVO',
    },
    fase: {
        type: String,
        enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
        default: 'NULO',
    },
    lider: {
        // type: String,
        type: Schema.Types.ObjectId,
        required: true,
        ref: ModeloUsuario,
    },
    /*  objetivos : [
        {
            type: Schema.Types.ObjectId,
            ref: ObjectiveModel,
        },
    ],  */
    objetivos: [
        {
            descripcion: {
                type: String,
                required: true,
            },
            tipo: {
                type: String,
                enum: ['GENERAL', 'ESPECIFICO'],
                required: true,
            },
        }
    ]

},
    {
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
    });

proyectoSchema.virtual('avances', {
    ref: 'Avance',
    localField: '_id',
    foreignField: 'proyecto',
});

proyectoSchema.virtual('inscripciones', {
    ref: 'Inscripcion',
    localField: '_id',
    foreignField: 'proyecto',
});

const ModeloProyecto = model('Proyecto', proyectoSchema);

export { ModeloProyecto };