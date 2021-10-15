const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const {API_VERSION, IP_SERVER, PORT_DB} = require("./config");


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/pruebadb`,
{useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false }, (err,res)=>{
    if(err){
        throw err;
    } else {
        console.log("La conexion a la base de datos es correcta.");
        app.listen(port, ()=>{
            console.log("###############");
            console.log("## API REST  ##");
            console.log("###############");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        })
    }
});
