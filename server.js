import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6mcwjd5JgGoskHf3Mbxx1QGFnArKqavU",
  authDomain: "integrador-424d5.firebaseapp.com",
  projectId: "integrador-424d5",
  storageBucket: "integrador-424d5.appspot.com",
  messagingSenderId: "820237040211",
  appId: "1:820237040211:web:0a9611800ce09b2e92e4a6"
}


const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

const app = express()

//inicializamos el middleware
app.use(express.static('public'))
app.use(express.json())

//ruta del backend
//ruta home
app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: 'public'})
})

//arracamos el servidor
const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log(`Server in port: ${Port}`)
})