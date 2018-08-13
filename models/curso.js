module.exports = (sequelize, type) => {
    return sequelize.define('curso', {
        idCurso: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: type.STRING,
        numeroClases: type.INTEGER,
        fk_academia :type.INTEGER
        


    },{
        tableName: 'curso',
        createdAt:false,
        updatedAt:false
    })
}