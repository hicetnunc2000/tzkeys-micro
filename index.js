var express = require('express');
var bodyParser = require('body-parser');
const { crypto } = require('sotez');
const conseiljs = require('conseiljs');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/keys', async (req, res) => {

    var passphrase = '';

    try {
        
        if (req.body.passphrase != undefined) {
            passphrase = req.body.passphrase;
        } else if (req.query.passphrase != undefined) {
            passphrase = req.query.passphrase
        }

    } catch (e) {
        res.send(e);
        throw e;
    }

    genAddress(res, passphrase);

});


const genAddress = async (res, passphrase) => {
    const mnemonic = crypto.generateMnemonic();
    const key = await crypto.generateKeys(mnemonic, passphrase);
    res.send(key);
}

app.listen(3000);

// generate keys references

//https://github.com/stove-labs/workshop-notarization/blob/f09d40994f0c83eec7e90e2671c4f82d48e6f83d/smart-contracts/helpers/generateAddress.js

