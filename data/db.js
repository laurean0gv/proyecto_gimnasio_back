const {Sequelize} = require ("sequelize")

const { config } = require ('dotenv');
config();



const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.PORT
});

    module.exports=db;