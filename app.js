const express = require ("express")
const app = express()
const port = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const cors = require ("cors")
const storeRouter = require ("./routes/storeRouter.js")
const db = require ("./data/db.js")
const path = require('path');

app.use(cors())
app.use(express.json())

/* app.get("/", (req, res) => {
    var filePath =path.join(__dirname,  'index.html')
    res.sendFile(filePath, {contentType: 'text/css',});
})
 */


app.use ("/store", storeRouter)

//conexion db
const conexionDb = async () => {
    try {
        await db.authenticate();
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
