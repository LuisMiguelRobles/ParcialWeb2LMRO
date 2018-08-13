const Sequelize = require('sequelize'),
  EstudianteModel = require('./models/estudiante'),
  ProfesorModel = require('./models/profesor'),
  EmpleadoModel = require('./models/empleado'),
  AcademiaModel = require('./models/academia'),
  CursoModel = require('./models/curso'),
  VehiculoModel = require('./models/vehiculo'),
  ClaseModel = require('./models/clase');



const sequelize = new Sequelize('academiaLMRO', 'postgres', 'admin', {
  dialect: 'postgres',
});

const Estudiante = EstudianteModel(sequelize, Sequelize);
const Profesor  = ProfesorModel(sequelize, Sequelize);
const Empleado  = EmpleadoModel(sequelize, Sequelize);
const Academia = AcademiaModel(sequelize, Sequelize);
const Curso = CursoModel(sequelize, Sequelize);
const Vehiculo = VehiculoModel(sequelize, Sequelize);

const Clase = ClaseModel(sequelize, Sequelize);




Curso.belongsTo(Academia, {foreignKey: 'fk_academia'});
Empleado.belongsTo(Academia,{foreignKey: 'fk_academia'});
Profesor.belongsTo(Academia,{foreignKey: 'fk_academia'});

Clase.belongsTo(Curso, { foreignKey: 'fk_curso' });
Clase.belongsTo(Estudiante, { foreignKey: 'fk_estudiante' });
Clase.belongsTo(Vehiculo, { foreignKey: 'fk_vehiculo' });
Clase.belongsTo(Profesor, { foreignKey: 'fk_profesor' });




sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })


module.exports = {
  Estudiante,
  Profesor,
  Empleado,
  Academia,
  Curso,
  Vehiculo,
  Clase
  


}
