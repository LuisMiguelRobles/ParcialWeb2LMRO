module.exports = (sequelize, type) => {
    return sequelize.define('estudiante', {
        idEstudiante: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: type.STRING,
        apellido: type.STRING,
        telefono: type.STRING,
        correo: type.STRING


    },{
        tableName: 'estudiante',
        createdAt:false,
        updatedAt:false

    })
}