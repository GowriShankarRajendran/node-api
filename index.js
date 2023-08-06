const express = require('express');
const app = express();
const port = 7777;

const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const orderRouter = require('./routes/order');

// app.get('/', (req, res, next) => {
//     let sendData = {message: 'Node API Working'};
//     res.status(200).json(sendData);
// });

app.use("/", (req, res, next) => {
    let getUrl = req.url;
    console.log(getUrl, getUrl.search('/user'));
    if(getUrl.search('/user') >= 0){
        next();
    }
    else{
        res.status(401).json({message: `You not have access on ${getUrl} api`});
    }
});

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

app.use("", (req, res, next) => {
    const error = new Error("URL Not Found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status).json({message: error.message, url: req.url, method: req.method});
});

app.listen(port, () => {
    console.log("Node API Started");
});