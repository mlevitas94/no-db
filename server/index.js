const express = require('express')
const bodyParser = require('body-parser')
const cr = require('./controller')

const app = express()
app.use(bodyParser.json())

app.get('/api/heroes', cr.getHeroes )

app.post('/api/heroes', cr.addHero)



app.listen(4000,()=>{
    console.log('we are here on 4000');
    
})