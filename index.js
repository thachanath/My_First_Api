const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/plus",(req,res)=>{
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    if (!isNaN(a) && !isNaN(b)){
        result = a + b
    }
    else {
        result = "Invalid"
    }
    res.json({
        result: result
    })
})

app.get("/minus",(req,res)=>{
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    if (!isNaN(a) && !isNaN(b)){
        result = a - b
    }
    else {
        result = "Invalid"
    }
    res.json({
        result: result
    })
})

app.get("/X",(req,res)=>{
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    if (!isNaN(a) && !isNaN(b)){
        result = a * b
    }
    else {
        result = "Invalid"
    }
    res.json({
        result: result
    })
})

app.get("/divide",(req,res)=>{
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    if (!isNaN(a) && !isNaN(b)){
        if ( b != 0){
            result = a / b
        }
        else {
            result = "Cannot divide by zero"
        }
    }
    else {
        result = "Invalid"
    }
    res.json({
        result: result
    })
})

app.listen(3000, () => {
    console.log('Sever start suceessfully')
})


