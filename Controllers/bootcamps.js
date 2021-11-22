const Bootcamp = require('../Models/Bootcamp')
const BootcampSchema = require('../Models/Bootcamp')

// @desc     Get all bootcamps 
// @route    Get api/v1/bootcamps
// @access   Public

exports.getBootcamps=(req,res,next)=>{
    res.status(200).send({
        status:200,
        message:"get bootcamps"
    })
}

// @desc     Get a bootcamp 
// @route    Get api/v1/bootcamps/:id
// @access   Public

exports.getBootcamp=(req,res,next)=>{
    res.status(200).send({
        status:200,
        message:`get bootcamp ${req.params.id}`
    })
}

// @desc     update bootcamps 
// @route    Get api/v1/bootcamps/:id
// @access   Private

exports.updateBootcamp=(req,res,next)=>{
    res.status(200).send({
        status:200,
        message:"update bootcamp" + req.params.id
    })
}

// @desc     delete a bootcamps 
// @route    Get api/v1/bootcamps/:id
// @access   PublicS

exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).send({
        status:200,
        message:"delete bootcamp "+ req.params.id
    })
}

// @desc     Create new  bootcamps 
// @route    Get api/v1/bootcamps
// @access   Private

exports.createBootcamp=async (req,res,next)=>{
    // console.log(req.body)
    
    try {
        const bootcamp =await Bootcamp.create(req.body)
        res.status(201).json({
        status:'success',
        data:req.body
    })
    } catch (error) {
        res.status(400).json({
            sucess:false
        })
    }
}