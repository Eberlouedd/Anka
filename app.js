const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userBase')
const userUpdateRoutes = require('./routes/updateUserBase')
const workspaceRoutes = require('./routes/workspaceBase')
const {cookieId} = require('./controllers/check')

mongoose.connect('mongodb+srv://Eberloued:XPwww555aze123..@cluster0.44itv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  });
 
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser())

app.get('/checkConnexion', cookieId, (req, res) =>{
  res.status(200).send(res.locals.user._id)
})

app.use('/user/workspace', workspaceRoutes)
app.use('/user', userRoutes)
app.use('/user/update', userUpdateRoutes)



module.exports = app