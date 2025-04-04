require("dotenv").config( ) ;
const express = require( "express");
const axios = require("axios");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000;
const VIDEOJUEGOS_API_KEY = process.env.VIDEOJUEGOS_API_KEY || "APY_KEY";


app.use(cors()); // para permit ir solicitudes desde el frontend
app.use(express.json());
app.use (express.static("public"));


app.get("/videojuegos", async (req, res) => {
    try {
    const response = await axios.get(
    `https://api.rawg.io/api/platforms?key=${VIDEOJUEGOS_API_KEY}`
    );
    res. json(response.data) ;
    }catch (error){
        res.status(500).json({error: "Error al obtener datos de los videojuegos"});
    }
});


app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


