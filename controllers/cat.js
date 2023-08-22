const catModel = require("../models/cat");

function getAllCats(req, res) {
    catModel.getAllCats((err, result) => {
        if (!err) {
            res.status(200).json({
                statusCode: 200,
                data: result,
                message: "success",
            });
        } else {
            res.status(400).json({ err });
        }
    });
}

function insertCat(req, res) {
    const data = req.body;
    catModel.insertCat(data, (err, result) => {
        if (!err) {
            res.status(201).json({ data: result, message: "success" });
        } else {
            res.status(400).json({ message: result });
        }
    });
}
module.exports = { getAllCats, insertCat };
