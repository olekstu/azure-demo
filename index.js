const express = require('express');

const app = express();
const port = 3000


app.get('/getParty/:partyId', (req, res) => {
    res.send({
        "partyType": "Person",
        "partyId": req.params.partyId
    })
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))