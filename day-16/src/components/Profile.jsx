import { getUserResources } from '../resources/userResource';
import { use } from 'react';

// use => can take a Promise as a parameter and whenever the promise value is resolved
//  it can return data from that promise
// if promise gets rejected, it returns rejected promise (get error to handle)
export default function Profile() {
  const { userPromise } = getUserResources();
  const user = use(userPromise);
  return <h2 className="text-3xl">Welcome, {user.name}</h2>;
}
