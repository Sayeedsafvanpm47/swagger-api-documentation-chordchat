const express = require("express");
const userRoute = require('./route/user')
const postRoute = require('./route/post')
const swaggerDoc = require('swagger-ui-express')
const swaggerDocumentation = require('./src/documentation')



const app = express();

app.use(express.json());
app.use('/documentation',swaggerDoc.serve)
app.use('/documentation',swaggerDoc.setup(swaggerDocumentation))

app.use(userRoute);
app.use(postRoute)
app.listen(3000,()=>console.log('listening to 3000'));