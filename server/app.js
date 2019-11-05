const express = require('express');
const graphqlHHTP = require('express-graphql');   
const app = express();
const schema = require('./schema/schema');

app.use('/graphql',graphqlHHTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log('Listening on 4000');
})