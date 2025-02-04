const express = require('express');
const app = express();

app.get('/', (_, res) => {
    res.send('Hello World');
    }
);

app.listen(3000, () => {
    console.log("app listining on port 3000");
    }
);