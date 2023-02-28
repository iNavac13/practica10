let express=require('express');
let app=express();
let port=process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('<html><head><title>xdddddd</title></head><body>Hola mundo!</body></html>')
})
app.listen(port);

app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Doe'})
})