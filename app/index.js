const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('DevOps Demo v1.2 - RKE2 Deployment Successful!'));
app.listen(3000, () => console.log('Server running on port 3000'));
