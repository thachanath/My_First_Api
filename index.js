const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/op", (req, res) => {
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const op = req.query.op
    if (op == "+") {
        result = (a + b)
    }
    else if (op == "-") {
        result = (a - b)
    }
    else if (op == "x") {
        result = (a * b)
    }
    else if (op == "/") {
        result = (a / b)
    }
    else if (op == "%") {
        result = (a % b)
    }
    else if (op == "**") {
        result = (a ** b)
    }
    else if (op == "/" && b == 0) {
        result = ("cannot divide by zero")
    }
    else {
        result = ("dont know")
    }
    res.json({
        result: result
    })
})
app.get("/user", (req, res) => {
    const name = req.body.name
    res.json({
        message: 'Hello' + name
    })
})
app.get("/",(req,res)=>{
    res.json({
        message: "Hello World"
    })
})
app.listen(3000, () => {
    console.log('Sever start suceessfully')
})


