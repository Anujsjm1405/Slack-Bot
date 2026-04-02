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
    const text=req.body.text;
    if(!text){
        return res.send("Please provide a URL!!")
    }
    else return res.send(`Analyzing: ${text}`)
})

app.listen(PORT,()=> console.log(`Server is up and running at ${PORT}!!`))