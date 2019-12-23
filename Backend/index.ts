import express from 'express';
import itemsJson from './json_data/items.json';

const app = express();

app.listen(8080, () => {
    console.log('App Running');
});

// Basic route setup
app.get('/', (req, res) => {
    res.send('hello world');
});

// Endpoint for retrieving hardcoded items
app.get('/items', (req, res) => {
    res.send(JSON.stringify(itemsJson));
})

