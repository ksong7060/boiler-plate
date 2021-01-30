const mongoose = require('mongoose');
const config = require('./config/key');

mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
    },(err) => {
        if(!err)
            console.log('MongoDB connection succeeded...');
        else
            console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;