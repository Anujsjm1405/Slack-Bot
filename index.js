const express=require('express')
const app=express();
const PORT=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Server is running!!")
})

app.get("/test",(req,res)=>{
    res.json({
        "message":"Test route is working."
    })
})

app.listen(PORT,()=> console.log(`Server is up and running at ${PORT}!!`))