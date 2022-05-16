const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//Built in middleware

const staticPath = path.join(__dirname , '../public');
app.use(express.static(staticPath));


app.get("/" , (req , res) => {
    res.send('hello for the Express server');
});

app.listen(port , () => {
    console.log(`listening to the port ${port}`);
});