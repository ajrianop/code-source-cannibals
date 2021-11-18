import { UserModel } from "../models/user";

const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find();

      return usuarios;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const UsuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
      });

      if(Object.keys(args).includes('estado')) {
        UsuarioCreado.estado = args.estado;
      }

      return UsuarioCreado;
    }
  }
};

export { resolvers };