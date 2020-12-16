const express = require('express')
const app = express()

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

app.listen(3000)