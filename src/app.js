const express = require("express")
const cors = require("cors")
const app =express();
const os =require('os')
app.use(express.json())
app.use(cors())

// const { initializeApp } = require('firebase-admin/app');
var admin = require("firebase-admin");

var serviceAccount = require("./config/platinum-8b28f-firebase-adminsdk-ln291-2b73cf7796.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://platinum-8b28f-default-rtdb.firebaseio.com"
});
// As an admin, the app has access to read and write all data, regardless of Security Rules




app.get("/create",async(req,res)=>{
    var db = admin.database();
    var ref = db.ref("users");
    const usersRef = ref.child('data');
    console.log("test")
        usersRef.set({
        anisawesome: {
            date_of_birth: 'June 23, 1912',
            full_name: 'Alan Turing'
        },
        gracehop: {
            date_of_birth: 'December 9, 1906',
            full_name: 'Grace Hopper'
        }
        });
    res.send("added successfully")
})

app.get("/hello",(req,res)=>{
    var db = admin.database();
    var ref = db.ref("users");
    ref.once("value", function(snapshot) {
    console.log(snapshot.val());
    res.json(snapshot.val())
});

})

app.get("/home",(req,res)=>{
    res.send("Welcome from home")
})
 
app.listen(process.env.PORT || 3000,function (err) { 
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 3000");
    console.log(os.userInfo())
    console.log(__dirname)
 })