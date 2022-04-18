const express = require('express')
const app = express()
var path = require('path');
const port = 5000 

// function middlewar

const d = new Date()
const hours = d.getHours()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dayName = days[d.getDay()]
function acces (req, res, next) {
    if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(dayName)&&(hours >= 9 && hours <= 17 ) ) {
        return next()
    }
    else {
        res.send("site is closed")
    }
}
app.use(acces) 


// html page to express route

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/services', function(req, res) {
    res.sendFile(path.join(__dirname + '/ourservice.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});


app.use(express.static('public'));


app.listen(port , (error) => {
    error ? console.log(error)
    :
    console.log(`Server is running on port ${port}..`)
})              