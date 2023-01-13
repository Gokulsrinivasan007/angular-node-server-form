const express = require('express');  
const app = express();               
const port = 5000;        
const bodyParser = require("body-parser")
 
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({
    extended:true
}));
  

 app.use(express.json());
 
app.get('/', (req, res) => {        
    res.sendFile('index.html', {root: __dirname});      
                                                         
});

const forms = ["", "second", "third", "four","five"];


app.post('/api/create-user', (req, res) => {
    const randomMonth = forms[Math.floor(Math.random() * forms.length)];
    res.json({ form: randomMonth })
});

app.listen(port, () => {        
    console.log(`Now listening on port ${port}`); 
});