import { useMemo } from 'react';

function Users({ list }) {
  console.log('Users component rendered');

  // const sorted = list.sort((a, b) => a.localeCompare(b));
  // sorted is the return value
  const sorted = useMemo(() => {
    console.log('Sorting expensive list…');
    // create a copy of the list using spread operator
    // and do the sorting logic
    return [...list].sort((a, b) => a.localeCompare(b));
    // when the list changes, the sorting will be redone
  }, [list]);

  return (
    <>
      <h2>Sorted Users</h2>
      {sorted.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
    </>
  );
}

export default Users;
