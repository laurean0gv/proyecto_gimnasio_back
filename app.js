const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
const cors = require("cors")
const storeRouter = require("./routes/storeRouter.js")
const db = require("./data/db.js")

app.use(cors())
app.use(express.json())

app.use("/store", storeRouter, (err, req, res, next) => {
    console.error(`An error occured ${err.message}`);
	// The err.type property is "entity.parse.failed" when body-parser fails
	if (err.type == "entity.parse.failed" && req.path == "/store", storeRouter) {
        console.log( "el body es incorrecto ", req.body);
		req.body = { "url": [
            {
                "url": "https://http2.mlstatic.com/D_NQ_NP_991423-MLU76154092370_052024-O.webp"
            },
            {
                "url": "https://http2.mlstatic.com/D_NQ_NP_991423-MLU76154092370_052024-O.webp"
            }
        ] }; 
		next(); // Forward the request. Call next(err) to call the next error handler
	} else {
		// Respond with an error message
		res.status(400).send("An error occurred");
	}
})


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
app.listen(port, "0.0.0.0", function (err) {
    conexionDb()
    console.log(`Server ok en el puerto `,port)
    if (err) console.log(err);
}) 
