require('dotenv').config()

const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

const books = [
    {
        author: "Steve Berry",
        title: "Bishop's Pawn",
        issued_to: "Jaise"
    },
    {
        author: "Arundhathi Roy",
        title: "The God of Small Things",
        issued_to: "John"
    },
    {
        author: "Harper Lee",
        title: "To Kill A Mockingbird",
        issued_to: "Lisa"
    }
]

app.get('/books', validateToken,(req,res) =>{

    res.json(books.filter(book => book.issued_to === req.user.name))

})

app.post('/login',(req,res) =>{

    //Authenticate user - do later

    const username = req.body.username
    const user = {name:username}

    const accessToken =   jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

    res.json({accessToken: accessToken})


})

//Extract token from request header and validate
function validateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log('token ',token)
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()

    })

}

app.listen(3000)