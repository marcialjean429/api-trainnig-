const express=require('express');
const cors=require('cors');
const helmet=require('helmet');
require('dotenv').config();

const UserRoutes = require('./routes/userRoutes');

const app =express();
const PORT=process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true}));

app.use('/api/users',UserRoutes);

app.get('/',(req,res) =>{
    res.json({message: 'Succes'});
});

app.listen(PORT, ()=>{
    console.log(`Serveur a lanse ${PORT}`);
});