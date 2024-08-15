const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://inotebook:inotebook@inotebookcluster.php00.mongodb.net/?retryWrites=true&w=majority&appName=inotebookcluster";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB connected!");

    }
    catch (err) {
        console.log("Connection failure", err);
    }
};

module.exports = connectToMongo;