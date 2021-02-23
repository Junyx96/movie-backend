/*
    PELICULAS
    /api/peliculas
*/


const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { getPeliculas, crearPelicula, actualizarPelicula, borrarPelicula } = require('../controllers/peliculasController')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.get('/', getPeliculas)

router.post('/',
[],
crearPelicula)


router.put('/:id',
[],
actualizarPelicula)


router.delete('/:id',
borrarPelicula)


module.exports= router