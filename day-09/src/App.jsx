import FormFields from './components/FormField';
import { FormProvider } from './provider/FormProvider';
import Toggle from './components/Toggle';
import { customToggleReducer } from './reducers/toggle-reducer';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Toggle />
      <Toggle reducer={customToggleReducer} />
      <FormProvider>
        <FormFields />
      </FormProvider>
    </div>
  );
}

export default App;
