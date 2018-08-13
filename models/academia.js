module.exports = (sequelize, type) => {
    return sequelize.define('academia', {
        idAcademia: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: type.STRING,
        


    },{
        tableName: 'academia',
        createdAt:false,
        updatedAt:false
    })
}