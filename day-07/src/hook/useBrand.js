import { BrandContext } from '../context';
import { use } from 'react';

const useBrand = () => {
  const brand = use(BrandContext);
  return brand;
};

export { useBrand };
