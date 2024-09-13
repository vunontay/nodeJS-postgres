require("dotenv").config();

const express = require("express");
const cors = require("cors");
const DatabaseConnection = require("./configs/db-connection");
const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["POST", "PUT", "DELETE", "GET"],
    })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

const dbConnection = DatabaseConnection.getInstance();
dbConnection.connect();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
