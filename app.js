const express = require("express");
const bodyParser = require("body-parser");
const xmlparser = require("express-xml-bodyparser");
const { Gzh, checkSignature } = require("tencent-wx-sdk");
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(xmlparser());
app.post("/gzh/tools/msg", (req, res) => {
    const { signature, timestamp, nonce } = req.query || {};
    const sign = checkSignature(timestamp, nonce, token);
    if (sign !== signature) {
        throw new Error("验签失败");
    }
    console.log(req.body);
    res.send({
        error: 0
    });
});
app.get("/gzh/tools/msg", async (req, res) => {
    const { signature, timestamp, nonce, echostr } = req.query || {};
    let token = "111";
    const sign = checkSignature(timestamp, nonce, token);
    if (sign === signature) {
        res.send(echostr);
    } else {
        res.send("验签失败");
    }
});

app.listen(3000, () => {
    console.log("listen: 3000");
});