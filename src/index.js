const express = require('express');
const app = express();
const morgan = require('morgan');


//settings
app.set('port', process.env.PORT ||     3000);
//middlowares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/producto', require('./routes/producto'));
app.use('/api/factura', require('./routes/factura'));

app.listen(app.get('port'), () =>{
    console.log(`Server on port ${3000}`);
});
