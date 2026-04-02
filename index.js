const express=require('express')
const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.send("Server is running!!")
})

app.get("/test",(req,res)=>{
    res.json({
        "message":"Test route is working."
    })
})

app.post("/slack",(req,res)=>{
    const body=req.body;
    console.log(req.body)
    res.send("Slack route is working")
})

app.listen(PORT,()=> console.log(`Server is up and running at ${PORT}!!`))