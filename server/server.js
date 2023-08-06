const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8090;
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist/test')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/test', 'index.html'));
});

app.listen(PORT || 8090, function () {
    console.log(`Server is Start ${PORT}`);
});