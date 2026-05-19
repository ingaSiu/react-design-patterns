import { AuthContext } from '../context';
import { useContext } from 'react';

export default function LoginButton() {
  const useAuth = useContext(AuthContext);
  const auth = useAuth();

  return <button onClick={auth.login}>Login</button>;
}
