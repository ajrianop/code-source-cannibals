import mongoose from 'mongoose';
//import { Enum_Rol, Enum_EstadoUsuario } from '../enums/enums.js'

const {Schema, model} = mongoose;
/* interface User {
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado: Enum_EstadoUsuario;
} */

const usuarioSchema = new Schema({
    correo: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
                /* (email) => {
                    if (email.includes('@') && email.includes('.')) {
                        return true;
                    } else {
                        return false;
                    }
                }, message: 'Correo con formato erroneo', */
        },
    },
    password: {
        type: String,
        required: false,
    },
    identificacion: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
    },
    estado: {
        type: String,
        enum: ['PENDIENTE', 'AUTORIZADO', 'NO AUTORIZADO'],
        default: 'PENDIENTE',
    },
});

const ModeloUsuario = model('Usuario', usuarioSchema);

export { ModeloUsuario };