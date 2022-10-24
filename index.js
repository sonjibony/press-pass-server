const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//using cors to give permission to use the server
app.use(cors());


// accessing category api
const categories = require('./data/categories.json');
// accessing news api
const news = require('./data/news.json');

//to check if its working
app.get('/', (req,res) => {
res.send('News API Running');
});

//sending category api
app.get('/news-category',(req,res)=>{
    res.send(categories);
})

//sending all news from one category
app.get('/category/:id', (req, res) =>{
const id = req.params.id //id params (1 or any id)
if(id === '08'){
 res.send(news);
}
else{
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews);
}
})

//sending all news
app.get('/news', (req,res) => {
    res.send(news);
})

//sending news api (single)
app.get('/news/:id', (req,res) =>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id ===id);
    res.send(selectedNews);
})


app.listen(port, () =>{
    console.log('Press Pass News Server Running on port', port);
})