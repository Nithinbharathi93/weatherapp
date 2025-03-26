import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Conneted: ${conn.connection.host}`);
        console.log(mongoose.connection.readyState);
    } catch (error) {
        console.error(`Ran into an error: ${error.message}`);
        process.exit(1);
    }
}
export default connectDB;