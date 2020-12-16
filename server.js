require('dotenv').config()

const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

const books = [
    {
        author: "Steve Berry",
        title: "Bishop's Pawn"
    },
    {
        author: "Arundhathi Roy",
        title: "The God of Small Things"
    },
    {
        author: "Harper Lee",
        title: "To Kill A Mockingbird"
    }
]

app.get('/books', (req,res) =>{

    res.json(books)

})

app.post('/login',(req,res) =>{

    //Authenticate user - do later

    const username = req.body.username
    const user = {name:username}

    const accessToken =   jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

    res.json({accessToken: accessToken})


})

app.listen(3000)