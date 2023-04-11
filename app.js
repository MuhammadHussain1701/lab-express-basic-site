const express=require("express")
const app=express()
const port=7000

app.use(express.static(__dirname + "/public"))

app.get('/',(req,res)=>{
    console.log("i am in index")

    res.sendFile(__dirname + "/views/index.html")
})
app.get('/about',(req,res)=>{
    console.log("i am in about")

    res.sendFile(__dirname + "/views/about.html")
})
app.get('/acheivments',(req,res)=>{
    console.log("i am in acheivments")

    res.sendFile(__dirname + "/views/acheivments.html")
})
app.get('/pictures',(req,res)=>{
    console.log("i am in pictures")

    res.sendFile(__dirname + "/views/pictures.html")
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})