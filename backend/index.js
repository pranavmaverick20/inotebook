const connectToMongo = require('./db.js');
connectToMongo();
const express = require('express');
var cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/notes', require('./routes/notes.js'));


app.listen(5001, () => {
    console.log("iNoteBook backend listening on 5001");
})