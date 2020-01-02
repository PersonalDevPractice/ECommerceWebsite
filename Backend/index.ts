import express from 'express';
import itemsJson from './json_data/items.json';

import MongoDB from 'mongodb';

const MongoClient = MongoDB.MongoClient;
const app = express();

app.listen(8080, () => {
    InitProject();
    console.log('App Running');
});

// Basic route setup
app.get('/', (req, res) => {
    res.send('base route');
});

// Endpoint for retrieving hardcoded items -- Replace logic to get from DB and send all results
app.get('/items', (req, res) => {
    res.send(JSON.stringify(itemsJson));
});

app.get('/CreateDatabase', (req, res) => {
    // await process function
    const creation = new Promise(() => {

    });
    // Once returned send respone
    creation.then(val => res.send(val));
});

function InitProject() {
    // Send Initial data files to MongoDB
    const username = encodeURIComponent('root');
    const password = encodeURIComponent('password');
    const authMech = 'DEFAULT';
    const dbEndpoint = `mongodb://${username}:${password}localhost:27017?authMechanism=${authMech}`;

    const dbName = "myproject";

    MongoClient.connect(dbEndpoint, (err, client) => {
        if (err) {
            console.log("Err: " + err);
        } else {
            console.log("Connected successfully!");
            const db = client.db(dbName);
            insertDocuments(db, () => {
                client.close();
            });
        }
    })
}

const insertDocuments = (db, callback) => {
    const collection = db.collection('items');

    collection.insertMany(itemsJson, (err, result) => {
        if (err) {
            console.log('Error inserting values to the database!');
        } else {
            console.log('Successfully inserted values to the db!');
            callback(result);
        }
    });
}

const fetchItems = (db, callback) => {
    const collection =  db.collection('items');

};