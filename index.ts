import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol } from './models/enums';

const main = async () => {
    await conectarBD();

    //CREAR USUARIO
        await UserModel.create({
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
           }); 

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

};

main();