import { FormContext } from '../context';
import { useContext } from 'react';

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) throw new Error('useFormContext must be used within a FormProvider');
  return context;
}
