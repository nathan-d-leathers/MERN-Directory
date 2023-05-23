const express=require("express");
const app=express();
const port=7500

app.get('/hello',(req,res)=> {res.send("Hello from the back end server")});

//app.use(express.static("build"));

// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"build","index.html"));
// })

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
})