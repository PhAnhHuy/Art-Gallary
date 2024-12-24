const express = require("express");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:5173",
};

const app = express();
app.use(cors(corsOptions));

const route = require('./route');

route(app);

const port = 3005;

app.use(
    express.urlencoded({
        extended: true
    }),
);
app.use(express.json);

app.listen(port, () => {
    console.log(`App listen at port ${port}`);
});

