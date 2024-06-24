const {Sequelize} = require ("sequelize")
const express = require ("express")
const { config } = require ('dotenv');
config();

/*
const db = new Sequelize("railway","root","ExjEyUiGJhYIcWoBJAncGSdhqXNMTLDH",{
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
    port: 43201
});*/
console.log(process.env)


/*
const db = new Sequelize(process.env.MYSQLDATABASE,process.env.MYSQLUSER,process.env.MYSQLPASSWORD,{
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
    port: 43201
})
console.log(`Vamos a ver la configuracion LPM ${db.config.database} - ${db.config.username} - ${db.config.host}`);

*/
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
    port: 43201
})

    module.exports=db;