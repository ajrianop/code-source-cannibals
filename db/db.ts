import {connect} from 'mongoose';

const conectarBD = async () => {
    return await connect(
        'mongodb+srv://Paula:27092019@cluster0.4qiig.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
        
    ) 
    .then(() => {
        console.log('conexion exitosa');
    })
    .catch((e) => {
        console.log('Error conectando a la bd', e);
    });
};

export default conectarBD;