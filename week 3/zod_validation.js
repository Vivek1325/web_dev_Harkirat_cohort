const express = require('express')
const zod = require('zod')
const app = express();

const port = 3000;
// defining a zod schema here
const schema = zod.array(zod.number()); // the input should be a array of numbers
// let use try to define a schema for a email and a password and country object
// {
//  email should have @ and . at the end
//  password should be atleast 8 letters
//  country can be "IN" or "US"
// }
 const schema1 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
 })


app.use(express.json()) // use this to parse json that is coming in the body from the post request !!!!!!!!!!!

app.post('/health-checkup', function(req, res, next){
    const kidneys = req.body.kidneys;
    // const kindeyLength = kidneys.length;
    const response = schema.safeParse(kidneys); //  this will return a object where the first member is success which is bool
    // and we can acces that with response.success and check if the input is valid or not
    res.send({
        response
    })
})

app.listen(port);