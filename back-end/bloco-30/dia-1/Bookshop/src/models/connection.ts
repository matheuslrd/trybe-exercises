import mongoose from 'mongoose';

const connection = (mongoDataBaseURI = 'mongodb://localhost:/model_example') => 
  mongoose.connect(mongoDataBaseURI);

export default connection;
