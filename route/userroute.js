const express=require('express');
const {body}=require('express-validator');
const userControl=require('../controller/usercontroller');

const routeUser=express.Router();

routeUser.post('/signup',body('name').not().isEmpty(),body('email').not().isEmpty(),body('password').not().isEmpty(),
userControl.SignUp);

routeUser.post('/signin',body('email').not().isEmpty(),body('password').not().isEmpty(),
userControl.SignIn);

routeUser.get('/view',userControl.View);
routeUser.get('/view2',userControl.View);

module.exports=routeUser;