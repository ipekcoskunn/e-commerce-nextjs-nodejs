const mongoose = require('mongoose')
const uri = "mongodb+srv://ipekcoskun:1234@patikacluster.yvkik.mongodb.net/?retryWrites=true&w=majority&appName=PatikaCluster";

mongoose.connect(uri).then((result) => console.log("mongoDB Başlatıldı"))
    .catch((err) => console.log(err))