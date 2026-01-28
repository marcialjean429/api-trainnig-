 require('dotenv').config();
 const {Pool} = require('pg');

//  const pool=new Pool({
//      host: process.env.DB_HOST,
//      port: process.env.DB_PORT || 5432,
//      user: process.env.DB_USER,
//      password: process.env.DB_PASSWORD,
//      database:process.env.DB_NAME,
//  });

const pool =new Pool({
 connectionString: process.env.DATABASE_URL,
 ssl: { rejectUnauthorized: false }
});

 pool.connect()
     .then(() =>  console.log('Connection'))
     .catch(err=> console.error('erreur lors de la connection du db',err));
        
 module.exports={pool};
