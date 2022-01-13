const mariadb = require ('mariadb');
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit:50,
    allowPublicKeyRetrieval :true
});
pool.getConnection((err,connecting) => {
    if(err){
        if(err.code==='PROTOCOL_CONNECTION_LOST'){
            console.error('database connection lost');
        }
        if(err.code==='ER_CON_COUNT_ERROR'){
            console.error('database has too many connection');
        }
        if(err.code==='ECONREFUSED'){
            console.error('database connection was refused');
        }
    }
    if(connecting) connecting.release();
    return;
});
module.exports=pool;