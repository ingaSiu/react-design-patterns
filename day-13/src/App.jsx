import { AuthProvider } from './provider/AuthProvider';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <AuthProvider strategy="otp">
      <LoginButton />
      {/*<Profile />
    <Dashboard />*/}
    </AuthProvider>
  );
}

export default App;
