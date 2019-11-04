const express = require('express');
const graphqlHHTP = require('express-graphql');   
const app = express();

app.use('/graphql',graphqlHHTP({
 
}));

app.listen(4000,()=>{
    console.log('Listening on 4000');
})