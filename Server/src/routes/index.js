// IMPORTAMOS LOS CONTROLERS
const {login} = require('../controllers/login');
const {getCharById} = require('../controllers/getCharById');
const {postFav, deleteFav} = require('../controllers/handleFavorites');


const router = require('express').Router();


router.get('/character/:id', getCharById)

router.get('/login', login);

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)





module.exports = router;