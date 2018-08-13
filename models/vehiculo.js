module.exports = (sequelize, type) => {
    return sequelize.define('vehiculo', {
        idvehiculo: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        color: type.STRING,
        placa: type.STRING,
      
    },{
        tableName: 'vehiculo',
        createdAt:false,
        updatedAt:false
    })
}