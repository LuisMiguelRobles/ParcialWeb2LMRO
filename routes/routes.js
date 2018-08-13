module.exports = function (app) {

    const { Estudiante, Profesor, Empleado, Academia, Curso, Vehiculo, Clase } = require('../conexion')
    // create a user
    app.post('/api/users', (req, res) => {
        console.log(req.body)

    })
    // get all users
    app.get('/api/users', (req, res) => {

    })

}
