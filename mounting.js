let express = require('express');
const app = express();
const mongoose = require('mongoose');
// middleware function-> post , front->json
app.use(express.json())
app.listen(3000);

// Password = 1r4iUm6EaxeZkky8   Username = admin

// mini app
const userRouter = express.Router();
const authRouter = express.Router();
app.use("/users" , userRouter);
app.use('/auth' , authRouter);

userRouter
          .route("/")
          .get(getUser)
          .post(postUser)
          .patch(patchUser)
          .delete(deleteUser)

userRouter
          .route("/:id")
          .get(getUserById)

authRouter
          .route("/signup")
          .get(getSignUp)
          .post(postSignUp)

let users = [
          {
                    "Name" : "Jasbir",
                    "id" : 230
          },

          {
                    "Name" : "Karthikey",
                    "id" : 24
          },
          {
                    "Name" : "Sachin",
                    "id" : 27
          },
          {
                    "Name" : "Mansi",
                    "id" : 25
          }
];

function getUser(req , res){
          console.log(req.query);
          res.send(users);
}

// frontend ->backend 
function postUser (req, res){
          console.log(req.body);
          users = req.body;
          res.json({
                    message : "data recieved",
                    user : req.body
          })
}



// update -> patch
function patchUser(req , res){
          console.log("req ki body ka data ->" ,req.body);
          // update data in users object
          let dataToBeUpdated = req.body;
          for(key in dataToBeUpdated){
                    users[key] = dataToBeUpdated[key];
          }
          res.json({
                    message : "data updated successfully"
          })
}
// delete
function deleteUser(req , res){
          users = {};
          res.json({
                    message : "deleted succesfully"
          })
};

// parameters => /:id

function getUserById(req , res){
          console.log("User id is" , req.params.id);
          res.send("User id is recieved");
}

function getSignUp(req , res){
          res.sendFile('/public/index.html',{root:__dirname})
}

function postSignUp(req , res){
          let obj = req.body;
          console.log("backend" , obj);
          res.json({
                    message : "User Signed up" , 
                    data : obj
          });
}
const db_link = 'mongodb+srv://admin:1r4iUm6EaxeZkky8@cluster0.jxlhgv9.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_link)
.then(function(db){
          //console.log(db);
          console.log("DataBase Connected");
})
.catch(function(err){
          console.log(err);
})

const userSchema = mongoose.Schema({
          name : {
                    type : String,
                    required : true
          },
          email : {
                    type : String,
                    required : true,
                    unique : true
          },
          password : {
                    type : String ,
                    required : true,
                    minLength : 8
          },
          confirmPassword : {
                    type : String ,
                    required : true,
                    minLength : 8
          }
});

// model
const userModel = mongoose.model('userModel' , userSchema);

(async function createUser(){
          let user = {
                    name : "Parul",
                    email : "abcde@gmail.com",
                    password : "12345678",
                    confirmPassword : "12345678"
          };
          let data = await userModel.create(user);
          console.log(data)

})();