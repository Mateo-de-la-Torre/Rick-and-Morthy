const URL = "https://rickandmortyapi.com/api/character"
const axios = require ('axios');


const getCharById = async (req, res) =>{

    try {
        const {id} = req.params;
        const {data} = await axios(`${URL}/${id}`);

            if(!data.name) throw new Error(`Faltan datos del personaje de ID: ${id} `);  // si no hay name significa q no hay personaje, entonces arroja el error

            // si no
            let character = { // creamos un obj con las props
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }

            return res.status(200).json(character)
            

    } catch (error) {
        return error.message.includes('ID') // si en la propiedad message del error incluye ID significa q es error del cliente
        ? res.status(404).send(error.message) // entonces muestra esta respuesta 
        : res.status(500).send(error.message) // sino esta
    }

}




module.exports ={
    getCharById
};




















































































































// const axios = require ('axios');


// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status})=> { // hacemos destrcturing para pasarlas por parametro

//         const character = { // creamos un obj con las props
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status

//         }

//         return res // respuesta en formato JSON
//                 .writeHead(200, {"Content-type": "application/json"})
//                 .end(JSON.stringify(character))

//     })
//     .catch(error =>{ // el catch maneja los erorres

//         return res
//         .writeHead(500, {"Content-type": "text/plain"}) // respuesta del error en formato JSON
//         .end(error.message)
//     })
// }

// module.exports ={
//     getCharById
// };