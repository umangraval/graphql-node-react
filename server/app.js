const express = require('express');
const graphqlHHTP = require('express-graphql');   
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

//allow cross origin requsts
app.use(cors());


mongoose.connect('mongodb+srv://umang:umang123@gql-node-xb6rv.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.once('open',() =>{
    console.log('connected');
})
app.use('/graphql',graphqlHHTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log('Listening on 4000');
})