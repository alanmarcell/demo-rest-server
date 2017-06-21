import mongoose from 'mongoose';

interface IProductModel extends mongoose.Document {
  price: number;
  category: string;
  name: string;
}

export default IProductModel;
