import express from "express";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));

app.get("/contact",(req , res)=> {
   console.log(req.query);
   res.redirect("/"); 
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Listening to http://localhost:${PORT}`);
});