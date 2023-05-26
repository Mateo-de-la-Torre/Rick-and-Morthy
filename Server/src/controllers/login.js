const users = require('../utils/users'); // importamos el usuario

const login = (req, res) => {

    const {email, password} = req.query; // obtenemos los datos del usuario

    const userFound = users.find((user)=> user.email === email && user.password === password); // recorre cada obj del array y el primero q coincida lo retorna

    return userFound
    ? res.status(200).json({access: true}) // si hay un usuario q cumpla la condicion. access es un estado
    : res.status(404).json({access: false}) // si no 
}




module.exports = {
    login
}