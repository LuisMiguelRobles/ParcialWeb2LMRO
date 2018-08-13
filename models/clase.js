module.exports = (sequelize, type) => {
    return sequelize.define('clase', {

        fk_curso: type.INTEGER,
        fk_estudiante: type.INTEGER,
        fk_vehiculo: type.INTEGER, 
        fk_profesor: type.INTEGER,




    }, {
            tableName: 'clase',
            createdAt: false,
            updatedAt: false
        })
}