module.exports = (sequelize, type) => {
    return sequelize.define('empleado', {
        idEmpleado: {
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
        tableName: 'empleado',
        createdAt:false,
        updatedAt:false
    })
}