import moongose from 'mongoose';
 
const connectDB = async () => {
    try {
        await moongose.connect(process.env.MONGO_URI);
        const connection = moongose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected');
        });
        connection.on('error', (error) => {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
        );
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;