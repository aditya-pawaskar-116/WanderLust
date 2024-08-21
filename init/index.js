const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://pawaskara53:TBtCdRIfHbxtfdjy@cluster0.h5ynziy.mongodb.net/wanerlust");
        console.log("DB connection Successfully");
    } catch (error) {
        console.log("error");
    }
};

dbConnection();

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner: "666c5a24ccea063d7cc8dc0d"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();