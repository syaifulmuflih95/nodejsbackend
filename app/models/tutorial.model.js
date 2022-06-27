module.exports = (sequelize, Sequelize) => {
    const Aplikasi = sequelize.define("Aplikasi SIA", {
      aplikasi_id:{
        type: Sequelize.STRING
      },
      no_registrasi: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Aplikasi;
  };