import { fakeCategories } from '../../category/mocks/fake-categories';
import { Product } from '../entities/product.entity';

export const fakeProducts = [
  {
    id: 1,
    name: 'Fone de ouvido bluetooth',
    price: 235,
    height: 27,
    length: 23,
    width: 26,
    weight: 0.16,
    volume: 16146,
    category: fakeCategories[0],
  },
  {
    id: 2,
    name: 'Mouse sem fio',
    price: 62.99,
    height: 9.65,
    length: 6.1,
    width: 3.56,
    weight: 0.07,
    volume: 209.5594,
    category: fakeCategories[0],
  },
] as Product[];
