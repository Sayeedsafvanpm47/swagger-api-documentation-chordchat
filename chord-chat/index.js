const express = require("express");
const userRoute = require('./route/user')
const postRoute = require('./route/post')
const chatRoute = require('./route/chat')
const ticketRouter = require('./route/ticket')
const ticketOrderRouter = require('./route/ticket-orders')
const notificationRouter = require('./route/notification')
const marketPlaceRouter = require('./route/market-place')
const swaggerDoc = require('swagger-ui-express')
const swaggerDocumentation = require('./src/documentation')



const app = express();

app.use(express.json());


app.use('/documentation',swaggerDoc.serve)
app.use('/documentation',swaggerDoc.setup(swaggerDocumentation))




app.use(userRoute);
app.use(postRoute)
app.use(chatRoute)
app.use(ticketRouter)
app.use(ticketOrderRouter)
app.use(marketPlaceRouter)
app.use(notificationRouter)
app.listen(3000,()=>{console.log('listening to 3000');

});