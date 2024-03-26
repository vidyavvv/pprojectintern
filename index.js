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

app.post("/reservation",(req,res)=>{
    var name=req.body.name
    var phone=req.body.phone
    var person=req.body.person
    var reservation_date=req.body.reservation_date
    var time=req.body.time
    var message =req.body.message

    var data={
        "name":name,
        "phone":phone,
        "person":person,
        "reservation_date":reservation_date,
        "time":time,
        "message":message,
    }
    db.collection('users1').insertOne(data, (err, result) => {
        if (err) {
            console.error("Error inserting document:", err);
            res.status(500).send("Error inserting document");
            return;
        }
        console.log("Record inserted successfully:", result.insertedId);
        res.redirect('/');
    });

})

app.get("/",(req,res)=>{
    res.send("Server connection is successful")
}).listen(3000);

console.log("Listening on port 3000")