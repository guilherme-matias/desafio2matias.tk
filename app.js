const express = require('express');
const app  = express();

app.get('/', (req, res, next) => {
    if (req.headers['x-forwarded-proto'] != 'https') {
        res.redirect("https://" + req.headers.host + req.url);
    } else {
        next();
        res.send('Hello World na Umbler!')
    }
});
    
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App listening on port ${port}');
})
