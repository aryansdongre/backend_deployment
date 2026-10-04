require('dotenv').config();
const express = require('express');
const app = express()
const port = 4000
//console.log(app);
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{//check for methods of request and response
    res.send('hiteshdotcom');
})
app.get('/login',(req,res)=>
{
    res.send('<h1>please login at chai aur code</h1>');
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})