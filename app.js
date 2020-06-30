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
app.get('/gzh/tools/accessToken', async (req, res) => {
    console.log(req.body);
    const appid = process.env["APP_ID"];
    const secret =  process.env["SECRET"];
    const gzh = new Gzh(appid, secret);
    const result = await gzh.access_token();
    res.send({
        access_token: result.access_token
    });
});

app.listen(3000, () => {
    console.log("listen: 3000");
});