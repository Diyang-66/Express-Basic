const express = require('express');  
const app = express();                 

app.get('/',(req,res)=>{  
    res.send("helo tenzin")
})

app.get('/about',(req,res)=>{ 
    res.send("helo about")                                                
})

app.get('/down',(req,res)=>{
    res.send("helo down")
})                            

app.get('/status',(req,res)=>{
    res.send("hello status")
})

app.listen(3001, () => {
    console.log('server is started');
}); 









