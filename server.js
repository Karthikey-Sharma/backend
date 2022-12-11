// require express
const express = require('express');
// you have to write it -> app signifies your server
const app = express();
// if you want to accept data from backend
app.use(express.json());
// get krna hai data from sayHeloo
// req represents request jo frontend se ati hai
// res represents response
app.get('/sayHello' , function(req , res){
    // frontend
    res.end('Hello from the server');
})
// akele post se hi ham patch aur delete dono kaam kr skte hain
// post se ham frontend se backend mein data dete hai
app.post('/sayHello' , function(req , res){
    console.log("data" , req.body);
    res.end("Post wala hello from server");
})
// patch is for update // patch is intended for updata
app.patch('/sayHello' , function(req , res){
    console.log("data" , req.body);
    res.end("Patch wala hello from server");
})
// delete is intended for deletion
app.delete('/sayHello' , function(req , res){
    console.log("data" , req.body);
    res.end("Delete wala hello from server");
})

// get krna hai data from sayBye
app.get('/sayBye' , function(req , res){
    //frontend
    res.end('Bye');
})
// template route // 
app.get('/getMultiplication/:num1/:num2' , function(req , res){
    console.log("Header mein data" , req.params.num1);
    console.log("Header mein data" , req.params.num2);
    let ans = req.params.num1 * req.params.num2;
    res.end("the ans of this multiplication is" + ans);
})
//3000 -> address of server in the given machine
app.listen(3000 , function(){
    console.log("server started at port 3000")
})
console.log("hello hi from the server");


