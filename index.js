const express=require('express')
const axios=require('axios')
const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}))


//routes
app.get("/",(req,res)=>{
    res.send("Server is running!!")
})

app.get("/test",(req,res)=>{
    res.json({
        "message":"Test route is working."
    })
})

app.post("/slack", async(req,res)=>{
    const text = req.body.text;
    if (!text){
        return res.send("Please provide a URL!!");
    }
    let url=text;
    if (!text.startsWith("http")){
        url="https://"+text;
    }
    try {
        const response=await axios.get(
            `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}`
        );
        console.log(response.data);
        return res.send(`Analysis done for: ${url}`);
    } catch (error){
        console.error(error.message);
        return res.send("Error analyzing the website");
    }
});

app.listen(PORT,()=> console.log(`Server is up and running at ${PORT}!!`))