module.exports = (sequelize, type) => {
    return sequelize.define('profesor', {
        idProfesor: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: type.STRING,
        apellido: type.STRING,
        telefono: type.STRING,
        correo: type.STRING,
        fk_academia: type.INTEGER


    },{
        tableName: 'profesor',
        createdAt:false,
        updatedAt:false
    })
}