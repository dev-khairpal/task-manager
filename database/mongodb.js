import mongoose from "mongoose";

const connectDB = async()=>{
    
    try {
        await mongoose.connect('mongodb+srv://devkhairpal:sMgVmmiV1oSUHS79@cluster0.pvjpd9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{dbName:'task-manager'});

    console.log('connected to DB');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    
}


export default connectDB;