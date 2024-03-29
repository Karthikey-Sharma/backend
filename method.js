let express = require('express');
const app = express();
// middleware function-> post , front->json
app.use(express.json())
app.listen(3000);

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

app.get('/users' , (req , res)=>{
          console.log(req.query);
          res.send(users);
});
// frontend ->backend 
app.post('/users' , (req, res)=>{
          console.log(req.body);
          users = req.body;
          res.json({
                    message : "data recieved",
                    user : req.body
          })
});

// update -> patch
app.patch('/users' , (req , res)=>{
          console.log("req ki body ka data ->" ,req.body);
          // update data in users object
          let dataToBeUpdated = req.body;
          for(key in dataToBeUpdated){
                    users[key] = dataToBeUpdated[key];
          }
          res.json({
                    message : "data updated successfully"
          })
})
// delete
app.delete('/users' , (req , res)=>{
          users = {};
          res.json({
                    message : "deleted succesfully"
          })
});

// parameters => /:id

app.get("/users/:id" , (req, res)=>{
          console.log("User id is" , req.params.id);
          res.send("User id is recieved");
})