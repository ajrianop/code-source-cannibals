import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from './models/enums';
import { ProjectModel } from './models/project';
import {ObjectId} from 'mongoose';
import { ObjectiveModel } from './models/objective';

//METODOLOGIA ONE TO MANY #1
const crearProyectoConObjetivos1 = async () => {

    const usuarioInicial = await UserModel.create({
        nombre: 'Paula',
        apellido: 'Calderón',
        correo: 'paula150995@hotmail.com',
        identificacion: '123',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });

    const proyectoCreado =  await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date ('2021/12/24'),
        fechaFin: new Date ('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
    });

    const objetivoGeneral =  await ObjectiveModel.create({
        descripcion: 'Este es el objetivo general',
        tipo: Enum_TipoObjetivo.general,
        proyecto: proyectoCreado._id,
    });

    const objetivoEspecifico1 =  await ObjectiveModel.create({
        descripcion: 'Este es el objetivo especifico 1',
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });

    const objetivoEspecifico2 =  await ObjectiveModel.create({
        descripcion: 'Este es el objetivo especifico 2',
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });

    console.log('Proyecto creado', proyectoCreado);
}

const consultaProyectoConObjetivos1 = async () => {

    const proyecto = await ProjectModel.findOne({_id: '61908a1727bbd4f83ac1a617'});

    console.log('el proyecto que encontré fue ', proyecto);
    
    const objetivos = await ObjectiveModel.find({project: '61908a1727bbd4f83ac1a617'});
    console.log('los objetivos son:', objetivos);

    const proyectoConObjetivos = {...proyecto, objetivos: objetivos};
    console.log('El proyecto con objetivos es:', proyectoConObjetivos);
    
} 

const crearProyectoConObjetivos2 = async () => {
    const usuarioInicial = await UserModel.create({
        nombre: 'Paula',
        apellido: 'Calderón',
        correo: 'paula150995@hotmail.com',
        identificacion: '123',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });

    const objetivoGeneral =  await ObjectiveModel.create({
        descripcion: 'Este es el objetivo general',
        tipo: Enum_TipoObjetivo.general,
    });

    const objetivoEspecifico1 =  await ObjectiveModel.create({
        descripcion: 'Este es el objetivo especifico 1',
        tipo: Enum_TipoObjetivo.especifico,
    });

    const objetivoEspecifico2 =  await ObjectiveModel.create({
        descripcion: 'Este es el objetivo especifico 2',
        tipo: Enum_TipoObjetivo.especifico,
    });

    const proyectoCreado =  await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date ('2021/12/24'),
        fechaFin: new Date ('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
        objetivos: [objetivoGeneral._id, objetivoEspecifico1._id, objetivoEspecifico2._id],
    });

    console.log('Proyecto creado', proyectoCreado);
}
const main = async () => {
    await conectarBD();



    

 
    
    
};

main();

/*     const objet = await ObjectiveModel.create({
        descripcion: 'Este es el objetivo especifico',
        tipo: Enum_TipoObjetivo.especifico,
    }) ;*/
/*      await ProjectModel.create({
        nombre: 'Proyecto 5',
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date('2022/11/10'),
        lider: '618d198c94e1cfdf36821a62',
        objetivos: ['618e522b533942e0346c7082', '618e52437de23e3a753026a3'], 
        
    });   */

    /* const proyecto = await ProjectModel.find({ nombre: 'Proyecto 5'}).populate('lider').populate('objetivos');
    console.log('el proyecto es: ', JSON.stringify(proyecto));  */

    /* const lider = await UserModel.find({_id: proyecto[0].lider});
    console.log('el lider del proyecto es: ', lider); */ 

///////// CRUD USUARIOS ///////////

    //CREAR USUARIO
 /*        await UserModel.create({
           apellido: 'Calderon',
           correo: 'paula150995@hotmail.com',
           identificacion: '84787875',
           nombre: 'Paula',
           rol: Enum_Rol.administrador,
       })
           .then((u) => {
               console.log('Usuario creado', u);
           })
           .catch((e) => {
               console.log('Error creando el usuario', e);
           });  */

    //OBTENER LOS USUARIO
    /*     await UserModel.find().then((u) => {
            console.log('usuarios', u);
        })
            .catch((e) => {
                console.log('error obteniendo los datos'), e;
            }); */
    //OBTENER UN SOLO USUARIO
    /* await UserModel.findOne({ identificacion: '1234'})
    .then((u) => {
        console.log('usuario encontrado', u);
    })
    .catch((e) => {
        console.log(e);
        
    }) */
    //EDITAR UN USUARIO
    /* await UserModel.findOneAndUpdate(
        { correo: 'paula150995@hotmail.com' },
        {
            nombre: 'Andrea',
            apellido: 'Lesmes',
        }
    )
    .then((u) => {
        console.log('usuario actualizado', u);     
    })
    .catch((e) => {
        console.log('error actulizando usuario', e);
        
    }) */
    //ELIMINAR USUARIO
    /* await UserModel.findOneAndDelete({ correo: 'paula150995@hotmail.com'})
    .then((u) => {
        console.log('usuario eliminado', u);
    })
    .catch((e) => {
        console.log(e);
         
    })*/