const express = require('express');
const cors = require('cors');

const app = express();

require("./server/config/mongoose.config");


app.use(
    express.json(),
    express.urlencoded({ extended: true })
);
app.use(cors());

const AuthorRoutes = require("./server/routes/author.routes");
AuthorRoutes(app);


app.listen(8000, () => {
    console.log("You're server is up and running on port 8000")
});