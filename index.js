const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const dotenv = require('dotenv');
const PORT = 4000;

dotenv.config({ path: "./config.env" });
//body parser
app.use(express.json());

app.use("/api/v1/user", userRoutes);



app.listen(PORT, () => console.log(`server listening on port ${PORT}....`));