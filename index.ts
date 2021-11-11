import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol } from './models/enums';

const main = async () => {
    await conectarBD();

    //CREAR USUARIO
    await UserModel.create({
        apellido: "Calderon",
        correo: "paula150995@hotmail.com",
        identificacion: "12345",
        nombre: "Paula",
        rol: Enum_Rol.administrador,
    })
        .then((u) => {
            console.log("Usuario creado", u);
        })
        .catch((e) => {
            console.log("Error creando el usuario", e);
        });

    //OBTENER LOS USUARIO
    await UserModel.find().then((u) => {
        console.log("usuarios", u);
    })
        .catch((e) => {
            console.log("error obteniendo los datos"), e;
        });
};

main();