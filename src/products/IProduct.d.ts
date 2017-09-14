import mongoose from 'mongoose';
import IBaseBusiness from '../core/IBaseBusiness';

type IProductBusiness = IBaseBusiness<IProductModel>;

interface IProductModel extends mongoose.Document {
  price: number;
  category: string;
  name: string;
}

export {
  IProductBusiness,
  IProductModel
};
