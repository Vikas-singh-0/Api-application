const mongoose =require('mongoose')
const BootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxlength:[20,"Enter the name"]
    },
    slug:String,
    discription:{
        type:String,
        trim:true,
        maxlength:[500,"Enter the  discriptoion"]
    },
    website:{
        type:String
    },
    phone:{
        type:String,
        maxlength:[20,"Please enter valid number"]
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    location:{
        // GeoJsonPoint
        type:{
            type:String,
            enum:['Point'],
            required:false
        },
        coordinates:{
            type:[Number],
            required:true,
            index:'2dsphear'
        },
        formattedaAddress:String,
        street:String,
        city:String,
        state:String,
        zipcode:String
    },
    careers:{
        //Array of strings
        type:[String],
        required:true,
        enum:[
            'Web Development',
            'Mobile Development',
            'UI/UNIX',
            'Data Science',
            'Business',
            'Others'
        ]
    },
    averageRating:{
        type:Number,
        min:[1,"Rating must be greater than 1"],
        min:[10,"Rating must be greater than 10"]
    },
    averageCost:{
        type:Number
    },
    photo:{
        type:String,
        default:'No-Photo'
    },
    jobAssistance:{
        type:Boolean,
        default:false
    },
    jobGurantee:{
        type:Boolean,
        default:false
    },
    acceptGi:{
        type:Boolean,
        default:false
    },
    housing:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }, 
})

module.exports = mongoose.model('Bootcamp',BootcampSchema)