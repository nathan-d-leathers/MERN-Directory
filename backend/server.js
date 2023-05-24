const express=require("express");
const cors = require("cors");
const dao = require("./mongo-dao");
const app=express();
const port=7500

app.use(cors())
app.use(express.json())

app.get("api/workers", (req,res) => {
    dao.getAllWorkers((error,workers) => {
        if (workers) {
            res.send(workers)
        } else {
            res.statusCode = 500
            res.end()
        }
    });
});

app.get('/hello',(req,res)=> {res.send("Hello from the back end server")});
    //app.use(express.static("build"))
    // app.get("*",(req,res)=>{
    //     res.sendFile(path.resolve(__dirname,"build","index.html"));
    // })

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
})

