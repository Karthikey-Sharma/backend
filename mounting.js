let express = require('express');
const app = express();
// middleware function-> post , front->json
app.use(express.json())
app.listen(3000);

// mini app
const userRouter = express.Router();
app.use("/users" , userRouter);

userRouter
          .route("/")
          .get(getUser)
          .post(postUser)
          .patch(patchUser)
          .delete(deleteUser)

userRouter
          .route("/:id")
          .get(getUserById)
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