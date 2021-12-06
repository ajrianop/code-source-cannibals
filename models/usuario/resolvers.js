import { ModeloUsuario } from "./usuario.js";

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await ModeloUsuario.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await ModeloUsuario.findOne({_id: args._id});
      return usuario;
    },
    // Arthur y Andy ******

    listaFiltradaRol: async (parent, args) => {
      const lista = await ModeloUsuario.find({rol: args.rol});
      return lista;
    },

    // Arthur y Andy ******
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const UsuarioCreado = await ModeloUsuario.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
      });

      if (Object.keys(args).includes("estado")) {
        UsuarioCreado.estado = args.estado;
      }

      return UsuarioCreado;
    },

    editarUsuario: async (parent, args) => {
      const usuarioEditado = await ModeloUsuario.findByIdAndUpdate(args._id,{
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado,
      },
      { new: true });
      return usuarioEditado;
    },

    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const usuarioEliminado = await ModeloUsuario.findOneAndDelete({
          _id: args._id,
        });
        return usuarioEliminado;
      } else if (Object.keys(args).includes("correo")) {
        const usuarioEliminado = await ModeloUsuario.findOneAndDelete({
          correo: args.correo,
        });
        return usuarioEliminado;
      }
    },

    // Arthur y Andy ******

    editarEstadoUsuario: async (parents, args) => {
      const editarEstadoUsuario = await ModeloUsuario.findByIdAndUpdate(args._id,{
        estado: 'AUTORIZADO',
      },
      { new: true });
      return editarEstadoUsuario;
    },
    
    // Arthur y Andy ******

  },
};

export { resolversUsuario };
