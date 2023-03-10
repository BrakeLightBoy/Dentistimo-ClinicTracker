const mongoose = require('mongoose');
const mqtt = require('mqtt');
const MqttHandler = require('./src/MqttHandler')
const client = new MqttHandler().getClient() 

const mongoPort = 27017;
const mongoHost = 'localhost';
const dbName = 'dentistDB';

const mongoURI = process.env.MONGODB_URI || `mongodb://${mongoHost}:${mongoPort}/${dbName}`;

//connect to mongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
    if (error) {
        console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
        console.error(error.stack);
        process.exit(1);
    }
});