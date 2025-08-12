import express from "express";
import path from "path";

const app = express();

app.get("/",(req , res)=> {
    
    const homePagePath = path.join(import.meta.dirname, "public", "index.html");
    res.sendFile(homePagePath);
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Listening to http://localhost:${PORT}`);
});