const express = require("express");
const bodyParser = require("body-parser");
const {Gzh} = require("tencent-wx-sdk");
const app = express();
app.use(bodyParser.json());
app.post('/gzh/tools/msg', (req, res) => {
    console.log(req.body);
    res.send({
        error: 0
    });
});
app.get('/gzh/tools/msg', async (req, res) => {
    res.send(req.query.echostr);
});

app.listen(3000, () => {
    console.log("listen: 3000");
});