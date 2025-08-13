import express from "express";

const app = express();

app.get("/profile/:userName/article/:slug", (req, res)=>{ 

    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`<h1> wonderful course ${formatedSlug} from ${req.params.userName}</h1>`)
});

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}/profile/Ayush/article/how-to-learn-express-js`);
});