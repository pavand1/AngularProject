const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const router =  express.Router();

router.get('/sum',(req,res)=>{
    let a = req.query.a;
    let b = req.query.b;
    let c = parseInt(a) + parseInt(b);
    res.status('200').json(c);
});
app.use('/',router);
app.listen('8080',()=>{
    console.log("listening at port 8080");
});