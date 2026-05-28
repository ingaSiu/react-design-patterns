import { getUserResources } from '../resources/userResource';
import { use } from 'react';

export default function Profile() {
  const { userPromise } = getUserResources();
  const user = use(userPromise);
  return <h2 className="text-3xl">Welcome, {user.name}</h2>;
}
