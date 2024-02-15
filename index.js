const express = require('express');

const app = express();
const PORT = 7003;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    next();
});

app.get('*', async(req, res) => {
    // must run HTTP temporarily before fixing SSL verification issues
    return res.send(await fetch('http://choccycounts.com/api/messages').then(resp=>resp.json()).catch(console.error))
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
