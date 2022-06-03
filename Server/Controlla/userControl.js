const userModel = require('../Model/userModel')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { json } = require('express')

const getUsers = async(req, res)=>{
    try{
        const user = await userModel.find()
        res.status(200).json({
            status:"all datas",
            data:user
        })
    }
    catch(error){
        res.status(404).json({
            message:error.message
        })
    }
}

const getUser = async(req,res) =>{
    try{
        const user = await userModel.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: user
        })
    }
    catch(error){
        res.status(404).json({
            message:error.message
        })
    }
}


const updateUser = async(req,res) =>{
    try{
        const user = await userModel.findByIdAndUpdate(req.params.id,res.body, {new:true})

        res.status(200).json({
            message: "success", 
            data:user
        })

    }
    catch(error){
        res.status(404).json({
            message:error.message
        })
    }
}


const deleteUser = async (req, res)=>{
    try{
        const user = await userModel.findByIdAndRemove(req.params.id)
        res.status(200).json({
            message: "success",
            data:user
        })
    }
    catch(error){
        res.status(404).json({
            message:error.message
        })
    }
}


    const createUser = async (req, res)=>{
        try{
            const {userName, email, password } = req.body;

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);

            const user = await userModel.create({
                email,
                userName,
                password:hashed
            })
            res.status(200).json({
                status:"successfully created",
                data:user
            })
        }
        catch(error){
            res.status(404).json({
                message:error.message
            })
        }
    }


        const signUser = async(req, res)=>{
            try{
                const {email, password} = req.body;
                const user = await userModel.findOne({email});
                if(user){
                    const check = await bcrypt.compare(password,user.password);

                    if(check){
                        const token = jwt.sign(
                            {
                                _id: user._id,
                            },
                            "ThisismySECRET",
                            {expiresIn: "2d"}
                        );

                        const {password, ...info } = user._doc;

                        res.status(200).json({message:"success",
                    data: {token, ...info}
                    })
                    }else{
                        res.status(404).json({
                            message: "user password fail"
                        });
                    }
                    
                }
            }
            catch(error){
                res.status(404).json({
                    message: error.message
                })
            }
        }


module.exports={
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    createUser,
    signUser
}