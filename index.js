const express = require("express")
const app = express();
const port = process.env.PORT || 5000;


const connectDB = require('./config/DB')

//For api data
app.use(express.json())
app.use(express.urlencoded())


//Connecting database
connectDB();


app.get("/",(req,res)=>{
    res.send("API is running.....")
})

app.use("/",require('./routes/authantication'))
// app.use("/api/product",require('./routes/product'))
app.use("/api/product",require('./routes/product'))


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})