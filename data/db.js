const {Sequelize} = require ("sequelize")

const { config } = require ('dotenv');
config();



const db = new Sequelize("railway","root","ExjEyUiGJhYIcWoBJAncGSdhqXNMTLDH",{
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
    port: 43201
});

    module.exports=db;
