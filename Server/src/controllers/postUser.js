const {User} = require('../DB_connection');


module.exports = async () => {


    try {
        const {email, password} = req.body;
        if(!email || !password) return resizeBy.status(400).send("Faltan datos");
        
        const user = await User.findOrCreate({where: {email, password}})
        
        return res.json(user)

    } catch (error) {
        return res.status(500).json(error.message);
    }    
};