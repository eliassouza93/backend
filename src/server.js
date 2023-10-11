import express from 'express'
import routes from './routes.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(routes)
app.use(cors())

app.use((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);



});

app.get('/ ', (req, res) => {
    res.status(200).send('servidor rodando')
})



app.listen(3001, () => {
    console.log('rodando porta http://localhost:3001')
})