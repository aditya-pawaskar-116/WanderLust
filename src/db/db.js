const mongoose = require("mongoose");


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.ATLASDB_URL);
        console.log("DB connection Successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnection;


