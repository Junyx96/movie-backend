const {Schema, model} = require('mongoose')


const PeliculaSchema = Schema({
    titulo:{
        type:String,
        required:true
    },

    descripcion:{
        type:String,
        required:true
    },

    director:{
        type:String,
        required:true
    },

    genero:{
        type:String,
        required:true
    },

    calificacion:{
        type:String,
        required:true
    },

    img:{
        type:String,
        required:true
    },

    favorito:{
        type:Boolean,
        default: false
    }

})

PeliculaSchema.method('toJSON', function(){
    const {__v, ...object} = this.toObject()

    return object
})

module.exports = model('Usuario', PeliculaSchema)
