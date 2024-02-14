const express = require("express");
const DBconnection = require("./DBconnection");
const app = express();
const mongoose = require("mongoose");
const router = require("./route");
const port = process.env.PORT || 3000;

app.use(express.json());

DBconnection().then(() => {
    app.use("/api", router);

    app.get("/", (req, res) => {
        res.send(
            mongoose.connection.readyState === 1
                ? "Database Connected"
                : "Database Disconnected"
        );
    });

    app.get("/ping", (req, res) => {
        res.send("pong");
    });

    app.listen(port, () => {
        console.log(`The server is running on ${port}`);
    });
});
