
let myFavorites = [];


const postFav = (req, res) => {

    try {
        const character = req.body;
        const characterFound = myFavorites.find(fav => fav.id === character.id); // validacion para q se agregue 2 veces el mismo personaje a fav
    
        if(characterFound) throw Error('El personaje ya existe en favoritos') // si ya esta el personaje en favoritos
            
        myFavorites.push(character); //  agregamos al array lo q recibimos por el body
    
        return res.status(200).json(myFavorites); // retornamos una respuesta q salio todo bien
        

    } catch (error) {
        return res.status(404).send(error.message)
    }
}


const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id) // filtramos a los personajes favoritos para q se cree otro array sin el personaje con el id q recibe por params

    return res.status(200).json(myFavorites); // lo retornamos en formato json
}


module.exports = {
    postFav,
    deleteFav
}