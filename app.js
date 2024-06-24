const express = require ("express")
const app = express()
<<<<<<< HEAD
const port=3000
=======
const port = process.env.PORT || 3000;


>>>>>>> 35bea2c (probando listen para subir al servidor)
const cors = require ("cors")
const storeRouter = require ("./routes/storeRouter.js")
const db = require ("./data/db.js")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("estas en home")
})

app.use ("/store", storeRouter)

//conexion db
const conexionDb = async () => {
    try {
        await db.authenticate();
        console.log(db.config)
        console.log("conexion db Ok");
    } catch (error) {
        console.log(error);
    }
}
// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
    conexionDb()
    console.log(`Server ok en el puerto ${port}`)
}) 
