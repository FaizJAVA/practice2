const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const userImport=require('./route/userroute');
const cors=require('cors');

mongoose.connect('mongodb+srv://Faizaan:123@pract2cluster.6su1g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{
    console.log('Success');
}).catch(err=>{
    console.log(err);
});

const port=process.env.PORT||3000;

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use('/api/user/',userImport);

app.listen(port,()=>{
    console.log('server running....');
})