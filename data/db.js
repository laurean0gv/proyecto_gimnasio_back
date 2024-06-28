const {Sequelize} = require ("sequelize")
const { config } = require ('dotenv');
config();

/*
const db = new Sequelize(process.env.MYSQLDATABASE,process.env.MYSQLUSER,process.env.MYSQLPASSWORD,{
    host: process.env.MYSQLHOST,
    dialect: "mysql",
    port: process.env.MYSQLPORT
})
console.log(`Vamos a ver la configuracion LPM ${db.config.database} - ${db.config.username} - ${db.config.host}`);
*/

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
}) 

    module.exports=db;