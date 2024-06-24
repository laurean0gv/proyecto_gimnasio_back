const {Sequelize} = require ("sequelize")

const { config } = require ('dotenv');
config();

/*
const db = new Sequelize("railway","root","ExjEyUiGJhYIcWoBJAncGSdhqXNMTLDH",{
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
    port: 43201
});*/


const db = new Sequelize(process.env.MYSQLDATABASE,process.env.MYSQLUSER,process.env.MYSQLUSER,{
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
    port: 43201
})
console.log(`Vamos a ver la configuracion LPM ${db.config.database} - ${db.config.username} - ${db.config.host}`);

/*
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
})*/

    module.exports=db;