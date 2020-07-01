const express = require("express");
const bodyParser = require("body-parser");
const { Gzh, checkSignature } = require("tencent-wx-sdk");
const app = express();
app.use(bodyParser.json());
app.post('/gzh/tools/msg', (req, res) => {
    const { signature, timestamp, nonce } = req.query || {};
    const flag = checkSignature(signature, timestamp, nonce, token);
    if(!flag) {
        throw new Error("验签失败");
    }
    console.log(req.body);
    res.send({
        error: 0
    });
});
app.get('/gzh/tools/msg', async (req, res) => {
    const { signature, timestamp, nonce, echostr } = req.query || {};
    let token = "111";
    const flag = checkSignature(signature, timestamp, nonce, token);
    if(flag){
        res.send(req.query.echostr);
    }else {
        res.send("验签失败");
    }
});

app.listen(3000, () => {
    console.log("listen: 3000");
});