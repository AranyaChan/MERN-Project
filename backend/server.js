import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express()
app.use(cors())
app.use(express.json())

//db connect
const uri= "mongodb+srv://AranyaChatterjee:fwomlFB5kgdQCzCq@cluster1.rled6jl.mongodb.net/CarRental?retryWrites=true&w=majority&appName=Cluster1"
mongoose.connect(uri)
.then(() => console.log("Mongodb connected"))
.catch((err) => console.error(err))

//user model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})


const User = new mongoose.model("user", userSchema)

//api
app.post("/api/user", async (req,res) =>{
    await User.create(req.body)
    res.json("success")
})

app.post("/api/user/auth", async (req,res) => {
    const user = await User.findOne(req.body)
    res.json(user)
})

const PORT ="3000"
app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});