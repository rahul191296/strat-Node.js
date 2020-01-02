const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const testController = require('./controllers/testController');
const JavaTest = require('./models/questionModel')
dotenv.config({ path: './config.env'})

const stringify = require('json-stringify-safe')
const javaTest = require("./models/questionModel");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
console.log("hello from middleware");
next();
});

mongoose.connect(process.env.DATABASE_LOCAL ,
{  useUnifiedTopology: true,
   useNewUrlParser: true  
})
.then(() => console.log("connection success"))
.catch((err) => console.log(err));

app.get('/createTest' ,(req , res) =>{

    const javaTest = new JavaTest({
        "question" : "which access modifier is more restricted",
        "optionA" : "public",
        "optionB" : "protected",
        "optionC" : "default",
        "optionD" : "private",
        "answer" : "private"
        });
        
        javaTest.save()
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
        

        
});

app.get('/getQuestion' , (req , res) => {
    console.log("rahul");
    const testQuestion = JavaTest.find();
    console.log(testQuestion.length)
 
   res.status(200).json({
        status : 'success',
        data: {
          testQuestion
        }
    })
   
  
  });
  
app.get('/getResult/:id' , (req , res) => {
    const testQuestion = JavaTest.findById(req.params.id);
  
});


console.log(process.env.PORT);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Express server started at port :3680');
  });

  //module.exports = app;