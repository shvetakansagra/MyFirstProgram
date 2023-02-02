const mongoose= require('mongoose');



const connectDB = async()=>{
    try{
        mongoose.set('strictQuery', true);
        const con = await mongoose.connect("mongodb+srv://admin:admin12345@cluster0.2u69ver.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true,
         })
         console.log(`mongodb is connected:${con.connection.host}`);
    }
    catch(err){
       console.log(err);
       process.exit(1);
    }
}

module.exports =connectDB 