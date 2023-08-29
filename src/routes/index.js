const { Router } = require('express');
const router = Router();
// const getVideogames = require('../controllers/getVideogames')


router.get('/hc',(req,res) => {  //healthcheck
    res.status(200).send('Server up')
})

// router.get('/videogames',getVideogames)
router.get('/search', getAvailable)



module.exports = router;
