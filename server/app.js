const express = require('express');
const app = express();
const cors = require('cors');
const port = 5500;
const User = require('./models/user.js');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://Admin:admin123@cluster0.vzs9g.mongodb.net/myDB?retryWrites=true&w=majority';
console.log(`inside server`);
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

(async () => {
  await mongoose.connect(uri);
  console.log('connected to mongoose through async function');
})();
// ======================= index page (read) ==================================
app.get('/', async (req, res) => {
    try{
      const userData = await User.find();
        console.log(`I am here`);
        return res.send(JSON.stringify(userData));
    }catch(e){
      return res.send(e.message);
    }
});

// =========================== create =========================================
app.post('/add', async (req, res) => {
  console.log('inside add');
  try {
    const userData = await User.create(req.body);
    console.log(userData);
    // if (err) throw err;
    return res.send({user:userData});
  }catch(e){
    console.log(`inside catch`)
    return res.send(e.message);
  }
});

// ============================== delete ======================================
app.get('/delete/:userId', async (req, res) => {
  console.log('inside delete');
  try{
    await User.findByIdAndDelete(req.params.userId);
    res.send({deleted:'deleted'})
  }catch(e){
    res.send(e.message);
  }
});

// ============================== update ======================================
app.post('/edit', (req, res) =>{
  console.log('inside update');
  console.log(req.body);
  
    User.findByIdAndUpdate(req.body._id, {$set: {'name':req.body.name, 'email':req.body.email, 'address':req.body.address, 'phone':req.body.phone}}, (err, result) => {
      if (err) throw err;
      res.send({updated:'updated'});
    });
});

app.listen(port);
