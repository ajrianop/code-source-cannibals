const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = [
        {
          nombre: 'Paula',
        },
        {
          nombre: 'Andrea',
        },
        {
          nombre: 'Laura',
        },
      ];

      return usuarios;
    },
  },
};

export { resolvers };