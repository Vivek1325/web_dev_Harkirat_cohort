const express = require('express')
const app = express();
const port = 3000;

app.use(express.json())

var user = [{
    name:'vivek',
    kidneys: [{
        healthy:false
    }]
}]
// print the number of kidneys, healthyKidneys, unHealthyKidneys
app.get('/', function(req, res){
    vivek_kidney = user[0].kidneys;
    const number_of_kidney = vivek_kidney.length;
    let number_healthy_kidney = 0;
    for(let i = 0; i < number_of_kidney; i++)
    {
        if(vivek_kidney[i].healthy)
        {
            number_healthy_kidney += 1;
        }
    }
    let number_unhealthy_kidney = number_of_kidney - number_healthy_kidney;

    res.json({
        number_of_kidney,
        number_healthy_kidney,
        number_unhealthy_kidney
    })
})

// adds a new kindey to the patient whose type the user defines in th ebody
app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done post"
    })
})

// turns all the kidneys of the patient to be healthy
app.put('/', function(req, res){
    for(let i = 0; i < user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: 'done put'
    })
})

// removes all the unHealthy kidneys of the patient
// return 411 status code if there are no unHealthy kidneys
app.delete('/', function(req, res){
    //check for the kindeys that are unhealthy
    let letAtLeastOneUnhealthyKidney = false;
    for(let i = 0; i < user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy){
            letAtLeastOneUnhealthyKidney = true;
        }
    }
    if(letAtLeastOneUnhealthyKidney){
    const newKidneys = [];
    for(let i = 0; i < user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    user[0].kidneys = newKidneys;
    
    res.json({
        msg: 'done in delete'
    })
    }
    else{
        res.status(411).json({
            msg: 'you have no bad kidneys'
        })
    }
})

app.listen(port);