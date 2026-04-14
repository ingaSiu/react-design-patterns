import { BrandContext } from '../context';
import { use } from 'react';

// new React 19 context syntax - use {use} API to get the vlaue from the context

const useBrand = () => {
  const brand = use(BrandContext);
  return brand;
};

export { useBrand };
