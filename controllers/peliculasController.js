const { response } = require('express')

const getPeliculas = (req, res=response) =>{

    res.json({
        ok:true,
        msg:'getPeliculas'
    })

}


const crearPelicula = (req, res=response) =>{

    res.json({
        ok:true,
        msg:'crearPelicula'
    })

}

const actualizarPelicula = (req, res=response) =>{

    res.json({
        ok:true,
        msg:'actualizarPelicula'
    })

}

const borrarPelicula = (req, res=response) =>{

    res.json({
        ok:true,
        msg:'borrarPelicula'
    })

}




module.exports = {
    getPeliculas,
    crearPelicula,
    actualizarPelicula,
    borrarPelicula,

}