const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//using cors to give permission to use the server
app.use(cors());


//category api
const categories = require('./data/categories.json');


app.get('/', (req,res) => {
res.send('News API Running');
});

//sending category api
app.get('/news-category',(req,res)=>{
    res.send(categories)
})



app.listen(port, () =>{
    console.log('Press Pass News Server Running on port', port);
})