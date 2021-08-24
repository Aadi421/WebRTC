const mongoose = require('mongoose');
const DB_URL=process.env.DB_URL
mongoose.connect(DB_URL,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`db connected!`);
})

module.exports=db;