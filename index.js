const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutes");
const dotenv = require('dotenv');
const db = require('./config/db')
const PORT = 4000;

dotenv.config({ path: "./config.env" });
//body parser
app.use(express.json());
db();

app.use("/api/v1/user", userRoutes);



app.listen(PORT, () => console.log(`server listening on port ${PORT}....`));