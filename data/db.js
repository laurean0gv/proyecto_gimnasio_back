const {Sequelize} = require ("sequelize")

const { config } = require ('dotenv');
config();



const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.PORT
});

    module.exports=db;