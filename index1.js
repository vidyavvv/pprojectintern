var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/bar1')
var db=mongoose.connection
db.on('error',()=>console.log("error in connection"))
db.once('open',()=>console.log("connected to db"))

app.post("/checkout",(req,res)=>{
    var firstname=req.body.firstname
    var lastname=req.body.lastname
    var Address=req.body.Address
    var phone=req.body.phone
    var email=req.body.email

    var data={
        "firstname":firstname,
        "lastname":lastname,
        "Address":Address,
        "phone":phone,
        "email":email,
    }
    db.collection('users1').insertOne(data, (err, result) => {
        if (err) {
            console.error("Error inserting document:", err);
            res.status(500).send("Error inserting document");
            return;
        }
        console.log("Record inserted successfully:", result.insertedId);
        res.redirect('menu.html');
    });

})

app.get("/",(req,res)=>{
    res.send("Server connection is successful")
}).listen(3000);

console.log("Listening on port 3000")