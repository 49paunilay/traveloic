import mongoose from "mongoose"
const url = 'YOUR_URL'
mongoose.connect(url)

const db = mongoose.connection
db.on('connected',()=>console.log("Connected"))
db.on('error',()=>{console.log("Error")})

export default db
