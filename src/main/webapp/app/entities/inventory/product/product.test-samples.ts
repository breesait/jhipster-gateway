import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
};

export const sampleWithPartialData: IProduct = {
  id: 96307,
  price: 78560,
};

export const sampleWithFullData: IProduct = {
  id: 34739,
  name: 'Unbranded deposit Bedfordshire',
  description: 'Table Health',
  quantity: 76905,
  price: 66440,
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
