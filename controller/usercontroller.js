const userM=require('../model/usermodel');
const {validationResult}=require('express-validator');

exports.SignUp=(request,response)=>{
    let a=request.body.name;
    let b=request.body.email;
    let c=request.body.password;

    const error=validationResult(request);

    if(!error.isEmpty()){
        return response.status(403).json({error:error.array()})
    }

    userM.create({name:a,email:b,password:c}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:'Not saved'});
    })
}
exports.SignIn=(request,response)=>{
    let b=request.body.email;
    let c=request.body.password;

    const error=validationResult(request);

    if(!error.isEmpty()){
        return response.status(403).json({error:error.array()})
    }

    userM.findOne({email:b,password:c}).then(result=>{
        if(result)
        return response.status(200).json(result);
        else
        return response.status(200).json({error:'Not Valid User'});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:'Error'});
    })
}
exports.View=(request,response)=>{

    userM.find().then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:'Cannot fetch result'});
    })
}