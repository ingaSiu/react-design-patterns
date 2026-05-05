import Users from './Users';
import { getUsers } from '../../../utils';
import { useState } from 'react';

const UsersSortingDemo = () => {
  const [count, setCount] = useState(0);
  const [users] = useState(() => getUsers()); // assume it returns 10,000 users

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <Users list={users} />
    </>
  );
};

export default UsersSortingDemo;
