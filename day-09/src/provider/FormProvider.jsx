import { FormContext } from '../context';
import { defaultFormReducer } from '../reducers/form-reducer';
import { useReducer } from 'react';

export function FormProvider({ reducer = defaultFormReducer, children }) {
  const [state, dispatch] = useReducer(reducer, {
    values: { name: '', email: '' },
    errors: {},
  });

  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
