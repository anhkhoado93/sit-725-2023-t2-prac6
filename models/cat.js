const { client } = require("../dbConnection");

async function insertCat(cat, callback) {
    await client.connect();
    let collection = client.db().collection("cats");
    collection.insertOne(cat, (err, result) => {
        callback(err, result);
        client.close();
    });
}

async function getAllCats(callback) {
    await client.connect();
    let collection = client.db().collection("cats");
    collection.find({}).toArray((err, result) => {
        callback(err, result);
        client.close();
    });
}

module.exports = { insertCat, getAllCats };
