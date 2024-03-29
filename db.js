import mongoose from "mongoose"
const url = 'mongodb+srv://paulnilay4:HymEaGAXhNvPeXx1@cluster0.yiocune.mongodb.net/testmongodb?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url)

const db = mongoose.connection
db.on('connected',()=>console.log("Connected"))
db.on('error',()=>{console.log("Error")})

export default db